"""
rmie_knowledge.py — PEN2PRO RMIE Vector Knowledge API routes.

Routes:
  POST /api/rmie/knowledge/add            — Add one knowledge document to the vector store
  POST /api/rmie/knowledge/search         — Semantic search the knowledge base
  POST /api/rmie/blueprint/enhanced       — Generate tier-aware enhanced business blueprint
  GET  /api/rmie/knowledge/index-status   — Check Atlas Vector Search index status
  POST /api/rmie/knowledge/bulk-add       — Bulk insert knowledge docs (used by seed script)
"""

import json
import os
import logging
from typing import List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.rmie_knowledge_service import (
    add_knowledge_document,
    bulk_add_knowledge_documents,
    search_knowledge,
    format_knowledge_context,
    ensure_vector_index,
)
from app.services.voyage_service import is_configured as voyage_configured

logger = logging.getLogger(__name__)
router = APIRouter()


# ─── Request / Response Schemas ───────────────────────────────────────────────

class KnowledgeAddRequest(BaseModel):
    title: str
    category: str
    industry: str
    tier: str = "free"           # "free" | "pro" | "elite" | "founders"
    content: str
    tags: Optional[List[str]] = []


class KnowledgeBulkAddRequest(BaseModel):
    documents: List[KnowledgeAddRequest]


class KnowledgeSearchRequest(BaseModel):
    query: str
    industry: Optional[str] = None
    tier: str = "free"
    top_k: int = 5
    use_rerank: bool = True


class EnhancedBlueprintRequest(BaseModel):
    # Core intake
    business_idea: str
    industry: Optional[str] = ""          # e.g. "pressure-washing"
    industry_id: Optional[str] = ""       # alias for industry
    category: Optional[str] = ""
    budget: Optional[str] = ""            # e.g. "Under $1,000"
    experience_level: Optional[str] = ""  # "beginner" | "some" | "experienced"
    city: Optional[str] = "Houston"
    state: Optional[str] = "TX"

    # Subscriber tier — controls output depth
    tier: str = "free"                    # "free" | "pro" | "elite" | "founders"

    # Optional persona fields
    target_customer: Optional[str] = ""
    challenge: Optional[str] = ""
    timeline: Optional[str] = "90 days"
    name: Optional[str] = ""
    referral: Optional[str] = ""


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _resolve_industry(req: EnhancedBlueprintRequest) -> str:
    """Return the best industry slug from the request."""
    return (req.industry or req.industry_id or req.category or "general").lower().replace(" ", "-")


def _tier_depth(tier: str) -> dict:
    """Return tier-specific output configuration."""
    configs = {
        "free": {
            "sections": "core",
            "depth": "foundational",
            "disclaimer": "Upgrade to Pro for full execution plans, financial projections, and AI refinement.",
            "extra_instructions": "",
        },
        "pro": {
            "sections": "full",
            "depth": "detailed",
            "disclaimer": "Pro member output — full roadmap, sales scripts, outreach, and credit/funding readiness.",
            "extra_instructions": (
                "Include detailed outreach scripts (DM, email, phone), "
                "full credit-building steps, vendor funding timeline, and 90-day revenue projections."
            ),
        },
        "elite": {
            "sections": "advanced",
            "depth": "comprehensive",
            "disclaimer": "Elite member output — advanced strategy, financial models, done-with-you guidance.",
            "extra_instructions": (
                "Include financial projections with monthly breakdowns, "
                "vendor/tradeline recommendations with specific names and URLs, "
                "advanced automation stack, CRM setup guidance, "
                "complete launch checklist, and risk mitigation strategies."
            ),
        },
        "founders": {
            "sections": "complete",
            "depth": "enterprise-level",
            "disclaimer": "Legacy Founder output — full platform access, enterprise-grade strategy.",
            "extra_instructions": (
                "Provide enterprise-level strategy including: "
                "multi-location scaling plan, white-label opportunity assessment, "
                "strategic partnership targets (names of potential partners), "
                "M&A considerations at 36-month milestone, "
                "full financial model with P&L projection, "
                "investor pitch angle and valuation framework, "
                "and complete automation + AI tools integration roadmap."
            ),
        },
    }
    return configs.get(tier, configs["free"])


