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

app = FastAPI(title="PEN2PRO API", version="2.0.0", docs_url="/api/docs", redoc_url="/api/redoc")

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        FRONTEND_URL,
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
    return {"status": "ok", "service": "PEN2PRO API", "version": "2.0.0"}


# ─── Pricing (static — no auth needed) ───────────────────────────────────────
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
                "features": [
                    "Unlimited roadmaps",
                    "Full 90-day execution plan",
                    "Sales scripts & outreach",
                    "Credit readiness checklist",
                    "PDF / email export",
                    "AI business refinement",
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
                "features": [
                    "Everything in Pro",
                    "Financial projections",
                    "Funding partner resources",
                    "Done-with-you guidance",
                    "Vendor & credit center",
                    "White-glove strategy",
                    "Launch checklist",
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
                "stripe_price_id": os.getenv("STRIPE_PRICE_FOUNDERS_LIFETIME", ""),
                "badge": "200 Spots Only",
                "features": [
                    "Lifetime access — pay once",
                    "All Pro + Elite features",
                    "All future features included",
                    "Founding member pricing locked",
                    "Early access to every new tool",
                    "Direct founder support line",
                ],
                "cta": "Become a Founder",
                "cta_href": "/waitlist?tier=founders",
            },
        ],
        "launch_date": "2026-06-10",
        "note": "All paid plans activate on June 10, 2026 launch date. Waitlist members lock in current pricing.",
    }


# ─── Routers ──────────────────────────────────────────────────────────────────
app.include_router(blueprints_router, prefix="/api/blueprints", tags=["blueprints"])
app.include_router(stripe_router,     prefix="/api/stripe",     tags=["stripe"])
app.include_router(admin_router,      prefix="/api/admin",      tags=["admin"])
app.include_router(analytics_router,  prefix="/api/analytics",  tags=["analytics"])
app.include_router(credit_router,     prefix="/api/credit",     tags=["credit"])
app.include_router(funding_router,    prefix="/api/funding",    tags=["funding"])
app.include_router(waitlist_router,   prefix="/api/waitlist",   tags=["waitlist"])
app.include_router(auth_router,       prefix="/api/auth",       tags=["auth"])
app.include_router(voice_router,      prefix="/api/voice",      tags=["voice"])


# ─── /api/roadmap alias (mirrors /api/blueprints/generate) ───────────────────
from app.routes.blueprints import BlueprintRequest, _SAMPLE, _call_openai
import copy

@app.post("/api/roadmap")
async def roadmap_alias(req: BlueprintRequest):
    """Alias for /api/blueprints/generate — same logic."""
    import os as _os
    if not _os.getenv("OPENAI_API_KEY", ""):
        result = copy.deepcopy(_SAMPLE)
        result["business_idea"] = req.business_idea
        result["category"] = req.category or "General Business"
        result["is_sample"] = True
        return result
    return await _call_openai(req)
