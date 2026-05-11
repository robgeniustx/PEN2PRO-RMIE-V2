from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class CreditReadinessRequest(BaseModel):
    tier: str
    business_name: Optional[str] = None
    entity_type: Optional[str] = None
    has_ein: Optional[bool] = False
    has_business_bank: Optional[bool] = False
    has_business_address: Optional[bool] = False
    has_business_phone: Optional[bool] = False
    has_business_email: Optional[bool] = False
    has_website: Optional[bool] = False
    has_bookkeeping: Optional[bool] = False
    has_duns_number: Optional[bool] = False
    has_vendor_accounts: Optional[bool] = False
    vendor_accounts_notes: Optional[str] = None
    goals: Optional[List[str]] = None

class CreditReadinessResponse(BaseModel):
    status: str
    readiness_score: int
    readiness_level: str
    checklist: List[dict]
    missing_foundations: List[str]
    vendor_credit_guidance: List[str]
    education_notes: List[str]
    next_steps: List[str]
    locked_sections: Optional[List[str]] = None

class DocumentRecordCreate(BaseModel):
    document_type: str
    title: str
    description: Optional[str] = None
    storage_url: Optional[str] = None
    status: Optional[str] = 'needed'

class DocumentRecordResponse(DocumentRecordCreate):
    id: int
    created_at: datetime
    updated_at: datetime

class DisputeWorkspaceRequest(BaseModel):
    tier: str
    issue_type: str
    creditor_or_furnisher: Optional[str] = None
    bureau: Optional[str] = None
    account_identifier: Optional[str] = None
    facts_provided_by_user: str
    desired_outcome: Optional[str] = None

class DisputeWorkspaceResponse(BaseModel):
    status: str
    organizer_summary: str
    evidence_checklist: List[str]
    draft_letter_outline: List[str]
    warnings: List[str]
    next_steps: List[str]
