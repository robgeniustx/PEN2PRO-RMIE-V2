"""
seed_rmie_knowledge.py — Seed the PEN2PRO RMIE MongoDB knowledge base.

Populates the rmie_knowledge collection with business strategy knowledge
for all 14 supported industries. Embeddings are generated via Voyage AI
if VOYAGE_API_KEY is set; otherwise documents are stored without embeddings
(keyword search only).

Usage:
  cd backend
  python scripts/seed_rmie_knowledge.py

  # Force re-seed (clears existing documents first):
  python scripts/seed_rmie_knowledge.py --reset

Environment variables required:
  MONGO_URL          MongoDB Atlas connection string
  DB_NAME            Database name (default: pen2pro_rmie)
  VOYAGE_API_KEY     Optional — enables vector embeddings

"""

import asyncio
import argparse
import os
import sys
import logging
from pathlib import Path

# ── Add backend root to path so we can import app modules ──────────────────
sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent.parent / ".env")

from motor.motor_asyncio import AsyncIOMotorClient
from app.services.rmie_knowledge_service import bulk_add_knowledge_documents
from app.services.voyage_service import is_configured as voyage_configured

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

_DB_NAME = os.getenv("DB_NAME", "pen2pro_rmie")
_COLLECTION = "rmie_knowledge"


# ─── Seed data — 14 industries ───────────────────────────────────────────────

