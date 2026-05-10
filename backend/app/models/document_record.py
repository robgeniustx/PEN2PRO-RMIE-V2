from sqlalchemy import Column, DateTime, Integer, String, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class DocumentRecord(Base):
    __tablename__ = 'document_records'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    company_id = Column(Integer, nullable=True)
    document_type = Column(String, nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    storage_url = Column(String, nullable=True)
    status = Column(String, default='needed')
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())
