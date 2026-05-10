from datetime import date, datetime
from typing import Literal, Optional
from pydantic import BaseModel

class LeadCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    social_handle: Optional[str] = None
    source: Optional[Literal['social','outreach','referral','website','manual','other']] = None
    status: Optional[Literal['new','contacted','follow_up','won','lost']] = None
    interest_level: Optional[Literal['low','medium','high']] = None
    need_summary: Optional[str] = None
    notes: Optional[str] = None
    deal_value: Optional[float] = None
    next_follow_up_at: Optional[datetime] = None
    blueprint_id: Optional[int] = None
    company_id: Optional[int] = None

class LeadUpdate(LeadCreate):
    name: Optional[str] = None

class LeadResponse(LeadCreate):
    id: int
    user_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

class CustomerCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    social_handle: Optional[str] = None
    customer_type: Optional[str] = None
    notes: Optional[str] = None
    lifetime_value: Optional[float] = None
    lead_id: Optional[int] = None
    company_id: Optional[int] = None

class CustomerResponse(CustomerCreate):
    id: int
    user_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

class DealCreate(BaseModel):
    title: str
    value: Optional[float] = None
    stage: Optional[Literal['new','qualified','proposal','follow_up','won','lost']] = None
    probability: Optional[float] = None
    expected_close_date: Optional[date] = None
    notes: Optional[str] = None
    lead_id: Optional[int] = None
    customer_id: Optional[int] = None

class DealResponse(DealCreate):
    id: int
    user_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

class FollowUpCreate(BaseModel):
    lead_id: Optional[int] = None
    customer_id: Optional[int] = None
    channel: Literal['text','email','dm','call','in_person']
    message: str
    status: Optional[Literal['draft','scheduled','completed','cancelled']] = None
    due_at: Optional[datetime] = None

class FollowUpResponse(FollowUpCreate):
    id: int
    user_id: Optional[int] = None
    completed_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime

class FollowUpGenerateRequest(BaseModel):
    lead_name: str
    business_name: Optional[str] = None
    offer: str
    need_summary: Optional[str] = None
    channel: Literal['text','email','dm','call','in_person']
    tone: Optional[str] = 'friendly'
    objective: Literal['first_contact','follow_up','close_sale','reactivation']

class FollowUpGenerateResponse(BaseModel):
    status: str
    message: str
    subject: Optional[str] = None
    channel: str
    next_step: str
    warnings: Optional[list[str]] = None
