from fastapi import FastAPI

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
