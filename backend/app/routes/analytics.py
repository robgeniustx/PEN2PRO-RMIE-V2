from fastapi import APIRouter

from app.schemas.analytics_schema import AnalyticsEventCreate, ConversionEventCreate, FeatureUsageCreate
from app.services.analytics_service import track_conversion_event, track_event, track_feature_usage

router = APIRouter()


@router.post('/event')
async def create_event(payload: AnalyticsEventCreate):
    return {"ok": True, "data": track_event(payload)}


@router.post('/feature-usage')
async def create_feature_usage(payload: FeatureUsageCreate):
    return {"ok": True, "data": track_feature_usage(payload)}


@router.post('/conversion')
async def create_conversion(payload: ConversionEventCreate):
    return {"ok": True, "data": track_conversion_event(payload)}


@router.get('/health')
async def analytics_health():
    return {"status": "ok", "module": "analytics"}
