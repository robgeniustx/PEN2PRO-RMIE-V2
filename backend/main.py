from fastapi import FastAPI
<<<<<<< HEAD
from app.routes.affiliate import router as affiliate_router

app = FastAPI(title="PEN2PRO RMIE Live")

@app.get('/api/health')
def health():
    return {"status": "ok"}

# Existing route placeholders kept working
@app.post('/api/intake')
def intake():
    return {"status": "ok"}

@app.post('/api/blueprints/generate')
def blueprints_generate():
    return {"status": "ok"}

@app.post('/api/stripe/create-checkout-session')
def stripe_checkout():
    return {"status": "ok"}

@app.post('/api/social/generate')
def social_generate():
    return {"status": "ok"}

@app.get('/api/crm/pipeline-summary')
def crm_summary():
    return {"status": "ok"}

@app.post('/api/website/generate')
def website_generate():
    return {"status": "ok"}

app.include_router(affiliate_router, prefix='/api/affiliate', tags=['affiliate'])
=======

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


app.include_router(stripe_router, prefix="/api/stripe", tags=["stripe"])
>>>>>>> main
