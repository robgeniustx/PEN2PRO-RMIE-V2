from typing import List, Optional
from pydantic import BaseModel

class FundingReadinessRequest(BaseModel):
    tier: str
    business_name: Optional[str] = None
    monthly_revenue: Optional[float] = None
    time_in_business_months: Optional[int] = None
    average_bank_balance: Optional[float] = None
    has_business_bank_statements: Optional[bool] = False
    has_tax_returns: Optional[bool] = False
    has_profit_loss_statement: Optional[bool] = False
    has_business_plan: Optional[bool] = False
    has_invoices_or_contracts: Optional[bool] = False
    has_personal_credit_review: Optional[bool] = False
    funding_goal: Optional[str] = None
    estimated_needed_amount: Optional[float] = None

class FundingReadinessResponse(BaseModel):
    status: str
    readiness_score: int
    readiness_level: str
    strengths: List[str]
    gaps: List[str]
    recommended_next_steps: List[str]
    document_checklist: List[str]
    funding_path_options: List[str]
    warnings: List[str]
    locked_sections: Optional[List[str]] = None
