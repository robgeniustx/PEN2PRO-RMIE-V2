from datetime import datetime
from enum import Enum
from typing import Optional

from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field


class TierEnum(str, Enum):
    """User tier levels."""
    STARTER = "STARTER"
    PRO = "PRO"
    ELITE = "ELITE"
    FOUNDER = "FOUNDER"


class User(BaseModel):
    """User model."""
    id: Optional[ObjectId] = Field(alias="_id", default=None)
    email: EmailStr
    password_hash: str  # bcrypt hash
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    tier: TierEnum = TierEnum.STARTER
    stripe_customer_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_schema_extra = {
            "example": {
                "email": "user@example.com",
                "password_hash": "bcrypt_hash_here",
                "first_name": "John",
                "last_name": "Doe",
                "tier": "STARTER",
                "stripe_customer_id": "cus_xxx",
                "created_at": "2026-05-21T00:00:00",
                "updated_at": "2026-05-21T00:00:00"
            }
        }


class Blueprint(BaseModel):
    """Blueprint model."""
    id: Optional[ObjectId] = Field(alias="_id", default=None)
    user_id: ObjectId
    business_idea: str
    description: Optional[str] = None
    category: Optional[str] = None
    industry: Optional[str] = None
    timeline_weeks: Optional[int] = 12
    estimated_investment: Optional[float] = None
    status: str = "draft"  # draft, active, completed

    # Agent results (stored per agent type)
    blueprint_agent_result: Optional[dict] = None
    seo_agent_result: Optional[dict] = None
    email_agent_result: Optional[dict] = None
    gtm_agent_result: Optional[dict] = None
    financial_agent_result: Optional[dict] = None
    affiliate_agent_result: Optional[dict] = None
    social_agent_result: Optional[dict] = None

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True


# Request/Response schemas
class RegisterRequest(BaseModel):
    """Registration request."""
    email: EmailStr
    password: str = Field(..., min_length=8)
    first_name: Optional[str] = None
    last_name: Optional[str] = None


class LoginRequest(BaseModel):
    """Login request."""
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    """Token response."""
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class UserResponse(BaseModel):
    """User response (safe to send to frontend)."""
    id: str = Field(alias="_id")
    email: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    tier: str
    created_at: datetime

    class Config:
        populate_by_name = True


class BlueprintCreate(BaseModel):
    """Create blueprint request."""
    business_idea: str
    description: Optional[str] = None
    category: Optional[str] = None
    industry: Optional[str] = None
    timeline_weeks: Optional[int] = 12
    estimated_investment: Optional[float] = None
    status: str = "draft"


class BlueprintUpdate(BaseModel):
    """Update blueprint request."""
    business_idea: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    industry: Optional[str] = None
    timeline_weeks: Optional[int] = None
    estimated_investment: Optional[float] = None
    status: Optional[str] = None


class BlueprintResponse(BaseModel):
    """Blueprint response."""
    id: str = Field(alias="_id")
    user_id: str
    business_idea: str
    description: Optional[str] = None
    category: Optional[str] = None
    industry: Optional[str] = None
    timeline_weeks: Optional[int] = None
    estimated_investment: Optional[float] = None
    status: str
    blueprint_agent_result: Optional[dict] = None
    seo_agent_result: Optional[dict] = None
    email_agent_result: Optional[dict] = None
    gtm_agent_result: Optional[dict] = None
    financial_agent_result: Optional[dict] = None
    affiliate_agent_result: Optional[dict] = None
    social_agent_result: Optional[dict] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        populate_by_name = True
