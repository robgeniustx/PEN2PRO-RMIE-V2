import csv
import io
import os
from typing import Optional

from fastapi import APIRouter, Header, HTTPException, Query
from fastapi.responses import StreamingResponse

from app.services.analytics_service import (
    get_admin_metrics,
    get_conversion_summary,
    get_feature_usage_summary,
    get_module_usage_summary,
    get_recent_activity,
)

# Import shared waitlist store
from app.routes.waitlist import _waitlist, _check_admin

router = APIRouter()


def _guard():
    """Guard for analytics/dashboard endpoints."""
    if (
        os.getenv("ENVIRONMENT", "development") == "production"
        and os.getenv("ADMIN_DASHBOARD_ENABLED", "false").lower() != "true"
    ):
        raise HTTPException(status_code=403, detail="Admin dashboard disabled")


# ─── Analytics endpoints ──────────────────────────────────────────────────────

@router.get("/metrics")
async def admin_metrics():
    _guard()
    return get_admin_metrics()


@router.get("/feature-usage")
async def admin_feature_usage():
    _guard()
    return get_feature_usage_summary()


@router.get("/module-usage")
async def admin_module_usage():
    _guard()
    return get_module_usage_summary()


@router.get("/conversions")
async def admin_conversions():
    _guard()
    return get_conversion_summary()


@router.get("/recent-activity")
async def admin_recent_activity():
    _guard()
    return get_recent_activity()


# ─── Waitlist endpoints (at /api/admin/waitlist + /api/admin/waitlist-metrics) ─

@router.get("/waitlist")
async def admin_get_waitlist(
    x_admin_key: Optional[str] = Header(None),
    interest: Optional[str] = Query(None),
    referral: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
):
    """
    GET /api/admin/waitlist
    Returns paginated + filtered waitlist entries.
    Requires X-Admin-Key header (if ADMIN_ACCESS_KEY env var is set).
    """
    _check_admin(x_admin_key)
    results = list(_waitlist)

    if interest:
        results = [r for r in results if interest.lower() in r.get("interest", "").lower()]
    if referral:
        results = [r for r in results if referral.lower() in r.get("referral", "").lower()]
    if search:
        q = search.lower()
        results = [r for r in results if q in r.get("name", "").lower() or q in r.get("email", "").lower()]

    results = sorted(results, key=lambda r: r["submitted_at"], reverse=True)
    total = len(results)
    start = (page - 1) * per_page
    paginated = results[start : start + per_page]

    return {
        "total": len(_waitlist),
        "filtered": total,
        "page": page,
        "per_page": per_page,
        "total_pages": max(1, -(-total // per_page)),
        "entries": paginated,
    }


@router.get("/waitlist/export")
async def admin_waitlist_export(x_admin_key: Optional[str] = Header(None)):
    """
    GET /api/admin/waitlist/export
    Returns full waitlist as downloadable CSV.
    """
    _check_admin(x_admin_key)
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["ID", "Name", "Email", "Phone", "Interest", "Referral", "Business Idea", "Source", "Submitted"])
    for entry in sorted(_waitlist, key=lambda r: r["submitted_at"], reverse=True):
        writer.writerow([
            entry.get("id", ""),
            entry.get("name", ""),
            entry.get("email", ""),
            entry.get("phone", ""),
            entry.get("interest", ""),
            entry.get("referral", ""),
            entry.get("business_idea", ""),
            entry.get("source", ""),
            entry.get("submitted_at", ""),
        ])
    output.seek(0)
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=pen2pro-waitlist.csv"},
    )


@router.get("/waitlist-metrics")
async def admin_waitlist_metrics(x_admin_key: Optional[str] = Header(None)):
    """
    GET /api/admin/waitlist-metrics
    Returns totals, breakdown by interest, breakdown by referral source.
    """
    _check_admin(x_admin_key)
    by_interest: dict = {}
    by_referral: dict = {}

    for entry in _waitlist:
        k = entry.get("interest", "Unknown")
        by_interest[k] = by_interest.get(k, 0) + 1
        ref = entry.get("referral", "") or "direct"
        by_referral[ref] = by_referral.get(ref, 0) + 1

    return {
        "total_signups": len(_waitlist),
        "by_interest": by_interest,
        "by_referral": by_referral,
        "recent_5": sorted(_waitlist, key=lambda r: r["submitted_at"], reverse=True)[:5],
    }
