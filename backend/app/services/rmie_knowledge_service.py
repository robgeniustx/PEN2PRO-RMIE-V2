"""
rmie_knowledge_service.py — MongoDB Atlas Vector Search knowledge base for PEN2PRO RMIE.

Stores structured business strategy knowledge documents in MongoDB.
Uses Atlas Vector Search index + Voyage AI embeddings for semantic retrieval.
Uses Voyage reranking to surface the highest-relevance chunks before blueprint generation.

Collection: rmie_knowledge
Atlas Vector Search index name: rmie_knowledge_vector_index

Document schema:
  {
    "title":       str,         # document title / heading
    "category":    str,         # e.g. "startup", "marketing", "credit", "funding"
    "industry":    str,         # e.g. "pressure-washing", "attorney-law-firm", "general"
    "tier":        str,         # "free" | "pro" | "elite" | "founders" — min tier to access
    "content":     str,         # the knowledge text (chunk)
    "tags":        List[str],   # searchable tags
    "embedding":   List[float], # 1536-dim Voyage embedding
    "created_at":  datetime,
  }
"""

import os
import logging
from datetime import datetime, timezone
from typing import List, Optional

from app.services.voyage_service import embed_query, embed_documents, rerank, is_configured

logger = logging.getLogger(__name__)

_COLLECTION = "rmie_knowledge"
_VECTOR_INDEX = os.getenv("VECTOR_SEARCH_INDEX", "rmie_knowledge_vector_index")
_EMBED_DIM = 1536

# ─── Lazy motor import (graceful if not installed) ───────────────────────────
_motor_available = False
try:
    from motor.motor_asyncio import AsyncIOMotorClient
    _motor_available = True
except ImportError:
    logger.warning(
        "motor package not installed. Run: pip install motor==3.4.0\n"
        "MongoDB vector search will be unavailable until motor is installed."
    )
    AsyncIOMotorClient = None  # type: ignore


# ─── Module-level connection pool (one client per process) ───────────────────
_mongo_client = None


def _get_client():
    global _mongo_client
    if not _motor_available:
        return None
    if _mongo_client is None:
        mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
        _mongo_client = AsyncIOMotorClient(mongo_url)
    return _mongo_client


def _get_db():
    client = _get_client()
    if client is None:
        return None
    db_name = os.getenv("DB_NAME", "pen2pro_rmie")
    return client[db_name]


def _get_collection():
    db = _get_db()
    if db is None:
        return None
    return db[_COLLECTION]


# ─── Atlas Vector Search pipeline builder ────────────────────────────────────

def _vector_search_pipeline(
    query_vector: List[float],
    num_candidates: int = 50,
    limit: int = 10,
    industry_filter: Optional[str] = None,
    tier_filter: Optional[str] = None,
) -> list:
    """
    Build a MongoDB aggregation pipeline using $vectorSearch.
    Optionally pre-filter by industry and/or tier.
    """
    # Build pre-filter for Atlas Vector Search
    pre_filter: dict = {}
    if industry_filter and industry_filter != "general":
        pre_filter["$or"] = [
            {"industry": industry_filter},
            {"industry": "general"},
        ]
    if tier_filter:
        tier_order = {"free": 0, "pro": 1, "elite": 2, "founders": 3}
        user_tier_level = tier_order.get(tier_filter, 0)
        accessible_tiers = [t for t, lvl in tier_order.items() if lvl <= user_tier_level]
        pre_filter["tier"] = {"$in": accessible_tiers}

    vector_stage: dict = {
        "$vectorSearch": {
            "index": _VECTOR_INDEX,
            "path": "embedding",
            "queryVector": query_vector,
            "numCandidates": num_candidates,
            "limit": limit,
        }
    }

    if pre_filter:
        vector_stage["$vectorSearch"]["filter"] = pre_filter

    pipeline = [
        vector_stage,
        {
            "$project": {
                "_id": 0,
                "title": 1,
                "category": 1,
                "industry": 1,
                "tier": 1,
                "content": 1,
                "tags": 1,
                "score": {"$meta": "vectorSearchScore"},
            }
        },
    ]
    return pipeline


# ─── Add knowledge document ───────────────────────────────────────────────────

async def add_knowledge_document(
    title: str,
    category: str,
    industry: str,
    tier: str,
    content: str,
    tags: Optional[List[str]] = None,
) -> dict:
    """
    Embed a knowledge chunk and store it in MongoDB.
    Returns the inserted document id and embedding status.
    """
    collection = _get_collection()
    if collection is None:
        raise RuntimeError("MongoDB not available. Install motor: pip install motor==3.4.0")
    tags = tags or []

    # Generate embedding
    embedding = None
    if is_configured():
        embeddings = await embed_documents([content])
        if embeddings:
            embedding = embeddings[0]

    doc = {
        "title": title,
        "category": category,
        "industry": industry.lower().replace(" ", "-"),
        "tier": tier,
        "content": content,
        "tags": tags,
        "embedding": embedding,
        "has_embedding": embedding is not None,
        "created_at": datetime.now(timezone.utc),
    }

    result = await collection.insert_one(doc)
    return {
        "id": str(result.inserted_id),
        "title": title,
        "has_embedding": embedding is not None,
    }


