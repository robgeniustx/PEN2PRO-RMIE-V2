from sqlalchemy import Column, DateTime, Integer, String, Text, func
from .base import Base


class AffiliateFunnel(Base):
    __tablename__ = "affiliate_funnels"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    funnel_name = Column(String(255), nullable=False)
    niche = Column(String(255), nullable=False)
    traffic_source = Column(String(255), nullable=False)
    landing_page_angle = Column(Text, nullable=False)
    lead_magnet = Column(String(255), nullable=True)
    content_plan = Column(Text, nullable=True)
    cta = Column(Text, nullable=False)
    disclosure_text = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
