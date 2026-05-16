# XLR8 Pressure Washing Services — Implementation Guide
**Generated:** May 15, 2026  
**Scope:** Quote Calculator, Stripe Flow, Analytics, SEO, Commercial Strategy

---

## FILES CREATED IN THIS PACKAGE

### Frontend (React/Vite)
| File | Purpose |
|---|---|
| `pricingConfig.js` | All prices, multipliers, add-ons. Edit prices here — no other files need changing |
| `QuoteCalculator.jsx` | 2-step quote form with full service/customer inputs |
| `ItemizedInvoice.jsx` | Branded invoice shown before payment. Requires terms acceptance |
| `StripeCheckoutButton.jsx` | Calls backend, redirects to Stripe Checkout |
| `InstantQuotePage.jsx` | Orchestrates the full quote → invoice → payment flow |
| `analytics.js` | GA4 init, event helpers, owner webhook notifications |
| `quoteApi.js` | All frontend calls to backend quote/invoice/admin endpoints |
| `stripeApi.js` | Stripe checkout session creation and status check |
| `frontend/.env.example` | Frontend environment variable template |

### Backend (FastAPI / Python)
| File | Purpose |
|---|---|
| `backend/main.py` | Complete FastAPI backend with all endpoints, DB, Stripe webhook, notifications |
| `backend/requirements.txt` | Python dependencies |
| `backend/.env.example` | Backend environment variable template |

### Strategy Documents
| File | Purpose |
|---|---|
| `XLR8-Website-Strategy-Report.md` | Full audit, SEO, pricing, copy, wireframe, analytics plan |
| `XLR8-Capability-Statement.md` | One-page commercial capability statement for PDF/vendor submissions |

---

## HOW TO WIRE EVERYTHING INTO YOUR EXISTING SITE

Your site at xlr8pws.com is built on Base44 (Supabase backend). You have two integration paths:

### Option A — Drop-in Components (Recommended)
Replace your existing `/instant-quote` page with `InstantQuotePage.jsx`.
Keep your existing Supabase data for CRM, subscriptions, and gallery.
Run the FastAPI backend as a **separate service on Render** just for quotes + Stripe.

### Option B — Backend-Only Integration
Keep your existing Base44 frontend. Use only the FastAPI endpoints for:
- Stripe checkout session creation
- Stripe webhook handling
- Owner notifications

Then wire the Stripe URLs into your existing quote UI.

---

## LOCAL SETUP

### Backend

```bash
cd XLR8-Code-Files/backend
cp .env.example .env
# Fill in your Stripe keys, SendGrid key, etc.

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Test backend is running:
```
http://localhost:8000
→ {"status":"ok","service":"XLR8 Pressure Washing API"}
```

Test calculate endpoint:
```bash
curl -X POST http://localhost:8000/api/quotes/calculate \
  -H "Content-Type: application/json" \
  -d '{"service_key": "driveway", "inputs": {"sqFt": 600, "buildupLevel": "moderate"}}'
```

Expected response:
```json
{
  "requiresCustomQuote": false,
  "lineItems": [
    {"label": "driveway — base (400 sqft included)", "amount": 15000},
    {"label": "Additional sqft (200 × $0.35)", "amount": 7000},
    {"label": "Heavy buildup adjustment (15%)", "amount": 3300}
  ],
  "subtotal": 25300,
  "tax": 0,
  "total": 25300,
  "requiresDeposit": false,
  "depositAmount": 25300,
  "balanceDue": 0
}
```
→ This shows $253.00 for a 600sqft driveway with moderate buildup. ✓ Market-correct.

### Frontend

```bash
cd your-vite-project
cp XLR8-Code-Files/frontend/.env.example .env
# Set VITE_API_URL=http://localhost:8000 for local dev

