import os
from typing import Optional

from app.services.stripe_service import PAYMENTS_BY_SESSION, SUBSCRIPTIONS_BY_SESSION


def normalize_tier(tier: Optional[str]) -> str:
    return (tier or "free").strip().lower()


def tier_rank(tier: Optional[str]) -> int:
    return {"free": 0, "pro": 1, "elite": 2, "founders": 3}.get(normalize_tier(tier), 0)


def can_access(current_tier: Optional[str], required_tier: Optional[str]) -> bool:
    return tier_rank(current_tier) >= tier_rank(required_tier)


def get_tier_from_session(session_id: str) -> str:
    payment = PAYMENTS_BY_SESSION.get(session_id)
    if payment and payment.payment_status in {"paid", "no_payment_required"}:
        return normalize_tier(payment.tier)
    sub = SUBSCRIPTIONS_BY_SESSION.get(session_id)
    if sub and sub.status in {"active", "trialing"}:
        return normalize_tier(sub.tier)
    return "free"


def has_access(user_id=None, customer_email=None, requested_tier="free") -> bool:
    environment = os.getenv("ENVIRONMENT", "development").lower()
    allow_test = os.getenv("ALLOW_TEST_TIER_ACCESS", "false").lower() == "true"
    if allow_test and environment != "production":
        return True
    current_tier = "free"
    for sub in SUBSCRIPTIONS_BY_SESSION.values():
        if (customer_email and sub.customer_email == customer_email) or (user_id and sub.user_id == user_id):
            current_tier = sub.tier
            break
    return can_access(current_tier, requested_tier)
