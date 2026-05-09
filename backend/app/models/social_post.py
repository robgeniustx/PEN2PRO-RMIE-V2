from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.models.base import Base


class SocialPost(Base):
    __tablename__ = "social_posts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    platform = Column(String(50), nullable=False)
    post_type = Column(String(50), nullable=False)
    hook = Column(Text, nullable=False)
    caption = Column(Text, nullable=False)
    cta = Column(Text, nullable=False)
    hashtags = Column(Text, nullable=False)
    script = Column(Text, nullable=True)
    status = Column(String(20), nullable=False, default="draft")
    scheduled_day = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
