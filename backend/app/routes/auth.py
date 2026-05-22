from fastapi import APIRouter, HTTPException, status, Depends
from app.dependencies import get_db, get_current_user
from app.services.auth_service import AuthService
from app.schemas.auth_schema import (
    RegisterRequest, LoginRequest, TokenResponse, UserResponse,
    ChangePasswordRequest
)
from motor.motor_asyncio import AsyncDatabase
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register(req: RegisterRequest, db: AsyncDatabase = Depends(get_db)):
    """Register a new user"""
    try:
        auth_service = AuthService(db)
        result = await auth_service.register_user(req)
        return result
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Registration error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Registration failed"
        )

@router.post("/login", response_model=TokenResponse)
async def login(req: LoginRequest, db: AsyncDatabase = Depends(get_db)):
    """Login user and return access token"""
    try:
        auth_service = AuthService(db)
        result = await auth_service.login_user(req)
        return result
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Login error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Login failed"
        )

@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Get current user profile"""
    try:
        user_id = current_user.get("user_id")
        auth_service = AuthService(db)
        user = await auth_service.get_user_by_id(user_id)

        return {
            "_id": str(user._id),
            "email": user.email,
            "full_name": user.full_name,
            "tier": user.tier.value,
            "status": user.status.value,
            "company": user.company,
            "avatar_url": user.avatar_url,
            "onboarding_completed": user.onboarding_completed,
            "stripe_customer_id": user.stripe_customer_id,
            "stripe_subscription_id": user.stripe_subscription_id,
            "subscription_status": user.subscription_status,
            "created_at": user.created_at,
            "updated_at": user.updated_at,
            "last_login_at": user.last_login_at,
        }
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Get user error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch user"
        )

@router.put("/me", response_model=UserResponse)
async def update_user_profile(
    updates: dict,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Update user profile"""
    try:
        user_id = current_user.get("user_id")
        auth_service = AuthService(db)
        user = await auth_service.update_user_profile(user_id, updates)

        return {
            "_id": str(user._id),
            "email": user.email,
            "full_name": user.full_name,
            "tier": user.tier.value,
            "status": user.status.value,
            "company": user.company,
            "avatar_url": user.avatar_url,
            "onboarding_completed": user.onboarding_completed,
            "stripe_customer_id": user.stripe_customer_id,
            "stripe_subscription_id": user.stripe_subscription_id,
            "subscription_status": user.subscription_status,
            "created_at": user.created_at,
            "updated_at": user.updated_at,
            "last_login_at": user.last_login_at,
        }
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Update user error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update profile"
        )

@router.post("/change-password")
async def change_password(
    req: ChangePasswordRequest,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Change user password"""
    # Validate passwords match
    if req.new_password != req.confirm_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="New passwords do not match"
        )

    try:
        user_id = current_user.get("user_id")
        auth_service = AuthService(db)
        await auth_service.change_password(user_id, req.current_password, req.new_password)

        return {"message": "Password changed successfully"}
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Change password error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to change password"
        )

@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    """Logout user (token invalidated client-side)"""
    logger.info(f"User logged out: {current_user.get('email')}")
    return {"message": "Logged out successfully"}

