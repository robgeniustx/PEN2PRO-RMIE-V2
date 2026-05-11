import os
from fastapi import APIRouter, Depends, HTTPException
from app.database import get_db
from app.services.analytics_service import AnalyticsService

router = APIRouter(prefix="/api/admin", tags=["admin"])

def guard():
    # TODO add proper admin auth and role checks in future phase.
    if os.getenv("ENVIRONMENT", "development") == "production" and os.getenv("ADMIN_DASHBOARD_ENABLED", "false").lower() != "true":
        raise HTTPException(status_code=403, detail="Admin dashboard disabled")

@router.get("/metrics")
def metrics(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_admin_metrics()
@router.get("/feature-usage")
def feature_usage(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_feature_usage_summary()
@router.get("/module-usage")
def module_usage(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_module_usage_summary()
@router.get("/conversions")
def conversions(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_conversion_summary()
@router.get("/funnel")
def funnel(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_funnel_summary()
@router.get("/recent-activity")
def recent(db=Depends(get_db)):
    guard(); return AnalyticsService(db).get_recent_activity()