def _build_enhanced_prompt(
    req: EnhancedBlueprintRequest,
    knowledge_context: str,
    tier_config: dict,
) -> str:
    industry = _resolve_industry(req)
    city = req.city or "Houston"
    state = req.state or "TX"
    budget = req.budget or "Under $1,000"
    experience = req.experience_level or "beginner"

    knowledge_section = ""
    if knowledge_context:
        knowledge_section = f"""
--- RETRIEVED RMIE KNOWLEDGE BASE (use this to enrich your output) ---
{knowledge_context}
--- END KNOWLEDGE BASE ---
"""

    tier_instructions = tier_config.get("extra_instructions", "")
    depth = tier_config.get("depth", "foundational")

    return f"""You are the PEN2PRO RMIE — Rapid Monetization Intelligence Engine.
Generate a {depth} business blueprint for a {req.tier.upper()} tier subscriber.

USER INPUT:
- Business Idea: {req.business_idea}
- Industry: {industry}
- Location: {city}, {state}
- Budget: {budget}
- Experience: {experience}
- Target Customer: {req.target_customer or "Not specified"}
- Timeline: {req.timeline or "90 days"}
- Biggest Challenge: {req.challenge or "Not specified"}

TIER: {req.tier.upper()} ({depth} output required)
{tier_instructions}

{knowledge_section}

IMPORTANT RULES:
1. Be specific. Use real dollar amounts, real tool names, real websites.
2. Never say "post on social media" without specifying platform, frequency, content type, and first action.
3. Every step must be executable today with the stated budget.
4. Sales scripts must include actual words to say, not descriptions of what to say.
5. Credit/funding steps must name actual lenders, vendors, and programs.
6. Tool stack must include actual products with pricing and URLs.

Respond with ONLY a valid JSON object matching this EXACT structure:

{{
  "business_name_ideas": [
    {{"name": "...", "domain_available": true, "why": "..."}},
    {{"name": "...", "domain_available": true, "why": "..."}},
    {{"name": "...", "domain_available": true, "why": "..."}}
  ],
  "executive_summary": {{
    "value_proposition": "...",
    "target_customer": "...",
    "problem_solved": "...",
    "revenue_model": "...",
    "startup_cost_low": "$X",
    "startup_cost_realistic": "$X",
    "startup_cost_stretch": "$X",
    "first_revenue_estimate": "$X in Y days"
  }},
  "launch_steps": [
    "Step 1: [specific action with cost and timeline]",
    "Step 2: ...",
    "Step 3: ...",
    "Step 4: ...",
    "Step 5: ..."
  ],
  "legal_foundation": {{
    "entity_type": "LLC",
    "filing_state": "{state}",
    "filing_cost": "$X",
    "filing_site": "sos.[state].gov",
    "ein_instructions": "Free at IRS.gov — takes 5 minutes online",
    "business_bank_account": "Chase Business Complete Checking — bring EIN + LLC docs",
    "insurance_needed": "...",
    "insurance_cost": "$X/yr",
    "insurance_provider": "nextinsurance.com or hiscox.com",
    "licenses_needed": ["...", "..."],
    "checklist": ["1. ...", "2. ...", "3. ...", "4. ...", "5. ..."]
  }},
  "funding_strategy": {{
    "personal_credit_steps": ["...", "...", "..."],
    "business_credit_steps": ["Step 1 (Day 1): ...", "Step 2 (Day 30): ...", "Step 3 (Day 60): ...", "Step 4 (Day 90): ...", "Step 5 (Day 180): ..."],
    "vendor_accounts": [
      {{"name": "Uline", "url": "uline.com", "reports_to": "D&B, Equifax", "approval_difficulty": "Easy", "net_terms": "Net-30"}},
      {{"name": "Quill", "url": "quill.com", "reports_to": "D&B", "approval_difficulty": "Easy", "net_terms": "Net-30"}},
      {{"name": "Grainger", "url": "grainger.com", "reports_to": "D&B", "approval_difficulty": "Easy", "net_terms": "Net-30"}}
    ],
    "funding_sources": [
      {{"source": "SBA Microloan", "amount": "$500–$50,000", "timeline": "6–12 months in business", "url": "sba.gov"}},
      {{"source": "Kiva U.S.", "amount": "$1,000–$15,000", "timeline": "New businesses OK", "url": "kiva.org/borrow"}}
    ],
    "funding_readiness_checklist": ["...", "...", "...", "...", "..."]
  }},
  "marketing_plan": {{
    "primary_channel": "...",
    "secondary_channel": "...",
    "content_strategy": "...",
    "first_7_posts": ["Post 1: ...", "Post 2: ...", "Post 3: ...", "Post 4: ...", "Post 5: ...", "Post 6: ...", "Post 7: ..."],
    "paid_ads_strategy": "...",
    "local_outreach": "...",
    "seo_steps": ["...", "...", "..."]
  }},
  "sales_script": {{
    "cold_dm": "...",
    "cold_email_subject": "...",
    "cold_email_body": "...",
    "phone_opener": "...",
    "objection_price": "...",
    "objection_not_interested": "...",
    "close": "...",
    "follow_up_day_2": "...",
    "follow_up_day_5": "..."
  }},
  "pricing_model": {{
    "entry_offer": {{"name": "...", "price": "$X", "includes": "..."}},
    "standard_offer": {{"name": "...", "price": "$X", "includes": "..."}},
    "premium_offer": {{"name": "...", "price": "$X", "includes": "..."}},
    "recurring_offer": {{"name": "...", "price": "$X/mo", "includes": "..."}},
    "entry_why": "..."
  }},
  "automation_plan": {{
    "crm": "...",
    "invoicing": "...",
    "scheduling": "...",
    "follow_up_automation": "...",
    "social_scheduling": "...",
    "email_marketing": "..."
  }},
  "website_builder_recommendations": [
    {{"platform": "...", "cost": "$X/mo", "best_for": "...", "url": "..."}},
    {{"platform": "...", "cost": "$X/mo", "best_for": "...", "url": "..."}}
  ],
  "crm_recommendations": [
    {{"name": "...", "cost": "$X/mo", "best_for": "...", "url": "..."}},
    {{"name": "...", "cost": "$X/mo", "best_for": "...", "url": "..."}}
  ],
  "ai_voice_agent_recommendations": [
    {{"name": "...", "use_case": "...", "cost": "$X/mo", "url": "..."}},
    {{"name": "...", "use_case": "...", "cost": "$X/mo", "url": "..."}}
  ],
  "thirty_day_action_plan": [
    "Day 1: ...",
    "Day 2–3: ...",
    "Day 4–5: ...",
    "Day 6–7: ...",
    "Week 2: ...",
    "Week 3: ...",
    "Week 4: ..."
  ],
  "upgrade_recommendation": {{
    "current_tier": "{req.tier}",
    "recommended_tier": "...",
    "reason": "...",
    "cta": "...",
    "cta_url": "/pricing"
  }}
}}"""


