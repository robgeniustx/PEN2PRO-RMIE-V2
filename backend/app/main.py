from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import Base, engine

# Import all models so SQLAlchemy registers their tables before create_all
from app.models.user import User  # noqa: F401
from app.models.saved_roadmap import SavedRoadmap  # noqa: F401

from app.routes import health, auth, users, stripe_routes, pricing, agents

# Create all tables on startup (safe — does nothing if tables already exist)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PEN2PRO RMIE API",
    description="Backend API for PEN2PRO RMIE, Command Center, Website Builder, CRM, and AI Voice Agent.",
    version="1.0.0",
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

app.include_router(health.router)
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(users.router, prefix="/api/users", tags=["Users"])
app.include_router(stripe_routes.router, prefix="/api/stripe", tags=["Stripe"])
app.include_router(pricing.router, prefix="/api/pricing", tags=["Pricing"])
app.include_router(agents.router)


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "PEN2PRO RMIE API",
        "message": "Backend is running."
    }
