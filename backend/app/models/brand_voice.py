from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.models.base import Base


class BrandVoice(Base):
    __tablename__ = "brand_voices"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    tone = Column(String(80), nullable=False)
    audience = Column(String(255), nullable=False)
    style_rules = Column(Text, nullable=False)
    avoid_words = Column(Text, nullable=True)
    example_phrases = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
