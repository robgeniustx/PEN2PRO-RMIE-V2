from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


@dataclass
class Subscription:
    id: str
    user_id: Optional[str] = None
    customer_email: Optional[str] = None
    stripe_customer_id: Optional[str] = None
    stripe_subscription_id: Optional[str] = None
    stripe_session_id: Optional[str] = None
    tier: str = "free"
    status: str = "inactive"
    current_period_start: Optional[datetime] = None
    current_period_end: Optional[datetime] = None
    is_lifetime: bool = False
    created_at: datetime = field(default_factory=now_utc)
    updated_at: datetime = field(default_factory=now_utc)
# TODO subscription
