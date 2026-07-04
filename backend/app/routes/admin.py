import csv
import io
import os
from typing import Optional

from fastapi import APIRouter, Depends, Header, HTTPException, Query
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.services.analytics_service import (
    get_admin_metrics,
    get_conversion_summary,
    get_feature_usage_summary,
    get_module_usage_summary,
    get_recent_activity,
)

from app.db import get_db
from app.models.waitlist_entry import WaitlistEntry
from app.routes.waitlist import _check_admin

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
    db: Session = Depends(get_db),
):
    """
    GET /api/admin/waitlist
    Returns paginated + filtered waitlist entries.
    Requires X-Admin-Key header (if ADMIN_ACCESS_KEY env var is set).
    """
    _check_admin(x_admin_key)
    q = db.query(WaitlistEntry)

    if interest:
        q = q.filter(WaitlistEntry.interest.ilike(f"%{interest}%"))
    if referral:
        q = q.filter(WaitlistEntry.referral.ilike(f"%{referral}%"))
    if search:
        like = f"%{search}%"
        q = q.filter((WaitlistEntry.name.ilike(like)) | (WaitlistEntry.email.ilike(like)))

    total = q.count()
    grand_total = db.query(WaitlistEntry).count()
    rows = (
        q.order_by(WaitlistEntry.submitted_at.desc())
        .offset((page - 1) * per_page)
        .limit(per_page)
        .all()
    )

    return {
        "total": grand_total,
        "filtered": total,
        "page": page,
        "per_page": per_page,
        "total_pages": max(1, -(-total // per_page)),
        "entries": [r.as_dict() for r in rows],
    }


@router.get("/waitlist/export")
async def admin_waitlist_export(x_admin_key: Optional[str] = Header(None), db: Session = Depends(get_db)):
    """
    GET /api/admin/waitlist/export
    Returns full waitlist as downloadable CSV.
    """
    _check_admin(x_admin_key)
    rows = db.query(WaitlistEntry).order_by(WaitlistEntry.submitted_at.desc()).all()
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["ID", "Name", "Email", "Phone", "Interest", "Referral", "Business Idea", "Source", "Submitted"])
    for entry in rows:
        d = entry.as_dict()
        writer.writerow([
            d.get("id", ""),
            d.get("name", ""),
            d.get("email", ""),
            d.get("phone", ""),
            d.get("interest", ""),
            d.get("referral", ""),
            d.get("business_idea", ""),
            d.get("source", ""),
            d.get("submitted_at", ""),
        ])
    output.seek(0)
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=pen2pro-waitlist.csv"},
    )


@router.get("/waitlist-metrics")
async def admin_waitlist_metrics(x_admin_key: Optional[str] = Header(None), db: Session = Depends(get_db)):
    """
    GET /api/admin/waitlist-metrics
    Returns totals, breakdown by interest, breakdown by referral source.
    """
    _check_admin(x_admin_key)
    rows = db.query(WaitlistEntry).all()
    by_interest: dict = {}
    by_referral: dict = {}

    for entry in rows:
        k = entry.interest or "Unknown"
        by_interest[k] = by_interest.get(k, 0) + 1
        ref = entry.referral or "direct"
        by_referral[ref] = by_referral.get(ref, 0) + 1

    recent = sorted(rows, key=lambda r: r.submitted_at or 0, reverse=True)[:5]

    return {
        "total_signups": len(rows),
        "by_interest": by_interest,
        "by_referral": by_referral,
        "recent_5": [r.as_dict() for r in recent],
    }
