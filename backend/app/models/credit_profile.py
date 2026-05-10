from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class CreditProfile(Base):
    __tablename__ = 'credit_profiles'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    company_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    entity_type = Column(String, nullable=True)
    has_ein = Column(Boolean, default=False)
    has_business_bank = Column(Boolean, default=False)
    has_business_address = Column(Boolean, default=False)
    has_business_phone = Column(Boolean, default=False)
    has_business_email = Column(Boolean, default=False)
    has_website = Column(Boolean, default=False)
    has_bookkeeping = Column(Boolean, default=False)
    has_duns_number = Column(Boolean, default=False)
    has_vendor_accounts = Column(Boolean, default=False)
    vendor_accounts_notes = Column(Text, nullable=True)
    credit_education_notes = Column(Text, nullable=True)
    readiness_score = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())
