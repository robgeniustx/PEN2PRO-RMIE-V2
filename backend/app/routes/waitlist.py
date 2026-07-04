import csv
import io
import os
import re
from typing import List, Optional

from fastapi import APIRouter, Depends, Header, HTTPException, Query
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.db import get_db
from app.models.waitlist_entry import WaitlistEntry

router = APIRouter()


class WaitlistEntryIn(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    business_idea: Optional[str] = ""
    interest: Optional[str] = "Free Roadmap"
    referral: Optional[str] = ""      # ?ref=affiliateName extracted value
    source: Optional[str] = ""        # full URL source


def _check_admin(key: Optional[str]):
    expected = os.getenv("ADMIN_ACCESS_KEY", "")
    if not expected:
        return  # dev mode — no key required
    if key != expected:
        raise HTTPException(status_code=403, detail="Invalid admin access key")


def _extract_ref(source_url: str) -> str:
    """Extract ?ref= param from a URL string."""
    if not source_url:
        return ""
    match = re.search(r"[?&]ref=([^&]+)", source_url)
    return match.group(1) if match else ""


# ─── Public endpoints ─────────────────────────────────────────────────────────

@router.post("")
async def join_waitlist(entry: WaitlistEntryIn, db: Session = Depends(get_db)):
    existing = db.query(WaitlistEntry).filter(func.lower(WaitlistEntry.email) == entry.email.lower()).first()
    if existing:
        raise HTTPException(status_code=409, detail="Email already on waitlist")

    referral = entry.referral or _extract_ref(entry.source or "")

    record = WaitlistEntry(
        name=entry.name,
        email=entry.email,
        phone=entry.phone or "",
        business_idea=entry.business_idea or "",
        interest=entry.interest or "Free Roadmap",
        referral=referral,
        source=entry.source or "",
    )
    db.add(record)
    db.commit()
    db.refresh(record)

    position = db.query(func.count(WaitlistEntry.id)).scalar() or 0

    return {
        "success": True,
        "message": "You're on the waitlist! See you June 10, 2026.",
        "position": position,
    }


# ─── Admin endpoints ──────────────────────────────────────────────────────────

@router.get("/admin")
async def get_waitlist(
    x_admin_key: Optional[str] = Header(None),
    interest: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    referral: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
):
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
    grand_total = db.query(func.count(WaitlistEntry.id)).scalar() or 0
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


@router.get("/admin/export")
async def export_csv(x_admin_key: Optional[str] = Header(None), db: Session = Depends(get_db)):
    _check_admin(x_admin_key)
    rows = db.query(WaitlistEntry).order_by(WaitlistEntry.submitted_at.desc()).all()
    output = io.StringIO()
    fieldnames = ["id", "name", "email", "phone", "interest", "referral", "business_idea", "source", "submitted_at"]
    writer = csv.DictWriter(output, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    writer.writerows([r.as_dict() for r in rows])
    output.seek(0)
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=pen2pro-waitlist.csv"},
    )


@router.get("/admin/metrics")
async def waitlist_metrics(x_admin_key: Optional[str] = Header(None), db: Session = Depends(get_db)):
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
