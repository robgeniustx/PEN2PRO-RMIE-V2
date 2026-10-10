"""Shared authentication helpers: JWT creation/verification and the current-user dependency."""
import hmac
import os
from datetime import datetime, timedelta, timezone
from typing import Any, Dict, Optional

from fastapi import Header, HTTPException, Request
from jose import JWTError, jwt

from app import store

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days
_DEV_SECRET = "pen2pro-dev-secret-change-in-production"


def is_production() -> bool:
    return os.getenv("ENVIRONMENT", "development").lower() == "production"


def secret_key() -> str:
    key = os.getenv("JWT_SECRET_KEY", "")
    if is_production() and (not key or key in {"change_me", _DEV_SECRET}):
        raise RuntimeError("JWT_SECRET_KEY must be set to a long random value in production.")
    return key or _DEV_SECRET


def create_token(email: str, name: str, tier: str) -> str:
    payload = {
        "sub": email,
        "name": name,
        "tier": tier,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    }
    return jwt.encode(payload, secret_key(), algorithm=ALGORITHM)


def admin_emails() -> set:
    return {e.strip().lower() for e in os.getenv("ADMIN_EMAILS", "").split(",") if e.strip()}


def current_user(authorization: Optional[str] = Header(None)) -> Dict[str, Any]:
    """Resolve the signed-in user. The plan always comes from the database, never from the client."""
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Sign in to continue.")
    try:
        payload = jwt.decode(authorization.split(" ", 1)[1], secret_key(), algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(status_code=401, detail="Your session expired. Please sign in again.")
    email = (payload.get("sub") or "").lower()
    user = store.get_user(email)
    if not user:
        raise HTTPException(status_code=401, detail="Account not found. Please sign in again.")
    return {
        "email": email,
        "name": user["name"],
        "tier": user["tier"],
        "role": "admin" if email in admin_emails() else "member",
    }


def owner_or_webhook(
    request: Request,
    x_admin_key: Optional[str] = Header(None),
    authorization: Optional[str] = Header(None),
) -> None:
    """Locks owner-run tools (the voice agent) to the owner. Provider webhooks stay open: they verify their own signatures."""
    if "/webhook" in request.url.path:
        return
    expected = os.getenv("ADMIN_ACCESS_KEY", "")
    if expected and x_admin_key and hmac.compare_digest(x_admin_key, expected):
        return
    if authorization:
        user = current_user(authorization)
        if user["role"] == "admin":
            return
    if not is_production() and not expected and not admin_emails():
        return  # local development without any owner configured
    raise HTTPException(status_code=403, detail="This tool is managed by the account owner.")
