from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


@dataclass
class Payment:
    id: str
    user_id: Optional[str] = None
    customer_email: Optional[str] = None
    stripe_customer_id: Optional[str] = None
    stripe_session_id: Optional[str] = None
    tier: str = "free"
    amount_total: Optional[int] = None
    currency: Optional[str] = None
    payment_status: str = "unpaid"
    mode: str = "payment"
    created_at: datetime = field(default_factory=now_utc)
    updated_at: datetime = field(default_factory=now_utc)
# TODO payment
