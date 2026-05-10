from fastapi import APIRouter, HTTPException
from app.schemas.affiliate_schema import AffiliateGenerateRequest, AffiliateLinkCreate, AffiliateLinkUpdate
from app.services import affiliate_service

router = APIRouter()

@router.get('/health')
def affiliate_health():
    return {"status": "ok", "module": "affiliate"}

@router.post('/generate')
def generate(payload: AffiliateGenerateRequest):
    return affiliate_service.generate_affiliate_engine(payload.model_dump())

@router.post('/strategy')
def strategy(payload: AffiliateGenerateRequest):
    return {"status": "success", "niche_strategy": affiliate_service.generate_affiliate_strategy(payload.model_dump()), "product_categories": affiliate_service.generate_product_categories(payload.model_dump())}

@router.post('/funnel')
def funnel(payload: AffiliateGenerateRequest):
    return {"status": "success", "funnel": affiliate_service.generate_affiliate_funnel(payload.model_dump())}

@router.post('/content')
def content(payload: AffiliateGenerateRequest):
    return {"status": "success", "review_post": affiliate_service.generate_review_post(payload.model_dump()), "comparison_post": affiliate_service.generate_comparison_post(payload.model_dump()), "disclosure": affiliate_service.generate_disclosure(payload.model_dump())}

@router.post('/links')
def create_link(payload: AffiliateLinkCreate):
    return affiliate_service.create_affiliate_link(payload.model_dump())

@router.get('/links')
def list_links():
    return affiliate_service.list_affiliate_links()

@router.get('/links/{link_id}')
def get_link(link_id: int):
    link = affiliate_service.get_affiliate_link(link_id)
    if not link:
        raise HTTPException(status_code=404, detail="Affiliate link not found")
    return link

@router.patch('/links/{link_id}')
def patch_link(link_id: int, payload: AffiliateLinkUpdate):
    updated = affiliate_service.update_affiliate_link(link_id, payload.model_dump(exclude_unset=True))
    if not updated:
        raise HTTPException(status_code=404, detail="Affiliate link not found")
    return updated

@router.delete('/links/{link_id}')
def remove_link(link_id: int):
    deleted = affiliate_service.delete_affiliate_link(link_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Affiliate link not found")
    return {"status": "deleted"}