# ─── Routes ───────────────────────────────────────────────────────────────────

@router.post("/knowledge/add")
async def add_knowledge(req: KnowledgeAddRequest):
    """Add a single knowledge document to the RMIE vector store."""
    try:
        result = await add_knowledge_document(
            title=req.title,
            category=req.category,
            industry=req.industry,
            tier=req.tier,
            content=req.content,
            tags=req.tags or [],
        )
        return {
            "success": True,
            "result": result,
            "voyage_configured": voyage_configured(),
        }
    except Exception as exc:
        logger.error(f"add_knowledge error: {exc}")
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/knowledge/bulk-add")
async def bulk_add_knowledge(req: KnowledgeBulkAddRequest):
    """Bulk insert knowledge documents. Used by the seed script."""
    if not req.documents:
        raise HTTPException(status_code=400, detail="No documents provided")
    try:
        docs = [d.model_dump() for d in req.documents]
        result = await bulk_add_knowledge_documents(docs)
        return {
            "success": True,
            "inserted_count": result["inserted_count"],
            "embedded_count": result["embedded_count"],
            "voyage_configured": voyage_configured(),
        }
    except Exception as exc:
        logger.error(f"bulk_add_knowledge error: {exc}")
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/knowledge/search")
async def search_knowledge_endpoint(req: KnowledgeSearchRequest):
    """Semantic search the RMIE knowledge base and return relevant chunks."""
    try:
        results = await search_knowledge(
            query=req.query,
            industry=req.industry,
            tier=req.tier,
            top_k=req.top_k,
            use_rerank=req.use_rerank,
        )
        return {
            "query": req.query,
            "results": results,
            "count": len(results),
            "voyage_configured": voyage_configured(),
        }
    except Exception as exc:
        logger.error(f"search_knowledge error: {exc}")
        raise HTTPException(status_code=500, detail=str(exc))


