from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId
from pydantic import BaseModel

from database import get_database
from security import get_current_user

router = APIRouter(prefix="/command-center", tags=["command-center"])


class TaskCreate(BaseModel):
    title: str
    description: str = None
    status: str = "todo"  # todo, in_progress, done
    due_date: str = None
    priority: str = "normal"  # low, normal, high


class TaskUpdate(BaseModel):
    title: str = None
    description: str = None
    status: str = None
    due_date: str = None
    priority: str = None


@router.post("/tasks")
async def create_task(
    task_data: TaskCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create a task."""
    task_doc = {
        "user_id": ObjectId(current_user["user_id"]),
        "title": task_data.title,
        "description": task_data.description,
        "status": task_data.status,
        "due_date": task_data.due_date,
        "priority": task_data.priority,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await db.tasks.insert_one(task_doc)
    task_doc["_id"] = result.inserted_id

    return {
        "_id": str(task_doc["_id"]),
        "user_id": str(task_doc["user_id"]),
        **{k: v for k, v in task_doc.items() if k not in ["_id", "user_id"]}
    }


@router.get("/tasks")
async def list_tasks(
    status: str = None,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List tasks with optional status filter."""
    query = {"user_id": ObjectId(current_user["user_id"])}
    if status:
        query["status"] = status

    tasks = await db.tasks.find(query).sort("due_date", 1).to_list(None)

    return [
        {
            "_id": str(task["_id"]),
            "user_id": str(task["user_id"]),
            **{k: v for k, v in task.items() if k not in ["_id", "user_id"]}
        }
        for task in tasks
    ]


@router.put("/tasks/{task_id}")
async def update_task(
    task_id: str,
    task_data: TaskUpdate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Update a task."""
    try:
        tid = ObjectId(task_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid task ID")

    # Check ownership
    task = await db.tasks.find_one({
        "_id": tid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    # Build update
    update_data = {}
    if task_data.title is not None:
        update_data["title"] = task_data.title
    if task_data.description is not None:
        update_data["description"] = task_data.description
    if task_data.status is not None:
        update_data["status"] = task_data.status
    if task_data.due_date is not None:
        update_data["due_date"] = task_data.due_date
    if task_data.priority is not None:
        update_data["priority"] = task_data.priority

    update_data["updated_at"] = datetime.utcnow()

    result = await db.tasks.update_one(
        {"_id": tid},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Task not found")

    updated = await db.tasks.find_one({"_id": tid})
    return {
        "_id": str(updated["_id"]),
        "user_id": str(updated["user_id"]),
        **{k: v for k, v in updated.items() if k not in ["_id", "user_id"]}
    }


@router.delete("/tasks/{task_id}")
async def delete_task(
    task_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Delete a task."""
    try:
        tid = ObjectId(task_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid task ID")

    result = await db.tasks.delete_one({
        "_id": tid,
        "user_id": ObjectId(current_user["user_id"])
    })

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Task not found")

    return {"deleted": True}


@router.get("/dashboard")
async def get_dashboard(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Get dashboard stats."""
    user_id = ObjectId(current_user["user_id"])

    # Count blueprints
    blueprints_count = await db.blueprints.count_documents({"user_id": user_id})
    active_blueprints = await db.blueprints.count_documents({
        "user_id": user_id,
        "status": "active"
    })

    # Count tasks
    tasks_count = await db.tasks.count_documents({"user_id": user_id})
    pending_tasks = await db.tasks.count_documents({
        "user_id": user_id,
        "status": {"$in": ["todo", "in_progress"]}
    })

    # Get recent activity
    recent_blueprints = await db.blueprints.find(
        {"user_id": user_id}
    ).sort("updated_at", -1).limit(5).to_list(None)

    recent_tasks = await db.tasks.find(
        {"user_id": user_id}
    ).sort("updated_at", -1).limit(5).to_list(None)

    return {
        "stats": {
            "total_blueprints": blueprints_count,
            "active_blueprints": active_blueprints,
            "total_tasks": tasks_count,
            "pending_tasks": pending_tasks,
        },
        "recent_activity": {
            "blueprints": [
                {
                    "_id": str(bp["_id"]),
                    "business_idea": bp.get("business_idea"),
                    "updated_at": bp.get("updated_at"),
                }
                for bp in recent_blueprints
            ],
            "tasks": [
                {
                    "_id": str(task["_id"]),
                    "title": task.get("title"),
                    "status": task.get("status"),
                    "updated_at": task.get("updated_at"),
                }
                for task in recent_tasks
            ],
        }
    }
