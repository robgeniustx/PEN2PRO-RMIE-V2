from motor.motor_asyncio import AsyncDatabase
from app.models.user import User, UserTier, UserStatus
from app.security import hash_password, verify_password, create_access_token
from app.schemas.auth_schema import RegisterRequest, LoginRequest
from datetime import timedelta
from bson.objectid import ObjectId
import logging

logger = logging.getLogger(__name__)

class AuthService:
    """Authentication service with user management"""

    def __init__(self, db: AsyncDatabase):
        self.db = db
        self.users_collection = db["users"]

    async def register_user(self, req: RegisterRequest) -> dict:
        """Register a new user"""
        # Check if email already exists
        existing_user = await self.users_collection.find_one({"email": req.email.lower()})
        if existing_user:
            raise ValueError("Email already registered")

        # Hash password
        password_hash = hash_password(req.password)

        # Create user
        user = User(
            email=req.email,
            password_hash=password_hash,
            full_name=req.full_name,
            company=req.company,
            tier=UserTier.STARTER,  # New users always start as Starter
            status=UserStatus.ACTIVE,
        )

        # Insert into MongoDB
        result = await self.users_collection.insert_one(user.to_dict())

        # Log
        logger.info(f"New user registered: {req.email}")

        # Create access token
        user._id = str(result.inserted_id)
        token = create_access_token(
            data={"sub": user._id, "email": req.email, "tier": "starter"}
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "expires_in": 1440,  # 24 hours
            "user_id": user._id,
        }

    async def login_user(self, req: LoginRequest) -> dict:
        """Authenticate user and return access token"""
        # Find user by email
        user_doc = await self.users_collection.find_one({"email": req.email.lower()})
        if not user_doc:
            raise ValueError("Invalid credentials")

        user = User.from_dict(user_doc)

        # Verify password
        if not verify_password(req.password, user.password_hash):
            raise ValueError("Invalid credentials")

        # Check status
        if user.status == UserStatus.SUSPENDED:
            raise ValueError("Account suspended")

        # Update last login
        user_id = user_doc["_id"]
        await self.users_collection.update_one(
            {"_id": user_id},
            {"$set": {"last_login_at": __import__("datetime").datetime.utcnow()}}
        )

        # Create access token
        token = create_access_token(
            data={"sub": str(user_id), "email": user.email, "tier": user.tier.value}
        )

        logger.info(f"User logged in: {req.email}")

        return {
            "access_token": token,
            "token_type": "bearer",
            "expires_in": 1440,
            "user_id": str(user_id),
        }

    async def get_user_by_id(self, user_id: str) -> User:
        """Get user by ID"""
        try:
            user_doc = await self.users_collection.find_one({"_id": ObjectId(user_id)})
            if not user_doc:
                raise ValueError("User not found")
            return User.from_dict(user_doc)
        except Exception as e:
            logger.error(f"Error fetching user {user_id}: {e}")
            raise

    async def get_user_by_email(self, email: str) -> User:
        """Get user by email"""
        user_doc = await self.users_collection.find_one({"email": email.lower()})
        if not user_doc:
            raise ValueError("User not found")
        return User.from_dict(user_doc)

    async def update_user_profile(self, user_id: str, updates: dict) -> User:
        """Update user profile (non-sensitive fields only)"""
        allowed_fields = {"full_name", "company", "avatar_url", "bio", "timezone", "phone"}
        filtered_updates = {k: v for k, v in updates.items() if k in allowed_fields}

        if not filtered_updates:
            raise ValueError("No valid fields to update")

        filtered_updates["updated_at"] = __import__("datetime").datetime.utcnow()

        result = await self.users_collection.find_one_and_update(
            {"_id": ObjectId(user_id)},
            {"$set": filtered_updates},
            return_document=True
        )

        if not result:
            raise ValueError("User not found")

        return User.from_dict(result)

    async def change_password(self, user_id: str, current_password: str, new_password: str) -> bool:
        """Change user password"""
        user = await self.get_user_by_id(user_id)

        # Verify current password
        if not verify_password(current_password, user.password_hash):
            raise ValueError("Current password is incorrect")

        # Hash new password
        new_hash = hash_password(new_password)

        # Update
        result = await self.users_collection.update_one(
            {"_id": ObjectId(user_id)},
            {"$set": {"password_hash": new_hash, "updated_at": __import__("datetime").datetime.utcnow()}}
        )

        logger.info(f"Password changed for user: {user_id}")
        return result.modified_count > 0

    async def verify_user_exists(self, email: str) -> bool:
        """Check if email exists"""
        result = await self.users_collection.find_one({"email": email.lower()})
        return result is not None

