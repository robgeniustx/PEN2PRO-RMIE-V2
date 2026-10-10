from fastapi import APIRouter, Depends

from app import ratelimit
from app.auth_deps import current_user
from app.schemas.website_schema import WebsiteGenerateRequest
from app.services import website_service

router = APIRouter()


def _limit(user: dict) -> None:
    ratelimit.check(f"website:{user['email']}", 15, 3600)


@router.get('/health')
def health():
    return {"status": "ok", "module": "website"}


@router.post('/generate')
async def generate(payload: WebsiteGenerateRequest, user: dict = Depends(current_user)):
    _limit(user)
    return await website_service.generate_website_builder(payload.model_dump())


@router.post('/landing-page')
async def landing_page(payload: WebsiteGenerateRequest, user: dict = Depends(current_user)):
    _limit(user)
    return {"status": "success", "landing_page": await website_service._section(payload.model_dump(), "landing_page")}


@router.post('/seo')
async def seo(payload: WebsiteGenerateRequest, user: dict = Depends(current_user)):
    _limit(user)
    return {"status": "success", "seo": await website_service._section(payload.model_dump(), "seo")}


@router.post('/brand-kit')
async def brand_kit(payload: WebsiteGenerateRequest, user: dict = Depends(current_user)):
    _limit(user)
    return {"status": "success", "brand_direction": await website_service._section(payload.model_dump(), "brand_direction")}
