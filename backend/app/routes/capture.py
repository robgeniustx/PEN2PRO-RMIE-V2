from fastapi import APIRouter
from pydantic import BaseModel, EmailStr, Field

from app import store

router = APIRouter()


class StarterCapture(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    business_idea: str = Field(default="", max_length=1000)
    category: str = Field(default="", max_length=120)


@router.post("/capture")
def capture(req: StarterCapture):
    """Saves the name and email entered on the free roadmap form so the owner can follow up."""
    store.add_starter_lead(req.name.strip(), str(req.email), req.business_idea.strip(), req.category.strip())
    return {"saved": True}
