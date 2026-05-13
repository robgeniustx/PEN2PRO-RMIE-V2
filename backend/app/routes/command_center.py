"""
P2P Command Center API Routes
CRM: Customers, Opportunities, Quotes, Invoices, Pipeline, Automations
"""
import uuid
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

from app.services.crm_service import crm_service
from app.services.niche_marketing_service import (
    get_automations,
    get_funnel_template,
    NICHE_FUNNELS,
    GENERAL_AUTOMATIONS,
    NICHE_AUTOMATIONS,
)
from app.models.opportunity import Opportunity
from app.models.quote import Quote, QuoteLineItem
from app.models.invoice import Invoice, InvoiceLineItem

router = APIRouter(prefix="/command-center", tags=["Command Center"])

# ---------------------------------------------------------------------------
# In-memory stores (replace with Motor/MongoDB collections in production)
# ---------------------------------------------------------------------------
_OPPORTUNITIES: Dict[str, dict] = {}
_QUOTES: Dict[str, dict] = {}
_INVOICES: Dict[str, dict] = {}
_PIPELINE_STAGES: Dict[str, List[str]] = {}


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


# ---------------------------------------------------------------------------
# DASHBOARD
# ---------------------------------------------------------------------------

@router.get("/dashboard")
def get_dashboard():
    """Return a summary of CRM metrics for the Command Center dashboard."""
    customers = crm_service.list_customers()
    opps = list(_OPPORTUNITIES.values())
    quotes = list(_QUOTES.values())
    invoices = list(_INVOICES.values())

    total_pipeline_value = sum(o.get("value", 0) for o in opps if o.get("stage") not in ("won", "lost"))
    total_won = sum(o.get("value", 0) for o in opps if o.get("stage") == "won")
    total_invoiced = sum(inv.get("total", 0) for inv in invoices)
    total_paid = sum(inv.get("total", 0) for inv in invoices if inv.get("status") == "paid")

    recent_customers = sorted(customers, key=lambda c: c.get("created_at", ""), reverse=True)[:5]

    return {
        "summary": {
            "total_customers": len(customers),
            "total_opportunities": len(opps),
            "open_opportunities": sum(1 for o in opps if o.get("stage") not in ("won", "lost")),
            "total_pipeline_value": round(total_pipeline_value, 2),
            "total_won_value": round(total_won, 2),
            "total_quotes": len(quotes),
            "pending_quotes": sum(1 for q in quotes if q.get("status") == "sent"),
            "total_invoiced": round(total_invoiced, 2),
            "total_paid": round(total_paid, 2),
            "outstanding_invoices": sum(1 for inv in invoices if inv.get("status") in ("sent", "overdue")),
        },
        "recent_customers": recent_customers,
        "recent_opportunities": sorted(opps, key=lambda o: o.get("created_at", ""), reverse=True)[:5],
    }


# ---------------------------------------------------------------------------
# CUSTOMERS (delegated to existing crm_service)
# ---------------------------------------------------------------------------

@router.get("/customers")
def list_customers(
    search: Optional[str] = Query(None),
    industry: Optional[str] = Query(None),
):
    customers = crm_service.list_customers()
    if search:
        s = search.lower()
        customers = [c for c in customers if s in c.get("name", "").lower() or s in c.get("email", "").lower()]
    if industry:
        customers = [c for c in customers if c.get("industry") == industry]
    return {"customers": customers, "total": len(customers)}


