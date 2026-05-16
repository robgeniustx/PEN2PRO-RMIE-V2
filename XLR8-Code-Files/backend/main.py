"""
XLR8 Pressure Washing Services — FastAPI Backend
main.py

Endpoints:
  POST /api/quotes/calculate
  POST /api/quotes/create
  GET  /api/quotes/{quote_id}
  POST /api/quotes/{quote_id}/status
  POST /api/invoices/create
  GET  /api/invoices/{invoice_id}
  POST /api/stripe/create-checkout-session
  GET  /api/stripe/session-status/{session_id}
  POST /api/stripe/webhook
  POST /api/notifications/owner
  POST /api/analytics/log
  GET  /api/admin/quotes
  GET  /api/admin/metrics

Environment Variables Required:
  STRIPE_SECRET_KEY
  STRIPE_WEBHOOK_SECRET
  STRIPE_PRICE_DEPOSIT_PRODUCT    (optional — if using Products instead of price_data)
  ADMIN_ACCESS_KEY
  OWNER_EMAIL
  OWNER_PHONE                     (E.164 format: +18324595981)
  SENDGRID_API_KEY                (or SMTP credentials)
  FROM_EMAIL
  TWILIO_ACCOUNT_SID              (optional — for SMS notifications)
  TWILIO_AUTH_TOKEN               (optional)
  TWILIO_FROM_NUMBER              (optional)
  FRONTEND_URL                    (e.g. https://xlr8pws.com)
  DATABASE_URL                    (SQLite for local; PostgreSQL for Render)

Install:
  pip install fastapi uvicorn stripe sqlalchemy python-dotenv
               sendgrid twilio httpx pydantic

Run locally:
  uvicorn main:app --reload --port 8000
"""

import os
import json
import uuid
import hmac
import hashlib
import logging
from datetime import datetime, timedelta
from typing import Optional, List

import stripe
from fastapi import FastAPI, HTTPException, Header, Request, BackgroundTasks, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, String, Integer, Boolean, Text, DateTime, Float
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from dotenv import load_dotenv

load_dotenv()

# ─── Config ───────────────────────────────────────────────────────────────────

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")
ADMIN_ACCESS_KEY = os.getenv("ADMIN_ACCESS_KEY", "change-this-key")
OWNER_EMAIL = os.getenv("OWNER_EMAIL", "info@xlr8pws.com")
OWNER_PHONE = os.getenv("OWNER_PHONE", "+18324595981")
FRONTEND_URL = os.getenv("FRONTEND_URL", "https://xlr8pws.com")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./xlr8.db")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("xlr8")

# ─── Database ─────────────────────────────────────────────────────────────────

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {},
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class QuoteRecord(Base):
    __tablename__ = "quotes"
    id = Column(String, primary_key=True, default=lambda: f"QT-{uuid.uuid4().hex[:8].upper()}")
    customer_name = Column(String)
    customer_email = Column(String)
    customer_phone = Column(String)
    service_address = Column(String)
    property_type = Column(String)
    service_key = Column(String)
    service_label = Column(String)
    line_items_json = Column(Text)       # JSON string
    subtotal = Column(Integer)           # cents
    tax = Column(Integer, default=0)
    total = Column(Integer)              # cents
    deposit_amount = Column(Integer)
    balance_due = Column(Integer)
    requires_deposit = Column(Boolean, default=False)
    requires_custom_quote = Column(Boolean, default=False)
    preferred_date = Column(String, nullable=True)
    preferred_time = Column(String, nullable=True)
    status = Column(String, default="quote_created")
    stripe_session_id = Column(String, nullable=True)
    stripe_payment_intent = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    source_page = Column(String, nullable=True)
    ref = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class InvoiceRecord(Base):
    __tablename__ = "invoices"
    id = Column(String, primary_key=True, default=lambda: f"INV-{uuid.uuid4().hex[:8].upper()}")
    invoice_number = Column(String)
    quote_id = Column(String)
    customer_name = Column(String)
    customer_email = Column(String)
    service_address = Column(String)
    line_items_json = Column(Text)
    total = Column(Integer)
    deposit_amount = Column(Integer)
    balance_due = Column(Integer)
    status = Column(String, default="draft")
    stripe_session_id = Column(String, nullable=True)
    paid_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class VisitorEvent(Base):
    __tablename__ = "visitor_events"
    id = Column(Integer, primary_key=True, autoincrement=True)
    event_type = Column(String)
    page = Column(String)
    referrer = Column(String, nullable=True)
    utm_source = Column(String, nullable=True)
    utm_campaign = Column(String, nullable=True)
    utm_medium = Column(String, nullable=True)
    ref = Column(String, nullable=True)
    metadata_json = Column(Text, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)


