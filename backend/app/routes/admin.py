import os

from fastapi import APIRouter, HTTPException

from app.services.analytics_service import (
    get_admin_metrics,
    get_conversion_summary,
    get_feature_usage_summary,
    get_funnel_summary,
    get_module_usage_summary,
    get_recent_activity,
)

router = APIRouter()


def _guard_admin_dashboard():
    # TODO: replace with real admin auth + RBAC in future phase.
    if os.getenv("ENVIRONMENT", "development") == "production" and os.getenv("ADMIN_DASHBOARD_ENABLED", "false").lower() != "true":
        raise HTTPException(status_code=403, detail="Admin dashboard disabled")


@router.get('/metrics')
async def admin_metrics():
    _guard_admin_dashboard()
    return get_admin_metrics()

@router.get('/feature-usage')
async def admin_feature_usage():
    _guard_admin_dashboard()
    return get_feature_usage_summary()

@router.get('/module-usage')
async def admin_module_usage():
    _guard_admin_dashboard()
    return get_module_usage_summary()

@router.get('/conversions')
async def admin_conversions():
    _guard_admin_dashboard()
    return get_conversion_summary()

@router.get('/funnel')
async def admin_funnel():
    _guard_admin_dashboard()
    return get_funnel_summary()

@router.get('/recent-activity')
async def admin_recent_activity():
    _guard_admin_dashboard()
    return get_recent_activity()
