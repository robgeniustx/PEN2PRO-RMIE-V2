import os
import secrets
from typing import Optional

import stripe
from fastapi import APIRouter, Depends, Header, HTTPException, Query
from jose import JWTError, jwt
from pydantic import BaseModel, Field

from app import store
from app.auth_deps import ALGORITHM, secret_key
from app.data import strategist_playbook as playbook
from app.data import ten_k_plan

router = APIRouter()


def _admin_ok(x_admin_key: Optional[str]) -> bool:
    expected = os.getenv("ADMIN_ACCESS_KEY", "")
    return bool(expected and x_admin_key and secrets.compare_digest(x_admin_key, expected))


def _account_has_plan(authorization: Optional[str]) -> bool:
    """True when the signed-in account bought the Strategist Plan or has an Elite/Founders plan (works on any device)."""
    if not authorization or not authorization.startswith("Bearer "):
        return False
    try:
        payload = jwt.decode(authorization.split(" ", 1)[1], secret_key(), algorithms=[ALGORITHM])
    except JWTError:
        return False
    email = (payload.get("sub") or "").lower()
    if not email or not store.get_user(email):
        return False
    user = store.get_user(email)
    return store.has_purchase(email, "strategist") or user["tier"] in {"elite", "founders"}


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


def require_access(
    session_id: Optional[str] = Query(None),
    x_admin_key: Optional[str] = Header(None),
    authorization: Optional[str] = Header(None),
) -> None:
    if _admin_ok(x_admin_key) or _account_has_plan(authorization):
        return
    if session_id and _purchase_verified(session_id):
        return
    raise HTTPException(status_code=402, detail="Purchase required to open the full Strategist Plan.")


@router.get("/outline")
def get_outline():
    """Public: plan summary and step titles for the sales page."""
    return playbook.outline()


@router.get("/sample")
def get_sample():
    """Public: Step 1 in full, as a free preview."""
    return playbook.sample()


@router.get("/playbook", dependencies=[Depends(require_access)])
def get_playbook():
    """Full step-by-step plan. Requires a paid Stripe session or an account that claimed the purchase."""
    return playbook.full()


@router.get("/occupations")
def get_occupations():
    """Public: occupations and their default assumptions for the plan builder form."""
    return {"occupations": ten_k_plan.occupation_choices()}


class PlanRequest(BaseModel):
    occupation: str = Field(default="custom", max_length=60)
    custom_label: str = Field(default="", max_length=80)
    target: Optional[float] = Field(default=10000, ge=1000, le=100000)
    price: Optional[float] = Field(default=None, ge=5, le=100000)
    hours_per_unit: Optional[float] = Field(default=None, ge=0.25, le=200)
    hours_per_week: Optional[float] = Field(default=None, ge=5, le=80)
    close_rate: Optional[float] = Field(default=None, ge=3, le=80)
    margin: Optional[float] = Field(default=None, ge=5, le=95)
    existing_clients: int = Field(default=0, ge=0, le=500)
    model: Optional[str] = Field(default=None, max_length=12)


@router.post("/plan", dependencies=[Depends(require_access)])
def build_plan(req: PlanRequest):
    """Personalized path to a monthly revenue target, calculated from the user's own numbers."""
    return ten_k_plan.build_plan(
        occupation=req.occupation, custom_label=req.custom_label, target=req.target or 10000, price=req.price,
        hours_per_unit=req.hours_per_unit, hours_per_week=req.hours_per_week, close_rate=req.close_rate,
        margin=req.margin, existing_clients=req.existing_clients, model=req.model,
    )
