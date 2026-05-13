from typing import Optional

import stripe
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel

from app.services.stripe_service import (
    PAYMENTS_BY_SESSION,
    StripeConfigError,
    create_checkout_session,
    handle_checkout_completed,
    handle_subscription_deleted,
    handle_subscription_updated,
    verify_webhook_signature,
)

router = APIRouter()


class CheckoutRequest(BaseModel):
    tier: str
    customer_email: Optional[str] = None


@router.post("/create-checkout-session")
async def create_checkout_session_route(payload: CheckoutRequest):
    tier = payload.tier.lower()
    if tier not in {"pro", "elite", "founders", "agency"}:
        raise HTTPException(status_code=400, detail="Invalid tier. Must be one of: pro, elite, founders, agency")
    try:
        return create_checkout_session(tier=tier, customer_email=payload.customer_email)
    except StripeConfigError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Unable to create checkout session") from exc


@router.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("Stripe-Signature")
    try:
        event = verify_webhook_signature(payload, sig_header)
    except StripeConfigError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")

    event_type = event.get("type")
    if event_type == "checkout.session.completed":
        handle_checkout_completed(event)
    elif event_type == "customer.subscription.updated":
        handle_subscription_updated(event)
    elif event_type == "customer.subscription.deleted":
        handle_subscription_deleted(event)
    elif event_type in {"invoice.payment_succeeded", "invoice.payment_failed"}:
        pass
    return {"received": True}


@router.get("/session/{session_id}")
async def get_session_status(session_id: str):
    payment = PAYMENTS_BY_SESSION.get(session_id)
    if not payment:
        return {
            "session_id": session_id,
            "payment_status": "unknown",
            "customer_email": None,
            "tier": "free",
            "mode": "payment",
        }
    return {
        "session_id": payment.stripe_session_id,
        "payment_status": payment.payment_status,
        "customer_email": payment.customer_email,
        "tier": payment.tier,
        "mode": payment.mode,
    }
# TODO stripe_routes
