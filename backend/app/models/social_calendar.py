from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.models.base import Base


class SocialCalendar(Base):
    __tablename__ = "social_calendars"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    calendar_type = Column(String(20), nullable=False)
    platform_mix = Column(Text, nullable=False)
    content_plan = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
