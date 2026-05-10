from fastapi import FastAPI

from app.routes.admin import router as admin_router
from app.routes.analytics import router as analytics_router
from app.routes.stripe_routes import router as stripe_router

app = FastAPI(title="PEN2PRO RMIE Live API")


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}


@app.post("/api/intake")
async def intake_placeholder():
    return {"message": "Intake route ready"}


@app.post("/api/blueprints/generate")
async def blueprint_generate_placeholder():
    return {"message": "Blueprint generation route ready"}


@app.post("/api/social/generate")
async def social_generate_placeholder():
    return {"message": "Social generation route ready"}


@app.get("/api/crm/pipeline-summary")
async def crm_summary_placeholder():
    return {"message": "CRM route ready"}


@app.post("/api/website/generate")
async def website_generate_placeholder():
    return {"message": "Website generation route ready"}


@app.post("/api/affiliate/generate")
async def affiliate_generate_placeholder():
    return {"message": "Affiliate generation route ready"}


@app.get("/api/credit/readiness")
async def credit_readiness_placeholder():
    return {"message": "Credit readiness route ready"}


@app.get("/api/funding/readiness")
async def funding_readiness_placeholder():
    return {"message": "Funding readiness route ready"}


@app.get("/api/automation/health")
async def automation_health_placeholder():
    return {"status": "ok", "module": "automation"}


app.include_router(stripe_router, prefix="/api/stripe", tags=["stripe"])
app.include_router(analytics_router, prefix="/api/analytics", tags=["analytics"])
app.include_router(admin_router, prefix="/api/admin", tags=["admin"])
