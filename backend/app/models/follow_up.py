from sqlalchemy import Column, DateTime, Integer, String, Text
from sqlalchemy.sql import func
from app.models.base import Base


class FollowUp(Base):
    __tablename__ = "follow_ups"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    lead_id = Column(Integer, nullable=True)
    customer_id = Column(Integer, nullable=True)
    channel = Column(String(50), nullable=False)
    message = Column(Text, nullable=False)
    status = Column(String(50), nullable=False, default="draft")
    due_at = Column(DateTime(timezone=True), nullable=True)
    completed_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
