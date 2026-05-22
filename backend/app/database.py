from motor.motor_asyncio import AsyncClient, AsyncDatabase
from app.config import settings
import logging

logger = logging.getLogger(__name__)

# MongoDB connection will be managed via dependencies.py
# This module kept for backwards compatibility

class Database:
    """MongoDB Database wrapper"""

    def __init__(self):
        self.client: AsyncClient = None
        self.db: AsyncDatabase = None

    async def connect(self):
        """Initialize MongoDB connection"""
        try:
            self.client = AsyncClient(settings.mongodb_url)
            self.db = self.client[settings.mongodb_db_name]
            # Test connection
            await self.db.command("ping")
            logger.info(f"Connected to MongoDB: {settings.mongodb_db_name}")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            raise

    async def disconnect(self):
        """Close MongoDB connection"""
        if self.client:
            self.client.close()
            logger.info("Disconnected from MongoDB")

    def get_collection(self, collection_name: str):
        """Get a MongoDB collection"""
        if not self.db:
            raise RuntimeError("Database not connected")
        return self.db[collection_name]

# Global database instance
db_instance = Database()

async def get_database() -> Database:
    """Dependency to get database instance"""
    if not db_instance.db:
        await db_instance.connect()
    return db_instance

