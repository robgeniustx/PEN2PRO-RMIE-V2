from fastapi import FastAPI

from app.routes.admin import router as admin_router
from app.routes.analytics import router as analytics_router
from app.routes.stripe_routes import router as stripe_router
from app.routes.credit import router as credit_router
from app.routes.funding import router as funding_router

app = FastAPI(title="PEN2PRO RMIE Live API")

@app.get('/api/health')
def health():
    return {"status": "ok"}

# Existing phase stubs
@app.post('/api/intake')
def intake(): return {"status":"stub"}
@app.post('/api/blueprints/generate')
def blueprints_generate(): return {"status":"stub"}
@app.post('/api/stripe/create-checkout-session')
def stripe_checkout(): return {"status":"stub"}
@app.post('/api/social/generate')
def social_generate(): return {"status":"stub"}
@app.post('/api/crm/pipeline-summary')
def crm_summary(): return {"status":"stub"}
@app.post('/api/website/generate')
def website_generate(): return {"status":"stub"}
@app.post('/api/affiliate/generate')
def affiliate_generate(): return {"status":"stub"}

app.include_router(credit_router, prefix='/api/credit', tags=['credit'])
app.include_router(funding_router, prefix='/api/funding', tags=['funding'])
