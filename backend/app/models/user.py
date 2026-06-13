from datetime import datetime, timezone
from typing import Optional, Literal
from pydantic import BaseModel, Field, EmailStr


class UserBase(BaseModel):
    name: str
    email: EmailStr
    role: Literal["member", "admin"] = "member"
    tier: Literal["free", "pro", "elite", "founders"] = "free"


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    name: Optional[str] = None
    tier: Optional[str] = None
    role: Optional[str] = None
    stripe_customer_id: Optional[str] = None
    stripe_subscription_id: Optional[str] = None


class UserInDB(UserBase):
    id: Optional[str] = Field(default=None, alias="_id")
    hashed_password: str
    is_active: bool = True
    stripe_customer_id: Optional[str] = None
    stripe_subscription_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Config:
        populate_by_name = True


class UserPublic(UserBase):
    id: Optional[str] = None
    is_active: bool = True
    created_at: Optional[datetime] = None

    class Config:
        populate_by_name = True


class UserSession(BaseModel):
    """Lightweight session payload stored in JWT / localStorage."""
    sub: str
    name: str
    tier: str = "free"
    role: str = "member"
