from datetime import datetime
from typing import Optional, List
from enum import Enum

class UserTier(str, Enum):
    STARTER = "starter"
    PRO = "pro"
    ELITE = "elite"

class UserStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"

class User:
    """MongoDB User Document Model"""

    collection_name = "users"

    def __init__(
        self,
        email: str,
        password_hash: str,
        full_name: str,
        tier: UserTier = UserTier.STARTER,
        status: UserStatus = UserStatus.ACTIVE,
        _id: Optional[str] = None,
        stripe_customer_id: Optional[str] = None,
        stripe_subscription_id: Optional[str] = None,
        subscription_status: Optional[str] = None,
        phone: Optional[str] = None,
        company: Optional[str] = None,
        avatar_url: Optional[str] = None,
        bio: Optional[str] = None,
        onboarding_completed: bool = False,
        features_used: Optional[dict] = None,
        created_at: Optional[datetime] = None,
        updated_at: Optional[datetime] = None,
        last_login_at: Optional[datetime] = None,
        timezone: str = "UTC",
    ):
        self._id = _id
        self.email = email.lower()
        self.password_hash = password_hash
        self.full_name = full_name
        self.tier = tier
        self.status = status
        self.stripe_customer_id = stripe_customer_id
        self.stripe_subscription_id = stripe_subscription_id
        self.subscription_status = subscription_status
        self.phone = phone
        self.company = company
        self.avatar_url = avatar_url
        self.bio = bio
        self.onboarding_completed = onboarding_completed
        self.features_used = features_used or {
            "blueprints_created": 0,
            "agents_run": 0,
            "agents_run_this_month": 0,
        }
        self.created_at = created_at or datetime.utcnow()
        self.updated_at = updated_at or datetime.utcnow()
        self.last_login_at = last_login_at
        self.timezone = timezone

    def to_dict(self):
        """Convert to MongoDB document"""
        doc = {
            "email": self.email,
            "password_hash": self.password_hash,
            "full_name": self.full_name,
            "tier": self.tier.value,
            "status": self.status.value,
            "stripe_customer_id": self.stripe_customer_id,
            "stripe_subscription_id": self.stripe_subscription_id,
            "subscription_status": self.subscription_status,
            "phone": self.phone,
            "company": self.company,
            "avatar_url": self.avatar_url,
            "bio": self.bio,
            "onboarding_completed": self.onboarding_completed,
            "features_used": self.features_used,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "last_login_at": self.last_login_at,
            "timezone": self.timezone,
        }
        if self._id:
            doc["_id"] = self._id
        return doc

    @staticmethod
    def from_dict(doc: dict) -> "User":
        """Create User from MongoDB document"""
        return User(
            _id=doc.get("_id"),
            email=doc.get("email", ""),
            password_hash=doc.get("password_hash", ""),
            full_name=doc.get("full_name", ""),
            tier=UserTier(doc.get("tier", "starter")),
            status=UserStatus(doc.get("status", "active")),
            stripe_customer_id=doc.get("stripe_customer_id"),
            stripe_subscription_id=doc.get("stripe_subscription_id"),
            subscription_status=doc.get("subscription_status"),
            phone=doc.get("phone"),
            company=doc.get("company"),
            avatar_url=doc.get("avatar_url"),
            bio=doc.get("bio"),
            onboarding_completed=doc.get("onboarding_completed", False),
            features_used=doc.get("features_used", {}),
            created_at=doc.get("created_at"),
            updated_at=doc.get("updated_at"),
            last_login_at=doc.get("last_login_at"),
            timezone=doc.get("timezone", "UTC"),
        )
