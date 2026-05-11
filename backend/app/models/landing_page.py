from sqlalchemy import Column, DateTime, Integer, String, Text, func

from app.core.database import Base


class LandingPage(Base):
    __tablename__ = "landing_pages"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    website_project_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    hero_headline = Column(String(255), nullable=False)
    hero_subheadline = Column(Text, nullable=False)
    primary_cta = Column(String(255), nullable=False)
    secondary_cta = Column(String(255), nullable=True)
    problem_section = Column(Text, nullable=True)
    offer_section = Column(Text, nullable=True)
    benefits = Column(Text, nullable=True)
    proof_section = Column(Text, nullable=True)
    process_steps = Column(Text, nullable=True)
    faq = Column(Text, nullable=True)
    contact_section = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now(), nullable=False)
