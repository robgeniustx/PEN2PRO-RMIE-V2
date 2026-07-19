from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import Base, engine
import app.models  # noqa: F401 — registers all models on Base.metadata

from app.routes import (
    health,
    auth,
    users,
    stripe_routes,
    pricing,
    agents,
    waitlist,
    admin,
    analytics,
    blueprints,
    crm,
    leads,
    customers,
    follow_ups,
    tasks,
    social,
    content,
    website,
    website_builder,
    voice,
    voice_agent,
    affiliate,
    automation,
    credit,
    funding,
    outreach,
    intake,
    domain_search,
    command_center,
    activity,
    dashboard,
    ads,
)

app = FastAPI(
    title="PEN2PRO RMIE API",
    description="Backend API for PEN2PRO — AI Business Development Ecosystem.",
    version="2.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://pen2pro.com",
        "https://www.pen2pro.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Core auth & user management
app.include_router(health.router)
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(stripe_routes.router, prefix="/api/stripe", tags=["Stripe"])
app.include_router(pricing.router, prefix="/api/pricing", tags=["Pricing"])
app.include_router(waitlist.router, prefix="/api/waitlist", tags=["Waitlist"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["Analytics"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

# AI Agents
app.include_router(agents.router)

# Business development modules
app.include_router(blueprints.router, prefix="/api/blueprints", tags=["Blueprints"])
app.include_router(intake.router, prefix="/api/intake", tags=["Intake"])
app.include_router(outreach.router, prefix="/api/outreach", tags=["Outreach"])
app.include_router(content.router, prefix="/api/content", tags=["Content"])
app.include_router(social.router, prefix="/api/social", tags=["Social"])
app.include_router(ads.router, prefix="/api/ads", tags=["Ads"])
app.include_router(affiliate.router, prefix="/api/affiliate", tags=["Affiliate"])
app.include_router(website.router, prefix="/api/website", tags=["Website"])
app.include_router(website_builder.router, prefix="/api/website-builder", tags=["Website Builder"])
app.include_router(domain_search.router, prefix="/api/domains", tags=["Domains"])
app.include_router(credit.router, prefix="/api/credit", tags=["Credit"])
app.include_router(funding.router, prefix="/api/funding", tags=["Funding"])

# CRM & operations
app.include_router(crm.router, prefix="/api/crm", tags=["CRM"])
app.include_router(leads.router, prefix="/api/leads", tags=["Leads"])
app.include_router(customers.router, prefix="/api/customers", tags=["Customers"])
app.include_router(follow_ups.router, prefix="/api/follow-ups", tags=["Follow-Ups"])
app.include_router(tasks.router, prefix="/api/tasks", tags=["Tasks"])
app.include_router(automation.router, prefix="/api/automation", tags=["Automation"])
app.include_router(activity.router, prefix="/api/activity", tags=["Activity"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["Dashboard"])

# Voice & command center
app.include_router(voice.router, prefix="/api/voice", tags=["Voice"])
app.include_router(voice_agent.router, prefix="/api/voice-agent", tags=["Voice Agent"])
app.include_router(command_center.router, prefix="/api/command-center", tags=["Command Center"])


@app.on_event("startup")
def create_db_tables():
    Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "PEN2PRO RMIE API v2.0",
        "message": "All systems operational.",
        "modules": [
            "auth", "blueprints", "agents", "crm", "leads", "customers",
            "follow_ups", "tasks", "content", "social", "website", "voice",
            "credit", "funding", "affiliate", "automation", "command_center"
        ]
    }
