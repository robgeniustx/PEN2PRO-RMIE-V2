import os
from datetime import datetime, timedelta, timezone
from typing import Optional

from fastapi import APIRouter, Depends, Header, HTTPException
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.db import get_db
from app.models.user import User

router = APIRouter()

SECRET_KEY = os.getenv("JWT_SECRET_KEY", "pen2pro-dev-secret-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    business_name: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None


class LoginRequest(BaseModel):
    email: str
    password: str


class UpdateProfileRequest(BaseModel):
    name: Optional[str] = None
    business_name: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None


def _create_token(data: dict, expires_minutes: int = ACCESS_TOKEN_EXPIRE_MINUTES) -> str:
    payload = data.copy()
    payload["exp"] = datetime.now(timezone.utc) + timedelta(minutes=expires_minutes)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def _decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


def get_current_user_email(authorization: Optional[str] = Header(None)) -> str:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1]
    payload = _decode_token(token)
    email = payload.get("sub")
    if not email:
        raise HTTPException(status_code=401, detail="Token missing subject")
    return email


@router.post("/register")
async def register(req: RegisterRequest, db: Session = Depends(get_db)):
    email = req.email.lower().strip()
    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=409, detail="Email already registered")
    hashed = pwd_context.hash(req.password)
    user = User(
        name=req.name,
        email=email,
        hashed_password=hashed,
        tier="free",
        role="member",
        business_name=req.business_name,
        city=req.city,
        state=req.state,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    token = _create_token({"sub": email, "name": user.name, "tier": user.tier, "role": user.role})
    return {
        "access_token": token,
        "token_type": "bearer",
        "name": user.name,
        "email": user.email,
        "tier": user.tier,
        "role": user.role,
        "business_name": user.business_name,
        "city": user.city,
        "state": user.state,
    }


@router.post("/login")
async def login(req: LoginRequest, db: Session = Depends(get_db)):
    email = req.email.lower().strip()
    user = db.query(User).filter(User.email == email).first()
    if not user or not pwd_context.verify(req.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = _create_token({"sub": email, "name": user.name, "tier": user.tier, "role": user.role})
    return {
        "access_token": token,
        "token_type": "bearer",
        "name": user.name,
        "email": user.email,
        "tier": user.tier,
        "role": user.role,
        "business_name": user.business_name,
        "city": user.city,
        "state": user.state,
    }


@router.get("/me")
async def me(
    authorization: Optional[str] = Header(None),
    db: Session = Depends(get_db),
):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1]
    payload = _decode_token(token)
    email = payload.get("sub")
    if not email:
        raise HTTPException(status_code=401, detail="Token missing subject")
    user = db.query(User).filter(User.email == email).first()
    if not user:
        # Token valid but user was deleted — return token data as fallback
        return {
            "email": email,
            "name": payload.get("name", ""),
            "tier": payload.get("tier", "free"),
            "role": payload.get("role", "member"),
            "business_name": None,
            "city": None,
            "state": None,
        }
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


@router.patch("/profile")
async def update_profile(
    req: UpdateProfileRequest,
    authorization: Optional[str] = Header(None),
    db: Session = Depends(get_db),
):
    email = get_current_user_email(authorization)
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if req.name is not None:
        user.name = req.name
    if req.business_name is not None:
        user.business_name = req.business_name
    if req.city is not None:
        user.city = req.city
    if req.state is not None:
        user.state = req.state
    db.commit()
    db.refresh(user)
    token = _create_token({"sub": user.email, "name": user.name, "tier": user.tier, "role": user.role})
    return {
        "access_token": token,
        "name": user.name,
        "email": user.email,
        "tier": user.tier,
        "role": user.role,
        "business_name": user.business_name,
        "city": user.city,
        "state": user.state,
    }