SEED_DOCUMENTS = [

    # ══════════════════════════════════════════════════════════════════
    # 1. PRESSURE WASHING
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Pressure Washing — Startup & Pricing Strategy",
        "category": "startup",
        "industry": "pressure-washing",
        "tier": "free",
        "content": """
Industry: Pressure Washing

Startup Costs:
- Cold water pressure washer (2,000–3,200 PSI): $400–$1,200
- Hot water unit (for grease/commercial): $1,500–$5,000
- Surface cleaner attachment (driveways): $100–$300
- Soft wash system (roofs, siding): $300–$800
- Hoses, nozzles, chemicals: $150–$300
- Trailer or truck bed setup: $500–$2,000
- Total realistic startup: $1,500–$4,500

Licensing:
- No specialty license in most states
- Check local wastewater runoff ordinances
- Some municipalities require a business license ($25–$100/yr)

Pricing:
- Driveway cleaning: $80–$250
- House washing (soft wash): $200–$600
- Roof soft wash: $300–$800
- Deck/fence: $100–$400
- Commercial parking lot: $200–$600
- Fleet/vehicle washing: $50–$200 per vehicle (contract pricing)
- Recurring maintenance discount: 10–15% off monthly/quarterly
""",
        "tags": ["pressure washing", "startup", "pricing", "licensing", "outdoor services"],
    },
    {
        "title": "Pressure Washing — Customer Acquisition & Marketing",
        "category": "marketing",
        "industry": "pressure-washing",
        "tier": "free",
        "content": """
Pressure Washing — First 10 Customers Playbook:
1. Post 5 before/after photos on Facebook, Instagram, and Nextdoor — tag your city
2. Create Google Business Profile — add service area, photos, and business hours
3. Join 3 local Facebook neighborhood groups and introduce your business
4. Knock on 20 doors in a target neighborhood with a door hanger offering a first-time discount
5. Ask first customer for a video testimonial — use for social proof
6. Set up a $10/day Facebook ad targeting homeowners within 10 miles
7. Partner with a real estate agent to offer pre-listing exterior cleaning ($150–$300 per job)
8. Reach out to 10 local property managers about monthly service contracts
9. List on Yelp, Angi, and Thumbtack
10. Offer $20 referral credit to every satisfied customer

Revenue Targets:
- 30-Day: $1,500–$4,000 (3–12 jobs)
- 90-Day: $5,000–$15,000 with recurring accounts established
""",
        "tags": ["pressure washing", "marketing", "customers", "social media", "referrals"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 2. FUNDING / BUSINESS FUNDING COMPANY
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Business Funding Company — Service Model & Compliance",
        "category": "startup",
        "industry": "funding-business",
        "tier": "free",
        "content": """
Industry: Business Funding / Funding Consulting

Service Model Options:
- Funding consultant / broker (refer clients to lenders for referral fees)
- Credit repair + funding readiness coaching
- SBA loan prep services
- Revenue-based funding referrals (Clearco, Capchase, etc.)
- Business credit building programs

Startup Costs:
- LLC + EIN: $50–$300
- E&O Insurance (errors & omissions): $500–$1,500/yr
- CRM software (HubSpot free to $50/mo)
- Website with booking/intake form: $50–$200/mo
- Compliance attorney consultation: $500–$1,000 one-time
- Total realistic startup: $1,500–$3,000

Licensing & Compliance:
- MOST states do NOT require a license to refer clients to lenders
- California, New York, Georgia: may require a finance lender/broker license
- Do NOT accept advance fees in states where prohibited
- Never guarantee loan approval — FTC compliance critical
- Disclose all referral fees to clients in writing

Revenue Model:
- Flat consulting fee: $500–$2,500 per client
- Referral/commission from lenders: 1–5% of funded amount
- Group coaching: $97–$497/mo
""",
        "tags": ["funding", "lending", "broker", "credit", "consulting", "compliance"],
    },
    {
        "title": "Business Funding — Lead Generation & Sales",
        "category": "marketing",
        "industry": "funding-business",
        "tier": "pro",
        "content": """
Funding Business — Lead Generation Playbook:

Target Clients:
- Small business owners 6–24 months in business
- Business owners with $10K–$250K in annual revenue
- Business owners with 600+ personal credit score
- Those denied by traditional banks

Lead Generation Channels:
1. Facebook Groups — search "small business owners [city]" — post value content daily
2. LinkedIn — connect with 20 local business owners/day + share funding tips
3. YouTube/TikTok — short videos: "Why most small businesses can't get a loan"
4. Google Business Profile — shows up for "business funding [city]" searches
5. Referral partnerships — accountants, attorneys, real estate agents, bookkeepers

Cold DM Template:
"Hey [Name] — I help small business owners in [City] get $10K–$150K in business funding even if the bank said no. Do you currently have a business? Would a free funding eligibility check be helpful?"

Qualification Questions:
1. How long have you been in business?
2. What is your annual revenue?
3. What is your personal credit score range?
4. What do you need the funding for?
5. How much are you looking to access?
""",
        "tags": ["funding", "lead generation", "sales", "lending", "small business"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 3. ATTORNEY / LAW FIRM
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Attorney / Law Firm — Launch & Practice Management",
        "category": "startup",
        "industry": "attorney-law-firm",
        "tier": "free",
        "content": """
Industry: Attorney / Law Firm (Solo Practice or Small Firm)

Startup Costs:
- State bar admission fee (varies): $200–$2,000
- Professional liability (malpractice) insurance: $1,500–$5,000/yr
- Legal practice management software (Clio, MyCase): $49–$149/mo
- Website + domain: $150–$500/mo
- IOLTA trust account setup: $0 (required for client funds)
- Office space (shared coworking / virtual): $200–$1,000/mo
- Total realistic startup: $5,000–$15,000 first year

Practice Areas with Fastest Revenue:
- Personal injury (contingency — no money upfront from client)
- Family law / divorce / SAPCR
- Criminal defense
- Immigration
- Estate planning / wills
- Contracts and business formation

Billing Models:
- Hourly: $150–$500/hr depending on market and specialty
- Flat fee: $500–$5,000 per matter type
- Contingency: 33% of settlement (personal injury, workers comp)
- Retainer: $2,500–$10,000 upfront

Marketing for Attorneys:
- Google Business Profile + Google Local Services Ads
- Avvo, Martindale, FindLaw directory listings
- Referral network with other attorneys in non-competing practice areas
- YouTube education content ("Do I need a lawyer for X?")
""",
        "tags": ["attorney", "law firm", "legal", "startup", "billing", "marketing"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 4. DENTIST OFFICE
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Dentist Office — Practice Launch & Patient Acquisition",
        "category": "startup",
        "industry": "dentist-office",
        "tier": "free",
        "content": """
Industry: Dental Practice (New Practice or Acquired)

Startup Costs (New Practice):
- Equipment (chair, X-ray, sterilization unit): $50,000–$150,000
- Office build-out / lease improvements: $30,000–$100,000
- Dental software (Dentrix, Eaglesoft, Open Dental): $2,000–$8,000/yr
- Malpractice insurance: $3,000–$8,000/yr
- Staff (dental assistant, front desk): $30,000–$50,000/yr each
- Marketing launch budget: $5,000–$15,000 first year
- Total realistic startup: $150,000–$500,000

Revenue Model:
- General dentistry: $150–$350/patient visit
- Cosmetic dentistry (veneers, whitening): $1,000–$2,500/case
- Invisalign: $3,000–$8,000/case
- Implants: $3,000–$6,000/implant
- Average patient LTV (10 years): $10,000–$25,000

Patient Acquisition:
1. Google Ads: "dentist near me" — $2,000–$5,000/mo
2. Google Business Profile optimization
3. Insurance network participation (Delta Dental, Cigna, Aetna)
4. New patient welcome offers: free consultation + X-rays
5. Internal referral program: $25–$50 gift card per referred patient
6. Nextdoor neighborhood sponsorships
""",
        "tags": ["dentist", "dental practice", "healthcare", "patient acquisition", "startup"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 5. COURIER SERVICES
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Courier Services — Launch, Contracts & Pricing",
        "category": "startup",
        "industry": "courier-services",
        "tier": "free",
        "content": """
Industry: Courier / Same-Day Delivery Services

Startup Costs:
- Reliable vehicle (van, SUV, car): existing or $2,000–$15,000
- Commercial auto insurance: $1,500–$3,500/yr
- DOT number (if crossing state lines): Free at fmcsa.dot.gov
- LLC + EIN: $50–$300
- Routing software (Circuit, OptimoRoute): $20–$50/mo
- Total realistic startup: $2,000–$5,000

Revenue Model:
- Local same-day delivery: $15–$75 per delivery
- Medical courier (labs, specimens): $25–$150 per run
- Legal document courier: $50–$200 per document delivery
- Contracted route with retailer/pharmacy: $500–$3,000/mo flat contract
- Amazon Flex / DoorDash Merchant (side income while building contracts)

High-Value Client Types:
- Medical clinics, labs, hospitals (HIPAA-compliant handling required)
- Law firms (time-sensitive documents)
- Pharmacies (prescription delivery)
- Restaurants (overflow catering delivery)
- Auto parts stores (local parts runners)

First Contract Acquisition:
1. Walk into 10 local businesses and introduce courier service
2. Offer first 3 deliveries free to prove reliability and speed
3. Apply to Roadie (roadie.com) for on-demand gig deliveries
4. Contact local pharmacies about prescription delivery contracts
5. List on uShip.com for freight brokerage opportunities
""",
        "tags": ["courier", "delivery", "logistics", "medical courier", "contracts"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 6. CONTENT CREATOR
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Content Creator — Monetization Blueprint",
        "category": "startup",
        "industry": "content-creator",
        "tier": "free",
        "content": """
Industry: Content Creator (YouTube, TikTok, Instagram, Podcasting)

Startup Costs:
- Smartphone or mirrorless camera: $0 (existing) to $800
- Ring light: $30–$80
- Lavalier or USB microphone: $30–$150
- Video editing software (CapCut free, DaVinci Resolve free, Premiere $55/mo)
- Total realistic startup: $100–$500

Monetization Tiers (do not wait for platform monetization thresholds):

Tier 1 — Day 1 Revenue (No followers needed):
- Freelance content creation for local businesses: $200–$1,500/mo per client
- UGC (user-generated content) for brands: $100–$500 per video
- Social media management for small businesses: $300–$1,500/mo

Tier 2 — 1,000+ Followers:
- Brand sponsorships: $100–$5,000 per post depending on niche and engagement
- Affiliate marketing (Amazon, ClickBank, ShareASale): 5–30% commissions
- Digital products (presets, templates, guides): $9–$97

Tier 3 — Platform Monetization:
- YouTube Partner Program: 1,000 subscribers + 4,000 watch hours
- TikTok Creator Rewards: 10,000 followers + 100,000 views in 30 days
- Podcast sponsorships: $15–$25 CPM

First 30 Days:
- Post 1x/day for 30 days — do not skip
- Pick ONE platform and own it before expanding
- Niche down: "Business advice for returning citizens" > "General business advice"
""",
        "tags": ["content creator", "YouTube", "TikTok", "UGC", "monetization", "social media"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 7. TREE SERVICE
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Tree Service — Startup, Licensing & Pricing",
        "category": "startup",
        "industry": "tree-service",
        "tier": "free",
        "content": """
Industry: Tree Service / Arborist

Startup Costs:
- Chainsaw (Stihl MS 271 or equivalent): $400–$800
- Climbing gear (harness, ropes, helmet): $500–$1,500
- Chipper rental or purchase: $150/day rental or $10,000–$25,000 to own
- Truck + trailer: existing or $5,000–$20,000
- Liability insurance ($1M–$2M): $1,500–$5,000/yr (required by most HOAs/commercial)
- ISA Arborist Certification: $400 exam + study materials
- Total realistic startup: $5,000–$15,000

Licensing:
- Most states require a contractor or arborist license for commercial work
- Texas: no state arborist license — but ISA certification increases commercial opportunities
- California, Florida, New York: check state licensing boards

Pricing:
- Tree trimming (small tree): $200–$400
- Tree trimming (large tree): $400–$1,200
- Tree removal (small): $300–$700
- Tree removal (large/hazardous): $1,000–$5,000+
- Stump grinding: $100–$400
- Emergency/storm damage: 2x–3x standard rates

Marketing:
- Before/after photos are extremely high-converting
- Nextdoor and neighborhood Facebook groups are primary channels
- Storm chasers (follow severe weather to affected zip codes)
""",
        "tags": ["tree service", "arborist", "outdoor services", "startup", "pricing"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 8. LANDSCAPING
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Landscaping — Launch Strategy & Recurring Revenue",
        "category": "startup",
        "industry": "landscaping",
        "tier": "free",
        "content": """
Industry: Landscaping / Lawn Care

Startup Costs:
- Commercial mower (Husqvarna, Toro): $2,000–$8,000 (or start with residential grade $400–$1,000)
- Weed trimmer, blower, edger: $400–$800
- Trailer: $1,500–$4,000 or rent initially
- Truck: existing or $5,000–$20,000
- Liability insurance: $600–$1,500/yr
- Total realistic startup: $3,000–$10,000

Revenue Model:
- Weekly lawn service (residential): $35–$75/visit
- Bi-weekly: $45–$85/visit
- Monthly maintenance contract: $150–$350/mo
- Seasonal cleanups: $200–$600
- Landscaping installs (mulch, plants, edging): $500–$5,000

Recurring Revenue Strategy:
- Sell monthly maintenance contracts on first visit
- Offer 10% discount for annual contract paid upfront
- Target HOA neighborhoods — one contract can mean 50+ homes
- 30 weekly accounts at $50 avg = $6,000/mo recurring

First 10 Clients:
1. Door knock target neighborhoods with flyers offering first mow free
2. Post on Nextdoor and local Facebook groups with before/after photos
3. Partner with real estate agents for staging cleanups
4. Target landlords and property managers (multiple properties = more revenue)
""",
        "tags": ["landscaping", "lawn care", "recurring revenue", "outdoor services", "startup"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 9. CONSULTING
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Consulting Business — Packaging & Client Acquisition",
        "category": "startup",
        "industry": "consulting",
        "tier": "free",
        "content": """
Industry: Consulting (Business, Strategy, Operations, HR, Finance, etc.)

Startup Costs:
- LLC + EIN: $50–$300
- Professional liability (E&O) insurance: $500–$2,500/yr
- Website + scheduling (Calendly Pro): $200–$600/yr
- CRM (HubSpot free): $0
- Proposal software (PandaDoc, Proposify): $19–$49/mo
- Total realistic startup: $1,000–$3,500

Offer Structure:
- Discovery call (1 hour): Free or $150–$500
- Single project / engagement: $1,500–$10,000
- Monthly retainer: $1,500–$8,000/mo
- Group consulting / cohort: $497–$2,000/person for 6–8 week program
- Online course / digital product: $97–$997 (passive income)

Positioning — What makes you different:
- Niche down: "Business strategy for returning citizens" > "Business consulting"
- Lead with outcomes: "I help service businesses go from 0 to $10K/mo in 90 days"
- Use case studies and proof — even 1 result is enough to start selling

First 5 Clients:
1. Message 50 former colleagues, business owners you know, or people in your network
2. Offer a free 45-minute strategy session — convert on the back end
3. Partner with CPAs, attorneys, and banks as referral sources
4. LinkedIn content: post one insight every day for 30 days
5. Speak at local SCORE events, chamber of commerce meetings, or community groups
""",
        "tags": ["consulting", "strategy", "retainer", "client acquisition", "positioning"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 10. AI DEVELOPER / AI FIRM
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "AI Developer / AI Firm — Service Model & Pricing",
        "category": "startup",
        "industry": "ai-developer",
        "tier": "pro",
        "content": """
Industry: AI Development / AI Firm

Service Offerings:
- Custom AI chatbots for businesses: $1,500–$10,000 build + $200–$1,000/mo maintenance
- AI voice agents (inbound/outbound): $2,500–$15,000 build
- RAG (retrieval-augmented generation) systems: $3,000–$20,000
- Prompt engineering and optimization: $100–$300/hr
- AI automation workflows (n8n, Make, Zapier + AI): $500–$5,000
- AI content generation systems: $1,000–$5,000
- AI agent development (Claude, OpenAI): $5,000–$50,000

Tech Stack (commonly used):
- OpenAI API, Anthropic Claude, Mistral
- LangChain, LlamaIndex
- Pinecone, MongoDB Atlas (vector search), Weaviate
- n8n, Make (Integromat), Zapier
- React/Vite, FastAPI, Python, Node.js
- Twilio (voice + SMS), Synthflow, Bland AI

Startup Costs:
- LLC + EIN: $50–$300
- API subscriptions (OpenAI, Anthropic, etc.): $50–$500/mo
- GitHub Copilot or Cursor AI: $10–$20/mo
- Cloud hosting (Render, Railway, Vercel): $20–$100/mo
- Total realistic startup: $500–$2,000

First Clients:
- Offer a free AI audit to local businesses
- Post "I built this AI chatbot in 2 days" demos on LinkedIn and TikTok
- Target industries with repetitive customer service workflows (dental, auto dealers, real estate)
""",
        "tags": ["AI", "developer", "chatbot", "voice agent", "LLM", "automation", "firm"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 11. CELL PHONE & TV REPAIR
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Cell Phone & TV Repair — Startup & Service Model",
        "category": "startup",
        "industry": "cell-phone-tv-repair",
        "tier": "free",
        "content": """
Industry: Cell Phone & TV Repair

Startup Costs:
- Repair tools kit: $150–$400
- Soldering station: $100–$300
- Microscope (for microsoldering): $100–$500
- LCD screen inventory (iPhone, Samsung, common models): $500–$2,000
- Battery inventory: $200–$500
- Retail location rent: $500–$2,000/mo OR operate mobile from vehicle
- Total realistic startup (mobile): $2,000–$5,000
- Total realistic startup (retail): $5,000–$15,000

Pricing:
- iPhone screen replacement: $50–$150
- Samsung screen replacement: $60–$200
- Battery replacement: $30–$80
- Charging port repair: $50–$120
- Water damage repair: $75–$200
- TV screen replacement: $150–$500+
- TV power board / backlighting: $75–$200

Revenue Boosts:
- Offer screen protector installation: $15–$30 (high margin)
- Offer accessories retail: cases, cables, chargers
- Offer warranty plans: $25–$75/yr per device
- B2B: partner with schools, businesses for device fleet maintenance contracts

Customer Acquisition:
1. Google Business Profile with "phone repair near me" keywords
2. List on Thumbtack and Yelp
3. Offer free diagnostics — convert on repair
4. Nextdoor for local visibility
5. Leave flyers at college campuses, barbershops, nail salons
""",
        "tags": ["phone repair", "cell phone", "TV repair", "electronics", "startup"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 12. INTERIOR DESIGNER
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Interior Designer — Service Packages & Client Acquisition",
        "category": "startup",
        "industry": "interior-designer",
        "tier": "free",
        "content": """
Industry: Interior Design

Service Models:
- Full-service design: complete design + purchasing + installation management
- E-design (virtual): deliver mood boards, floor plans, shopping lists remotely
- Hourly consulting: $75–$300/hr
- Flat-fee per room: $500–$3,000
- Retail markup on furniture/accessories: 20–35% markup on purchases

Startup Costs:
- LLC + EIN: $50–$300
- Professional liability insurance: $500–$1,500/yr
- Design software (AutoCAD, SketchUp, RoomSketcher): $50–$200/mo
- Canva Pro (presentations and mood boards): $13/mo
- Website + portfolio site: $15–$50/mo
- Total realistic startup: $1,500–$4,000

Revenue Model:
- Consultation (first meeting): $150–$350 (often applied to project)
- E-design per room: $300–$1,200
- Full residential design (1,500 sq ft home): $5,000–$25,000
- Retail/hospitality commercial projects: $10,000–$100,000+
- Product markup revenue: 20–35% of all purchases

Client Acquisition:
1. Instagram and Pinterest — visual platform is essential for interior design
2. Post before/after photos of every project
3. Real estate agent partnerships — every listing needs staging
4. Houzz and Decorist profile (marketplace for designers)
5. Target new home developments and offer model home design services
""",
        "tags": ["interior design", "e-design", "residential", "commercial", "staging"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 13. T-SHIRT COMPANY / CUSTOM APPAREL
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "T-Shirt Company — Print-on-Demand vs. Private Label Strategy",
        "category": "startup",
        "industry": "t-shirt-company",
        "tier": "free",
        "content": """
Industry: T-Shirt / Custom Apparel Business

Business Model Options:

Option A — Print-on-Demand (POD): Zero inventory, low margin, low risk
- Platforms: Printful, Printify, SPOD, Gooten
- Wholesale cost per shirt: $8–$15
- Sell for: $22–$40
- Margin: 40–60%
- Best for: testing designs before scaling

Option B — Screen Printing / DTF (Direct-to-Film): Higher margin, requires minimum orders
- Blank shirt (Bella+Canvas 3001): $4–$7 wholesale
- DTF print cost: $1.50–$4.00 per shirt
- Sell for: $20–$50
- Margin: 60–75% at volume
- Best for: bulk orders, uniform contracts, branded merchandise

Option C — Embroidery: Premium positioning
- Cost per item: $5–$15 depending on design complexity
- Sell for: $35–$80
- Best for: corporate uniforms, caps, bags

Startup Costs (POD):
- Shopify or Etsy: $29–$45/mo
- Printful or Printify account: Free
- Design software (Canva or Adobe Illustrator): $0–$55/mo
- Total realistic startup: $100–$500

Startup Costs (DTF/Screen Print):
- DTF printer: $3,000–$15,000
- Heat press: $300–$1,500
- Blanks inventory: $500–$2,000
- Total realistic startup: $5,000–$20,000

High-Value Niches:
- Faith-based designs
- Veterans / military
- Local city pride
- Sports teams (youth leagues)
- Business uniforms and branded merchandise
- Culture-specific (Latin, Black-owned, Houston pride, etc.)
""",
        "tags": ["t-shirt", "apparel", "print on demand", "DTF", "screen printing", "ecommerce"],
    },

    # ══════════════════════════════════════════════════════════════════
    # 14. INSURANCE COMPANY / FIRM
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "Insurance Firm — Licensing, Products & Revenue Model",
        "category": "startup",
        "industry": "insurance-company",
        "tier": "free",
        "content": """
Industry: Independent Insurance Firm

Startup Path:
1. Get licensed in your state (Property & Casualty and/or Life & Health)
2. Study for the exam: $50–$200 course (Kaplan, ExamFX)
3. Pass state exam: $50–$100 exam fee
4. Apply for license with state department of insurance
5. Appoint with carrier(s) — direct with State Farm, Allstate, OR go independent with carriers like Progressive, Travelers, Nationwide

Startup Costs:
- Pre-licensing course: $50–$200
- State exam fee: $50–$100
- E&O insurance (errors & omissions): $500–$2,500/yr
- CRM / firm management system (EZLynx, HawkSoft, Applied Epic): $50–$300/mo
- Website: $50–$200/mo
- Total realistic startup: $2,000–$6,000

Revenue Model:
- Auto insurance: 10–15% commission on annual premium
- Home insurance: 15–20% commission on annual premium
- Life insurance: 50–100% of first-year premium
- Commercial lines: 10–20% commission
- Average client LTV (5 years): $500–$2,500
- 100 clients at $500 avg annual commission = $50,000/yr recurring

Client Acquisition:
1. Referral partnerships with auto dealers, real estate agents, mortgage lenders
2. Facebook ads targeting homeowners and new car buyers
3. Google Local Services Ads: "car insurance near me"
4. Community events and church bulletins
5. Offer free insurance reviews to existing policyholders — convert to your book

Best Niche:
- Commercial insurance (trucking, contractors) — higher premiums, bigger commissions
""",
        "tags": ["insurance", "agent", "licensing", "P&C", "life insurance", "firm"],
    },

    # ══════════════════════════════════════════════════════════════════
    # GENERAL — Cross-industry resources (free tier)
    # ══════════════════════════════════════════════════════════════════
    {
        "title": "General — Business Credit Building Roadmap",
        "category": "credit",
        "industry": "general",
        "tier": "free",
        "content": """
Business Credit Building — Universal Roadmap

Month 1 (Foundation):
1. Form LLC and get EIN (free at IRS.gov)
2. Open dedicated business bank account — Chase Business Complete, Bank of America Business
3. Get a business phone number (Google Voice $10/mo or RingCentral)
4. Create business email (Google Workspace $6/mo)
5. Register with Dun & Bradstreet (free at dnb.com) to get DUNS number
6. Register with PAYDEX at nav.com (free account)

Month 2 (Tier 1 Vendors — Net-30):
- Uline (uline.com) — office supplies, ships same day, reports to D&B
- Quill (quill.com) — office supplies, reports to D&B
- Grainger (grainger.com) — industrial supplies, reports to D&B
- Crown Office Supplies (crownofficessupplies.com)
- Strategic Network Products

Month 3 (Check PAYDEX & Apply Tier 2):
- Target PAYDEX score 80+
- Apply for Divvy or Brex business credit card (no personal guarantee)
- Apply for Amazon Business account + net-30 terms
- Apply for Sam's Club/Costco business membership

Month 6+ (SBA & Bank Lines):
- SBA Microloan: $500–$50,000 (sba.gov)
- SBA 7(a) loan: $50,000–$5 million
- Kabbage/Amex Business Credit Line
- Equipment financing through manufacturer programs
""",
        "tags": ["business credit", "PAYDEX", "D&B", "vendor accounts", "SBA", "funding"],
    },
    {
        "title": "General — LLC Formation + Legal Foundation",
        "category": "legal",
        "industry": "general",
        "tier": "free",
        "content": """
LLC Formation — Universal Steps

Why an LLC:
- Separates personal and business liability
- Required by most commercial clients and lenders
- Enables business bank account and business credit
- Creates professional credibility

Filing Steps:
1. Choose a business name — check availability at your state SOS website
2. File Articles of Organization at your state Secretary of State
3. Cost: $50 (Texas, Colorado) to $500 (California, New York)
4. Receive Certificate of Formation (2–10 business days)
5. Get EIN (Employer Identification Number) at IRS.gov — free, 5 minutes
6. Open business bank account with EIN + LLC docs + personal ID

Recommended Registered Agent Services:
- Northwest Registered Agent: $125/yr
- ZenBusiness (also handles LLC filing): $49/yr
- LegalZoom: $299+/yr

Operating Agreement:
- Required in most states even for single-member LLCs
- Free template at legalzoom.com or a local attorney ($200–$500)

Business Address Options:
- UPS Store mailbox: $25–$50/mo (professional address, not a PO box)
- Regus / WeWork virtual office: $50–$100/mo (prestigious address)
- Home address: Free (privacy concern — public record)

Insurance (almost always needed):
- General Liability ($1M/$2M): $400–$1,200/yr via nextinsurance.com or hiscox.com
- Professional Liability (E&O): $500–$2,500/yr for service/consulting businesses
""",
        "tags": ["LLC", "formation", "legal", "EIN", "operating agreement", "business foundation"],
    },
    {
        "title": "General — Funding Readiness Checklist (Pro)",
        "category": "funding",
        "industry": "general",
        "tier": "pro",
        "content": """
Funding Readiness Checklist — Comprehensive

Personal Financial Documents:
□ Personal credit score 650+ (pull free at AnnualCreditReport.com)
□ 2 years personal tax returns
□ 3 months personal bank statements
□ Government-issued photo ID
□ Social Security Number

Business Documents:
□ LLC Certificate / Articles of Organization
□ EIN confirmation letter from IRS
□ Business bank account statements (3–6 months)
□ Business tax returns (if filed)
□ Business plan or executive summary
□ 12-month projected P&L statement
□ Accounts receivable/payable aging report (if applicable)

Business Credit Profile:
□ DUNS number registered at dnb.com
□ Experian Business credit file established
□ 3+ trade references reporting to business credit bureaus
□ PAYDEX score 80+
□ No judgments or liens on business

For SBA Loans (additional):
□ 2 years in business (for 7(a))
□ US citizenship or legal resident
□ Business is for-profit
□ Not debarred from federal programs
□ Owner has invested equity in business
□ Working with SBA-approved lender

Top SBA Lenders (National):
- Live Oak Bank (top SBA lender by volume)
- Huntington National Bank
- Wells Fargo SBA Division
- Newtek Business Services
""",
        "tags": ["funding", "SBA", "loan", "readiness", "checklist", "bank statements", "credit"],
    },
]


# ─── Main seeder ─────────────────────────────────────────────────────────────

async def seed(reset: bool = False):
    mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    db_name = os.getenv("DB_NAME", "pen2pro_rmie")

    logger.info(f"Connecting to MongoDB: {mongo_url} / {db_name}")
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    collection = db[_COLLECTION]

    if reset:
        logger.info("--reset flag: dropping existing rmie_knowledge documents...")
        result = await collection.delete_many({})
        logger.info(f"Deleted {result.deleted_count} existing documents.")

    # Check for existing docs
    existing_count = await collection.count_documents({})
    if existing_count > 0 and not reset:
        logger.info(
            f"Collection already has {existing_count} documents. "
            "Use --reset to re-seed. Skipping."
        )
        client.close()
        return

    logger.info(f"Voyage AI configured: {voyage_configured()}")
    logger.info(f"Inserting {len(SEED_DOCUMENTS)} knowledge documents...")

    result = await bulk_add_knowledge_documents(SEED_DOCUMENTS)

    logger.info(
        f"✅ Seeding complete: {result['inserted_count']} inserted, "
        f"{result['embedded_count']} with embeddings."
    )

    if result['embedded_count'] == 0 and not voyage_configured():
        logger.warning(
            "No embeddings generated. Set VOYAGE_API_KEY and re-run with --reset "
            "to enable vector search. Keyword search will still work."
        )

    # Verify
    total = await collection.count_documents({})
    by_industry = {}
    async for doc in collection.aggregate([{"$group": {"_id": "$industry", "count": {"$sum": 1}}}]):
        by_industry[doc["_id"]] = doc["count"]

    logger.info(f"Total documents in collection: {total}")
    logger.info("Documents by industry:")
    for industry, count in sorted(by_industry.items()):
        logger.info(f"  {industry}: {count}")

    client.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Seed PEN2PRO RMIE knowledge base")
    parser.add_argument("--reset", action="store_true", help="Drop existing docs and re-seed")
    args = parser.parse_args()
    asyncio.run(seed(reset=args.reset))
