from sqlalchemy import Column, Date, DateTime, Float, Integer, String, Text
from sqlalchemy.sql import func
from app.models.base import Base


class Deal(Base):
    __tablename__ = "deals"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    lead_id = Column(Integer, nullable=True)
    customer_id = Column(Integer, nullable=True)
    title = Column(String(255), nullable=False)
    value = Column(Float, nullable=True)
    stage = Column(String(50), nullable=False, default="new")
    probability = Column(Float, nullable=True)
    expected_close_date = Column(Date, nullable=True)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