class NotificationLog(Base):
    __tablename__ = "notification_logs"
    id = Column(Integer, primary_key=True, autoincrement=True)
    event_type = Column(String)
    payload_json = Column(Text)
    sent_email = Column(Boolean, default=False)
    sent_sms = Column(Boolean, default=False)
    error = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ─── App ──────────────────────────────────────────────────────────────────────

app = FastAPI(title="XLR8 Pressure Washing API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Pricing Logic (mirrors pricingConfig.js) ─────────────────────────────────

PRICING = {
    "minimumCharges": {"residential": 12500, "commercial": 30000},
    "services": {
        "driveway":   {"category": "residential", "basePrice": 15000, "pricePerSqFt": 35,  "includedSqFt": 400},
        "sidewalk":   {"category": "residential", "basePrice": 10000, "pricePerSqFt": 35,  "includedSqFt": 200},
        "patio":      {"category": "residential", "basePrice": 17500, "pricePerSqFt": 40,  "includedSqFt": 300},
        "house_sm":   {"category": "residential", "basePrice": 29900, "pricePerSqFt": 0,   "includedSqFt": 1500},
        "house_md":   {"category": "residential", "basePrice": 39900, "pricePerSqFt": 0,   "includedSqFt": 2500},
        "house_lg":   {"category": "residential", "basePrice": 49900, "pricePerSqFt": 8,   "includedSqFt": 2500},
        "fence":      {"category": "residential", "basePrice": 10000, "pricePerSqFt": 0,   "includedSqFt": 0},
        "garage_floor":{"category": "residential","basePrice": 12500, "pricePerSqFt": 0,   "includedSqFt": 400},
        "roof_softwash":{"category": "residential","requiresCustomQuote": True},
        "storefront": {"category": "commercial",  "basePrice": 25000, "pricePerSqFt": 20,  "includedSqFt": 0},
        "parking_lot":{"category": "commercial",  "basePrice": 35000, "pricePerSqFt": 12,  "includedSqFt": 0},
        "dumpster_pad":{"category": "commercial", "basePrice": 15000, "pricePerSqFt": 0,   "includedSqFt": 200},
        "apartment_building":{"category": "commercial", "requiresCustomQuote": True},
        "fleet_vehicle":{"category": "commercial","basePrice": 7500,  "pricePerUnit": 7500},
        "graffiti":   {"category": "commercial",  "basePrice": 15000, "pricePerSqFt": 300, "includedSqFt": 0},
    },
    "multipliers": {
        "buildup": {"light": 1.0, "moderate": 1.15, "heavy": 1.30, "severe": 1.50},
        "stories": {"1": 1.0, "2": 1.20, "3": 1.40, "4+": 1.60},
        "noWaterAccess": 1.10,
        "extendedTravel": 1.08,
    },
    "addOns": {
        "surface_sealing": {"pricePerSqFt": 25},
        "rust_removal":    {"basePrice": 7500},
        "gum_removal":     {"basePrice": 5000},
        "gutter_exterior": {"basePrice": 7500},
    },
    "surcharges": {"priority48hr": 7500, "sameDay": 15000},
    "depositRules": {"fullPaymentThreshold": 30000, "depositPercent": 0.50},
    "tax": {"rate": 0.0},
}


def calculate_quote_logic(service_key: str, inputs: dict) -> dict:
    svc = PRICING["services"].get(service_key)
    if not svc:
        raise HTTPException(status_code=400, detail=f"Unknown service: {service_key}")
    if svc.get("requiresCustomQuote"):
        return {"requiresCustomQuote": True, "lineItems": [], "total": 0}

    sq_ft = int(inputs.get("sqFt", 0))
    stories = str(inputs.get("stories", "1"))
    buildup = inputs.get("buildupLevel", "light")
    urgency = inputs.get("urgency", "standard")
    has_water = inputs.get("hasWater", True)
    is_extended = inputs.get("isExtended", False)
    selected_add_ons = inputs.get("selectedAddOns", [])
    units = int(inputs.get("units", 1))

    line_items = []
    base = svc.get("basePrice", 0)
    price_per_sqft = svc.get("pricePerSqFt", 0)
    included_sqft = svc.get("includedSqFt", 0)

    # Base + overage
    if price_per_sqft and sq_ft > included_sqft and included_sqft > 0:
        overage = (sq_ft - included_sqft) * price_per_sqft
        line_items.append({"label": f"{service_key} — base ({included_sqft} sqft included)", "amount": base})
        line_items.append({"label": f"Additional sqft ({sq_ft - included_sqft} × ${price_per_sqft/100:.2f})", "amount": overage})
        base += overage
    elif price_per_sqft and sq_ft > 0 and included_sqft == 0:
        base = max(svc["basePrice"], sq_ft * price_per_sqft)
        line_items.append({"label": f"{service_key} ({sq_ft} sqft × ${price_per_sqft/100:.2f})", "amount": base})
    elif svc.get("pricePerUnit") and units > 1:
        base = svc["pricePerUnit"] * units
        line_items.append({"label": f"{service_key} ({units} units)", "amount": base})
    else:
        label_map = {k: v.get("label", k) for k, v in PRICING["services"].items()}
        line_items.append({"label": service_key, "amount": base})

    subtotal = base

    # Buildup
    bm = PRICING["multipliers"]["buildup"].get(buildup, 1.0)
    if bm > 1.0:
        charge = round(subtotal * (bm - 1.0))
        line_items.append({"label": f"Heavy buildup adjustment ({round((bm-1)*100)}%)", "amount": charge})
        subtotal += charge

    # Stories
    sm = PRICING["multipliers"]["stories"].get(stories, 1.0)
    if sm > 1.0:
        charge = round(subtotal * (sm - 1.0))
        line_items.append({"label": f"Multi-story adjustment ({stories} stories)", "amount": charge})
        subtotal += charge

    # No water
    if not has_water:
        charge = round(subtotal * (PRICING["multipliers"]["noWaterAccess"] - 1.0))
        line_items.append({"label": "No on-site water access surcharge", "amount": charge})
        subtotal += charge

    # Extended travel
    if is_extended:
        charge = round(subtotal * (PRICING["multipliers"]["extendedTravel"] - 1.0))
        line_items.append({"label": "Extended service area travel", "amount": charge})
        subtotal += charge

    # Add-ons
    for key in selected_add_ons:
        ao = PRICING["addOns"].get(key)
        if not ao:
            continue
        if ao.get("pricePerSqFt") and sq_ft > 0:
            amount = sq_ft * ao["pricePerSqFt"]
        else:
            amount = ao.get("basePrice", 0)
        line_items.append({"label": key, "amount": amount})
        subtotal += amount

    # Urgency
    if urgency == "priority":
        line_items.append({"label": "Priority service (48-hour)", "amount": PRICING["surcharges"]["priority48hr"]})
        subtotal += PRICING["surcharges"]["priority48hr"]
    elif urgency == "emergency":
        line_items.append({"label": "Emergency same-day", "amount": PRICING["surcharges"]["sameDay"]})
        subtotal += PRICING["surcharges"]["sameDay"]

    # Minimum charge
    category = svc.get("category", "residential")
    min_charge = PRICING["minimumCharges"].get(category, 12500)
    if subtotal < min_charge:
        line_items.append({"label": "Minimum service charge adjustment", "amount": min_charge - subtotal})
        subtotal = min_charge

    # Tax
    tax = round(subtotal * PRICING["tax"]["rate"])
    total = subtotal + tax

    # Deposit
    requires_deposit = total > PRICING["depositRules"]["fullPaymentThreshold"]
    deposit_amount = round(total * PRICING["depositRules"]["depositPercent"]) if requires_deposit else total
    balance_due = total - deposit_amount

    return {
        "requiresCustomQuote": False,
        "lineItems": line_items,
        "subtotal": subtotal,
        "tax": tax,
        "total": total,
        "requiresDeposit": requires_deposit,
        "depositAmount": deposit_amount,
        "balanceDue": balance_due,
        "currency": "usd",
    }


# ─── Pydantic Models ──────────────────────────────────────────────────────────

class QuoteCalculateRequest(BaseModel):
    service_key: str
    inputs: dict

class CustomerInfo(BaseModel):
    name: str
    email: str
    phone: str
    serviceAddress: str
    propertyType: str = "residential"

class CreateQuoteRequest(BaseModel):
    quote_id: Optional[str] = None
    customer: CustomerInfo
    service_key: str
    service_label: str
    line_items: List[dict]
    total: int
    deposit_amount: int
    requires_custom_quote: bool = False
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    source_page: Optional[str] = None
    ref: Optional[str] = None
    notes: Optional[str] = None

class CreateInvoiceRequest(BaseModel):
    quote_id: str
    customer_name: str
    customer_email: str
    service_address: str
    line_items: List[dict]
    total: int
    deposit_amount: int
    balance_due: int

class CreateCheckoutSessionRequest(BaseModel):
    quote_id: str
    invoice_id: Optional[str] = None
    customer_name: str
    customer_email: str
    customer_phone: str
    service_address: str
    property_type: str
    selected_service: str
    line_items: List[dict]
    calculated_total: int
    deposit_amount: int
    requires_deposit: bool
    balance_due: int
    preferred_date: Optional[str] = None
    success_url: Optional[str] = None
    cancel_url: Optional[str] = None

class OwnerNotificationRequest(BaseModel):
    event_type: str
    timestamp: Optional[str] = None
    page: Optional[str] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    customer_phone: Optional[str] = None
    service_address: Optional[str] = None
    service: Optional[str] = None
    estimated_total: Optional[str] = None
    quote_id: Optional[str] = None
    note: Optional[str] = None

class AnalyticsLogRequest(BaseModel):
    event_type: str
    page: Optional[str] = None
    timestamp: Optional[str] = None
    referrer: Optional[str] = None
    utm_source: Optional[str] = None
    utm_campaign: Optional[str] = None
    utm_medium: Optional[str] = None
    ref: Optional[str] = None


# ─── Admin Auth Dependency ────────────────────────────────────────────────────

def require_admin(x_admin_key: str = Header(None)):
    if not x_admin_key or x_admin_key != ADMIN_ACCESS_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return x_admin_key


# ─── Notification Helpers ─────────────────────────────────────────────────────

async def send_owner_email(subject: str, body: str):
    """Send email to owner via SendGrid."""
    sendgrid_key = os.getenv("SENDGRID_API_KEY")
    from_email = os.getenv("FROM_EMAIL", "noreply@xlr8pws.com")
    if not sendgrid_key:
        logger.warning("SENDGRID_API_KEY not set — skipping email")
        return False
    try:
        import httpx
        resp = httpx.post(
            "https://api.sendgrid.com/v3/mail/send",
            headers={"Authorization": f"Bearer {sendgrid_key}", "Content-Type": "application/json"},
            json={
                "personalizations": [{"to": [{"email": OWNER_EMAIL}]}],
                "from": {"email": from_email, "name": "XLR8 Quote System"},
                "subject": subject,
                "content": [{"type": "text/plain", "value": body}],
            },
            timeout=10,
        )
        return resp.status_code == 202
    except Exception as e:
        logger.error(f"Email send failed: {e}")
        return False


async def send_owner_sms(message: str):
    """Send SMS to owner via Twilio."""
    sid = os.getenv("TWILIO_ACCOUNT_SID")
    token = os.getenv("TWILIO_AUTH_TOKEN")
    from_num = os.getenv("TWILIO_FROM_NUMBER")
    if not all([sid, token, from_num]):
        logger.warning("Twilio not configured — skipping SMS")
        return False
    try:
        import httpx
        resp = httpx.post(
            f"https://api.twilio.com/2010-04-01/Accounts/{sid}/Messages.json",
            auth=(sid, token),
            data={"From": from_num, "To": OWNER_PHONE, "Body": message[:1600]},
            timeout=10,
        )
        return resp.status_code == 201
    except Exception as e:
        logger.error(f"SMS send failed: {e}")
        return False


async def notify_owner_background(event_type: str, payload: dict, db: Session):
    """Build and send owner notification, then log it."""
    evt = event_type.replace("_", " ").title()
    lines = [f"🚨 XLR8 Alert: {evt}"]
    for k, v in payload.items():
        if v:
            lines.append(f"  {k.replace('_',' ').title()}: {v}")
    lines.append(f"\n  Admin: {FRONTEND_URL}/admin")
    body = "\n".join(lines)

    sent_email = await send_owner_email(f"XLR8: {evt}", body)
    sent_sms = await send_owner_sms(body[:300])

    log = NotificationLog(
        event_type=event_type,
        payload_json=json.dumps(payload),
        sent_email=sent_email,
        sent_sms=sent_sms,
    )
    db.add(log)
    db.commit()


# ─── Routes ───────────────────────────────────────────────────────────────────

@app.get("/")
def health():
    return {"status": "ok", "service": "XLR8 Pressure Washing API"}


# Quote: Calculate
@app.post("/api/quotes/calculate")
def api_calculate_quote(req: QuoteCalculateRequest):
    return calculate_quote_logic(req.service_key, req.inputs)


# Quote: Create
@app.post("/api/quotes/create")
async def api_create_quote(req: CreateQuoteRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    quote_id = req.quote_id or f"QT-{uuid.uuid4().hex[:8].upper()}"
    balance = req.total - req.deposit_amount

    record = QuoteRecord(
        id=quote_id,
        customer_name=req.customer.name,
        customer_email=req.customer.email,
        customer_phone=req.customer.phone,
        service_address=req.customer.serviceAddress,
        property_type=req.customer.propertyType,
        service_key=req.service_key,
        service_label=req.service_label,
        line_items_json=json.dumps(req.line_items),
        total=req.total,
        deposit_amount=req.deposit_amount,
        balance_due=balance,
        requires_custom_quote=req.requires_custom_quote,
        preferred_date=req.preferred_date,
        preferred_time=req.preferred_time,
        source_page=req.source_page,
        ref=req.ref,
        notes=req.notes,
        status="quote_created",
    )
    db.add(record)
    db.commit()

    background_tasks.add_task(notify_owner_background, "quote_created", {
        "quote_id": quote_id,
        "customer_name": req.customer.name,
        "customer_phone": req.customer.phone,
        "customer_email": req.customer.email,
        "service_address": req.customer.serviceAddress,
        "service": req.service_label,
        "total": f"${req.total/100:.2f}",
        "custom_quote": str(req.requires_custom_quote),
    }, db)

    return {"quote_id": quote_id, "status": "quote_created", "created_at": record.created_at.isoformat()}


# Quote: Get
@app.get("/api/quotes/{quote_id}")
def api_get_quote(quote_id: str, db: Session = Depends(get_db)):
    q = db.query(QuoteRecord).filter(QuoteRecord.id == quote_id).first()
    if not q:
        raise HTTPException(status_code=404, detail="Quote not found")
    return {
        "quote_id": q.id, "customer_name": q.customer_name,
        "customer_email": q.customer_email, "service_label": q.service_label,
        "total": q.total, "deposit_amount": q.deposit_amount,
        "balance_due": q.balance_due, "status": q.status,
        "created_at": q.created_at.isoformat(),
        "line_items": json.loads(q.line_items_json or "[]"),
    }


# Quote: Update status
@app.post("/api/quotes/{quote_id}/status")
def api_update_quote_status(quote_id: str, body: dict, db: Session = Depends(get_db)):
    q = db.query(QuoteRecord).filter(QuoteRecord.id == quote_id).first()
    if not q:
        raise HTTPException(status_code=404, detail="Quote not found")
    valid_statuses = ["draft","quote_created","quote_sent","customer_approved",
                      "pending_payment","deposit_paid","paid_in_full",
                      "payment_failed","scheduled","completed","canceled"]
    new_status = body.get("status")
    if new_status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status: {new_status}")
    q.status = new_status
    q.updated_at = datetime.utcnow()
    db.commit()
    return {"quote_id": quote_id, "status": q.status}


# Invoice: Create
@app.post("/api/invoices/create")
def api_create_invoice(req: CreateInvoiceRequest, db: Session = Depends(get_db)):
    invoice_id = f"INV-{uuid.uuid4().hex[:8].upper()}"
    count = db.query(InvoiceRecord).count()
    invoice_number = f"XLR8-{1000 + count + 1}"

    inv = InvoiceRecord(
        id=invoice_id,
        invoice_number=invoice_number,
        quote_id=req.quote_id,
        customer_name=req.customer_name,
        customer_email=req.customer_email,
        service_address=req.service_address,
        line_items_json=json.dumps(req.line_items),
        total=req.total,
        deposit_amount=req.deposit_amount,
        balance_due=req.balance_due,
        status="draft",
    )
    db.add(inv)
    db.commit()
    return {"invoice_id": invoice_id, "invoice_number": invoice_number, "status": "draft"}


# Invoice: Get
@app.get("/api/invoices/{invoice_id}")
def api_get_invoice(invoice_id: str, db: Session = Depends(get_db)):
    inv = db.query(InvoiceRecord).filter(InvoiceRecord.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")
    return {
        "invoice_id": inv.id, "invoice_number": inv.invoice_number,
        "quote_id": inv.quote_id, "customer_name": inv.customer_name,
        "total": inv.total, "deposit_amount": inv.deposit_amount,
        "balance_due": inv.balance_due, "status": inv.status,
        "line_items": json.loads(inv.line_items_json or "[]"),
    }


# Stripe: Create Checkout Session
@app.post("/api/stripe/create-checkout-session")
async def api_create_checkout_session(req: CreateCheckoutSessionRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    if not stripe.api_key:
        raise HTTPException(status_code=500, detail="Stripe not configured")

    charge_amount = req.deposit_amount  # Charge deposit; full amount if no deposit split
    description = f"{'50% Deposit — ' if req.requires_deposit else ''}{req.selected_service}"
    success_url = req.success_url or f"{FRONTEND_URL}/booking-confirmed?session_id={{CHECKOUT_SESSION_ID}}&quote_id={req.quote_id}"
    cancel_url = req.cancel_url or f"{FRONTEND_URL}/instant-quote?cancelled=true&quote_id={req.quote_id}"

    try:
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            mode="payment",
            customer_email=req.customer_email,
            line_items=[{
                "price_data": {
                    "currency": "usd",
                    "unit_amount": charge_amount,
                    "product_data": {
                        "name": description,
                        "description": f"Service Address: {req.service_address}",
                    },
                },
                "quantity": 1,
            }],
            metadata={
                "quote_id": req.quote_id,
                "invoice_id": req.invoice_id or "",
                "customer_name": req.customer_name,
                "customer_email": req.customer_email,
                "customer_phone": req.customer_phone,
                "service_address": req.service_address,
                "selected_service": req.selected_service,
                "property_type": req.property_type,
                "calculated_total": str(req.calculated_total),
                "deposit_amount": str(req.deposit_amount),
                "balance_due": str(req.balance_due),
                "preferred_date": req.preferred_date or "",
            },
            success_url=success_url,
            cancel_url=cancel_url,
        )
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))

    # Update quote with session ID
    q = db.query(QuoteRecord).filter(QuoteRecord.id == req.quote_id).first()
    if q:
        q.stripe_session_id = session.id
        q.status = "pending_payment"
        db.commit()

    background_tasks.add_task(notify_owner_background, "checkout_started", {
        "quote_id": req.quote_id,
        "customer_name": req.customer_name,
        "customer_phone": req.customer_phone,
        "customer_email": req.customer_email,
        "service": req.selected_service,
        "charge_now": f"${charge_amount/100:.2f}",
        "full_total": f"${req.calculated_total/100:.2f}",
    }, db)

    return {"checkout_url": session.url, "session_id": session.id}


# Stripe: Session Status
@app.get("/api/stripe/session-status/{session_id}")
def api_session_status(session_id: str):
    if not stripe.api_key:
        raise HTTPException(status_code=500, detail="Stripe not configured")
    try:
        session = stripe.checkout.Session.retrieve(session_id)
        return {
            "status": session.status,
            "payment_status": session.payment_status,
            "customer_email": session.customer_email,
            "amount_total": session.amount_total,
            "metadata": dict(session.metadata),
        }
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))


