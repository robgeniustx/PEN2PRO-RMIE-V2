from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.sql import func
from app.database import Base

class FeatureUsage(Base):
    __tablename__ = "feature_usage"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    feature_name = Column(String, nullable=False, index=True)
    module_name = Column(String, nullable=False, index=True)
    tier = Column(String, nullable=True)
    usage_count = Column(Integer, default=1, nullable=False)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
