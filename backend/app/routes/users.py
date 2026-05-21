from typing import Optional

from fastapi import APIRouter, Depends, Header, HTTPException
from jose import JWTError, jwt
from sqlalchemy.orm import Session
import os

from app.db import get_db
from app.models.user import User
from app.models.saved_roadmap import SavedRoadmap

router = APIRouter(tags=["Users"])

SECRET_KEY = os.getenv("JWT_SECRET_KEY", "pen2pro-dev-secret-change-in-production")
ALGORITHM = "HS256"


def _get_email_from_header(authorization: Optional[str]) -> str:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1]
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Token missing subject")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


@router.get("/dashboard-summary")
def dashboard_summary(
    authorization: Optional[str] = Header(None),
    db: Session = Depends(get_db),
):
    """Returns real counts and user profile data for the authenticated user's dashboard."""
    email = _get_email_from_header(authorization)

    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    roadmap_count = db.query(SavedRoadmap).filter(SavedRoadmap.user_email == email).count()

    # Pull the 5 most recent roadmaps
    recent_roadmaps = (
        db.query(SavedRoadmap)
        .filter(SavedRoadmap.user_email == email)
        .order_by(SavedRoadmap.created_at.desc())
        .limit(5)
        .all()
    )

    return {
        "user": {
            "name": user.name,
            "email": user.email,
            "tier": user.tier,
            "role": user.role,
            "business_name": user.business_name,
            "city": user.city,
            "state": user.state,
            "member_since": user.created_at.isoformat() if user.created_at else None,
        },
        "stats": {
            "roadmaps_generated": roadmap_count,
            "tier": user.tier,
        },
        "recent_roadmaps": [
            {
                "id": r.id,
                "business_idea": r.business_idea,
                "category": r.category or "Business Roadmap",
                "city": r.city,
                "state": r.state,
                "is_sample": r.is_sample,
                "created_at": r.created_at.isoformat() if r.created_at else None,
            }
            for r in recent_roadmaps
        ],
    }


@router.get("/me")
def current_user(
    authorization: Optional[str] = Header(None),
    db: Session = Depends(get_db),
):
    email = _get_email_from_header(authorization)
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "email": user.email,
        "name": user.name,
        "tier": user.tier,
        "role": user.role,
        "business_name": user.business_name,
        "city": user.city,
        "state": user.state,
        "member_since": user.created_at.isoformat() if user.created_at else None,
    }
