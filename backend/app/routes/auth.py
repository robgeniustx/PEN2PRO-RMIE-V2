import os
import secrets as _secrets
from typing import Optional

import stripe
from fastapi import APIRouter, Depends, HTTPException
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr, Field

from app import store
from app.auth_deps import create_token, current_user

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class RegisterRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=128)


class ClaimRequest(BaseModel):
    session_id: str = Field(min_length=3, max_length=200)


def _session_payload(user: dict) -> dict:
    return {
        "access_token": create_token(user["email"], user["name"], user["tier"]),
        "token_type": "bearer",
        "name": user["name"],
        "email": user["email"],
        "tier": user["tier"],
    }


@router.post("/register")
async def register(req: RegisterRequest):
    email = req.email.lower()
    if not store.create_user(email, req.name.strip(), pwd_context.hash(req.password)):
        raise HTTPException(status_code=409, detail="That email is already registered. Try signing in.")
    return _session_payload(store.get_user(email))


@router.post("/login")
async def login(req: LoginRequest):
    user = store.get_user(req.email.lower())
    if not user or not pwd_context.verify(req.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return _session_payload(user)


@router.get("/me")
async def me(user: dict = Depends(current_user)):
    return {"email": user["email"], "name": user["name"], "tier": user["tier"], "role": user["role"]}


def _verified_checkout(session_id: str):
    """Return (tier, email, subscription_id, amount_total) for a paid Stripe Checkout Session, or None."""
    if session_id.startswith("test_") and os.getenv("ALLOW_TEST_TIER_ACCESS", "false").lower() == "true":
        return session_id[5:].split("_")[0], None, None, None
    secret = os.getenv("STRIPE_SECRET_KEY")
    if not secret or not session_id.startswith("cs_"):
        return None
    try:
        stripe.api_key = secret
        s = stripe.checkout.Session.retrieve(session_id)
    except Exception:
        return None
    if s.payment_status != "paid":
        return None
    meta = getattr(s, "metadata", None) or {}
    details = getattr(s, "customer_details", None) or {}
    return meta.get("tier"), details.get("email") or getattr(s, "customer_email", None), getattr(s, "subscription", None), getattr(s, "amount_total", None)


@router.post("/claim-purchase")
async def claim_purchase(req: ClaimRequest, user: dict = Depends(current_user)):
    """Attach a paid Stripe checkout to the signed-in account and unlock its plan."""
    verified = _verified_checkout(req.session_id)
    if not verified or verified[0] not in (store.PAID_TIERS | {"strategist"}):
        raise HTTPException(status_code=402, detail="We could not confirm a completed payment for that checkout.")
    tier, email, subscription_id, amount_total = verified
    store.record_purchase(req.session_id, tier, email, subscription_id, amount_total)
    result = store.claim_purchase(req.session_id, user["email"])
    if result == "taken":
        raise HTTPException(status_code=409, detail="That purchase is already linked to another account.")
    if tier in store.PAID_TIERS:
        store.upgrade_tier(user["email"], tier)
    fresh = store.get_user(user["email"])
    return {**_session_payload(fresh), "purchased": tier}
