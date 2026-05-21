from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, Integer, String

from app.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    tier = Column(String, default="free")
    role = Column(String, default="member")
    business_name = Column(String, nullable=True)
    city = Column(String, nullable=True)
    state = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
