from fastapi import APIRouter

from app.schemas.social_schema import SocialGenerateRequest
from app.services.social_service import (
    generate_brand_voice,
    generate_content_calendar,
    generate_short_video_scripts,
    generate_social_marketing_engine,
    generate_social_posts,
)

router = APIRouter(prefix="/api/social", tags=["social"])


@router.get("/health")
def social_health():
    return {"status": "ok", "module": "social"}


@router.post("/generate")
def generate_social(payload: SocialGenerateRequest):
    return generate_social_marketing_engine(payload.model_dump())


@router.post("/calendar")
def generate_calendar(payload: SocialGenerateRequest):
    return {"status": "success", "calendar": generate_content_calendar(payload.model_dump())}


@router.post("/posts")
def generate_posts(payload: SocialGenerateRequest):
    return {"status": "success", "posts": generate_social_posts(payload.model_dump())}


@router.post("/scripts")
def generate_scripts(payload: SocialGenerateRequest):
    return {"status": "success", "scripts": generate_short_video_scripts(payload.model_dump())}


@router.post("/brand-voice")
def create_brand_voice(payload: SocialGenerateRequest):
    return {"status": "success", "brand_voice": generate_brand_voice(payload.model_dump())}