# Stripe: Webhook
@app.post("/api/stripe/webhook")
async def api_stripe_webhook(request: Request, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    payload = await request.body()
    sig = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(payload, sig, STRIPE_WEBHOOK_SECRET)
    except (ValueError, stripe.error.SignatureVerificationError) as e:
        raise HTTPException(status_code=400, detail=f"Webhook signature invalid: {e}")

    data = event["data"]["object"]
    evt_type = event["type"]
    logger.info(f"Stripe webhook received: {evt_type}")

    if evt_type == "checkout.session.completed":
        quote_id = data.get("metadata", {}).get("quote_id")
        deposit_amount = int(data.get("metadata", {}).get("deposit_amount", 0))
        balance_due = int(data.get("metadata", {}).get("balance_due", 0))
        amount_paid = data.get("amount_total", 0)

        if quote_id:
            q = db.query(QuoteRecord).filter(QuoteRecord.id == quote_id).first()
            if q:
                q.status = "deposit_paid" if balance_due > 0 else "paid_in_full"
                q.stripe_payment_intent = data.get("payment_intent")
                db.commit()

        background_tasks.add_task(notify_owner_background,
            "deposit_paid" if balance_due > 0 else "paid_in_full", {
                "quote_id": quote_id,
                "customer_name": data.get("metadata", {}).get("customer_name"),
                "customer_phone": data.get("metadata", {}).get("customer_phone"),
                "customer_email": data.get("customer_email"),
                "service": data.get("metadata", {}).get("selected_service"),
                "amount_paid": f"${amount_paid/100:.2f}",
                "balance_due": f"${balance_due/100:.2f}" if balance_due > 0 else "PAID IN FULL",
                "stripe_session": data.get("id"),
                "preferred_date": data.get("metadata", {}).get("preferred_date", ""),
            }, db)

    elif evt_type == "payment_intent.payment_failed":
        quote_id = data.get("metadata", {}).get("quote_id")
        if quote_id:
            q = db.query(QuoteRecord).filter(QuoteRecord.id == quote_id).first()
            if q:
                q.status = "payment_failed"
                db.commit()

        background_tasks.add_task(notify_owner_background, "payment_failed", {
            "quote_id": quote_id,
            "customer_email": data.get("receipt_email", ""),
            "note": "Payment failed — customer may need follow-up",
        }, db)

    return {"received": True}


# Owner Notification Endpoint (frontend-triggered)
@app.post("/api/notifications/owner")
async def api_notify_owner(req: OwnerNotificationRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    payload = req.dict(exclude_none=True)
    background_tasks.add_task(notify_owner_background, req.event_type, payload, db)
    return {"status": "queued"}


# Analytics Log
@app.post("/api/analytics/log")
def api_analytics_log(req: AnalyticsLogRequest, db: Session = Depends(get_db)):
    event = VisitorEvent(
        event_type=req.event_type,
        page=req.page,
        referrer=req.referrer,
        utm_source=req.utm_source,
        utm_campaign=req.utm_campaign,
        utm_medium=req.utm_medium,
        ref=req.ref,
        metadata_json=req.json(),
    )
    db.add(event)
    db.commit()
    return {"status": "logged"}


# Admin: Get all quotes
@app.get("/api/admin/quotes")
def api_admin_quotes(db: Session = Depends(get_db), _key=Depends(require_admin)):
    quotes = db.query(QuoteRecord).order_by(QuoteRecord.created_at.desc()).limit(200).all()
    return [
        {
            "quote_id": q.id, "customer_name": q.customer_name,
            "customer_email": q.customer_email, "customer_phone": q.customer_phone,
            "service_address": q.service_address, "service_label": q.service_label,
            "total": q.total, "deposit_amount": q.deposit_amount,
            "status": q.status, "preferred_date": q.preferred_date,
            "created_at": q.created_at.isoformat(),
        }
        for q in quotes
    ]


# Admin: Metrics
@app.get("/api/admin/metrics")
def api_admin_metrics(db: Session = Depends(get_db), _key=Depends(require_admin)):
    from sqlalchemy import func
    total_quotes = db.query(func.count(QuoteRecord.id)).scalar()
    paid = db.query(func.count(QuoteRecord.id)).filter(
        QuoteRecord.status.in_(["deposit_paid", "paid_in_full"])
    ).scalar()
    revenue = db.query(func.sum(QuoteRecord.deposit_amount)).filter(
        QuoteRecord.status.in_(["deposit_paid", "paid_in_full"])
    ).scalar() or 0
    commercial = db.query(func.count(QuoteRecord.id)).filter(
        QuoteRecord.property_type.in_(["commercial", "hoa", "apartment", "government"])
    ).scalar()
    custom = db.query(func.count(QuoteRecord.id)).filter(
        QuoteRecord.requires_custom_quote == True
    ).scalar()
    return {
        "total_quotes": total_quotes,
        "paid_quotes": paid,
        "custom_quote_requests": custom,
        "commercial_leads": commercial,
        "revenue_collected_cents": revenue,
        "revenue_collected_display": f"${revenue/100:.2f}",
    }
