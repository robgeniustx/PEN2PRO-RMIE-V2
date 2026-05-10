from sqlalchemy import Column, DateTime, Float, Integer, String, Text, func
from .base import Base


class AffiliateLink(Base):
    __tablename__ = "affiliate_links"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    affiliate_funnel_id = Column(Integer, nullable=True)
    product_name = Column(String(255), nullable=False)
    product_category = Column(String(255), nullable=True)
    affiliate_url = Column(Text, nullable=True)
    platform = Column(String(100), nullable=True)
    clicks = Column(Integer, default=0, nullable=False)
    conversions = Column(Integer, default=0, nullable=False)
    estimated_commission = Column(Float, nullable=True)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
