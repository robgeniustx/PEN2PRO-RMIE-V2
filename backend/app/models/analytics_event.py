from sqlalchemy import Column, DateTime, Integer, JSON, String, func

from app.database import Base


class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True, index=True)
    session_id = Column(String(128), nullable=True, index=True)
    event_name = Column(String(120), nullable=False, index=True)
    event_category = Column(String(50), nullable=True, index=True)
    tier = Column(String(20), nullable=True, index=True)
    page_path = Column(String(255), nullable=True)
    metadata = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
