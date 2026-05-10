from sqlalchemy import Column, DateTime, Float, Integer, String, Text
from sqlalchemy.sql import func
from app.models.base import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    company_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    social_handle = Column(String(255), nullable=True)
    source = Column(String(50), nullable=True)
    status = Column(String(50), nullable=False, default="new")
    interest_level = Column(String(20), nullable=True)
    need_summary = Column(Text, nullable=True)
    notes = Column(Text, nullable=True)
    deal_value = Column(Float, nullable=True)
    next_follow_up_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
