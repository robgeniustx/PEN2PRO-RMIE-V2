from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from config import get_settings

settings = get_settings()

client: AsyncIOMotorClient = None
database: AsyncIOMotorDatabase = None


async def connect_to_mongodb():
    """Connect to MongoDB."""
    global client, database
    try:
        client = AsyncIOMotorClient(settings.MONGODB_URL)
        database = client[settings.DATABASE_NAME]
        # Verify connection
        await database.command("ping")
        print(f"Connected to MongoDB: {settings.DATABASE_NAME}")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")
        raise


async def close_mongodb_connection():
    """Close MongoDB connection."""
    global client
    if client:
        client.close()
        print("Closed MongoDB connection")


async def get_database() -> AsyncIOMotorDatabase:
    """Get database instance."""
    return database
