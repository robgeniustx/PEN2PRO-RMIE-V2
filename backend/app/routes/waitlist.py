import os
import re
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.db import get_db
from app.models.waitlist_signup import WaitlistSignup

router = APIRouter()


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


@router.post("")
async def join_waitlist(entry: WaitlistEntry, db: Session = Depends(get_db)):
    existing = (
        db.query(WaitlistSignup)
        .filter(func.lower(WaitlistSignup.email) == entry.email.lower())
        .first()
    )
    if existing:
        raise HTTPException(status_code=409, detail="Email already on waitlist")

    referral = entry.referral or _extract_ref(entry.source or "")

    row = WaitlistSignup(
        name=entry.name,
        email=entry.email,
        phone=entry.phone or "",
        business_idea=entry.business_idea or "",
        interest=entry.interest or "Free Roadmap",
        referral=referral,
        source=entry.source or "",
    )
    db.add(row)
    db.commit()

    position = db.query(func.count(WaitlistSignup.id)).scalar()

    return {
        "success": True,
        "message": "You're on the waitlist! See you June 10, 2026.",
        "position": position,
    }