@router.get("/knowledge/index-status")
async def check_index_status():
    """Check if the Atlas Vector Search index is configured."""
    try:
        status = await ensure_vector_index()
        return {
            "status": "ok",
            "voyage_configured": voyage_configured(),
            **status,
        }
    except Exception as exc:
        return {"status": "error", "error": str(exc)}


@router.post("/blueprint/enhanced")
async def generate_enhanced_blueprint(req: EnhancedBlueprintRequest):
    """
    Generate a tier-aware enhanced business blueprint using:
      1. MongoDB Atlas Vector Search to retrieve relevant RMIE knowledge
      2. Voyage reranking to surface the highest-relevance chunks
      3. OpenAI to generate a structured, detailed business blueprint
         enriched by the retrieved context

    Returns structured JSON with all blueprint sections.
    """
    import httpx

    industry = _resolve_industry(req)
    tier_config = _tier_depth(req.tier)

    # ── Step 1: Retrieve relevant knowledge from MongoDB ─────────────────
    knowledge_chunks = []
    try:
        knowledge_chunks = await search_knowledge(
            query=req.business_idea,
            industry=industry,
            tier=req.tier,
            top_k=6,
            use_rerank=True,
        )
    except Exception as exc:
        logger.warning(f"Knowledge retrieval failed, continuing without context: {exc}")

    knowledge_context = format_knowledge_context(knowledge_chunks)

    # ── Step 2: Build the enhanced prompt ────────────────────────────────
    user_prompt = _build_enhanced_prompt(req, knowledge_context, tier_config)

    # ── Step 3: Call OpenAI (or return sample if no key) ─────────────────
    api_key = os.getenv("OPENAI_API_KEY", "")
    model = os.getenv("OPENAI_MODEL_BLUEPRINT", "gpt-4o-mini")

    if not api_key:
        # Return rich sample — never crash the frontend
        return _build_sample_response(req, tier_config, knowledge_chunks)

    try:
        async with httpx.AsyncClient(timeout=90.0) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model,
                    "temperature": 0.65,
                    "max_tokens": 4000,
                    "response_format": {"type": "json_object"},
                    "messages": [
                        {
                            "role": "system",
                            "content": (
                                "You are the PEN2PRO RMIE — Rapid Monetization Intelligence Engine. "
                                "You generate detailed, actionable, industry-specific business blueprints. "
                                "Every output must be specific, realistic, and executable today. "
                                "Always return valid JSON matching the exact schema requested."
                            ),
                        },
                        {"role": "user", "content": user_prompt},
                    ],
                },
            )
            response.raise_for_status()
            content = response.json()["choices"][0]["message"]["content"]
            data = json.loads(content)
            data["is_sample"] = False
            data["business_idea"] = req.business_idea
            data["industry"] = industry
            data["tier"] = req.tier
            data["knowledge_chunks_used"] = len(knowledge_chunks)
            data["voyage_enhanced"] = voyage_configured()
            return data

    except json.JSONDecodeError as exc:
        logger.error(f"JSON decode error in enhanced blueprint: {exc}")
        return _build_sample_response(req, tier_config, knowledge_chunks, error=str(exc))
    except Exception as exc:
        logger.error(f"Enhanced blueprint generation error: {exc}")
        return _build_sample_response(req, tier_config, knowledge_chunks, error=str(exc))


