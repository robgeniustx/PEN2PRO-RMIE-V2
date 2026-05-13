"""
voyage_service.py — Voyage AI embeddings and reranking for PEN2PRO RMIE.

Provides:
  - embed_query(text)          → List[float]   single query embedding
  - embed_documents(texts)     → List[List[float]]  batch document embeddings
  - rerank(query, documents)   → List[dict]    reranked docs with relevance scores

Uses VOYAGE_API_KEY from environment.
Falls back gracefully when the key is missing (returns None / original order).

Voyage models used:
  - Embedding:  voyage-large-2-instruct   (1536-dim, strong semantic retrieval)
  - Reranking:  rerank-2                  (cross-encoder reranker)
"""

import os
import logging
from typing import List, Optional

import httpx

logger = logging.getLogger(__name__)

_VOYAGE_API_BASE = "https://api.voyageai.com/v1"
_EMBED_MODEL = "voyage-large-2-instruct"
_RERANK_MODEL = "rerank-2"
_EMBED_DIM = 1536


def _api_key() -> Optional[str]:
    key = os.getenv("VOYAGE_API_KEY", "").strip()
    return key if key else None


def _headers() -> dict:
    return {
        "Authorization": f"Bearer {_api_key()}",
        "Content-Type": "application/json",
    }


# ─── Embedding ────────────────────────────────────────────────────────────────

async def embed_query(text: str) -> Optional[List[float]]:
    """
    Embed a single query string.
    Returns a 1536-dim float vector, or None if Voyage is not configured.
    """
    key = _api_key()
    if not key:
        logger.warning("VOYAGE_API_KEY not set — skipping embedding")
        return None

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            resp = await client.post(
                f"{_VOYAGE_API_BASE}/embeddings",
                headers=_headers(),
                json={
                    "input": [text],
                    "model": _EMBED_MODEL,
                    "input_type": "query",
                },
            )
            resp.raise_for_status()
            data = resp.json()
            return data["data"][0]["embedding"]
    except Exception as exc:
        logger.error(f"Voyage embed_query failed: {exc}")
        return None


async def embed_documents(texts: List[str]) -> Optional[List[List[float]]]:
    """
    Embed a batch of document strings.
    Returns a list of 1536-dim float vectors, or None on failure.

    Voyage recommends batches of ≤128 for reliability.
    This method auto-chunks if needed.
    """
    key = _api_key()
    if not key:
        logger.warning("VOYAGE_API_KEY not set — skipping document embedding")
        return None
    if not texts:
        return []

    all_embeddings: List[List[float]] = []
    batch_size = 64

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            for i in range(0, len(texts), batch_size):
                batch = texts[i : i + batch_size]
                resp = await client.post(
                    f"{_VOYAGE_API_BASE}/embeddings",
                    headers=_headers(),
                    json={
                        "input": batch,
                        "model": _EMBED_MODEL,
                        "input_type": "document",
                    },
                )
                resp.raise_for_status()
                data = resp.json()
                batch_embeddings = [item["embedding"] for item in data["data"]]
                all_embeddings.extend(batch_embeddings)

        return all_embeddings
    except Exception as exc:
        logger.error(f"Voyage embed_documents failed: {exc}")
        return None


# ─── Reranking ────────────────────────────────────────────────────────────────

async def rerank(
    query: str,
    documents: List[str],
    top_k: int = 5,
) -> Optional[List[dict]]:
    """
    Rerank a list of document strings against a query.

    Returns a list of dicts (sorted by relevance, descending):
      [{"index": int, "relevance_score": float, "document": str}, ...]

    Returns None if Voyage is not configured or reranking fails.
    """
    key = _api_key()
    if not key:
        logger.warning("VOYAGE_API_KEY not set — skipping reranking")
        return None
    if not documents:
        return []

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            resp = await client.post(
                f"{_VOYAGE_API_BASE}/rerank",
                headers=_headers(),
                json={
                    "query": query,
                    "documents": documents,
                    "model": _RERANK_MODEL,
                    "top_k": min(top_k, len(documents)),
                    "return_documents": True,
                },
            )
            resp.raise_for_status()
            data = resp.json()
            results = data.get("data", [])
            return sorted(results, key=lambda x: x.get("relevance_score", 0), reverse=True)
    except Exception as exc:
        logger.error(f"Voyage rerank failed: {exc}")
        return None


# ─── Sync wrappers (for use in non-async contexts) ───────────────────────────

def embed_query_sync(text: str) -> Optional[List[float]]:
    """Sync version of embed_query for use outside async context."""
    import asyncio
    try:
        loop = asyncio.get_event_loop()
        if loop.is_running():
            import concurrent.futures
            with concurrent.futures.ThreadPoolExecutor() as pool:
                future = pool.submit(asyncio.run, embed_query(text))
                return future.result(timeout=30)
        return loop.run_until_complete(embed_query(text))
    except Exception as exc:
        logger.error(f"embed_query_sync failed: {exc}")
        return None


def embed_documents_sync(texts: List[str]) -> Optional[List[List[float]]]:
    """Sync version of embed_documents for seeding scripts."""
    import asyncio
    try:
        loop = asyncio.get_event_loop()
        if loop.is_running():
            import concurrent.futures
            with concurrent.futures.ThreadPoolExecutor() as pool:
                future = pool.submit(asyncio.run, embed_documents(texts))
                return future.result(timeout=60)
        return loop.run_until_complete(embed_documents(texts))
    except Exception as exc:
        logger.error(f"embed_documents_sync failed: {exc}")
        return None


# ─── Utility ─────────────────────────────────────────────────────────────────

def embedding_dimension() -> int:
    """Return the expected embedding dimension for index creation."""
    return _EMBED_DIM


def is_configured() -> bool:
    """Return True if Voyage API key is available."""
    return bool(_api_key())
