import os
import secrets
from typing import Optional

import stripe
from fastapi import APIRouter, Header, HTTPException, Query

from app.data import strategist_playbook as playbook

router = APIRouter()


def _admin_ok(x_admin_key: Optional[str]) -> bool:
    expected = os.getenv("ADMIN_ACCESS_KEY", "")
    return bool(expected and x_admin_key and secrets.compare_digest(x_admin_key, expected))


def _purchase_verified(session_id: str) -> bool:
    """A Stripe Checkout Session counts only if it is paid and was created for the strategist plan."""
    if session_id == "preview":
        # Test access for local development / staging only.
        return os.getenv("ALLOW_TEST_TIER_ACCESS", "false").lower() == "true"
    secret = os.getenv("STRIPE_SECRET_KEY")
    if not secret or not session_id.startswith("cs_"):
        return False
    try:
        stripe.api_key = secret
        session = stripe.checkout.Session.retrieve(session_id)
    except Exception:
        return False
    metadata = getattr(session, "metadata", None) or {}
    return session.payment_status == "paid" and metadata.get("tier") == "strategist"


@router.get("/outline")
def get_outline():
    """Public: plan summary and step titles for the sales page."""
    return playbook.outline()


@router.get("/sample")
def get_sample():
    """Public: Step 1 in full, as a free preview."""
    return playbook.sample()


@router.get("/playbook")
def get_playbook(
    session_id: Optional[str] = Query(None),
    x_admin_key: Optional[str] = Header(None),
):
    """Full step-by-step plan. Requires a paid Stripe session for the strategist plan."""
    if _admin_ok(x_admin_key):
        return playbook.full()
    if not session_id or not _purchase_verified(session_id):
        raise HTTPException(status_code=402, detail="Purchase required to open the full Strategist Plan.")
    return playbook.full()
