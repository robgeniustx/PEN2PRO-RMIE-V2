from fastapi import APIRouter, Depends
from app.database import get_db
from app.schemas.analytics_schema import AnalyticsEventCreate, ConversionEventCreate, FeatureUsageCreate
from app.services.analytics_service import AnalyticsService

router = APIRouter(prefix="/api/analytics", tags=["analytics"])

@router.post("/event")
def track_event(payload: AnalyticsEventCreate, db=Depends(get_db)):
    return {"ok": True, "data": AnalyticsService(db).track_event(payload) is not None}

@router.post("/feature-usage")
def track_feature_usage(payload: FeatureUsageCreate, db=Depends(get_db)):
    return {"ok": True, "data": AnalyticsService(db).track_feature_usage(payload) is not None}

@router.post("/conversion")
def track_conversion(payload: ConversionEventCreate, db=Depends(get_db)):
    return {"ok": True, "data": AnalyticsService(db).track_conversion_event(payload) is not None}

@router.get("/health")
def health(): return {"status": "ok", "module": "analytics"}
