from fastapi import FastAPI

from app.routes.website import router as website_router
from app.routes.crm import router as crm_router
from app.routes.leads import router as leads_router
from app.routes.customers import router as customers_router
from app.routes.follow_ups import router as follow_ups_router

app = FastAPI(title="PEN2PRO RMIE Live API")

@app.get('/api/health')
def health():
    return {"status": "ok"}

@app.get('/api/intake')
def intake_stub():
    return {"status": "stubbed"}

@app.post('/api/blueprints/generate')
def blueprint_stub():
    return {"status": "stubbed"}

@app.post('/api/stripe/create-checkout-session')
def stripe_stub():
    return {"status": "stubbed"}

@app.post('/api/social/generate')
def social_stub():
    return {"status": "stubbed"}

app.include_router(crm_router, prefix="/api/crm", tags=["crm"])
app.include_router(leads_router, prefix="/api/leads", tags=["leads"])
app.include_router(customers_router, prefix="/api/customers", tags=["customers"])
app.include_router(follow_ups_router, prefix="/api/follow-ups", tags=["follow-ups"])

from app.routes.social import router as social_router

app = FastAPI(title="PEN2PRO RMIE Live")
app.include_router(social_router)


@app.get('/api/health')
@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get('/api/intake')
def intake_health():
    return {"status": "ok", "module": "intake"}


@app.get('/api/blueprints/generate')
def blueprints_health():
    return {"status": "ok", "module": "blueprints"}


@app.get('/api/stripe/create-checkout-session')
def stripe_health():
    return {"status": "ok", "module": "stripe"}


@app.get('/api/social/generate')
def social_health():
    return {"status": "ok", "module": "social"}


@app.get('/api/crm/pipeline-summary')
def crm_health():
    return {"status": "ok", "module": "crm"}


app.include_router(website_router, prefix="/api/website", tags=["website"])
@app.post("/api/intake")
def intake():
    return {"status": "stub"}


@app.post("/api/blueprints/generate")
def blueprints_generate():
    return {"status": "stub"}


@app.post("/api/stripe/create-checkout-session")
def stripe_checkout():
    return {"status": "stub"}
main
