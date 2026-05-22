from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    # App
    app_name: str = "PEN2PRO RMIE Live"
    app_version: str = "2.0.0"
    debug: bool = False
    environment: str = os.getenv("ENVIRONMENT", "development")

    # MongoDB
    mongodb_url: str = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
    mongodb_db_name: str = os.getenv("MONGODB_DB_NAME", "pen2pro")

    # JWT & Security
    jwt_secret_key: str = os.getenv("JWT_SECRET_KEY", "your-secret-key-change-in-production")
    jwt_algorithm: str = "HS256"
    jwt_expiration_hours: int = 24
    access_token_expire_minutes: int = 30

    # Stripe
    stripe_secret_key: str = os.getenv("STRIPE_SECRET_KEY", "")
    stripe_publishable_key: str = os.getenv("STRIPE_PUBLISHABLE_KEY", "")
    stripe_webhook_secret: str = os.getenv("STRIPE_WEBHOOK_SECRET", "")

    # OpenAI
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    openai_model: str = "gpt-4"
    openai_temperature: float = 0.7
    openai_max_tokens: int = 2000

    # CORS
    allowed_origins: list = [
        "http://localhost:5173",
        "http://localhost:3000",
        os.getenv("FRONTEND_URL", "http://localhost:5173")
    ]

    # Redis (for caching & sessions)
    redis_url: str = os.getenv("REDIS_URL", "redis://localhost:6379")

    # Celery (background jobs)
    celery_broker_url: str = os.getenv("CELERY_BROKER_URL", os.getenv("REDIS_URL", "redis://localhost:6379"))
    celery_result_backend: str = os.getenv("CELERY_RESULT_BACKEND", os.getenv("REDIS_URL", "redis://localhost:6379"))

    # Pricing Tiers
    tier_starter_name: str = "Starter"
    tier_starter_price: int = 2999  # $29.99
    tier_pro_name: str = "Pro"
    tier_pro_price: int = 9999  # $99.99
    tier_elite_name: str = "Elite"
    tier_elite_price: int = 24999  # $249.99

    # Feature Access
    max_blueprints_starter: int = 3
    max_blueprints_pro: int = 20
    max_blueprints_elite: int = -1  # Unlimited

    max_agents_per_month_starter: int = 10
    max_agents_per_month_pro: int = 100
    max_agents_per_month_elite: int = -1

    # Email (optional, for later)
    smtp_server: str = os.getenv("SMTP_SERVER", "")
    smtp_port: int = int(os.getenv("SMTP_PORT", "587"))
    smtp_username: str = os.getenv("SMTP_USERNAME", "")
    smtp_password: str = os.getenv("SMTP_PASSWORD", "")

    # Admin
    admin_email: str = os.getenv("ADMIN_EMAIL", "admin@pen2pro.com")

    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
