from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status, BackgroundTasks
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId
from pydantic import BaseModel, EmailStr

from database import get_database
from security import get_current_user

router = APIRouter(prefix="/email", tags=["email"])


class EmailListCreate(BaseModel):
    name: str
    description: str = None


class SubscriberAdd(BaseModel):
    email: EmailStr
    first_name: str = None
    last_name: str = None
    metadata: dict = None


class EmailCampaignCreate(BaseModel):
    name: str
    subject: str
    body: str
    email_list_id: str
    scheduled_at: str = None  # ISO datetime


class EmailSequenceCreate(BaseModel):
    name: str
    description: str = None
    trigger: str = "manual"  # manual, signup, purchase
    emails: list = []  # List of {delay_hours, subject, body}


@router.post("/lists")
async def create_email_list(
    list_data: EmailListCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create an email list."""
    # Check tier
    user = await db.users.find_one({"_id": ObjectId(current_user["user_id"])})
    tier = user.get("tier", "STARTER")

    if tier == "STARTER":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Email lists available for Pro and Elite tiers"
        )

    list_doc = {
        "user_id": ObjectId(current_user["user_id"]),
        "name": list_data.name,
        "description": list_data.description,
        "subscriber_count": 0,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await db.email_lists.insert_one(list_doc)
    list_doc["_id"] = result.inserted_id

    return {
        "_id": str(list_doc["_id"]),
        "user_id": str(list_doc["user_id"]),
        **{k: v for k, v in list_doc.items() if k not in ["_id", "user_id"]}
    }


@router.get("/lists")
async def list_email_lists(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List email lists."""
    lists = await db.email_lists.find({
        "user_id": ObjectId(current_user["user_id"])
    }).sort("created_at", -1).to_list(None)

    return [
        {
            "_id": str(lst["_id"]),
            "user_id": str(lst["user_id"]),
            **{k: v for k, v in lst.items() if k not in ["_id", "user_id"]}
        }
        for lst in lists
    ]


@router.post("/lists/{list_id}/subscribers")
async def add_subscriber(
    list_id: str,
    subscriber_data: SubscriberAdd,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Add subscriber to list."""
    try:
        lid = ObjectId(list_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid list ID")

    # Check ownership
    email_list = await db.email_lists.find_one({
        "_id": lid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not email_list:
        raise HTTPException(status_code=404, detail="List not found")

    # Check duplicate
    existing = await db.subscribers.find_one({
        "list_id": lid,
        "email": subscriber_data.email
    })

    if existing:
        raise HTTPException(status_code=400, detail="Subscriber already exists")

    subscriber_doc = {
        "list_id": lid,
        "user_id": ObjectId(current_user["user_id"]),
        "email": subscriber_data.email,
        "first_name": subscriber_data.first_name,
        "last_name": subscriber_data.last_name,
        "metadata": subscriber_data.metadata or {},
        "subscribed": True,
        "created_at": datetime.utcnow(),
    }

    result = await db.subscribers.insert_one(subscriber_doc)

    # Update list count
    await db.email_lists.update_one(
        {"_id": lid},
        {"$inc": {"subscriber_count": 1}}
    )

    subscriber_doc["_id"] = result.inserted_id

    return {
        "_id": str(subscriber_doc["_id"]),
        "list_id": str(subscriber_doc["list_id"]),
        "user_id": str(subscriber_doc["user_id"]),
        **{k: v for k, v in subscriber_doc.items() if k not in ["_id", "list_id", "user_id"]}
    }


@router.get("/lists/{list_id}/subscribers")
async def list_subscribers(
    list_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List subscribers."""
    try:
        lid = ObjectId(list_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid list ID")

    # Check ownership
    email_list = await db.email_lists.find_one({
        "_id": lid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not email_list:
        raise HTTPException(status_code=404, detail="List not found")

    subscribers = await db.subscribers.find({
        "list_id": lid
    }).sort("created_at", -1).to_list(None)

    return [
        {
            "_id": str(sub["_id"]),
            "list_id": str(sub["list_id"]),
            "user_id": str(sub["user_id"]),
            **{k: v for k, v in sub.items() if k not in ["_id", "list_id", "user_id"]}
        }
        for sub in subscribers
    ]


@router.post("/campaigns")
async def create_campaign(
    campaign_data: EmailCampaignCreate,
    background_tasks: BackgroundTasks,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create email campaign."""
    # Check tier
    user = await db.users.find_one({"_id": ObjectId(current_user["user_id"])})
    tier = user.get("tier", "STARTER")

    if tier == "STARTER":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Campaigns available for Pro and Elite tiers"
        )

    # Verify list exists
    try:
        list_id = ObjectId(campaign_data.email_list_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid list ID")

    email_list = await db.email_lists.find_one({
        "_id": list_id,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not email_list:
        raise HTTPException(status_code=404, detail="List not found")

    campaign_doc = {
        "user_id": ObjectId(current_user["user_id"]),
        "email_list_id": list_id,
        "name": campaign_data.name,
        "subject": campaign_data.subject,
        "body": campaign_data.body,
        "status": "draft",
        "scheduled_at": campaign_data.scheduled_at,
        "sent_count": 0,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await db.campaigns.insert_one(campaign_doc)
    campaign_doc["_id"] = result.inserted_id

    return {
        "_id": str(campaign_doc["_id"]),
        "user_id": str(campaign_doc["user_id"]),
        "email_list_id": str(campaign_doc["email_list_id"]),
        **{k: v for k, v in campaign_doc.items() if k not in ["_id", "user_id", "email_list_id"]}
    }


@router.get("/campaigns")
async def list_campaigns(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List campaigns."""
    campaigns = await db.campaigns.find({
        "user_id": ObjectId(current_user["user_id"])
    }).sort("created_at", -1).to_list(None)

    return [
        {
            "_id": str(camp["_id"]),
            "user_id": str(camp["user_id"]),
            "email_list_id": str(camp["email_list_id"]),
            **{k: v for k, v in camp.items() if k not in ["_id", "user_id", "email_list_id"]}
        }
        for camp in campaigns
    ]


@router.post("/campaigns/{campaign_id}/send")
async def send_campaign(
    campaign_id: str,
    background_tasks: BackgroundTasks,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Send campaign to subscribers."""
    try:
        cid = ObjectId(campaign_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid campaign ID")

    # Check ownership
    campaign = await db.campaigns.find_one({
        "_id": cid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not campaign:
        raise HTTPException(status_code=404, detail="Campaign not found")

    if campaign["status"] == "sent":
        raise HTTPException(status_code=400, detail="Campaign already sent")

    # Queue send in background
    background_tasks.add_task(
        _send_campaign_emails,
        campaign_id,
        campaign,
        db
    )

    # Update status
    await db.campaigns.update_one(
        {"_id": cid},
        {"$set": {"status": "sending"}}
    )

    return {
        "status": "sending",
        "message": "Campaign is being sent"
    }


async def _send_campaign_emails(campaign_id: str, campaign: dict, db: AsyncIOMotorDatabase):
    """Background task to send emails."""
    try:
        # Get subscribers
        subscribers = await db.subscribers.find({
            "list_id": campaign["email_list_id"],
            "subscribed": True
        }).to_list(None)

        # Send to each subscriber
        # (In production, integrate with email service like SendGrid, AWS SES, Mailgun)
        for subscriber in subscribers:
            # TODO: Send email via email service
            pass

        # Update campaign status
        await db.campaigns.update_one(
            {"_id": ObjectId(campaign_id)},
            {
                "$set": {
                    "status": "sent",
                    "sent_count": len(subscribers)
                }
            }
        )

    except Exception as e:
        print(f"Error sending campaign: {e}")
        await db.campaigns.update_one(
            {"_id": ObjectId(campaign_id)},
            {"$set": {"status": "error"}}
        )
