from sqlalchemy import Column, DateTime, Float, Integer, JSON, String, func

from app.database import Base


class ConversionEvent(Base):
    __tablename__ = "conversion_events"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True, index=True)
    session_id = Column(String(128), nullable=True, index=True)
    source_page = Column(String(255), nullable=True)
    prompt_location = Column(String(120), nullable=True)
    from_tier = Column(String(20), nullable=True)
    to_tier = Column(String(20), nullable=True)
    conversion_type = Column(String(60), nullable=False, index=True)
    amount = Column(Float, nullable=True)
    currency = Column(String(10), nullable=True)
    stripe_session_id = Column(String(255), nullable=True)
    metadata = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