npm install react-ga4
# Import and place InstantQuotePage.jsx at your /instant-quote route
```

---

## STRIPE SETUP

### 1. Create Stripe Account
Go to https://dashboard.stripe.com → sign up or log in.

### 2. Get Keys
Stripe Dashboard → Developers → API keys:
- Copy **Secret key** → `STRIPE_SECRET_KEY` in backend `.env`
- Use **Publishable key** only if using Stripe.js directly (not needed for redirect checkout)

### 3. Set Up Webhook
Stripe Dashboard → Developers → Webhooks → Add endpoint:
- URL: `https://your-api.onrender.com/api/stripe/webhook`
- Events to listen for:
  - `checkout.session.completed`
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
- Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET` in backend `.env`

### 4. Test Locally with Stripe CLI
```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:8000/api/stripe/webhook
# Use test card: 4242 4242 4242 4242, any future date, any CVC
```

---

## DEPLOY TO RENDER

### Backend (FastAPI)
1. Push your backend code to GitHub (separate repo or subfolder)
2. Render → New → Web Service
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add all environment variables from `.env.example`
6. For PostgreSQL: Render → New → PostgreSQL → copy connection string → set `DATABASE_URL`

### Frontend (React/Vite)
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set `VITE_API_URL` to your Render backend URL

---

## ENVIRONMENT VARIABLES REQUIRED

### Backend
| Variable | Where to Get |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Developers → Webhooks |
| `ADMIN_ACCESS_KEY` | Make up a long random string |
| `OWNER_EMAIL` | `info@xlr8pws.com` |
| `OWNER_PHONE` | `+18324595981` |
| `SENDGRID_API_KEY` | sendgrid.com → API Keys (free tier = 100 emails/day) |
| `FROM_EMAIL` | Verified sender in SendGrid |
| `TWILIO_ACCOUNT_SID` | twilio.com → Console (optional, for SMS) |
| `TWILIO_AUTH_TOKEN` | twilio.com → Console |
| `TWILIO_FROM_NUMBER` | Your Twilio phone number |
| `DATABASE_URL` | SQLite locally; PostgreSQL on Render |
| `FRONTEND_URL` | `https://xlr8pws.com` |

### Frontend
| Variable | Value |
|---|---|
| `VITE_API_URL` | Your Render backend URL |
| `VITE_GA4_ID` | From Google Analytics → Admin → Data Streams |

---

## PRICING UPDATE INSTRUCTIONS

**To change any price, open only `pricingConfig.js`.**

Example — raise driveway base price from $150 to $175:
```js
driveway: {
  ...
  basePrice: 17500,   // was 15000 ($150) → now 17500 ($175)
  ...
}
```

All prices are stored in **cents** (integer). $150 = `15000`. $0.35/sqft = `35`.

The backend `main.py` contains a mirror of this pricing in the `PRICING` dict. Update both files when changing prices, or consider loading pricing from a shared config file or database table for a single source of truth.

---

## COMPLETE TESTING CHECKLIST

### Quote Calculation
- [ ] Driveway 400sqft, light buildup → should be ~$150
- [ ] Driveway 800sqft, heavy buildup → should be ~$280+
- [ ] House washing small → should be ~$299
- [ ] Parking lot 5,000sqft → should be ~$600+ (at $0.12/sqft, min $350)
- [ ] Roof soft wash → shows "custom quote" message, no price
- [ ] Priority service adds $75
- [ ] Emergency service adds $150
- [ ] No water access adds ~10% surcharge
- [ ] Extended area adds ~8% surcharge
- [ ] Minimum charge enforced ($125 residential, $300 commercial)

### Invoice Display
- [ ] Line items match what the calculator showed
- [ ] Total shown in invoice = total shown in Stripe checkout ← CRITICAL
- [ ] Deposit amount shown correctly (50% for jobs over $300)
- [ ] Balance due shown correctly
- [ ] Terms checkbox must be checked before Pay button activates
- [ ] Approval checkbox must be checked
- [ ] Disclaimer text is visible
- [ ] XLR8 branding and contact info appear on invoice

