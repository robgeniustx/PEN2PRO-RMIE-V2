from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId
from pydantic import BaseModel

from database import get_database
from security import get_current_user

router = APIRouter(prefix="/websites", tags=["websites"])


class WebsiteCreate(BaseModel):
    name: str
    domain: str = None
    template: str = "blank"  # blank, business, portfolio, ecommerce
    title: str = None
    description: str = None


class PageCreate(BaseModel):
    name: str
    slug: str
    template: str = "blank"
    content: dict = None  # Page content/layout


class WebsiteUpdate(BaseModel):
    name: str = None
    domain: str = None
    title: str = None
    description: str = None
    published: bool = None


@router.post("/")
async def create_website(
    website_data: WebsiteCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create a new website."""
    website_doc = {
        "user_id": ObjectId(current_user["user_id"]),
        "name": website_data.name,
        "domain": website_data.domain,
        "template": website_data.template,
        "title": website_data.title,
        "description": website_data.description,
        "published": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await db.websites.insert_one(website_doc)
    website_doc["_id"] = result.inserted_id

    return {
        "_id": str(website_doc["_id"]),
        "user_id": str(website_doc["user_id"]),
        **{k: v for k, v in website_doc.items() if k not in ["_id", "user_id"]}
    }


@router.get("/")
async def list_websites(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List all websites."""
    websites = await db.websites.find({
        "user_id": ObjectId(current_user["user_id"])
    }).sort("created_at", -1).to_list(None)

    return [
        {
            "_id": str(site["_id"]),
            "user_id": str(site["user_id"]),
            **{k: v for k, v in site.items() if k not in ["_id", "user_id"]}
        }
        for site in websites
    ]


@router.get("/{website_id}")
async def get_website(
    website_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Get a website."""
    try:
        wid = ObjectId(website_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid website ID")

    website = await db.websites.find_one({
        "_id": wid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not website:
        raise HTTPException(status_code=404, detail="Website not found")

    return {
        "_id": str(website["_id"]),
        "user_id": str(website["user_id"]),
        **{k: v for k, v in website.items() if k not in ["_id", "user_id"]}
    }


@router.put("/{website_id}")
async def update_website(
    website_id: str,
    website_data: WebsiteUpdate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Update a website."""
    try:
        wid = ObjectId(website_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid website ID")

    # Check ownership
    website = await db.websites.find_one({
        "_id": wid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not website:
        raise HTTPException(status_code=404, detail="Website not found")

    # Build update
    update_data = {}
    if website_data.name is not None:
        update_data["name"] = website_data.name
    if website_data.domain is not None:
        update_data["domain"] = website_data.domain
    if website_data.title is not None:
        update_data["title"] = website_data.title
    if website_data.description is not None:
        update_data["description"] = website_data.description
    if website_data.published is not None:
        update_data["published"] = website_data.published

    update_data["updated_at"] = datetime.utcnow()

    result = await db.websites.update_one(
        {"_id": wid},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Website not found")

    updated = await db.websites.find_one({"_id": wid})
    return {
        "_id": str(updated["_id"]),
        "user_id": str(updated["user_id"]),
        **{k: v for k, v in updated.items() if k not in ["_id", "user_id"]}
    }


@router.post("/{website_id}/pages")
async def create_page(
    website_id: str,
    page_data: PageCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create a page in website."""
    try:
        wid = ObjectId(website_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid website ID")

    # Check ownership
    website = await db.websites.find_one({
        "_id": wid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not website:
        raise HTTPException(status_code=404, detail="Website not found")

    page_doc = {
        "website_id": wid,
        "user_id": ObjectId(current_user["user_id"]),
        "name": page_data.name,
        "slug": page_data.slug,
        "template": page_data.template,
        "content": page_data.content or {},
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await db.pages.insert_one(page_doc)
    page_doc["_id"] = result.inserted_id

    return {
        "_id": str(page_doc["_id"]),
        "website_id": str(page_doc["website_id"]),
        "user_id": str(page_doc["user_id"]),
        **{k: v for k, v in page_doc.items() if k not in ["_id", "website_id", "user_id"]}
    }


@router.get("/{website_id}/pages")
async def list_pages(
    website_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List pages in website."""
    try:
        wid = ObjectId(website_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid website ID")

    # Check ownership
    website = await db.websites.find_one({
        "_id": wid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not website:
        raise HTTPException(status_code=404, detail="Website not found")

    pages = await db.pages.find({
        "website_id": wid
    }).sort("created_at", -1).to_list(None)

    return [
        {
            "_id": str(page["_id"]),
            "website_id": str(page["website_id"]),
            "user_id": str(page["user_id"]),
            **{k: v for k, v in page.items() if k not in ["_id", "website_id", "user_id"]}
        }
        for page in pages
    ]


@router.delete("/{website_id}")
async def delete_website(
    website_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Delete a website."""
    try:
        wid = ObjectId(website_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid website ID")

    result = await db.websites.delete_one({
        "_id": wid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Website not found")

    # Delete pages
    await db.pages.delete_many({"website_id": wid})

    return {"deleted": True}
