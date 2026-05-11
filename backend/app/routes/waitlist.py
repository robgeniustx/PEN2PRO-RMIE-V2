import csv
import io
import os
import re
from datetime import datetime, timezone
from typing import List, Optional

from fastapi import APIRouter, Header, HTTPException, Query
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

router = APIRouter()

# In-memory store — swappable for MongoDB via DATABASE_URL
_waitlist: List[dict] = []


class WaitlistEntry(BaseModel):
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
async def join_waitlist(entry: WaitlistEntry):
    # Duplicate check
    emails_lower = [e["email"].lower() for e in _waitlist]
    if entry.email.lower() in emails_lower:
        raise HTTPException(status_code=409, detail="Email already on waitlist")

    # Auto-extract ref from source URL if not provided directly
    referral = entry.referral or _extract_ref(entry.source or "")

    record = {
        **entry.dict(),
        "referral": referral,
        "id": len(_waitlist) + 1,
        "submitted_at": datetime.now(timezone.utc).isoformat(),
    }
    _waitlist.append(record)
    return {
        "success": True,
        "message": "You're on the waitlist! See you June 10, 2026.",
        "position": len(_waitlist),
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
):
    _check_admin(x_admin_key)
    results = _waitlist.copy()

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


@router.get("/admin/export")
async def export_csv(x_admin_key: Optional[str] = Header(None)):
    _check_admin(x_admin_key)
    output = io.StringIO()
    fieldnames = ["id", "name", "email", "phone", "interest", "referral", "business_idea", "source", "submitted_at"]
    writer = csv.DictWriter(output, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    writer.writerows(_waitlist)
    output.seek(0)
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=pen2pro-waitlist.csv"},
    )


@router.get("/admin/metrics")
async def waitlist_metrics(x_admin_key: Optional[str] = Header(None)):
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
