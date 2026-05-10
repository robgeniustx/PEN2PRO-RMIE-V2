from sqlalchemy import Column, DateTime, Integer, String, Text, func

from app.core.database import Base


class WebsiteProject(Base):
    __tablename__ = "website_projects"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    company_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    business_name = Column(String(255), nullable=False)
    domain_idea = Column(String(255), nullable=True)
    website_goal = Column(
        String(50),
        nullable=True,
        doc="lead_capture|appointment_booking|service_sales|product_sales|credibility|waitlist",
    )
    status = Column(String(50), nullable=False, default="draft")
    brand_direction = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now(), nullable=False)
