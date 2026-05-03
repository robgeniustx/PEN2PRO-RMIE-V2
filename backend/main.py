from fastapi import FastAPI

from app.routes.social import router as social_router

app = FastAPI(title="PEN2PRO RMIE Live")
app.include_router(social_router)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/intake")
def intake():
    return {"status": "stub"}


@app.post("/api/blueprints/generate")
def blueprints_generate():
    return {"status": "stub"}


@app.post("/api/stripe/create-checkout-session")
def stripe_checkout():
    return {"status": "stub"}
