from fastapi import APIRouter

from app.schemas.website_schema import WebsiteGenerateRequest
from app.services import website_service

router = APIRouter()


@router.get('/health')
def health():
    return {"status": "ok", "module": "website"}


@router.post('/generate')
def generate(payload: WebsiteGenerateRequest):
    return website_service.generate_website_builder(payload.model_dump())


@router.post('/landing-page')
def landing_page(payload: WebsiteGenerateRequest):
    return {"status": "success", "landing_page": website_service.generate_landing_page(payload.model_dump())}


@router.post('/seo')
def seo(payload: WebsiteGenerateRequest):
    return {"status": "success", "seo": website_service.generate_seo_assets(payload.model_dump())}


@router.post('/brand-kit')
def brand_kit(payload: WebsiteGenerateRequest):
    return {"status": "success", "brand_direction": website_service.generate_brand_direction(payload.model_dump())}
