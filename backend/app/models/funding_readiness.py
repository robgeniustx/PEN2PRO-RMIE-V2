from sqlalchemy import Boolean, Column, DateTime, Float, Integer, String, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class FundingReadiness(Base):
    __tablename__ = 'funding_readiness'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    company_id = Column(Integer, nullable=True)
    blueprint_id = Column(Integer, nullable=True)
    monthly_revenue = Column(Float, nullable=True)
    time_in_business_months = Column(Integer, nullable=True)
    average_bank_balance = Column(Float, nullable=True)
    has_business_bank_statements = Column(Boolean, default=False)
    has_tax_returns = Column(Boolean, default=False)
    has_profit_loss_statement = Column(Boolean, default=False)
    has_business_plan = Column(Boolean, default=False)
    has_invoices_or_contracts = Column(Boolean, default=False)
    has_personal_credit_review = Column(Boolean, default=False)
    funding_goal = Column(String, nullable=True)
    estimated_needed_amount = Column(Float, nullable=True)
    readiness_score = Column(Integer, nullable=True)
    risk_notes = Column(Text, nullable=True)
    recommended_next_steps = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())
