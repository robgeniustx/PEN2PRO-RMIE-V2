from sqlalchemy import Column, DateTime, Integer, String, Text, func
from .base import Base


class AffiliateNiche(Base):
    __tablename__ = "affiliate_niches"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    niche_name = Column(String(255), nullable=False)
    audience = Column(String(255), nullable=False)
    problem_solved = Column(Text, nullable=False)
    product_categories = Column(Text, nullable=True)
    content_angles = Column(Text, nullable=True)
    risk_notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
