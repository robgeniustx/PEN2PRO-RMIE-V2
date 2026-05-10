from fastapi import FastAPI
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
