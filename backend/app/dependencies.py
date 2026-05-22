from motor.motor_asyncio import AsyncClient, AsyncDatabase
from fastapi import Depends, HTTPException, status
from app.config import settings
from app.security import get_current_user
from typing import Optional

# Global MongoDB client
_mongo_client: Optional[AsyncClient] = None
_mongo_db: Optional[AsyncDatabase] = None

async def get_mongodb() -> AsyncDatabase:
    """Get MongoDB database connection."""
    global _mongo_db
    if _mongo_db is None:
        global _mongo_client
        _mongo_client = AsyncClient(settings.mongodb_url)
        _mongo_db = _mongo_client[settings.mongodb_db_name]
    return _mongo_db

async def close_mongodb():
    """Close MongoDB connection."""
    global _mongo_client
    if _mongo_client:
        _mongo_client.close()
        _mongo_client = None
        _mongo_db = None

async def get_db() -> AsyncDatabase:
    """Dependency: Get current database."""
    return await get_mongodb()

async def get_current_user_id(current_user: dict = Depends(get_current_user)) -> str:
    """Dependency: Get current user ID from token."""
    return current_user.get("user_id")

async def get_current_user_tier(current_user: dict = Depends(get_current_user)) -> str:
    """Dependency: Get current user's tier."""
    return current_user.get("tier", "starter")

async def check_tier_access(
    required_tier: str,
    current_tier: str = Depends(get_current_user_tier)
) -> bool:
    """Dependency: Check if user has required tier access."""
    tier_hierarchy = {"starter": 1, "pro": 2, "elite": 3}
    required_level = tier_hierarchy.get(required_tier, 0)
    current_level = tier_hierarchy.get(current_tier, 0)

    if current_level < required_level:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Requires {required_tier} tier or higher"
        )
    return True
