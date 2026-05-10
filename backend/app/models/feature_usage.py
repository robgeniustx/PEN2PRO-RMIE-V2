from sqlalchemy import Column, DateTime, Integer, String, func

from app.database import Base


class FeatureUsage(Base):
    __tablename__ = "feature_usage"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True, index=True)
    feature_name = Column(String(120), nullable=False, index=True)
    module_name = Column(String(50), nullable=False, index=True)
    tier = Column(String(20), nullable=True, index=True)
    usage_count = Column(Integer, nullable=False, default=1)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
