from fastapi import Depends
from motor.motor_asyncio import AsyncIOMotorDatabase

from config import get_settings
from database import get_database
from security import get_current_user

settings = get_settings()


async def get_db() -> AsyncIOMotorDatabase:
    """Get MongoDB database connection."""
    return await get_database()


async def get_current_user_tier(current_user: dict = Depends(get_current_user)) -> dict:
    """Get current user with tier information."""
    db = await get_db()
    user = await db.users.find_one({"_id": current_user["user_id"]})

    if not user:
        from fastapi import HTTPException, status
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    return {
        "user_id": str(user["_id"]),
        "tier": user.get("tier", "STARTER"),
        "email": user.get("email"),
    }
