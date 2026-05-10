from sqlalchemy import Column, DateTime, Integer, String, Text, func

from app.core.database import Base


class SeoAsset(Base):
    __tablename__ = "seo_assets"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    website_project_id = Column(Integer, nullable=True)
    page_type = Column(String(50), nullable=False, doc="homepage|landing_page|service_page|about|contact")
    seo_title = Column(String(255), nullable=False)
    meta_description = Column(Text, nullable=False)
    keywords = Column(Text, nullable=True)
    slug = Column(String(255), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now(), nullable=False)
