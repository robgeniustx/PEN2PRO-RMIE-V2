from typing import Any, Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

import json

from app import ratelimit, store
from app.auth_deps import current_user
from app.services import ai_client

router = APIRouter()


class SaveRequest(BaseModel):
    kind: Literal["blueprint", "strategist-plan"]
    title: str = Field(min_length=1, max_length=200)
    data: Any


@router.post("")
def save(req: SaveRequest, user: dict = Depends(current_user)):
    if not isinstance(req.data, dict):
        raise HTTPException(status_code=422, detail="Roadmap data must be an object.")
    try:
        rid = store.save_roadmap(user["email"], req.kind, req.title.strip(), req.data)
    except store.StoreLimit as exc:
        raise HTTPException(status_code=413, detail=str(exc))
    return {"id": rid}


@router.get("")
def list_mine(user: dict = Depends(current_user)):
    return {"roadmaps": store.list_roadmaps(user["email"])}


@router.get("/{roadmap_id}")
def get_one(roadmap_id: int, user: dict = Depends(current_user)):
    row = store.get_roadmap(user["email"], roadmap_id)
    if not row:
        raise HTTPException(status_code=404, detail="Roadmap not found.")
    return row


@router.delete("/{roadmap_id}")
def remove(roadmap_id: int, user: dict = Depends(current_user)):
    if not store.delete_roadmap(user["email"], roadmap_id):
        raise HTTPException(status_code=404, detail="Roadmap not found.")
    return {"deleted": True}


class RefineRequest(BaseModel):
    roadmap: dict
    instruction: str = Field(min_length=5, max_length=600)


REFINE_SYSTEM = (
    "You are a senior small-business strategist. The user has a business roadmap (JSON) and asks you to improve one part of it. "
    "Be concrete: real numbers, named steps, scripts they can send today. Do not invent testimonials, statistics, licenses or guarantees. "
    "Return JSON: {\"title\": short heading, \"revised\": the improved text or list as markdown, \"why\": 2-3 sentences on what changed and why}."
)


@router.post("/refine")
async def refine(req: RefineRequest, user: dict = Depends(current_user)):
    """Pro, Elite and Founders: ask the AI to rework part of a roadmap."""
    if user["tier"] not in store.PAID_TIERS and user["role"] != "admin":
        raise HTTPException(status_code=403, detail="AI refinement is included with Pro, Elite and Founders.")
    ratelimit.check(f"refine:{user['email']}", 20, 3600)
    context = json.dumps(req.roadmap, separators=(",", ":"))[:12000]
    return await ai_client.chat_json(REFINE_SYSTEM, f"Roadmap:\n{context}\n\nRequest: {req.instruction.strip()}", "OPENAI_MODEL_BLUEPRINT", 1500)