async def bulk_add_knowledge_documents(documents: List[dict]) -> dict:
    """
    Batch insert multiple knowledge documents.
    Each doc should have: title, category, industry, tier, content, tags (optional).
    """
    collection = _get_collection()
    if collection is None:
        raise RuntimeError("MongoDB not available. Install motor: pip install motor==3.4.0")

    # Extract all content strings for batch embedding
    texts = [doc.get("content", "") for doc in documents]
    embeddings = None
    if is_configured():
        embeddings = await embed_documents(texts)

    docs_to_insert = []
    for i, doc in enumerate(documents):
        embedding = embeddings[i] if embeddings and i < len(embeddings) else None
        docs_to_insert.append({
            "title": doc.get("title", ""),
            "category": doc.get("category", "general"),
            "industry": doc.get("industry", "general").lower().replace(" ", "-"),
            "tier": doc.get("tier", "free"),
            "content": doc.get("content", ""),
            "tags": doc.get("tags", []),
            "embedding": embedding,
            "has_embedding": embedding is not None,
            "created_at": datetime.now(timezone.utc),
        })

    result = await collection.insert_many(docs_to_insert)
    return {
        "inserted_count": len(result.inserted_ids),
        "embedded_count": sum(1 for d in docs_to_insert if d["has_embedding"]),
    }


# ─── Search knowledge base ────────────────────────────────────────────────────

async def search_knowledge(
    query: str,
    industry: Optional[str] = None,
    tier: str = "free",
    top_k: int = 5,
    use_rerank: bool = True,
) -> List[dict]:
    """
    Semantic search the RMIE knowledge base.

    Flow:
      1. Embed the query via Voyage.
      2. Run Atlas Vector Search (retrieves top candidates).
      3. Optionally rerank results with Voyage rerank-2 for precision.
      4. Return top_k most relevant chunks.

    If Voyage is not configured, falls back to a text-based $search or
    returns an empty list (Atlas text search requires its own index —
    safe fallback is empty, blueprint still generates via OpenAI).
    """
    collection = _get_collection()
    if collection is None:
        logger.warning("MongoDB not available — returning empty knowledge results")
        return []

    # ── Path A: Vector search (Voyage configured) ──────────────────────────
    if is_configured():
        query_vector = await embed_query(query)
        if query_vector:
            try:
                pipeline = _vector_search_pipeline(
                    query_vector=query_vector,
                    num_candidates=30,
                    limit=15,
                    industry_filter=industry,
                    tier_filter=tier,
                )
                cursor = collection.aggregate(pipeline)
                raw_results = await cursor.to_list(length=15)

                if not raw_results:
                    return []

                # Rerank if enabled and we have results
                if use_rerank and len(raw_results) > 1:
                    doc_texts = [r["content"] for r in raw_results]
                    reranked = await rerank(query, doc_texts, top_k=top_k)
                    if reranked:
                        final = []
                        for item in reranked:
                            idx = item.get("index", 0)
                            if idx < len(raw_results):
                                result = dict(raw_results[idx])
                                result["relevance_score"] = item.get("relevance_score", 0)
                                final.append(result)
                        return final[:top_k]

                return raw_results[:top_k]

            except Exception as exc:
                logger.error(f"Atlas Vector Search failed: {exc}")
                # Fall through to text fallback

    # ── Path B: Keyword fallback (no Voyage key or vector search failed) ───
    logger.info("Falling back to keyword search (no Voyage key or vector search error)")
    try:
        query_words = query.lower().split()
        filter_query: dict = {}
        if industry:
            filter_query["$or"] = [
                {"industry": industry},
                {"industry": "general"},
            ]
        tier_order = {"free": 0, "pro": 1, "elite": 2, "founders": 3}
        user_level = tier_order.get(tier, 0)
        accessible = [t for t, lvl in tier_order.items() if lvl <= user_level]
        filter_query["tier"] = {"$in": accessible}

        cursor = collection.find(filter_query, {"_id": 0}).limit(top_k)
        return await cursor.to_list(length=top_k)
    except Exception as exc:
        logger.error(f"Keyword fallback search failed: {exc}")
        return []


# ─── Format knowledge context for prompt injection ────────────────────────────

def format_knowledge_context(chunks: List[dict]) -> str:
    """
    Format retrieved knowledge chunks into a clean string for prompt injection.
    """
    if not chunks:
        return ""

    sections = []
    for i, chunk in enumerate(chunks, 1):
        industry = chunk.get("industry", "general")
        category = chunk.get("category", "")
        title = chunk.get("title", f"Context {i}")
        content = chunk.get("content", "")
        sections.append(
            f"[Knowledge {i}] {title} ({industry} / {category})\n{content}"
        )

    return "\n\n---\n\n".join(sections)


# ─── Atlas index creation helper ─────────────────────────────────────────────

async def ensure_vector_index() -> dict:
    """
    Check if the Atlas Vector Search index exists.
    Returns status info — actual index creation must be done in Atlas UI
    or via the Atlas Admin API (cannot be done via motor/pymongo commands).
    """
    collection = _get_collection()
    if collection is None:
        return {
            "collection": _COLLECTION,
            "vector_index_name": _VECTOR_INDEX,
            "vector_index_exists": False,
            "note": "MongoDB not available. Install motor: pip install motor==3.4.0",
        }
    try:
        indexes = await collection.list_indexes().to_list(None)
        index_names = [idx.get("name", "") for idx in indexes]
        has_vector_index = _VECTOR_INDEX in index_names

        return {
            "collection": _COLLECTION,
            "vector_index_name": _VECTOR_INDEX,
            "vector_index_exists": has_vector_index,
            "note": (
                "Vector index OK." if has_vector_index else
                f"Create an Atlas Search index named '{_VECTOR_INDEX}' on the "
                f"'{_COLLECTION}' collection with type 'vectorSearch', "
                f"path='embedding', numDimensions=1536, similarity='cosine'."
            ),
        }
    except Exception as exc:
        return {"error": str(exc), "vector_index_name": _VECTOR_INDEX}