### Stripe Flow
- [ ] Clicking pay creates a Stripe Checkout Session
- [ ] Stripe page shows correct amount (matches invoice)
- [ ] Test card 4242 4242 4242 4242 completes successfully
- [ ] After payment, redirects to `/booking-confirmed?session_id=...`
- [ ] Webhook fires `checkout.session.completed`
- [ ] Quote status updated to `deposit_paid` or `paid_in_full`
- [ ] Failed card updates status to `payment_failed`
- [ ] Cancel redirects back to `/instant-quote`

### Notifications
- [ ] Quote created → owner receives email within 60 seconds
- [ ] Quote created → owner receives SMS (if Twilio configured)
- [ ] Payment received → owner receives email with amount and customer info
- [ ] Notification log saved to database
- [ ] Commercial quote submission sends "high priority lead" note

### Admin Dashboard
- [ ] `GET /api/admin/quotes` with correct `X-Admin-Key` header returns quotes list
- [ ] `GET /api/admin/metrics` returns totals, revenue, lead counts
- [ ] Wrong admin key returns 401
- [ ] Quotes appear within seconds of creation

### SEO
- [ ] Homepage title tag includes "Houston TX" and "Pressure Washing"
- [ ] Meta description mentions veteran-owned and certifications
- [ ] LocalBusiness schema validates at https://search.google.com/test/rich-results
- [ ] FAQ schema validates
- [ ] All service pages have unique H1 tags with local keywords
- [ ] Image alt texts include service and location keywords

### Mobile
- [ ] Quote form is usable on a 375px screen
- [ ] Invoice is readable on mobile
- [ ] Stripe checkout is mobile-friendly (it is by default)
- [ ] Nav menu works on mobile
- [ ] Phone number is clickable (tel: link)

---

## KNOWN LIMITATIONS / MANUAL STEPS REQUIRED

1. **Stripe keys** — must be added manually in Render environment settings. Never commit to GitHub.
2. **SendGrid sender verification** — your From email (`noreply@xlr8pws.com`) must be verified in SendGrid before emails will send.
3. **Roof soft wash pricing** — intentionally set to "custom quote" due to liability. If you want to add instant pricing, add it in `pricingConfig.js`.
4. **Photo upload** — the quote form has a photo note field but no actual file upload. To add real photo uploads, integrate with Supabase Storage or an S3 bucket.
5. **Customer confirmation email** — the backend sends owner notifications. To send a confirmation email to the customer, add a second `send_email()` call in the `checkout.session.completed` webhook handler using the `customer_email` from Stripe metadata.
6. **Apartment/HOA pricing** — set to custom quote. Add a pricing model in `pricingConfig.js` if you want instant quotes for those jobs.
7. **GA4 ID** — must be obtained from your Google Analytics account and set in frontend `.env`.
8. **Google Business Profile** — update your GBP description to include "Veteran-Owned · MBE · DBE · VOSB · HUB · SAM Registered" and ensure your service areas match what's on the website.

---

## QUICK REFERENCE — API ENDPOINTS

```
GET    /                                     Health check
POST   /api/quotes/calculate                 Calculate a quote (no save)
POST   /api/quotes/create                    Save a quote to DB
GET    /api/quotes/{quote_id}                Retrieve a quote
POST   /api/quotes/{quote_id}/status         Update quote status
POST   /api/invoices/create                  Create invoice from quote
GET    /api/invoices/{invoice_id}            Retrieve invoice
POST   /api/stripe/create-checkout-session   Create Stripe session
GET    /api/stripe/session-status/{id}       Check payment status
POST   /api/stripe/webhook                   Stripe event receiver
POST   /api/notifications/owner             Frontend-triggered notification
POST   /api/analytics/log                    Visitor event log
GET    /api/admin/quotes                     All quotes (admin key required)
GET    /api/admin/metrics                    Dashboard metrics (admin key required)
```

---

*XLR8 Pressure Washing Services · Houston TX · Veteran-Owned · xlr8pws.com · 832-459-5981*
