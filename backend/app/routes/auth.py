import os
from datetime import datetime, timedelta, timezone
from typing import Optional

from fastapi import APIRouter, HTTPException
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

router = APIRouter()

SECRET_KEY = os.getenv("JWT_SECRET_KEY", "pen2pro-dev-secret-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# In-memory user store (replace with DB)
_users: dict = {}


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


def _create_token(data: dict, expires_minutes: int = ACCESS_TOKEN_EXPIRE_MINUTES) -> str:
    payload = data.copy()
    payload["exp"] = datetime.now(timezone.utc) + timedelta(minutes=expires_minutes)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


@router.post("/register")
async def register(req: RegisterRequest):
    email = req.email.lower()
    if email in _users:
        raise HTTPException(status_code=409, detail="Email already registered")
    hashed = pwd_context.hash(req.password)
    _users[email] = {"name": req.name, "email": email, "password": hashed, "tier": "free"}
    token = _create_token({"sub": email, "name": req.name, "tier": "free"})
    return {"access_token": token, "token_type": "bearer", "name": req.name, "tier": "free"}


@router.post("/login")
async def login(req: LoginRequest):
    email = req.email.lower()
    user = _users.get(email)
    if not user or not pwd_context.verify(req.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = _create_token({"sub": email, "name": user["name"], "tier": user.get("tier", "free")})
    return {"access_token": token, "token_type": "bearer", "name": user["name"], "tier": user.get("tier", "free")}


@router.get("/me")
async def me(authorization: Optional[str] = None):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1]
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return {"email": payload.get("sub"), "name": payload.get("name"), "tier": payload.get("tier", "free")}
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
