from sqlalchemy import Column, DateTime, Float, Integer, String, Text
from sqlalchemy.sql import func
from app.database import Base

class ConversionEvent(Base):
    __tablename__ = "conversion_events"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    session_id = Column(String, nullable=True)
    source_page = Column(String, nullable=True)
    prompt_location = Column(String, nullable=True)
    from_tier = Column(String, nullable=True)
    to_tier = Column(String, nullable=True)
    conversion_type = Column(String, nullable=False, index=True)
    amount = Column(Float, nullable=True)
    currency = Column(String, nullable=True)
    stripe_session_id = Column(String, nullable=True)
    metadata_json = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
