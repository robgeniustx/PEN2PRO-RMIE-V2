from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class RegisterRequest(BaseModel):
    """User registration request"""
    email: EmailStr
    password: str = Field(..., min_length=8, description="Minimum 8 characters")
    full_name: str = Field(..., min_length=2, max_length=100)
    company: Optional[str] = None

    class Config:
        json_schema_extra = {
            "example": {
                "email": "robert@xlr8pressurewashing.com",
                "password": "SecurePassword123!",
                "full_name": "Robert Earl Green Jr.",
                "company": "XLR8 Pressure Washing"
            }
        }

class LoginRequest(BaseModel):
    """User login request"""
    email: EmailStr
    password: str

    class Config:
        json_schema_extra = {
            "example": {
                "email": "robert@xlr8pressurewashing.com",
                "password": "SecurePassword123!"
            }
        }

class TokenResponse(BaseModel):
    """Token response after login/refresh"""
    access_token: str
    token_type: str = "bearer"
    expires_in: int

    class Config:
        json_schema_extra = {
            "example": {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                "token_type": "bearer",
                "expires_in": 1440
            }
        }

class UserResponse(BaseModel):
    """User profile response"""
    id: str = Field(alias="_id")
    email: str
    full_name: str
    tier: str
    status: str
    company: Optional[str] = None
    avatar_url: Optional[str] = None
    onboarding_completed: bool
    stripe_customer_id: Optional[str] = None
    stripe_subscription_id: Optional[str] = None
    subscription_status: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    last_login_at: Optional[datetime] = None

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "507f1f77bcf86cd799439011",
                "email": "robert@xlr8pressurewashing.com",
                "full_name": "Robert Earl Green Jr.",
                "tier": "starter",
                "status": "active",
                "company": "XLR8 Pressure Washing",
                "onboarding_completed": False,
                "created_at": "2026-05-21T12:00:00",
                "updated_at": "2026-05-21T12:00:00"
            }
        }

class RefreshTokenRequest(BaseModel):
    """Refresh token request"""
    refresh_token: str

class ChangePasswordRequest(BaseModel):
    """Change password request"""
    current_password: str
    new_password: str = Field(..., min_length=8)
    confirm_password: str

class ForgotPasswordRequest(BaseModel):
    """Forgot password request"""
    email: EmailStr

class ResetPasswordRequest(BaseModel):
    """Reset password with token"""
    token: str
    new_password: str = Field(..., min_length=8)
    confirm_password: str

class AuthError(BaseModel):
    """Auth error response"""
    detail: str
    error_code: str
    status_code: int

    class Config:
        json_schema_extra = {
            "example": {
                "detail": "Invalid credentials",
                "error_code": "INVALID_CREDENTIALS",
                "status_code": 401
            }
        }