@router.get("/customers/{customer_id}")
def get_customer(customer_id: str):
    customer = crm_service.get_customer(customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


class CustomerCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    industry: Optional[str] = None
    source: Optional[str] = None
    notes: Optional[str] = None
    address: Optional[str] = None
    tags: List[str] = []


@router.post("/customers")
def create_customer(payload: CustomerCreate):
    customer_id = str(uuid.uuid4())
    customer = {
        "id": customer_id,
        **payload.dict(),
        "status": "active",
        "created_at": _now(),
        "updated_at": _now(),
    }
    crm_service.save_customer(customer)
    return customer


@router.patch("/customers/{customer_id}")
def update_customer(customer_id: str, payload: dict):
    customer = crm_service.get_customer(customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer.update(payload)
    customer["updated_at"] = _now()
    crm_service.save_customer(customer)
    return customer


@router.delete("/customers/{customer_id}")
def delete_customer(customer_id: str):
    success = crm_service.delete_customer(customer_id)
    if not success:
        raise HTTPException(status_code=404, detail="Customer not found")
    return {"deleted": True}


# ---------------------------------------------------------------------------
# OPPORTUNITIES / PIPELINE
# ---------------------------------------------------------------------------

class OpportunityCreate(BaseModel):
    name: str
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    stage: str = "prospect"
    value: float = 0.0
    probability: int = 0
    expected_close: Optional[str] = None
    source: Optional[str] = None
    notes: Optional[str] = None
    assigned_to: Optional[str] = None


@router.get("/opportunities")
def list_opportunities(stage: Optional[str] = Query(None)):
    opps = list(_OPPORTUNITIES.values())
    if stage:
        opps = [o for o in opps if o.get("stage") == stage]
    return {"opportunities": sorted(opps, key=lambda o: o.get("created_at", ""), reverse=True), "total": len(opps)}


@router.post("/opportunities")
def create_opportunity(payload: OpportunityCreate):
    opp_id = str(uuid.uuid4())
    opp = {
        "id": opp_id,
        **payload.dict(),
        "created_at": _now(),
        "updated_at": _now(),
    }
    _OPPORTUNITIES[opp_id] = opp
    return opp


@router.get("/opportunities/{opp_id}")
def get_opportunity(opp_id: str):
    opp = _OPPORTUNITIES.get(opp_id)
    if not opp:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    return opp


@router.patch("/opportunities/{opp_id}")
def update_opportunity(opp_id: str, payload: dict):
    opp = _OPPORTUNITIES.get(opp_id)
    if not opp:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    opp.update(payload)
    opp["updated_at"] = _now()
    return opp


@router.delete("/opportunities/{opp_id}")
def delete_opportunity(opp_id: str):
    if opp_id not in _OPPORTUNITIES:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    del _OPPORTUNITIES[opp_id]
    return {"deleted": True}


# ---------------------------------------------------------------------------
# QUOTES
# ---------------------------------------------------------------------------

class QuoteCreate(BaseModel):
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    items: List[dict] = []
    tax_rate: float = 0.0
    notes: Optional[str] = None
    valid_days: int = 30


@router.get("/quotes")
def list_quotes(status: Optional[str] = Query(None)):
    quotes = list(_QUOTES.values())
    if status:
        quotes = [q for q in quotes if q.get("status") == status]
    return {"quotes": sorted(quotes, key=lambda q: q.get("created_at", ""), reverse=True), "total": len(quotes)}


@router.post("/quotes")
def create_quote(payload: QuoteCreate):
    quote_id = str(uuid.uuid4())
    quote_number = f"Q-{datetime.now().strftime('%Y%m')}-{str(uuid.uuid4())[:4].upper()}"

    # Calculate totals
    items = []
    subtotal = 0.0
    for item in payload.items:
        qty = float(item.get("quantity", 1))
        price = float(item.get("unit_price", 0))
        total = round(qty * price, 2)
        subtotal += total
        items.append({**item, "quantity": qty, "unit_price": price, "total": total})

    tax = round(subtotal * (payload.tax_rate / 100), 2)
    total = round(subtotal + tax, 2)

    quote = {
        "id": quote_id,
        "quote_number": quote_number,
        "customer_id": payload.customer_id,
        "customer_name": payload.customer_name,
        "customer_email": payload.customer_email,
        "items": items,
        "subtotal": subtotal,
        "tax_rate": payload.tax_rate,
        "tax": tax,
        "total": total,
        "status": "draft",
        "notes": payload.notes,
        "created_at": _now(),
        "updated_at": _now(),
    }
    _QUOTES[quote_id] = quote
    return quote


@router.get("/quotes/{quote_id}")
def get_quote(quote_id: str):
    quote = _QUOTES.get(quote_id)
    if not quote:
        raise HTTPException(status_code=404, detail="Quote not found")
    return quote


@router.patch("/quotes/{quote_id}/status")
def update_quote_status(quote_id: str, status: str):
    quote = _QUOTES.get(quote_id)
    if not quote:
        raise HTTPException(status_code=404, detail="Quote not found")
    valid_statuses = ("draft", "sent", "accepted", "declined", "expired")
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
    quote["status"] = status
    quote["updated_at"] = _now()
    if status == "accepted":
        quote["accepted_at"] = _now()
    return quote


# ---------------------------------------------------------------------------
# INVOICES
# ---------------------------------------------------------------------------

class InvoiceCreate(BaseModel):
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    items: List[dict] = []
    tax_rate: float = 0.0
    notes: Optional[str] = None
    due_days: int = 30


@router.get("/invoices")
def list_invoices(status: Optional[str] = Query(None)):
    invoices = list(_INVOICES.values())
    if status:
        invoices = [inv for inv in invoices if inv.get("status") == status]
    return {"invoices": sorted(invoices, key=lambda i: i.get("created_at", ""), reverse=True), "total": len(invoices)}


@router.post("/invoices")
def create_invoice(payload: InvoiceCreate):
    invoice_id = str(uuid.uuid4())
    invoice_number = f"INV-{datetime.now().strftime('%Y%m')}-{str(uuid.uuid4())[:4].upper()}"

    items = []
    subtotal = 0.0
    for item in payload.items:
        qty = float(item.get("quantity", 1))
        price = float(item.get("unit_price", 0))
        total = round(qty * price, 2)
        subtotal += total
        items.append({**item, "quantity": qty, "unit_price": price, "total": total})

    tax = round(subtotal * (payload.tax_rate / 100), 2)
    total = round(subtotal + tax, 2)

    invoice = {
        "id": invoice_id,
        "invoice_number": invoice_number,
        "customer_id": payload.customer_id,
        "customer_name": payload.customer_name,
        "customer_email": payload.customer_email,
        "items": items,
        "subtotal": subtotal,
        "tax_rate": payload.tax_rate,
        "tax": tax,
        "total": total,
        "status": "draft",
        "notes": payload.notes,
        "created_at": _now(),
        "updated_at": _now(),
    }
    _INVOICES[invoice_id] = invoice
    return invoice


@router.get("/invoices/{invoice_id}")
def get_invoice(invoice_id: str):
    invoice = _INVOICES.get(invoice_id)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    return invoice


@router.patch("/invoices/{invoice_id}/status")
def update_invoice_status(invoice_id: str, status: str):
    invoice = _INVOICES.get(invoice_id)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    valid_statuses = ("draft", "sent", "paid", "overdue", "cancelled")
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
    invoice["status"] = status
    invoice["updated_at"] = _now()
    if status == "paid":
        invoice["paid_at"] = _now()
    return invoice


# Convert accepted quote to invoice
@router.post("/quotes/{quote_id}/convert-to-invoice")
def convert_quote_to_invoice(quote_id: str):
    quote = _QUOTES.get(quote_id)
    if not quote:
        raise HTTPException(status_code=404, detail="Quote not found")

    invoice_id = str(uuid.uuid4())
    invoice_number = f"INV-{datetime.now().strftime('%Y%m')}-{str(uuid.uuid4())[:4].upper()}"
    invoice = {
        "id": invoice_id,
        "invoice_number": invoice_number,
        "quote_id": quote_id,
        "customer_id": quote.get("customer_id"),
        "customer_name": quote.get("customer_name"),
        "customer_email": quote.get("customer_email"),
        "items": quote.get("items", []),
        "subtotal": quote.get("subtotal", 0),
        "tax_rate": quote.get("tax_rate", 0),
        "tax": quote.get("tax", 0),
        "total": quote.get("total", 0),
        "status": "draft",
        "notes": quote.get("notes"),
        "created_at": _now(),
        "updated_at": _now(),
    }
    _INVOICES[invoice_id] = invoice
    quote["status"] = "accepted"
    quote["updated_at"] = _now()
    return invoice


# ---------------------------------------------------------------------------
# CRM PIPELINE STAGES (niche-aware)
# ---------------------------------------------------------------------------

@router.get("/pipeline/stages")
def get_pipeline_stages(industry: Optional[str] = Query(None)):
    """Return pipeline stages, with niche-specific stages if industry is provided."""
    from app.services.niche_marketing_service import get_funnel_template
    if industry:
        template = get_funnel_template(industry)
        stages = template.get("pipeline_stages", [])
    else:
        stages = ["New Lead", "Contacted", "Quote Sent", "Job Scheduled", "Completed", "Invoiced", "Paid"]
    return {"stages": stages, "industry": industry}


# ---------------------------------------------------------------------------
# AUTOMATION TEMPLATES
# ---------------------------------------------------------------------------

@router.get("/automations")
def get_automation_templates(industry: Optional[str] = Query(None)):
    """Return general + niche-specific automation templates."""
    return get_automations(industry)


@router.get("/automations/all-industries")
def list_all_niche_automations():
    """Return all niche automation template IDs grouped by industry."""
    return {
        industry: [a["id"] for a in automations]
        for industry, automations in NICHE_AUTOMATIONS.items()
    }


# ---------------------------------------------------------------------------
# FUNNEL TEMPLATES
# ---------------------------------------------------------------------------

@router.get("/funnel-template")
def get_funnel_template_route(industry: str = Query(...)):
    template = get_funnel_template(industry)
    return {"industry": industry, "template": template}


@router.get("/funnel-templates")
def list_all_funnel_templates():
    return {"templates": list(NICHE_FUNNELS.keys())}


# ---------------------------------------------------------------------------
# NICHE CRM TEMPLATE (full config for onboarding a new industry)
# ---------------------------------------------------------------------------

@router.get("/niche-template")
def get_niche_crm_template(industry: str = Query(...)):
    """
    Return a complete niche CRM configuration including pipeline stages,
    automation templates, and funnel template for the given industry.
    """
    funnel = get_funnel_template(industry)
    automations = get_automations(industry)
    pipeline_stages = funnel.get("pipeline_stages", ["New Lead", "Contacted", "Proposal", "Closed"])

    return {
        "industry": industry,
        "pipeline_stages": pipeline_stages,
        "automations": automations,
        "funnel_template": funnel,
    }
