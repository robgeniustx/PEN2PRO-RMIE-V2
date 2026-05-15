import os
import uuid
from datetime import datetime, timezone
from typing import Any, Dict, Optional

import stripe

from app.models.payment import Payment
from app.models.subscription import Subscription

PAYMENTS_BY_SESSION: dict[str, Payment] = {}
SUBSCRIPTIONS_BY_SESSION: dict[str, Subscription] = {}
SUBSCRIPTIONS_BY_STRIPE_ID: dict[str, Subscription] = {}


class StripeConfigError(Exception):
    pass


def _is_configured() -> bool:
    required = [
        "STRIPE_SECRET_KEY",
        "STRIPE_WEBHOOK_SECRET",
        "FRONTEND_URL",
    ]
    return all(os.getenv(k) for k in required)


def _get_price_id(tier: str) -> str:
    mapping = {
        "pro": os.getenv("STRIPE_PRICE_PRO_MONTHLY", ""),
        "elite": os.getenv("STRIPE_PRICE_ELITE_MONTHLY", ""),
        "founders": (
            os.getenv("STRIPE_PRICE_FOUNDERS", "")
            or os.getenv("STRIPE_PRICE_FOUNDERS_LIFETIME", "")
            or os.getenv("STRIPE_PRICE_FOUNDER_ONETIME", "")
        ),
    }
    price_id = mapping.get(tier)
    if not price_id:
        raise StripeConfigError(f"Stripe price ID not configured for tier: {tier}. Add the environment variable.")
    return price_id


def create_checkout_session(tier: str, user_id: Optional[str] = None, customer_email: Optional[str] = None):
    if not _is_configured():
        raise StripeConfigError("Stripe is not configured. Add Stripe environment variables.")

    stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
    mode = "payment" if tier == "founders" else "subscription"
    frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")
    session = stripe.checkout.Session.create(
        mode=mode,
        line_items=[{"price": _get_price_id(tier), "quantity": 1}],
        success_url=f"{frontend_url}/payment-success?session_id={{CHECKOUT_SESSION_ID}}",
        cancel_url=f"{frontend_url}/pricing?payment=cancelled",
        customer_email=customer_email,
        metadata={"tier": tier, "product": "PEN2PRO RMIE Live", "user_id": user_id or ""},
    )
    return {"checkout_url": session.url, "session_id": session.id, "tier": tier}


def verify_webhook_signature(payload: bytes, sig_header: Optional[str]):
    secret = os.getenv("STRIPE_WEBHOOK_SECRET")
    if not secret:
        raise StripeConfigError("Stripe is not configured. Add Stripe environment variables.")
    return stripe.Webhook.construct_event(payload=payload, sig_header=sig_header, secret=secret)


def handle_checkout_completed(event: Dict[str, Any]):
    session = event["data"]["object"]
    try:
        tier = session.get("metadata", {}).get("tier", "free")
        now = datetime.now(timezone.utc)
        payment = PAYMENTS_BY_SESSION.get(session["id"]) or Payment(id=str(uuid.uuid4()), stripe_session_id=session["id"])
        payment.customer_email = session.get("customer_details", {}).get("email") or session.get("customer_email")
        payment.stripe_customer_id = session.get("customer")
        payment.tier = tier
        payment.amount_total = session.get("amount_total")
        payment.currency = session.get("currency")
        payment.payment_status = session.get("payment_status", "unpaid")
        payment.mode = session.get("mode", "payment")
        payment.updated_at = now
        PAYMENTS_BY_SESSION[session["id"]] = payment

        sub = SUBSCRIPTIONS_BY_SESSION.get(session["id"]) or Subscription(id=str(uuid.uuid4()), stripe_session_id=session["id"])
        sub.customer_email = payment.customer_email
        sub.stripe_customer_id = payment.stripe_customer_id
        sub.stripe_subscription_id = session.get("subscription")
        sub.tier = tier
        sub.status = "active" if payment.payment_status in {"paid", "no_payment_required"} else "incomplete"
        sub.is_lifetime = tier == "founders"
        sub.updated_at = now
        SUBSCRIPTIONS_BY_SESSION[session["id"]] = sub
        if sub.stripe_subscription_id:
            SUBSCRIPTIONS_BY_STRIPE_ID[sub.stripe_subscription_id] = sub
    except Exception as exc:
        print(f"[stripe] checkout completion persistence warning: {exc}")


def handle_subscription_updated(event: Dict[str, Any]):
    obj = event["data"]["object"]
    sub = SUBSCRIPTIONS_BY_STRIPE_ID.get(obj.get("id"))
    if not sub:
        return
    sub.status = obj.get("status", sub.status)
    cps = obj.get("current_period_start")
    cpe = obj.get("current_period_end")
    sub.current_period_start = datetime.fromtimestamp(cps, timezone.utc) if cps else None
    sub.current_period_end = datetime.fromtimestamp(cpe, timezone.utc) if cpe else None
    sub.updated_at = datetime.now(timezone.utc)


def handle_subscription_deleted(event: Dict[str, Any]):
    obj = event["data"]["object"]
    sub = SUBSCRIPTIONS_BY_STRIPE_ID.get(obj.get("id"))
    if not sub:
        return
    sub.status = "canceled"
    sub.updated_at = datetime.now(timezone.utc)
# TODO stripe_service
