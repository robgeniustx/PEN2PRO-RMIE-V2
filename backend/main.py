import copy
import os
from typing import Optional

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

from app.routes.stripe_routes import router as stripe_router
from app.routes.admin import router as admin_router
from app.routes.analytics import router as analytics_router
from app.routes.credit import router as credit_router
from app.routes.funding import router as funding_router
from app.routes.waitlist import router as waitlist_router
from app.routes.auth import router as auth_router
from app.routes.blueprints import router as blueprints_router
from app.routes.voice import router as voice_router
from app.routes.agents import router as agents_router

# RMIE Vector Knowledge + Enhanced Blueprint (MongoDB Atlas + Voyage AI)
from app.routes.rmie_knowledge import router as rmie_knowledge_router

# Phase 2 — BusinessOS modules
from app.routes.command_center import router as command_center_router
from app.routes.voice_agent import router as voice_agent_router
from app.routes.website_builder import router as website_builder_router
from app.routes.domain_search import router as domain_router

# Customers CRM router (existing)
try:
    from app.routes.customers import router as customers_router
    _has_customers = True
except ImportError:
    _has_customers = False


app = FastAPI(
    title="PEN2PRO BusinessOS API",
    version="3.0.0",
    description="PEN2PRO RMIE + P2P Command Center + P2P AI Voice Agent",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost:8000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        FRONTEND_URL,
        BACKEND_URL,
        "http://localhost:5173",
        "http://localhost:3000",
        "https://pen2pro.com",
        "https://www.pen2pro.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─── Health ───────────────────────────────────────────────────────────────────

@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "service": "PEN2PRO BusinessOS API",
        "version": "3.0.0",
        "modules": ["RMIE", "Command Center", "Voice Agent", "Website Builder"],
    }


# ─── Pricing — BusinessOS Plans ───────────────────────────────────────────────

@app.get("/api/pricing")
def get_pricing():
    return {
        "plans": [
            {
                "id": "free",
                "name": "Free Forever",
                "price": 0,
                "price_display": "$0",
                "period": "",
                "stripe_price_id": None,
                "badge": "",
                "tagline": "Start building with AI today.",
                "features": [
                    "1 AI business roadmap",
                    "Basic strategy output",
                    "Brand name suggestions",
                    "LLC setup checklist",
                    "Waitlist early access",
                ],
                "cta": "Start Free Roadmap",
                "cta_href": "/starter",
            },
            {
                "id": "pro",
                "name": "Pro",
                "price": 47,
                "price_display": "$47",
                "period": "/mo",
                "stripe_price_id": os.getenv("STRIPE_PRICE_PRO_MONTHLY", ""),
                "badge": "Most Popular",
                "tagline": "Full roadmap, full strategy, full launch support.",
                "features": [
                    "Unlimited AI roadmaps",
                    "Full 90-day execution plan",
                    "Sales scripts & outreach templates",
                    "Credit readiness checklist",
                    "PDF / email export",
                    "AI business refinement",
                    "Niche-specific roadmap output",
                    "Priority support",
                ],
                "cta": "Join Waitlist → Pro",
                "cta_href": "/waitlist?tier=pro",
            },
            {
                "id": "elite",
                "name": "Elite",
                "price": 97,
                "price_display": "$97",
                "period": "/mo",
                "stripe_price_id": os.getenv("STRIPE_PRICE_ELITE_MONTHLY", ""),
                "badge": "Best Value",
                "tagline": "Advanced strategy, execution support, and funding readiness.",
                "features": [
                    "Everything in Pro",
                    "Financial projections",
                    "Funding partner resources",
                    "Done-with-you guidance",
                    "Vendor & credit resource center",
                    "White-glove strategy sessions",
                    "Launch checklist + accountability",
                    "Niche CRM + automation templates",
                ],
                "cta": "Join Waitlist → Elite",
                "cta_href": "/waitlist?tier=elite",
            },
            {
                "id": "founders",
                "name": "Founders Lifetime",
                "price": 497,
                "price_display": "$497",
                "period": " one-time",
                "stripe_price_id": os.getenv(
                    "STRIPE_PRICE_FOUNDERS_LIFETIME",
                    os.getenv("STRIPE_PRICE_FOUNDER_ONETIME", ""),
                ),
                "badge": "200 Spots Only",
                "tagline": "Pay once. Access everything. Forever.",
                "features": [
                    "Lifetime access — pay once",
                    "All Pro + Elite features",
                    "All future features included",
                    "Founding member pricing locked forever",
                    "Early access to every new module",
                    "Direct founder support line",
                    "Founding member recognition",
                ],
                "cta": "Become a Founder",
                "cta_href": "/waitlist?tier=founders",
            },
            {
                "id": "agency",
                "name": "Agency / BusinessOS",
                "price": 397,
                "price_display": "$397",
                "period": "/mo",
                "stripe_price_id": os.getenv("STRIPE_PRICE_AGENCY_MONTHLY", ""),
                "badge": "For Agencies & Power Users",
                "tagline": "The full PEN2PRO BusinessOS stack for agencies and serious operators.",
                "features": [
                    "Everything in Elite",
                    "P2P Command Center CRM — unlimited contacts",
                    "P2P AI Voice Agent integration",
                    "Website Builder with niche templates",
                    "Automation templates (general + niche-specific)",
                    "Funnel templates for all 28 industries",
                    "Multi-client / multi-brand support",
                    "White-label capability (coming soon)",
                    "Dedicated onboarding call",
                ],
                "cta": "Join Agency Waitlist",
                "cta_href": "/waitlist?tier=agency",
            },
        ],
        "launch_date": "2026-06-10",
        "note": "All paid plans activate on June 10, 2026 launch date. Waitlist members lock in current pricing.",
    }


