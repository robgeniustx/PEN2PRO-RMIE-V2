from datetime import datetime, timezone

from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text

from app.db import Base


class SavedRoadmap(Base):
    __tablename__ = "saved_roadmaps"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, index=True, nullable=False)
    business_idea = Column(String, nullable=False)
    category = Column(String, nullable=True)
    industry_id = Column(String, nullable=True)
    city = Column(String, nullable=True)
    state = Column(String, nullable=True)
    is_sample = Column(Boolean, default=False)
    roadmap_json = Column(Text, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
