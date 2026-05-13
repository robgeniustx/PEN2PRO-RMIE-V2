"""Invoice model for P2P Command Center."""
from datetime import datetime, timezone
from typing import List, Optional
from pydantic import BaseModel, Field


class InvoiceLineItem(BaseModel):
    description: str
    quantity: float = 1.0
    unit_price: float = 0.0
    total: float = 0.0


class Invoice(BaseModel):
    id: str
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    invoice_number: Optional[str] = None
    items: List[InvoiceLineItem] = []
    subtotal: float = 0.0
    tax_rate: float = 0.0
    tax: float = 0.0
    total: float = 0.0
    status: str = "draft"          # draft | sent | paid | overdue | cancelled
    due_date: Optional[datetime] = None
    paid_at: Optional[datetime] = None
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
