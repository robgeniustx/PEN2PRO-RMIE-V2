import os
import secrets
from typing import Optional

from fastapi import APIRouter, Depends, Header, HTTPException

from app import store
from app.services.analytics_service import (
    get_admin_metrics,
    get_conversion_summary,
    get_feature_usage_summary,
    get_module_usage_summary,
    get_recent_activity,
)


def _guard(x_admin_key: Optional[str] = Header(None)):
    """Require X-Admin-Key matching ADMIN_ACCESS_KEY. Fails closed in production."""
    production = os.getenv("ENVIRONMENT", "development") == "production"
    if production and os.getenv("ADMIN_DASHBOARD_ENABLED", "false").lower() != "true":
        raise HTTPException(status_code=403, detail="Admin dashboard disabled")
    expected = os.getenv("ADMIN_ACCESS_KEY", "")
    if not expected:
        if production:
            raise HTTPException(status_code=403, detail="ADMIN_ACCESS_KEY is not configured")
        return  # local development only
    if not x_admin_key or not secrets.compare_digest(x_admin_key, expected):
        raise HTTPException(status_code=403, detail="Invalid admin access key")


router = APIRouter(dependencies=[Depends(_guard)])


# ─── Analytics endpoints ──────────────────────────────────────────────────────

@router.get("/metrics")
async def admin_metrics():
    data = get_admin_metrics()
    # Account, purchase and lead numbers come from the database, never from demo data.
    data["total_users"] = store.count_users()
    data["active_tier_counts"] = store.tier_counts()
    data["total_roadmaps_saved"] = store.count_roadmaps()
    data["total_starter_leads"] = store.count_starter_leads()
    data["total_checkouts_completed"] = store.completed_checkouts()
    data["estimated_revenue"] = store.revenue_total()
    return data


@router.get("/starter-leads")
async def admin_starter_leads():
    return {"leads": store.list_starter_leads()}


@router.get("/feature-usage")
async def admin_feature_usage():
    return get_feature_usage_summary()


@router.get("/module-usage")
async def admin_module_usage():
    return get_module_usage_summary()


@router.get("/conversions")
async def admin_conversions():
    return get_conversion_summary()


@router.get("/recent-activity")
async def admin_recent_activity():
    return get_recent_activity()
