"""Quote / Estimate model for P2P Command Center."""
from datetime import datetime, timezone
from typing import List, Optional
from pydantic import BaseModel, Field


class QuoteLineItem(BaseModel):
    description: str
    quantity: float = 1.0
    unit_price: float = 0.0
    total: float = 0.0


class Quote(BaseModel):
    id: str
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    quote_number: Optional[str] = None
    items: List[QuoteLineItem] = []
    subtotal: float = 0.0
    tax_rate: float = 0.0
    tax: float = 0.0
    total: float = 0.0
    status: str = "draft"          # draft | sent | accepted | declined | expired
    valid_until: Optional[datetime] = None
    accepted_at: Optional[datetime] = None
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
