from fastapi import FastAPI

from app.routes.website import router as website_router

app = FastAPI(title="PEN2PRO RMIE Live API")


@app.get('/api/health')
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