def _build_sample_response(
    req: EnhancedBlueprintRequest,
    tier_config: dict,
    knowledge_chunks: list,
    error: Optional[str] = None,
) -> dict:
    """Return a rich sample blueprint when OpenAI is unavailable."""
    industry = _resolve_industry(req)
    city = req.city or "Houston"
    state = req.state or "TX"

    return {
        "is_sample": True,
        "business_idea": req.business_idea,
        "industry": industry,
        "tier": req.tier,
        "knowledge_chunks_used": len(knowledge_chunks),
        "voyage_enhanced": voyage_configured(),
        "ai_error": error,
        "business_name_ideas": [
            {
                "name": f"{city} {req.business_idea[:20].title()} Pro",
                "domain_available": True,
                "why": "Local + service + professional signals trust to first-time customers.",
            },
            {
                "name": "BuildRight Solutions",
                "domain_available": True,
                "why": "Broad, scalable, works across service expansions.",
            },
            {
                "name": "LaunchPath Co.",
                "domain_available": True,
                "why": "Clean, memorable, signals forward momentum.",
            },
        ],
        "executive_summary": {
            "value_proposition": f"Reliable, professional {req.business_idea} services in {city}, {state}.",
            "target_customer": "Local homeowners and small businesses seeking dependable service.",
            "problem_solved": "Customers cannot find a reliable, fairly priced provider they can trust.",
            "revenue_model": "Flat-rate service pricing with recurring monthly maintenance contracts.",
            "startup_cost_low": "$800",
            "startup_cost_realistic": "$2,500",
            "startup_cost_stretch": "$6,000",
            "first_revenue_estimate": "$500–$1,500 in first 7 days",
        },
        "launch_steps": [
            "Step 1 (Day 1): File LLC at your state SOS website — $50–$300. Takes 1–3 business days.",
            "Step 2 (Day 2): Get EIN free at IRS.gov. Takes 5 minutes. Print and save confirmation.",
            "Step 3 (Day 3): Open Chase Business Complete Checking — bring EIN + LLC docs + personal ID.",
            "Step 4 (Day 4): Create Google Business Profile at business.google.com. Add 5 photos today.",
            "Step 5 (Day 5): Set your 3-tier pricing. Create a service menu using Canva (free). Post on Facebook + Nextdoor.",
        ],
        "legal_foundation": {
            "entity_type": "LLC",
            "filing_state": state,
            "filing_cost": "$50–$300",
            "filing_site": f"sos.state.{state.lower()}.us",
            "ein_instructions": "Free at IRS.gov — takes 5 minutes online.",
            "business_bank_account": "Chase Business Complete Checking — bring EIN, LLC docs, personal ID.",
            "insurance_needed": "General Liability $1M/$2M",
            "insurance_cost": "$400–$800/yr",
            "insurance_provider": "nextinsurance.com or hiscox.com",
            "licenses_needed": ["Local business license — $25–$100/yr", "Check your city/county requirements"],
            "checklist": [
                "1. File LLC at state SOS website",
                "2. Get EIN at IRS.gov (free)",
                "3. Open business bank account",
                "4. Get general liability insurance",
                "5. Obtain local business license",
            ],
        },
        "funding_strategy": {
            "personal_credit_steps": [
                "Pull free report at AnnualCreditReport.com — identify all errors",
                "Keep revolving balances below 30% utilization",
                "Dispute errors at consumerfinance.gov/complaint",
            ],
            "business_credit_steps": [
                "Step 1 (Day 1): Open business bank account — establishes banking history",
                "Step 2 (Day 30): Apply for Uline net-30 — reports to D&B (uline.com)",
                "Step 3 (Day 30): Apply for Quill net-30 — reports to D&B (quill.com)",
                "Step 4 (Day 60): Apply for Grainger net-30 — (grainger.com)",
                "Step 5 (Day 90): Check PAYDEX at nav.com — target 80+",
            ],
            "vendor_accounts": [
                {"name": "Uline", "url": "uline.com", "reports_to": "D&B, Equifax", "approval_difficulty": "Easy", "net_terms": "Net-30"},
                {"name": "Quill", "url": "quill.com", "reports_to": "D&B", "approval_difficulty": "Easy", "net_terms": "Net-30"},
                {"name": "Grainger", "url": "grainger.com", "reports_to": "D&B", "approval_difficulty": "Easy", "net_terms": "Net-30"},
            ],
            "funding_sources": [
                {"source": "SBA Microloan", "amount": "$500–$50,000", "timeline": "6–12 months in business", "url": "sba.gov"},
                {"source": "Kiva U.S.", "amount": "$1,000–$15,000", "timeline": "New businesses OK", "url": "kiva.org/borrow"},
            ],
            "funding_readiness_checklist": [
                "Business bank account open 90+ days",
                "LLC filed and active",
                "EIN obtained",
                "3+ vendor tradelines reporting",
                "Personal credit 650+ preferred",
            ],
        },
        "marketing_plan": {
            "primary_channel": "Facebook Groups + Nextdoor — zero cost, high local reach",
            "secondary_channel": "Instagram (before/after photos)",
            "content_strategy": "5 posts/week minimum for 90 days — before/after, tips, behind-the-scenes",
            "first_7_posts": [
                "Post 1: Introduce yourself + your business + your city. Tell them why you started.",
                "Post 2: Show your service with a before/after photo or video.",
                "Post 3: Explain your pricing and what's included.",
                "Post 4: Share a tip related to your service — educate your customer.",
                "Post 5: Post a testimonial or review (even from a friend or family beta job).",
                "Post 6: Post a limited-time intro offer for first 5 customers.",
                "Post 7: Answer the most common question your customers ask.",
            ],
            "paid_ads_strategy": "Do NOT run paid ads until you have 3 paying clients and know exactly who your customer is.",
            "local_outreach": f"Message 20 prospects/day in {city} via Facebook, Nextdoor, and LinkedIn.",
            "seo_steps": [
                "Create and verify Google Business Profile",
                "List on Yelp, Angi, and Thumbtack",
                "Ask every customer for a Google review",
            ],
        },
        "sales_script": {
            "cold_dm": f"Hey [Name] — I just launched [Business] in {city}. First 5 jobs are $99 (normally $199). Want to grab a spot this week?",
            "cold_email_subject": f"First 5 clients get $99 intro rate — {city} {req.business_idea[:15].title()}",
            "cold_email_body": f"Hi [Name],\n\nI just launched my {req.business_idea} business in {city} and I'm offering my first 5 clients an intro rate of $99 (normally $199).\n\nNo catch — I want to build my portfolio and collect reviews.\n\nWould you be open to a quick quote this week?\n\n— [Your Name]\n[Business Name]\n[Phone]",
            "phone_opener": f"Hey [Name], this is [Your Name] with [Business] in {city}. I have 2 intro openings this week — can I get you a quick quote?",
            "objection_price": "I understand. The intro rate is $99 — normally $199. I'm building reviews and want to prove my work. What's your availability?",
            "objection_not_interested": "No problem. Can I ask — is it timing or budget? I have a payment plan option if needed.",
            "close": "Want me to pencil you in for [Day] at [Time]? Just need your address and I'll send a confirmation.",
            "follow_up_day_2": "Hey [Name] — following up from yesterday. Still have 1 intro spot left at $99. Want to grab it?",
            "follow_up_day_5": "Hey [Name] — last follow-up. Intro pricing ends [Date]. Happy to answer any questions before it's gone.",
        },
        "pricing_model": {
            "entry_offer": {"name": "Starter", "price": "$99–$149", "includes": "Basic service, 1 location, no contract"},
            "standard_offer": {"name": "Standard", "price": "$199–$349", "includes": "Full service + follow-up + photo documentation"},
            "premium_offer": {"name": "Premium", "price": "$399–$699", "includes": "Full service + priority scheduling + monthly maintenance option"},
            "recurring_offer": {"name": "Monthly Maintenance", "price": "$99–$199/mo", "includes": "Monthly service visit + priority response + 10% discount on add-ons"},
            "entry_why": "Low barrier gets first 5 clients fast. Upsell to monthly contract once they see quality.",
        },
        "automation_plan": {
            "crm": "HubSpot CRM — free tier covers first 100 contacts, pipelines, and follow-up reminders",
            "invoicing": "Wave (free) or Jobber ($49/mo for service businesses with scheduling)",
            "scheduling": "Calendly free tier for appointment booking — embed link in Google Business Profile",
            "follow_up_automation": "HubSpot sequences — set up 5-touch follow-up that runs automatically after first contact",
            "social_scheduling": "Buffer or Later — free tier schedules 10 posts/month per platform",
            "email_marketing": "Mailchimp free tier — up to 500 contacts and 1,000 sends/month",
        },
        "website_builder_recommendations": [
            {"platform": "Squarespace", "cost": "$16/mo", "best_for": "Service businesses wanting clean design fast", "url": "squarespace.com"},
            {"platform": "Wix", "cost": "$17/mo", "best_for": "Full control + booking + payments in one", "url": "wix.com"},
        ],
        "crm_recommendations": [
            {"name": "HubSpot CRM", "cost": "$0 (free tier)", "best_for": "Pipeline tracking + follow-up automation", "url": "hubspot.com"},
            {"name": "Jobber", "cost": "$49/mo", "best_for": "Service businesses — scheduling + invoicing + CRM", "url": "getjobber.com"},
        ],
        "ai_voice_agent_recommendations": [
            {"name": "P2P AI Voice Agent (PEN2PRO)", "use_case": "Answer calls 24/7, capture leads, book appointments", "cost": "Included with Elite/Founders plan", "url": "/accelerator"},
            {"name": "Synthflow", "use_case": "AI phone answering + lead qualification", "cost": "$29/mo", "url": "synthflow.ai"},
        ],
        "thirty_day_action_plan": [
            "Day 1: File LLC + get EIN + create Google Business Profile",
            "Day 2–3: Open business bank account + set pricing + create Canva service menu",
            "Day 4–5: Message 40 prospects (20/day) with intro offer",
            "Day 6–7: Land first job + document with before/after photos + post on social",
            "Week 2: Follow up on all Day 4–5 contacts + run $10/day Facebook ad in your zip code",
            "Week 3: Apply for Uline + Quill net-30 accounts + ask first 3 clients for Google reviews",
            "Week 4: Revenue target $1,000–$2,500 + book Week 5 jobs + refine offer based on feedback",
        ],
        "upgrade_recommendation": {
            "current_tier": req.tier,
            "recommended_tier": "pro" if req.tier == "free" else ("elite" if req.tier == "pro" else "founders"),
            "reason": "Get full outreach automation, financial projections, vendor introductions, and done-with-you launch support.",
            "cta": "Upgrade before June 10 to lock in founding member pricing.",
            "cta_url": "/pricing",
        },
    }
