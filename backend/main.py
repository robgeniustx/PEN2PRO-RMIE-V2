from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import get_settings
from database import connect_to_mongodb, close_mongodb_connection
from auth_routes import router as auth_router
from blueprint_routes import router as blueprint_router
from agent_routes import router as agent_router
from command_center_routes import router as command_center_router
from website_builder_routes import router as website_router
from email_routes import router as email_router

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """FastAPI lifespan manager."""
    # Startup
    await connect_to_mongodb()
    yield
    # Shutdown
    await close_mongodb_connection()


app = FastAPI(
    title=settings.API_TITLE,
    version=settings.API_VERSION,
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes
app.include_router(auth_router)
app.include_router(blueprint_router)
app.include_router(agent_router)
app.include_router(command_center_router)
app.include_router(website_router)
app.include_router(email_router)


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "ok", "environment": settings.ENVIRONMENT}


@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "PEN2PRO API",
        "version": settings.API_VERSION,
        "docs": "/docs",
        "redoc": "/redoc",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host=settings.API_HOST,
        port=settings.API_PORT,
        reload=settings.DEBUG,
    )