# ─── Routers — Core ───────────────────────────────────────────────────────────
app.include_router(blueprints_router, prefix="/api/blueprints",  tags=["RMIE"])
app.include_router(stripe_router,     prefix="/api/stripe",      tags=["Stripe"])
app.include_router(admin_router,      prefix="/api/admin",       tags=["Admin"])
app.include_router(analytics_router,  prefix="/api/analytics",   tags=["Analytics"])
app.include_router(credit_router,     prefix="/api/credit",      tags=["Credit"])
app.include_router(funding_router,    prefix="/api/funding",     tags=["Funding"])
app.include_router(waitlist_router,   prefix="/api/waitlist",    tags=["Waitlist"])
app.include_router(auth_router,       prefix="/api/auth",        tags=["Auth"])
app.include_router(voice_router,       prefix="/api/voice",       tags=["Voice Coach"])
app.include_router(agents_router)
app.include_router(rmie_knowledge_router, prefix="/api/rmie",     tags=["RMIE Vector Knowledge"])

# ─── Routers — BusinessOS Phase 2 ────────────────────────────────────────────
app.include_router(command_center_router, prefix="/api",          tags=["Command Center"])
app.include_router(voice_agent_router,    prefix="/api",          tags=["Voice Agent"])
app.include_router(website_builder_router,prefix="/api",          tags=["Website Builder"])
app.include_router(domain_router,         prefix="/api",          tags=["Domain Search"])

if _has_customers:
    app.include_router(customers_router, prefix="/api/customers", tags=["Customers"])


# ─── /api/roadmap alias ───────────────────────────────────────────────────────
from app.routes.blueprints import BlueprintRequest, _SAMPLE, _call_openai

@app.post("/api/roadmap")
async def roadmap_alias(req: BlueprintRequest):
    """Alias for /api/blueprints/generate — supports industry_id for niche roadmaps."""
    if not os.getenv("OPENAI_API_KEY", ""):
        result = copy.deepcopy(_SAMPLE)
        result["business_idea"] = req.business_idea
        result["category"] = req.category or req.industry_id or "General Business"
        result["industry_id"] = req.industry_id or ""
        result["is_sample"] = True
        return result
    return await _call_openai(req)


# ─── Industries list endpoint ─────────────────────────────────────────────────
@app.get("/api/industries")
def list_industries():
    """Return all supported industry IDs for the RMIE niche selector."""
    from app.data.industries import INDUSTRIES
    return {"industries": INDUSTRIES}
