"""
Niche-specific RMIE roadmap sub-prompts and guides for all 28 supported industries.
These are injected into the OpenAI prompt alongside the base blueprint prompt
to generate industry-specific, realistic business roadmaps.
"""
from typing import Dict

NICHE_PROMPT_ADDITIONS: Dict[str, str] = {
    "pressure-washing": """
INDUSTRY: Pressure Washing

Startup Checklist:
- Register LLC in your state ($50-$500)
- Obtain EIN from IRS (free at irs.gov)
- General liability insurance ($500-$1,200/yr — required for most commercial contracts)
- Purchase or finance pressure washer: hot/cold unit $800-$4,000 depending on PSI
- Surface cleaner attachment for driveways ($100-$300)
- Soft wash system for roofs and houses ($300-$800 add-on or standalone)
- Marketing materials: door hangers, yard signs, vehicle magnet/wrap
- Google Business Profile (free and critical for local SEO)
- Simple invoice software: Jobber, Housecall Pro, or ServiceTitan

Licensing & Compliance:
- Most states do not require a specialty license for pressure washing
- Check local ordinances for wastewater runoff restrictions
- Some municipalities require a business license ($25-$100/yr)
- If using chemicals for soft wash, check your state's pesticide applicator rules

Target Customer:
- Homeowners with driveways, patios, fences, roofs
- Property managers managing multiple units
- HOAs with common areas
- Small commercial property owners (restaurants, retail, parking lots)
- General contractors needing post-construction cleanup

Pricing Strategy:
- Driveway: $80-$250 depending on size
- House washing: $200-$600 depending on square footage
- Roof soft wash: $300-$800
- Deck/fence: $100-$400
- Fleet washing: contract pricing $50-$200 per vehicle
- Offer recurring maintenance discounts (10-15% off for monthly/quarterly customers)

First 10 Customer Acquisition Steps:
1. Post 5 before/after photos on Facebook, Instagram, and Nextdoor
2. Create Google Business Profile with service area and photos
3. Join 3 local Facebook neighborhood groups and introduce your business
4. Knock on 20 doors in a target neighborhood with a door hanger offering a first-time discount
5. Ask your first customer for a video testimonial
6. Set up a $10/day Facebook ad targeting homeowners within 10 miles
7. Partner with a real estate agent to offer pre-listing exterior cleaning
8. Reach out to 10 local property managers about monthly service contracts
9. List on Yelp, Angi, and Thumbtack
10. Ask every satisfied customer for a referral and offer $20 referral credit

30-Day Revenue Target: $1,500-$4,000 (3-12 jobs)
90-Day Revenue Target: $5,000-$15,000 with recurring accounts established
""",

    "hvac": """
INDUSTRY: HVAC (Heating, Ventilation & Air Conditioning)

Startup Checklist:
- EPA 608 Certification (required to handle refrigerants — $20-$100 for test)
- State HVAC contractor license (varies by state — some require journeyman/master status)
- General liability + workers comp insurance
- Business entity (LLC)
- HVAC van or truck with basic tool inventory ($5,000-$15,000)
- Start with residential service/repair before moving to installations
- Software: ServiceTitan, Jobber, or Housecall Pro for scheduling and invoicing

Target Customer: Homeowners, property managers, small commercial buildings

Pricing Strategy:
- Service call/diagnostic: $75-$150
- AC tune-up: $80-$150
- Refrigerant recharge: $150-$400
- AC unit installation: $2,500-$7,500 depending on unit
- Heating system install: $2,000-$8,000
- Maintenance plans: $15-$30/month recurring revenue

First 10 Customers:
1. Service neighbors, family, and friends first to build reviews
2. Post on Nextdoor with seasonal tune-up special
3. Google Business Profile with photos of completed work
4. Build a referral relationship with 3 local general contractors
5. Offer free filter replacements with first tune-up to stand out
6. List on Yelp, Angi, and Thumbtack
7. Seasonal Google ad campaigns (spring AC, fall furnace)
8. Door hanger campaigns in target zip codes before season starts
9. Partner with a home warranty company for overflow calls
10. Offer 12-month maintenance plans at first service visit
""",

    "plumbing": """
INDUSTRY: Plumbing

Startup Checklist:
- State plumbing license (required in most states — apprentice, journeyman, master levels)
- Business entity (LLC)
- General liability + workers comp insurance
- Plumbing van with basic tools ($5,000-$15,000 initial inventory)
- Drain snake, water jetter, and camera inspection equipment
- Software: Jobber or Housecall Pro

Target Customer: Homeowners, rental property owners, small businesses

Pricing Strategy:
- Service call: $75-$150
- Simple fixture repair: $100-$300
- Water heater install: $800-$2,500
- Drain cleaning: $100-$350
- Full re-pipe: $2,000-$15,000 depending on home size
- Maintenance plans: $15-$25/month

First 10 Customers:
1. Post service area and pricing in local Facebook groups
2. Google Business Profile setup with emergency service highlighted
3. Partner with 3 general contractors for subcontracting work
4. Offer free leak inspection with first service
5. Nextdoor business page promotion
6. Run emergency plumbing Google search ads ($20/day)
7. Ask landlords and property managers for preferred vendor status
8. Offer referral program to past customers
9. List on Angi, HomeAdvisor, Thumbtack
10. Build a relationship with 2 real estate agents for pre-listing plumbing inspections
""",

    "roofing": """
INDUSTRY: Roofing

Startup Checklist:
- State roofing contractor license (varies by state)
- General liability insurance ($1,500-$5,000/yr) and workers comp
- Business entity (LLC)
- Safety equipment: harnesses, fall protection, ladders
- Roofing nailer, tear-off tools, disposal trailer
- Material accounts with local suppliers (ABC Supply, SRS Distribution, Beacon)
- Software: AccuLynx, JobProgress, or JobNimbus

Target Customer: Homeowners, property managers, commercial building owners, insurance adjusters

Pricing Strategy:
- Roof inspection: $0-$150 (many offer free inspections)
- Shingle replacement: $3.50-$7.00 per square foot
- Full residential re-roof: $8,000-$25,000+
- Emergency tarping: $300-$800
- Commercial flat roof: varies widely

First 10 Customers:
1. Canvass neighborhoods after storms with door hangers
2. Develop relationships with 3 public adjusters and 3 insurance agents
3. Create Google Business Profile with before/after photos
4. Run a storm-damage inspection campaign on Facebook after weather events
5. Partner with gutters and siding companies for referral exchanges
6. Join local chamber of commerce and BNI group
7. List on Angi, HomeAdvisor, and the manufacturer dealer locator
8. Offer warranty-backed installation (GAF, CertainTeed preferred contractor)
9. Mail postcards to homes in neighborhoods where you've recently done work
10. Set up a referral program — $200 referral fee for homeowners who refer neighbors
""",

    "real-estate": """
INDUSTRY: Real Estate

Startup Checklist:
- Obtain state real estate license (60-150 hrs pre-licensing, exam, sponsoring broker)
- Join NAR and local MLS ($1,000-$2,000/yr)
- Choose a brokerage (traditional, hybrid, or 100% commission model)
- Business entity (LLC or keep as sole proprietor depending on state)
- CRM software: Follow Up Boss, KW Command, Chime
- Marketing: professional headshots, website, yard signs, business cards

Target Customer: First-time homebuyers, move-up buyers, investors, sellers, renters

Revenue Model:
- Buyer commissions: 2.5-3% of sale price
- Listing commissions: 2.5-3% of sale price
- Rental commissions: typically 1 month's rent

First 10 Clients:
1. Mine your personal sphere — text and call everyone in your phone announcing your license
2. Host a free homebuyer seminar (in-person or on Zoom)
3. Post market updates weekly on social media
4. Partner with a mortgage broker for co-marketing and referrals
5. Farm a specific neighborhood with postcards and door knocking
6. Open house at a colleague's listing to meet buyers
7. Join Facebook groups focused on local housing and community
8. Create a free local market report and offer it as a lead magnet
9. Volunteer in community events to build name recognition
10. Set a goal to add 5 people to your database every week through conversations
""",

    "cleaning-services": """
INDUSTRY: Residential & Commercial Cleaning

Startup Checklist:
- Business entity (LLC)
- General liability insurance ($500-$1,000/yr)
- Bonding (highly recommended for residential clients)
- Basic cleaning supplies and equipment ($200-$500 to start)
- Commercial vacuum, mop system, microfiber cloths, eco-friendly chemicals
- Scheduling software: Jobber, Swept, or Housecall Pro

Pricing Strategy:
- Standard house cleaning (2BR/2BA): $100-$175
- Deep cleaning: $175-$350
- Move-in/move-out cleaning: $200-$500
- Commercial office cleaning: $0.10-$0.25 per square foot (monthly contract)
- Airbnb/short-term rental turnover: $75-$250 per turnover

First 10 Customers:
1. Offer first clean at a discounted rate to 5 neighbors or friends for reviews
2. Post before/after photos on Facebook, Instagram, Nextdoor
3. Partner with Airbnb hosts for turnover cleaning contracts
4. Reach out to 10 small office buildings for weekly cleaning quotes
5. Create a Google Business Profile and collect 5-star reviews immediately
6. List on Yelp, Handy, and TaskRabbit
7. Door hanger campaign in target neighborhoods
8. Offer referral program ($25 credit per referral)
9. Target newly listed homes on Zillow for move-in/out cleaning
10. Connect with property managers for multi-unit residential contracts
""",

    "auto-detailing": """
INDUSTRY: Auto Detailing

Startup Checklist:
- Business entity (LLC)
- General liability insurance
- Detail packages: exterior wash & wax, interior detail, full detail, ceramic coating, paint correction
- Equipment: dual-action polisher, wet/dry vac, steam cleaner, ceramic coating supplies ($500-$3,000)
- Mobile unit or fixed location decision
- Software: DaySmart, Jobber, or Square

Pricing Strategy:
- Basic wash & vacuum: $30-$80
- Standard detail: $100-$175
- Full detail: $175-$350
- Paint correction: $400-$1,200
- Ceramic coating: $800-$3,000
- Fleet detailing: contract pricing

First 10 Customers:
1. Post before/after videos on Instagram and TikTok — detailing is highly visual
2. Offer introductory pricing for 5-star review trades
3. Set up at a car show, dealership, or car wash location
4. Reach out to used car dealers for pre-sale detail contracts
5. Partner with auto body shops for referral exchanges
6. List on Yelp, Google, Nextdoor
7. Mobile detailing — go to offices and detail cars in parking lots
8. Create a YouTube short showing a transformation
9. Join local car enthusiast Facebook groups
10. Build a fleet account with 1-2 local businesses
""",

    "landscaping": """
INDUSTRY: Landscaping

Startup Checklist:
- Business entity (LLC)
- General liability + workers comp insurance
- Basic equipment: commercial mower, edger, trimmer, blower, trailer ($3,000-$8,000)
- Landscaping license or pesticide applicator license if applying chemicals (varies by state)
- Software: LMN, Jobber, or Aspire

Pricing Strategy:
- Weekly lawn maintenance (residential): $35-$100/visit
- Mulch installation: $75-$150 per yard installed
- Seasonal cleanup (spring/fall): $150-$500
- Irrigation installation: $2,000-$8,000
- Full landscape design/install: $3,000-$50,000+ depending on scope
- Commercial contracts: $500-$5,000+/month

First 10 Customers:
1. Knock on doors in one target neighborhood with door hangers
2. Create Google Business Profile with photos of completed work
3. Post seasonal before/after photos on Nextdoor and Facebook
4. Offer a free fall cleanup or spring mulching to get first customers
5. Partner with a real estate agent to offer pre-listing landscaping
6. Connect with 3 property managers for commercial accounts
7. Join local BNI or Chamber of Commerce for referral networking
8. Run a $15/day Facebook ad to homeowners in your service area
9. List on Angi, HomeAdvisor, and Thumbtack
10. Offer a 3-month maintenance package at a slight discount to secure recurring revenue
""",

    "tree-service": """
INDUSTRY: Tree Service

Startup Checklist:
- Business entity (LLC)
- General liability insurance (often $2M+ required for tree work)
- Workers comp insurance (critical — tree work is high-risk)
- ISA Arborist certification recommended (increases trust and pricing power)
- Equipment: chainsaw, chipper, stump grinder, aerial lift or climbing gear ($5,000-$50,000+)
- Obtain state contractor license if required

Target Customer: Homeowners, HOAs, municipalities, commercial property owners, utility companies

Pricing Strategy:
- Tree trimming: $150-$1,000 depending on size
- Tree removal (small): $300-$700
- Tree removal (large): $1,500-$5,000+
- Stump grinding: $75-$400
- Emergency removal: premium 1.5-2x normal rate
- Land clearing: priced by acre ($1,500-$6,000+)

First 10 Customers:
1. Post storm damage response offers immediately after weather events on Nextdoor
2. Google Business Profile with before/after photos and emergency service listing
3. Partner with insurance adjusters for storm damage referrals
4. Door hanger campaigns in neighborhoods after storms
5. Reach out to 10 HOAs and property management companies
6. Connect with utility companies for line clearance subcontracting
7. List on Angi, HomeAdvisor, and Thumbtack
8. Offer free 3-point safety inspections to homeowners with large trees
9. Build relationships with real estate agents (tree removal required at closing is common)
10. Offer a referral fee ($100-$200) for anyone who sends you a job
""",

    "funding-business": """
INDUSTRY: Business Funding / Capital Advisory

IMPORTANT DISCLAIMER: Always include in roadmap and all communications —
"We do not guarantee loan approval, funding, or credit improvements. We provide education, organization, and readiness support only."

Startup Checklist:
- Business entity (LLC)
- Understand RESPA, FTC, and state regulations around credit/financial services
- Do NOT act as a licensed lender unless properly licensed
- Position as education, consulting, and readiness coaching
- Software: CRM (GoHighLevel or HubSpot), DocuSign for agreements, Google Sheets for tracking
- Build a network of lenders, SBA offices, CDFIs, and credit unions for referrals

Target Customer:
- Small business owners who have been denied for funding
- Entrepreneurs preparing to apply for their first business loan
- Business owners who need to build or clean up business credit
- Startups needing EIN, LLC, and banking setup guidance

Revenue Model:
- Consulting/coaching packages: $500-$3,000
- Monthly retainer for ongoing credit building: $200-$500/month
- Funding prep program: $1,000-$5,000
- Referral fees from lenders (must comply with regulations in your state)

First 10 Clients:
1. Host a free webinar: "How to Get Your Business Funding Ready in 90 Days"
2. Post free content on LinkedIn, Facebook, YouTube about business credit building
3. Partner with LLC formation services and CPAs for referrals
4. Attend small business events, veteran entrepreneur groups, and returning citizen programs
5. Create a free "Funding Readiness Scorecard" as a lead magnet
6. Offer a free 30-minute funding readiness assessment
7. Connect with SCORE, SBA, and local SBDC for collaborative referrals
8. Join Facebook groups for entrepreneurs and small business owners
9. Run Facebook/Instagram ads targeting business owners
10. Build a YouTube channel on business credit — it generates inbound leads on autopilot
""",

    "attorney-law-firm": """
INDUSTRY: Attorney / Law Firm

IMPORTANT DISCLAIMER: Always include — "This communication does not establish an attorney-client relationship. No legal advice is provided until a formal engagement agreement is executed."

Startup Checklist:
- Obtain bar license in your state (JD + bar exam required)
- Register professional entity (LLC, PLLC, or PC depending on state)
- Professional liability (malpractice) insurance
- IOLTA trust account setup
- Case management software: Clio, MyCase, Practice Panther, or Filevine
- Conflicts check system
- Client intake forms and engagement letter templates

Target Client:
- Varies by practice area: personal injury, family law, criminal defense, business law, immigration, real estate, estate planning

Revenue Model:
- Hourly billing: $150-$500+/hr
- Flat fees for routine matters (wills, contracts, LLC formation): $300-$2,500
- Contingency fees (personal injury): 33%-40% of recovery
- Retainers: $1,500-$10,000 upfront with hourly billing against retainer

First 10 Clients:
1. Register with state bar lawyer referral service
2. Create Google Business Profile with practice areas clearly listed
3. Partner with 3 other attorneys in complementary practice areas for referrals
4. Speak at a local community event on a legal topic (estate planning, tenant rights, etc.)
5. Post educational legal content on LinkedIn and Facebook
6. List on Avvo, FindLaw, Martindale-Hubbell, and Google
7. Join local bar association and attend networking events
8. Build a relationship with local SCORE chapter — businesses need legal help
9. Attend court and introduce yourself to other attorneys and judges
10. Build a simple website with an easy consult booking button
""",

    "dentist-office": """
INDUSTRY: Dentist Office

IMPORTANT DISCLAIMER: Always include — "This communication does not constitute dental advice. Please consult with a licensed dentist for medical guidance."

Startup Checklist:
- DDS/DMD license + state dental license
- DEA registration if prescribing controlled substances
- Business entity (LLC or professional corporation)
- Malpractice insurance
- Office setup or purchase (equipment: chairs, X-ray, sterilization — $100,000-$500,000+)
- Practice management software: Dentrix, Eaglesoft, Open Dental
- Credentialing with dental insurance networks (Delta Dental, MetLife, etc.)
- OSHA compliance and infection control protocols

Alternative lower-cost start: Mobile dentistry, associate position, or dental practice purchase with owner financing

Target Patient: Families, uninsured/underinsured patients, cosmetic dental patients

Revenue Model:
- Insurance-based: reimbursements per procedure
- Fee-for-service: higher margin, no insurance dependency
- In-house membership plan: $30-$60/month/patient for preventive care
- Cosmetic: whitening, veneers, implants at premium cash pricing

First 10 Patients:
1. Leverage personal and professional network for soft launch
2. Google Business Profile with new patient offer
3. List in insurance provider directories
4. Partner with local employers to offer on-site dental screenings
5. Run a new patient special on Facebook/Instagram ads
6. Connect with local schools and community health fairs
7. Sponsor a local community event
8. Offer a free second opinion for patients unhappy with their current dentist
9. Build relationships with specialists (oral surgeons, orthodontists) for referrals
10. Launch a "bring a friend" patient referral program
""",

    "courier-services": """
INDUSTRY: Courier / Delivery Services

Startup Checklist:
- Business entity (LLC)
- Commercial auto insurance (personal auto will NOT cover business deliveries)
- Reliable vehicle (van, cargo van, or truck for larger items)
- Tracking system: Onfleet, Circuit, or Track-POD for route optimization
- Payment processing: Square or Stripe
- USDOT number if operating commercially with vehicles over 10,001 lbs

Revenue Model:
- Per-delivery fee: $15-$75 depending on distance/size
- Rush/same-day premium: 1.5-2x standard rate
- Monthly courier contracts with businesses: $500-$5,000/month
- White-label delivery for small businesses: flat monthly fee

Target Customer:
- Local businesses needing same-day delivery (restaurants, pharmacies, florists, law firms)
- Medical facilities (lab specimens, medications, records)
- Small e-commerce sellers needing local fulfillment
- Legal firms needing document delivery

First 10 Clients:
1. Visit 20 local businesses and offer a free first delivery
2. List on Roadie, GoShare, or Lugg for marketplace jobs while building direct clients
3. Contact local pharmacies, law offices, and medical facilities directly
4. Google Business Profile with "same-day delivery" keywords
5. Post on Nextdoor and local Facebook groups
6. Partner with a small e-commerce brand for local order fulfillment
7. Reach out to local florists and gift shops for holiday delivery contracts
8. List on Craigslist under "delivery services"
9. Build a simple landing page with a booking form
10. Offer 10% off first month for any business that signs a monthly contract
""",

    "content-creator": """
INDUSTRY: Content Creator / Brand Strategist

Startup Checklist:
- Business entity (LLC)
- Define your niche: B2B content, personal brand, eCommerce, local business, nonprofit, etc.
- Camera/lighting setup ($300-$2,000 depending on quality needed)
- Editing software: Adobe Premiere, CapCut, Final Cut Pro, or DaVinci Resolve
- Project management: Notion, Asana, or ClickUp
- Contract templates for clients (scope of work, deliverables, revision limits, payment terms)
- Pricing packages defined before you pitch

Revenue Model:
- One-time project fees: $500-$10,000+
- Monthly retainer (social media management): $500-$5,000/month
- Course/digital product sales: $27-$997+
- Affiliate commissions from content
- Ad revenue (YouTube, blog)
- Speaking and brand deals

Target Client:
- Local businesses needing social media and video content
- Personal brands and coaches needing content strategy
- eCommerce brands needing product content
- Nonprofits needing storytelling content

First 10 Clients:
1. Reach out to 20 local businesses with a specific content problem you can solve
2. Post your own content daily to demonstrate your skill (be your own case study)
3. Offer 1 free content audit per week to build trust with prospects
4. List on Contra, Upwork, or Fiverr for inbound while building direct pipeline
5. Build relationships with marketing agencies for subcontracting work
6. Join a niche mastermind or entrepreneur group where your clients hang out
7. Ask your first 3 clients for video testimonials
8. Create a case study from each client result and post it
9. Build an email list with a free resource (content calendar template, etc.)
10. Offer a 30-day starter package at a reduced rate to close your first 3 clients fast
""",

    "consulting": """
INDUSTRY: Consulting

Startup Checklist:
- Business entity (LLC)
- Define your consulting niche tightly (operations, marketing, HR, finance, tech, etc.)
- Set your pricing model: hourly ($75-$500/hr), project-based, or retainer
- Contract template with clear scope, deliverables, timeline, and payment terms
- Simple website and LinkedIn profile optimized for your target client
- CRM: HubSpot (free), Pipedrive, or Notion

Revenue Model:
- Hourly consulting: $75-$500/hr
- Project fees: $2,500-$50,000+
- Retainer: $1,500-$10,000/month for ongoing advisory
- Group programs/courses: leverage expertise at scale

Target Client:
- Small to mid-size businesses in your area of expertise
- Nonprofits, government contractors, startups, or enterprises depending on niche

First 10 Clients:
1. Contact your professional network directly with a specific offer
2. Post insights and case studies on LinkedIn twice per week
3. Speak at an industry event or local business association
4. Offer a free 60-minute strategy session as your top-of-funnel
5. Partner with complementary service providers (accountants, attorneys, marketing agencies)
6. Create a simple lead magnet (checklist, framework, or template)
7. List on Clarity.fm, Expert360, or Catalant for marketplace visibility
8. Reach out to former employers and colleagues who may need your expertise
9. Build 3 case studies from past work results (even from previous employment)
10. Join 2 business mastermind groups where your ideal clients participate
""",

    "ai-developer": """
INDUSTRY: AI Developer / AI Solutions

Startup Checklist:
- Business entity (LLC)
- Define your AI niche: automation, chatbots, custom LLM apps, computer vision, data pipelines, etc.
- Tech stack decision: Python/FastAPI, Node.js, or framework-specific
- OpenAI, Anthropic, or open-source model API accounts
- GitHub, Render/Railway/Vercel for deployment
- Proposal and project contract templates
- Portfolio: build 2-3 demo projects before pitching paying clients

Revenue Model:
- Fixed-price project: $2,500-$50,000+ depending on complexity
- Monthly retainer for AI maintenance and updates: $500-$5,000/mo
- SaaS product: build once, sell many times
- API subscription product: usage-based billing

Target Client:
- Small businesses wanting AI-powered chatbots, automation, or custom tools
- Marketing agencies needing AI content tools
- Healthcare, legal, or real estate businesses needing vertical AI solutions
- Internal enterprise tools for mid-size businesses

First 10 Clients:
1. Build a demo that solves a specific problem (e.g., AI appointment booking, lead qualifier)
2. Post about it on LinkedIn, Twitter/X, and developer communities
3. Offer 2 free builds in exchange for case studies and testimonials
4. Reach out to digital agencies that don't have AI capabilities yet
5. List on Upwork with specific AI skillsets highlighted
6. Create a YouTube tutorial showing you building something real in AI
7. Cold email 50 small businesses with a specific use case relevant to their industry
8. Partner with no-code consultants who need AI extension capabilities
9. Build a Zapier/Make.com integration and publish it as a template
10. Join AI entrepreneur communities and contribute — clients follow expertise
""",

    "cell-phone-repair": """
INDUSTRY: Cell Phone & TV Repair

Startup Checklist:
- Business entity (LLC)
- General liability insurance
- Tool kit: screen replacement tools, soldering equipment, heat gun, multimeter ($500-$2,000)
- Parts supplier accounts: iFixit, MobileSentrix, DirectFix, or local distributors
- Repair tracking software: RepairDesk, RepairShopr, or RepairQ
- Physical location or mobile repair service decision
- Warranty policy defined upfront (90-day parts/labor warranty is industry standard)

Pricing Strategy:
- iPhone screen replacement: $80-$200 depending on model
- Samsung screen replacement: $100-$300
- Battery replacement: $40-$100
- Water damage diagnostic: $40-$75 + repair cost
- TV repair: $75-$300+ depending on issue
- iPad/tablet screen: $100-$250

First 10 Customers:
1. Post your services on Facebook Marketplace and Craigslist immediately
2. Create Google Business Profile with repair pricing visible
3. List on Yelp, Thumbtack, and neighborhood apps
4. Reach out to 5 businesses with company phones (they need ongoing repair)
5. Partner with a cell phone carrier store for overflow repairs
6. Offer same-day service as your differentiator
7. Post TikTok/Instagram Reels showing repair transformations
8. Run a $0.50/day Google local ad for "phone repair near me" searches
9. Offer free diagnostics to remove friction for new customers
10. Build relationships with schools and daycares for student device repairs
""",

    "interior-designer": """
INDUSTRY: Interior Design

Startup Checklist:
- Business entity (LLC)
- Portfolio: even 3-5 before/after projects (can be friends/family) to demonstrate style
- Design software: SketchUp, AutoCAD, Revit, or Planner5D for plans
- Mood board tools: Canva Pro, Studio Designer, or DesignFiles
- Client agreement and scope of work contract
- Relationships with furniture vendors, fabric suppliers, and contractors
- Interior design certification or degree (not always required but builds credibility)

Revenue Model:
- Flat project fee: $2,000-$50,000+
- Hourly consulting: $75-$250/hr
- Cost-plus pricing (markup on furnishings): 20-40% markup on procurement
- E-design / virtual design services: $200-$1,500 per room (lower barrier to entry)
- Staging services for real estate: $500-$5,000 per project

Target Client:
- Homeowners doing a full renovation or refresh
- New construction buyers furnishing from scratch
- Rental property owners wanting higher-end finishes
- Real estate developers needing model units staged
- Small businesses needing office design

First 10 Clients:
1. Stage a friend or family member's home for free and document it beautifully
2. Post process videos and before/after content on Pinterest and Instagram
3. Partner with 3 real estate agents for staging referrals
4. Reach out to new home builders about model unit staging
5. Offer a $199 virtual design consultation to build a client base
6. Create a Houzz profile (major lead gen for interior designers)
7. Join local home shows and parade of homes events
8. Connect with general contractors who regularly need designers for clients
9. Offer a free 30-minute phone consult to lower the initial barrier
10. Collect client testimonials with photo permissions after every project
""",

    "tshirt-company": """
INDUSTRY: Custom T-Shirt & Branded Apparel Company

Startup Checklist:
- Business entity (LLC)
- Determine your production method: screen printing ($5,000-$20,000 for press), DTG printing ($10,000-$30,000 for printer), embroidery ($3,000-$8,000), heat transfer/vinyl ($500-$2,000), or print-on-demand (Printful, Printify — no equipment needed to start)
- Design software: Adobe Illustrator (industry standard) or Canva Pro
- Ecommerce store: Shopify ($29/mo) or Etsy for consumer sales
- Pricing calculator accounting for cost of goods, labor, overhead, and margin
- Turnaround time policy and minimum order quantities defined

Revenue Model:
- Custom orders for businesses, teams, events: B2B focus
- Print-on-demand retail brand: B2C ecommerce
- Wholesale for other sellers
- Screen-print-on-demand fulfillment partner for other businesses
- Sublimation/full-color all-over print for premium market

Target Customer:
- Local businesses needing branded uniforms/promo shirts
- Sports teams, churches, schools, nonprofits
- Event organizers (runs, concerts, reunions)
- Personal brands and influencers
- eCommerce brands launching apparel lines

First 10 Clients:
1. Offer a small nonprofit or youth sports team discounted shirts in exchange for social media posts
2. Set up a booth at a local market, church fair, or community event
3. Reach out to 20 local businesses about branded employee shirts
4. Post samples and product photos on Instagram, TikTok, and Facebook Marketplace
5. Sell to your personal network first (everyone knows someone planning an event)
6. Create an Etsy shop with your best designs immediately
7. Partner with a local print shop if you're starting print-on-demand
8. Offer free mockups to prospects to convert consultations into orders
9. Create a "No Minimum" offer for small groups to capture the underserved market
10. Run Facebook/Instagram ads targeting event planners, team managers, and business owners
""",

    "insurance-company": """
INDUSTRY: Insurance Firm / Brokerage

IMPORTANT DISCLAIMER: Always include — "All quotes are subject to underwriting approval. This communication does not constitute a policy offer or guarantee of coverage."

Startup Checklist:
- State insurance producer license (life, health, property/casualty — varies by line)
- Appointment with multiple carriers (independent agent model preferred)
- E&O (errors & omissions) insurance
- Business entity (LLC)
- Firm management software: EZLynx, Applied Epic, Vertafore, or HawkSoft
- HIPAA compliance if handling health insurance

Revenue Model:
- Policy commissions: 5-20% of premium annually
- Renewal commissions: recurring passive income stream
- Bonus commissions from carriers for volume
- Fee-based consulting (some states allow)

Target Client:
- Individuals needing auto, home, life, and health insurance
- Small businesses needing commercial general liability, BOP, workers comp
- Specialty markets: truckers, contractors, restaurants

First 10 Clients:
1. Contact your personal network — everyone needs insurance
2. Partner with 3 mortgage brokers for home insurance referrals
3. Partner with 3 auto dealerships for auto insurance referrals
4. Build relationships with accountants and financial planners
5. Join a BNI group — insurance is always in demand in referral networks
6. Create Google Business Profile with your lines of business listed
7. Run Facebook ads targeting new homeowners and business owners
8. Offer a free insurance review with no obligation to switch
9. Connect with HR consultants for group health insurance opportunities
10. Join local chamber and attend ribbon cuttings — new businesses always need coverage
""",

    # Fill in remaining industries from original 15
    "coaching-consulting": """
INDUSTRY: Life / Business Coaching & Consulting

Startup Checklist:
- Business entity (LLC)
- Decide on coaching niche: life, executive, business, career, fitness, mindset
- Coaching certification (ICF preferred for credibility — not legally required)
- Contract templates, intake questionnaires, coaching agreement
- Video conferencing setup (Zoom, Calendly for booking)
- CRM and client management: HoneyBook, Dubsado, or Practice

Revenue Model:
- 1:1 coaching packages: $500-$5,000 per package (3/6/12 months)
- Group programs: $200-$2,000 per person
- Online courses: $97-$2,997
- Corporate training: $2,000-$25,000+

First 10 Clients:
1. Offer 3 free discovery calls per week to build your pipeline
2. Post value content on LinkedIn, Instagram, and YouTube
3. Host a free workshop on a specific transformation topic
4. Leverage your personal network — coaching spreads through word of mouth
5. List on Coach.me, Noomii, or coach directories
6. Join Facebook communities where your ideal clients are
7. Create a signature framework and give it a name (builds authority)
8. Run a paid beta program for your first group cohort at a discount
9. Ask your first 5 clients for testimonials and referrals
10. Build a podcast or YouTube channel to attract inbound clients
""",

    "barbershop-salon": """
INDUSTRY: Barbershop / Beauty Salon

Startup Checklist:
- State cosmetology or barbering license
- Business entity (LLC)
- Booth rental vs. shop owner decision
- General liability insurance
- Salon management software: Vagaro, Booksy, Square Appointments, or StyleSeat
- Build out costs if owning a location (chairs, shampoo bowls, mirrors: $5,000-$50,000)

Pricing Strategy:
- Men's haircut: $25-$75
- Women's cut & style: $40-$150
- Color services: $80-$250+
- Braiding: $80-$300+
- Shave: $25-$60
- Product retail: 10-30% markup

First 10 Clients:
1. Offer discounts or free cuts to friends and family in exchange for reviews
2. Post haircut and style transformations on Instagram and TikTok (hair is highly visual)
3. Create Google Business Profile with online booking enabled
4. Run a "New Client Special" on Instagram ads targeting your zip code
5. List on Vagaro and StyleSeat for inbound bookings
6. Partner with local barbershops/salons for overflow referrals
7. Join Nextdoor and announce your new business
8. Connect with local wedding planners for bridal party bookings
9. Offer corporate accounts for office teams needing regular grooming
10. Build a loyalty program (10th cut free) to retain clients
""",

    "food-beverage": """
INDUSTRY: Food & Beverage

Startup Checklist:
- Cottage food law compliance OR commercial kitchen rental OR brick-and-mortar
- Food handler certification and food manager certification
- Business entity (LLC)
- Health department permit and food service license
- Product liability insurance
- Square, Toast, or Clover for payment processing
- Decide on distribution: direct-to-consumer, farmers market, wholesale, online, food truck

Pricing Strategy:
- Price products at 3x cost of goods minimum (industry standard)
- Food truck: $8-$20 per item
- Catering: $25-$75 per person
- Packaged goods: $8-$40 depending on product category

First 10 Customers:
1. Sell to friends and family first — get honest feedback and first reviews
2. Set up at a local farmers market or pop-up event
3. List on platforms like Goldbelly, Local Line, or FARE for online DTC
4. Partner with a local coffee shop or restaurant to carry your product
5. Create Instagram content showing your process and story
6. Reach out to local offices and corporate clients for catering
7. List on Yelp, Google, and food-specific directories
8. Build a "local first" narrative — people want to support community food businesses
9. Apply to a local incubator or shared kitchen program for resources and exposure
10. Create a subscription box or monthly delivery service for recurring revenue
""",
}


def get_niche_prompt_addition(industry_id: str) -> str:
    """Return niche-specific roadmap guidance to append to the AI prompt."""
    return NICHE_PROMPT_ADDITIONS.get(industry_id, "")
