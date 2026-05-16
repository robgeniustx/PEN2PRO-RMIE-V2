# XLR8 Pressure Washing Services — Full Strategy Report
**Prepared:** May 15, 2026 | **Website:** xlr8pws.com | **Owner:** Robert E. Green Jr.

---

## TABLE OF CONTENTS

1. Website Audit Summary
2. Homepage Wireframe & Copy Recommendations
3. SEO Keyword Map & Implementation
4. Updated Homepage Copy
5. Commercial Pressure Washing Landing Page Copy
6. Competitor Pricing Comparison
7. Recommended XLR8 Price Menu
8. One-Page Capability Statement
9. Analytics & Visitor Notification Implementation Plan
10. Quote Calculator & Stripe Invoice Flow — Fix Guide
11. Pricing Configuration File (pricingConfig.js)
12. Implementation Code Snippets

---

## SECTION 1: WEBSITE AUDIT SUMMARY

### Platform Identified
xlr8pws.com is built on **Base44** (a no-code app builder backed by Supabase). This is important because direct file-level code edits may not apply — changes need to be made through Base44's interface or via connected code exports.

### Current State Assessment

**What's Working:**
- Site is live and serving pages
- Has a reasonable page structure (Services, Commercial, Residential, Gallery, Testimonials, Quote)
- Has an instant-quote page (`/instant-quote`)
- Has Subscriptions and Referrals pages (good for recurring revenue)
- Meta tags and OG images are configured
- Multiple service-specific pages exist (Driveway, House Washing, Roof Cleaning)

**Critical Problems Identified:**

| Issue | Impact | Priority |
|-------|--------|----------|
| Title tag "XLR8 PWS" has zero local SEO value | Lost rankings for Houston searches | URGENT |
| Meta description leads with pricing ($99) not benefits | Poor click-through rate | HIGH |
| $99 driveway pricing is below Houston market rate | Leaving $50–$150 per job on table | HIGH |
| Admin/CRM pages publicly accessible (CRMDashboard, AutomationHub, InboxManagement, etc.) | Security risk, unprofessional | URGENT |
| No veteran-owned / certification trust signals in meta or H1 | Missing commercial contract trust triggers | HIGH |
| Homepage meta description identical to every subpage | Hurts SEO ranking | HIGH |
| No visible schema markup in page source | Missing rich snippets in Google | MEDIUM |
| Instant-quote page is a React SPA — content not server-rendered | Search engines may not index it | MEDIUM |
| No dedicated commercial landing page for MBE/DBE/HUB positioning | Missing government/commercial contract buyers | HIGH |

### Immediate Action Items (Before Anything Else)

1. **Lock down admin pages.** CRMDashboard, AutomationHub, InboxManagement, QuotesManagement, SubscriptionsManagement, TaskManagement, TeamManagement, MarketingManagement, CustomersLeads, DeveloperTools, SEOSettings, InvoicesManagement — none of these should be reachable by the public. Add authentication or move them to an admin subdomain.

2. **Fix the title tag.** Change from "XLR8 PWS" to "XLR8 Pressure Washing Services | Houston, TX | Veteran-Owned."

3. **Fix the meta description.** Stop leading with "$99 driveway." Lead with trust: veteran-owned, certified, Houston area.

4. **Raise the floor price.** $99 driveway is below market. Competitors start at $150. The promotional hook can remain but the calculator must escalate it by size and condition.

---

## SECTION 2: HOMEPAGE WIREFRAME

### Section Layout (Top to Bottom)

```
┌─────────────────────────────────────────────────────────┐
│  HEADER: Logo | Home | Services | Commercial | Quote    │
│          Gallery | About | (832) 459-5981 [CTA button]  │
├─────────────────────────────────────────────────────────┤
│  HERO SECTION (full width, dark overlay on job photo)   │
│  H1: Houston's Veteran-Owned Pressure Washing Service   │
│  Sub: From driveways to commercial properties —         │
│       From Dull 2 Dazzling. Certified. Trusted.         │
│  [Get Instant Quote]  [Call 832-459-5981]               │
├─────────────────────────────────────────────────────────┤
│  TRUST BAR: MBE | SBE | DBE | VOSB | HUB | SAM Reg.   │
│             Veteran-Owned | Serving Greater Houston      │
├─────────────────────────────────────────────────────────┤
│  SERVICES GRID (3 or 4 columns)                         │
│  [Driveway] [House Wash] [Roof Soft Wash] [Commercial]  │
│  Each with icon, brief description, "Get Quote" CTA     │
├─────────────────────────────────────────────────────────┤
│  WHY XLR8 (alternating text/image sections)             │
│  - Veteran-owned professionalism                        │
│  - Commercial documentation ready (W9, COI, SAM)        │
│  - Certified MBE, DBE, HUB — bid-ready                  │
│  - No damage guarantee on soft wash                     │
├─────────────────────────────────────────────────────────┤
│  BEFORE/AFTER GALLERY (2–3 rows, real job photos)       │
├─────────────────────────────────────────────────────────┤
│  TESTIMONIALS / REVIEWS (star ratings + quote excerpts) │
├─────────────────────────────────────────────────────────┤
│  SERVICE AREA MAP (Houston + surrounding cities listed) │
├─────────────────────────────────────────────────────────┤
│  COMMERCIAL CTA BANNER                                  │
│  "Property Manager? HOA? General Contractor?"          │
│  "We're certified, insured, and bid-ready."             │
│  [Request Commercial Quote]                             │
├─────────────────────────────────────────────────────────┤
│  FOOTER: Logo | Services | Commercial | About           │
│          Service Areas | Privacy | (832) 459-5981       │
│          Certifications displayed                        │
└─────────────────────────────────────────────────────────┘
```

---

## SECTION 3: SEO KEYWORD MAP

### Primary Target Keywords

| Page | Target Keyword | Monthly Volume Est. | Competition |
|------|---------------|---------------------|-------------|
| Homepage | Pressure washing Houston TX | High | Medium-High |
| Homepage | Houston pressure washing | High | Medium-High |
| Homepage | Power washing Houston | Medium | Medium |
| /DrivewayPressureWashing | Driveway cleaning Houston | Medium | Medium |
| /HouseWashing | House washing Houston TX | Medium | Medium |
| /RoofCleaning | Roof soft washing Houston | Medium | Low-Medium |
| /CommercialServices | Commercial pressure washing Houston | Medium | Medium |
| /ServiceAreas | Pressure washing Humble TX / Katy TX / etc. | Low-Medium | Low |
| /CommercialServices | Parking lot pressure washing Houston | Low | Low |
| /CommercialServices | Apartment complex pressure washing Houston | Low | Low |

### On-Page SEO Fixes Required

**Homepage:**
- H1: "Houston Pressure Washing Services — Veteran-Owned & Certified"
- H2: "Residential & Commercial Exterior Cleaning Across Greater Houston"
- Title Tag: "XLR8 Pressure Washing Services | Houston, TX | Veteran-Owned MBE"
- Meta Description: "Veteran-owned pressure washing in Houston, TX. Residential & commercial cleaning — driveways, house washing, soft washing, and more. Certified MBE, DBE, HUB. Get an instant quote today."

**Driveway Page:**
- Title: "Driveway Pressure Washing Houston TX | XLR8 Pressure Washing"
- H1: "Professional Driveway Pressure Washing in Houston, TX"
- Meta: "Get your driveway professionally cleaned starting at $150. XLR8 serves Houston, Humble, Katy, Sugar Land & surrounding areas. Veteran-owned. Instant quote available."

**House Washing Page:**
- Title: "House Washing Houston TX | Soft Wash & Pressure Wash | XLR8"
- H1: "House Washing Services in Houston — Safe Soft Wash & Pressure Wash"
- Meta: "Professional house washing in Houston TX. Soft wash & pressure wash for all siding types. Veteran-owned. MBE/DBE certified. Starting at $300. Get an instant quote."

**Commercial Services Page:**
- Title: "Commercial Pressure Washing Houston TX | MBE/DBE/HUB Certified | XLR8"
- H1: "Commercial Pressure Washing Houston — Certified, Insured & Bid-Ready"
- Meta: "Commercial power washing for property managers, HOAs, apartment complexes, retail, warehouses & government facilities in Houston, TX. MBE, DBE, VOSB, HUB certified. SAM registered."

### Schema Markup to Add (JSON-LD)

Add the following to the site `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "XLR8 Pressure Washing Services",
  "image": "https://xlr8pws.com/logo.png",
  "url": "https://xlr8pws.com",
  "telephone": "+18324595981",
  "email": "info@xlr8pws.com",
  "priceRange": "$$",
  "description": "Veteran-owned exterior cleaning company serving Houston, TX and surrounding areas. Residential and commercial pressure washing, soft washing, and concrete cleaning. Certified MBE, SBE, DBE, VOSB, HUB. SAM registered.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "areaServed": [
    "Houston", "Humble", "Atascocita", "Kingwood", "Katy", "Sugar Land",
    "Pearland", "The Woodlands", "Spring", "Cypress", "Conroe", "Tomball",
    "Jersey Village", "Pasadena", "Baytown", "Harris County", "Montgomery County",
    "Fort Bend County"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/xlr8pressurewashing",
    "https://www.instagram.com/xlr8pressurewashing"
  ]
}
```

Also add Service schema for each service type, and FAQ schema for the most common questions (cost, service area, certifications).

---

## SECTION 4: UPDATED HOMEPAGE COPY

### Hero Section

**Headline (H1):**
Houston's Veteran-Owned Pressure Washing Service

**Subheadline:**
From driveways to commercial complexes — XLR8 delivers professional exterior cleaning across Greater Houston. Certified MBE, DBE, VOSB & HUB. SAM Registered.

**CTA Buttons:**
- [Get Your Instant Quote]
- [Call Now: 832-459-5981]

**Trust Tagline:**
*From Dull 2 Dazzling — Every Time.*

---

### Trust Bar (below hero, full width)

🎖️ Veteran-Owned | ✅ MBE Certified | ✅ SBE Certified | ✅ DBE Certified | ✅ VOSB | ✅ HUB Certified | 📋 SAM Registered | 🛡️ Fully Insured | Serving Greater Houston, TX

---

### Services Section

**H2:** Residential & Commercial Exterior Cleaning

**Driveway Pressure Washing**
Concrete, asphalt, and pavers — we remove oil stains, mold, algae, and dirt buildup. Driveways restored to like-new condition.
*Starting at $150 | [Get Quote →]*

**House Washing**
Safe, low-pressure soft washing for all siding types. Removes mold, mildew, algae, and years of Houston grime without damaging your home.
*Starting at $300 | [Get Quote →]*

**Roof Soft Washing**
Protect your roof investment with our no-pressure soft wash treatment. Safe for asphalt shingles, tile, and metal roofs.
*Starting at $350 | [Get Quote →]*

**Commercial Cleaning**
Storefronts, parking lots, apartment complexes, warehouses, and more. We're fully documented, insured, and bid-ready.
*[Request Commercial Quote →]*

**Concrete & Flatwork**
Sidewalks, parking lots, patios, pool decks, and entryways. High-pressure concrete cleaning for residential and commercial properties.
*Starting at $125/1,000 sq ft | [Get Quote →]*

**Fence Cleaning**
Wood, vinyl, and chain link fence washing. Removes mildew, algae, and weathering buildup.
*Starting at $150 | [Get Quote →]*

---

### Why XLR8 Section

**H2:** Why Houston Property Owners Choose XLR8

**Veteran-Owned Professionalism**
Robert Green served this country before serving Houston. That same discipline, attention to detail, and commitment to completing the mission drives every job we take on.

**Certified & Contract-Ready**
MBE, SBE, DBE, VOSB, and HUB certified. Active SAM registration. We have the documentation your procurement department needs. Property managers, HOAs, and general contractors — we're already bid-ready.

**We Bring the Water**
No hookup required for most jobs. We arrive equipped and ready to deliver results without burdening your property or your schedule.

**No Damage Guarantee on Soft Wash**
We use the right pressure for the right surface. Our soft wash treatments will not damage your siding, roof, or landscaping. Guaranteed.

**From Dull 2 Dazzling**
Before we leave, your property looks like it should — clean, sharp, and ready to impress.

---

### Service Area Section

**H2:** Serving Houston and Surrounding Areas

We operate across Greater Houston including: Humble, Atascocita, Kingwood, Porter, Katy, Sugar Land, Pearland, The Woodlands, Spring, Cypress, Conroe, Tomball, Jersey Village, Pasadena, Baytown, and all of Harris County, Montgomery County, and Fort Bend County.

*Not sure if we cover your area? [Contact us →]*

---

### Commercial CTA Banner

**H2:** Property Managers. HOAs. General Contractors. We're Ready.

XLR8 Pressure Washing is certified, insured, and fully documented for commercial and government contracts. We service apartment complexes, retail centers, warehouses, churches, schools, municipal facilities, and HOA communities across Greater Houston.

**MBE | SBE | DBE | VOSB | HUB | SAM Registered**

[Request a Commercial Quote] [Download Capability Statement]

---

## SECTION 5: COMMERCIAL PRESSURE WASHING LANDING PAGE COPY

**Page URL:** /CommercialServices or /commercial-pressure-washing-houston

**Title Tag:** Commercial Pressure Washing Houston TX | MBE/DBE Certified | XLR8

**H1:** Commercial Pressure Washing in Houston, TX
**H2 Sub:** Certified, Insured, and Bid-Ready for Property Managers, HOAs & Contractors

---

### The XLR8 Commercial Difference

When you hire a vendor for commercial exterior cleaning, you need more than a pressure washer. You need documentation. Insurance. Certification. A company that shows up, completes the job correctly, and doesn't create liability for your property.

XLR8 Pressure Washing Services is a veteran-owned, Houston-based exterior cleaning company certified as MBE, SBE, DBE, VOSB, and HUB with an active SAM registration. We are equipped to serve:

- **Property Management Companies** — Apartment complexes, office parks, retail centers
- **HOAs** — Common area concrete, building exteriors, parking lots, community entryways
- **General Contractors** — Post-construction cleanup, site preparation, building washing
- **Government & Municipal Facilities** — Parks, schools, community centers, government buildings
- **Retail & Restaurant Properties** — Storefronts, drive-throughs, entryways, grease trap areas
- **Warehouses & Industrial** — Building exteriors, loading docks, equipment pads
- **Church & Nonprofit Properties** — Discounts available for qualifying organizations

---

### Commercial Services Offered

| Service | Description | Pricing Basis |
|---------|-------------|---------------|
| Parking Lot / Flatwork Cleaning | Concrete & asphalt, oil stains, gum, debris | Per sq ft |
| Building Exterior Washing | All surface types, multi-story available | Per sq ft |
| Storefront Cleaning | Entry areas, awnings, windows surrounds | Per location |
| Apartment Complex Cleaning | Breezeways, parking, building exteriors | Per building |
| Dumpster Pad Cleaning | Grease, debris, odor removal | Per pad |
| Graffiti Removal | Surface-appropriate chemical treatments | Per sq ft |
| Fleet / Equipment Washing | Trucks, trailers, heavy equipment | Per vehicle |
| HOA Common Areas | Walkways, pool decks, fencing, signage | Custom quote |

---

### Commercial Documentation Available

Upon request, XLR8 can provide:
- W-9 (current)
- Certificate of Insurance (COI) with additional insured endorsement
- Vendor registration documentation
- SAM.gov UEI/DUNS information
- Certification letters: MBE, SBE, DBE, VOSB, HUB
- References from prior commercial clients

---

### Frequency Programs Available

We offer monthly, quarterly, and seasonal service contracts for commercial accounts. Recurring clients receive priority scheduling, volume pricing, and a dedicated point of contact.

[Request Commercial Quote] [Download Capability Statement] [Call 832-459-5981]

---

## SECTION 6: COMPETITOR PRICING COMPARISON

### Houston Market — Competitor Pricing Data

| Service | Twisted Nozzle (Competitor) | Market Average (Houston) | XLR8 Current | XLR8 Recommended |
|---------|----------------------------|--------------------------|--------------|------------------|
| Driveway (standard 2-car, ~600 sq ft) | $150 – $350 | $150 – $260 | $99 (starting) | $150 – $275 |
| House Washing (1,500–2,500 sq ft) | $212 – $447 | $250 – $500 | Not specified | $300 – $500 |
| Deck / Patio Cleaning | $120 – $240 | $120 – $250 | Not specified | $150 – $275 |
| Fence Washing (100 linear ft) | $150 – $300 | $150 – $300 | Not specified | $150 – $275 |
| Roof Soft Washing | $0.20–$0.40/sq ft | $250 – $600 | Not specified | $350 – $700 |
| Sidewalk / Flatwork | Per sq ft | $0.10–$0.17/sq ft | Not specified | $0.12–$0.20/sq ft |
| Commercial (parking lot / building) | $0.08–$0.30/sq ft | $0.08–$0.30/sq ft | Not specified | $0.12–$0.30/sq ft |
| Graffiti Removal | $500 minimum | $500 minimum | Not specified | $500 minimum |
| Fleet Washing | ~$80/vehicle | $60–$120/vehicle | Not specified | $75–$125/vehicle |
| Rust / Stone Cleaning | $1–$3/sq ft | $1–$3/sq ft | Not specified | $1.25–$3/sq ft |

**Sources:** Twisted Nozzle 2025 Price Guide, HomeGuide Commercial Pressure Washing 2026, ProMatcher Houston Cost Report, Handoff.ai Houston Driveway Cost Data

---

### Competitive Positioning Analysis

**Where XLR8 Is Currently Positioned:** Budget/promotional tier ($99 driveway)

**Where XLR8 Should Be Positioned:** **Mid-market to certified commercial tier**

**Rationale:**
- XLR8 holds MBE, DBE, HUB, VOSB, and SAM certifications that competitors like Twisted Nozzle do NOT have
- Certification-based positioning justifies mid-to-premium pricing
- Government and commercial contracts require these certifications — that's a separate market where price-matching budget competitors is unnecessary and counterproductive
- $99 driveways signal "cheap" to property managers reviewing vendors
- Houston competitors start at $150 for driveways — XLR8 is giving margin away

**The XLR8 Positioning Statement:**
*"We're not the cheapest. We're the most credentialed. Veteran-owned, government-certified, and fully insured. Property managers and general contractors choose XLR8 because we show up right, document correctly, and protect their liability."*

---

## SECTION 7: RECOMMENDED XLR8 PRICE MENU

### RESIDENTIAL PRICING

**Minimum Service Charge:** $125 (any residential job)

| Service | Pricing |
|---------|---------|
| Driveway Cleaning — Single car (~400 sq ft) | $150 |
| Driveway Cleaning — Double car (~600 sq ft) | $175 – $225 |
| Driveway Cleaning — Large / circular / heavily stained | $250 – $350+ |
| Sidewalk Cleaning (per 100 linear ft) | $75 – $125 |
| House Washing — Up to 1,500 sq ft | $300 – $375 |
| House Washing — 1,500–2,500 sq ft | $375 – $475 |
| House Washing — 2,500–4,000 sq ft | $475 – $650 |
| Roof Soft Wash — Up to 1,500 sq ft | $350 – $450 |
| Roof Soft Wash — 1,500–2,500 sq ft | $450 – $650 |
| Patio / Pool Deck — Up to 400 sq ft | $150 – $225 |
| Patio / Pool Deck — 400–1,000 sq ft | $225 – $375 |
| Deck / Wood Deck Cleaning | $175 – $325 |
| Fence Cleaning (per 100 linear ft) | $125 – $200 |
| Full Exterior Package (driveway + house + sidewalk) | Save 10–15% |

**Add-Ons:**
- Heavy mold/algae buildup surcharge: +$50–$100
- Multi-story surcharge (3+ stories): +$75–$150
- Priority scheduling (within 48 hrs): +$50
- No water access at property: +$35
- Travel surcharge (>25 miles from Houston): +$50

---

### COMMERCIAL PRICING

**Minimum Commercial Charge:** $250 (small storefronts) / $500 (larger properties)

| Service | Pricing |
|---------|---------|
| Storefront Cleaning | $250 – $500 per visit |
| Parking Lot Flatwork | $0.08 – $0.18 per sq ft (volume discounts) |
| Building Exterior — Single story | $0.15 – $0.25 per sq ft |
| Building Exterior — Multi-story | $0.20 – $0.35 per sq ft |
| Apartment Complex — Per building | Custom quote (inspect required) |
| Dumpster Pad | $150 – $350 per pad |
| Graffiti Removal | $500 minimum, $2–$5/sq ft |
| Fleet Washing (per vehicle) | Cars/Vans: $75 | Box Trucks: $100 | Semis: $150 |
| HOA Common Areas | Custom recurring contract |
| Monthly/Quarterly Contracts | 10–15% discount from single-visit rates |

---

### PROMOTIONAL HOOK STRATEGY

Keep the "$99 driveway" messaging ONLY as a:
- Spring/Fall promotional offer for new customers
- Promotional landing page for specific zip code ads
- New customer intro pricing capped at standard single-car driveway, good condition only

Do NOT display $99 as the general listed price on the main website, because it devalues the brand to commercial buyers and undercuts your margin on every residential job.

Replace with: *"Driveways starting at $150. Get your exact price in 60 seconds."*

---

## SECTION 8: ONE-PAGE CAPABILITY STATEMENT

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        XLR8 PRESSURE WASHING SERVICES
            CAPABILITY STATEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPANY OVERVIEW
────────────────────────────────────────────────────
XLR8 Pressure Washing Services is a Houston, Texas-based
exterior cleaning company. We provide professional pressure
washing, soft washing, and concrete cleaning services for
residential, commercial, government, and institutional clients
across the Greater Houston area.

Founded by a service-connected veteran, XLR8 is built on
military discipline, attention to detail, and a commitment
to delivering results every time.

CONTACT INFORMATION
────────────────────────────────────────────────────
Website:   xlr8pws.com
Phone:     832-459-5981
Email:     info@xlr8pws.com
Location:  Houston, Texas / Greater Houston Area

CERTIFICATIONS & REGISTRATIONS
────────────────────────────────────────────────────
✅ Minority Business Enterprise (MBE)
✅ Small Business Enterprise (SBE)
✅ Disadvantaged Business Enterprise (DBE)
✅ Veteran-Owned Small Business (VOSB)
✅ Historically Underutilized Business (HUB)
✅ Active SAM.gov Registration
✅ Fully Insured — Certificate of Insurance available on request

CORE SERVICES
────────────────────────────────────────────────────
• Commercial Pressure Washing
• Soft Washing (low-pressure, safe for all surfaces)
• Concrete & Flatwork Cleaning
• Building Exterior Washing
• Storefront & Entryway Cleaning
• Parking Lot & Sidewalk Cleaning
• Apartment Complex & HOA Exterior Cleaning
• Roof Soft Washing
• Graffiti Removal
• Fleet & Equipment Washing
• Residential Driveway, House & Patio Cleaning

DIFFERENTIATORS
────────────────────────────────────────────────────
• Veteran-owned — professional, accountable, on-time
• Multi-certified for government and commercial contracts
• Commercial documentation ready (W-9, COI, SAM UEI)
• Pressure wash AND soft wash capabilities
• Residential and commercial experience
• Serving Greater Houston including: Harris, Montgomery,
  and Fort Bend Counties

IDEAL CLIENTS
────────────────────────────────────────────────────
• Property Management Companies
• HOAs (Homeowners Associations)
• Apartment Complexes
• Retail Centers & Restaurants
• Warehouses & Industrial Facilities
• Schools, Churches & Nonprofits
• Municipal & Government Facilities
• General Contractors (post-construction cleanup)
• Fleet & Equipment Owners

SERVICE AREA
────────────────────────────────────────────────────
Greater Houston, TX including: Humble, Atascocita,
Kingwood, Katy, Sugar Land, Pearland, The Woodlands,
Spring, Cypress, Conroe, Tomball, Jersey Village,
Pasadena, Baytown, and surrounding Harris, Montgomery,
and Fort Bend County areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         "FROM DULL 2 DAZZLING — EVERY TIME."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**To produce a designed PDF version of this capability statement**, use the PEN2PRO-RMIE-V2 workspace and run it through the PDF skill with XLR8's brand colors (blue/black/white or your defined palette). The text above is the content — design polish is the next step.

---

## SECTION 9: ANALYTICS & VISITOR NOTIFICATION PLAN

### Recommended Stack

| Tool | Purpose | Cost |
|------|---------|------|
| **Google Analytics 4 (GA4)** | Core traffic analytics | Free |
| **Google Tag Manager (GTM)** | Event tracking management | Free |
| **Google Search Console** | SEO ranking & click data | Free |
| **Meta Pixel** | Retargeting if running Facebook/Instagram ads | Free |
| **Zapier or Make.com** | Real-time SMS/email notifications on high-intent events | $20–$50/mo |
| **Plausible Analytics (optional)** | Privacy-first analytics, no cookie banner needed | $9/mo |

### Events to Track

```javascript
// High-intent events to fire via GA4 + GTM

// 1. Get Instant Quote button click
gtag('event', 'quote_click', {
  event_category: 'conversion',
  event_label: 'instant_quote_button',
  page_location: window.location.href
});

// 2. Phone number click (mobile)
gtag('event', 'phone_click', {
  event_category: 'conversion',
  event_label: 'phone_tap',
  value: 1
});

// 3. Quote form submission
gtag('event', 'quote_submitted', {
  event_category: 'conversion',
  event_label: 'quote_form_complete',
  value: 50
});

// 4. Commercial quote request
gtag('event', 'commercial_quote_request', {
  event_category: 'commercial',
  event_label: 'commercial_form_submit'
});

// 5. Capability statement download
gtag('event', 'file_download', {
  event_category: 'commercial',
  event_label: 'capability_statement_pdf'
});

// 6. Stripe payment completed
gtag('event', 'purchase', {
  transaction_id: '{{QUOTE_ID}}',
  value: '{{TOTAL}}',
  currency: 'USD',
  items: [{ item_name: '{{SERVICE_NAME}}' }]
});
```

### Owner Notification (Real-Time SMS/Email)

Use **Zapier** to connect GA4 conversions or form submissions to:
- **Email notification** to robertg@xlr8pressurewashing.com
- **SMS to 832-459-5981** (via Twilio or Zapier SMS)

**Notification trigger conditions:**
- Quote form submitted → immediate notification
- Stripe payment completed → immediate notification
- Commercial quote requested → immediate notification
- Capability statement downloaded → immediate notification (not on every page view)

### GA4 Installation for React/Vite/Base44

If the site has a React layer accessible for editing:

```bash
npm install react-ga4
```

```javascript
// src/analytics.js
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackEvent = (category, action, label, value) => {
  ReactGA.event({ category, action, label, value });
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
```

```javascript
// src/App.jsx (or equivalent root component)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from './analytics';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  // ... rest of app
}
```

---

## SECTION 10: QUOTE CALCULATOR & STRIPE INVOICE FLOW — FIX GUIDE

### Current Problem Assessment

The instant-quote page at `/instant-quote` exists but the full form logic and Stripe integration cannot be assessed via server-rendered HTML alone (it's a React SPA). Based on the task description, the known issues are:
- Quote calculations may not reflect accurate Houston market rates
- Itemized invoice may not display before Stripe checkout
- Customer flow may send users to Stripe before seeing their total
- Owner notification on quote/payment events may not be configured

### Correct Customer Flow (Required)

```
1. Customer opens /instant-quote
2. Customer fills service intake form
3. System calculates quote in real time
4. Customer sees ITEMIZED INVOICE (not Stripe yet)
5. Customer reviews total, approves terms
6. Customer clicks "Pay Deposit" or "Pay in Full"
7. Backend creates Stripe Checkout Session
8. Customer goes to Stripe → pays
9. Stripe webhook fires → system records payment
10. Customer receives email confirmation with invoice
11. Owner receives SMS + email notification with job details
```

**Critical rule:** The customer NEVER goes to Stripe before seeing their total. The total on the invoice MUST match the Stripe checkout amount exactly.

---

### Pricing Configuration File

```javascript
// src/config/pricingConfig.js
// Edit this file to update pricing — no code changes needed elsewhere

export const PRICING_CONFIG = {
  // Minimum charges
  RESIDENTIAL_MINIMUM: 125,
  COMMERCIAL_MINIMUM: 250,
  COMMERCIAL_LARGE_MINIMUM: 500,

  // Residential — flat rate starters (escalate by sqft below)
  DRIVEWAY: {
    base: 150,
    perSqFt: 0.22,
    minSqFt: 400,
    maxFlat: 400, // use flat below this; per sqft above
  },
  HOUSE_WASHING: {
    base: 300,
    perSqFt: 0.14,
    minSqFt: 1000,
  },
  ROOF_SOFT_WASH: {
    base: 350,
    perSqFt: 0.22,
    minSqFt: 1000,
  },
  PATIO_DECK: {
    base: 150,
    perSqFt: 0.20,
    minSqFt: 300,
  },
  FENCE: {
    base: 150,
    perLinearFt: 1.40,
    minLinearFt: 80,
  },
  SIDEWALK: {
    base: 100,
    perSqFt: 0.15,
    minSqFt: 400,
  },

  // Commercial
  PARKING_LOT: {
    perSqFt: 0.12,
    minimum: 300,
  },
  BUILDING_EXTERIOR_SINGLE: {
    perSqFt: 0.18,
    minimum: 350,
  },
  BUILDING_EXTERIOR_MULTI: {
    perSqFt: 0.28,
    minimum: 500,
  },
  STOREFRONT: {
    base: 275,
  },
  DUMPSTER_PAD: {
    base: 200,
  },
  GRAFFITI: {
    minimum: 500,
    perSqFt: 2.50,
  },
  FLEET: {
    car_van: 75,
    box_truck: 100,
    semi: 150,
  },

  // Multipliers / Surcharges
  MULTIPLIERS: {
    heavy_buildup: 1.25,        // 25% surcharge for heavy mold/algae
    second_story: 1.15,         // 15% for 2-story
    third_story_plus: 1.30,     // 30% for 3+ story
    no_water_access: 35,        // flat $35 fee
    priority_scheduling: 50,    // flat $50 for within 48hr
    out_of_zone: 50,            // flat $50 for >25 miles from Houston
    commercial_complexity: 1.20, // 20% for high-complexity commercial
    rush_emergency: 75,         // flat $75 emergency fee
  },

  // Discounts
  DISCOUNTS: {
    bundle_full_exterior: 0.12,    // 12% off driveway + house + sidewalk
    recurring_monthly: 0.15,      // 15% off for monthly contract
    recurring_quarterly: 0.10,    // 10% off quarterly
    new_customer_promo: 0.10,     // 10% new customer discount
    veteran_military: 0.10,       // 10% veteran/military discount
    nonprofit_church: 0.10,       // 10% nonprofit/church discount
  },

  // Stripe fee handling (if passing to customer)
  STRIPE_FEE_PERCENT: 0.029,
  STRIPE_FEE_FIXED: 0.30,
  PASS_STRIPE_FEE: false, // set to true to add processing fee to total

  // Deposit options
  DEPOSIT_PERCENT: 0.50, // 50% deposit required on quotes over $300
  DEPOSIT_THRESHOLD: 300, // minimum quote amount to require deposit
};
```

---

### FastAPI Backend Endpoints

```python
# backend/routes/quotes.py

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, timedelta
import uuid
import stripe
import os

router = APIRouter()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

class QuoteRequest(BaseModel):
    customer_name: str
    customer_email: EmailStr
    customer_phone: str
    service_address: str
    property_type: str  # residential, commercial, hoa, apartment, government
    service: str
    square_footage: Optional[float]
    linear_footage: Optional[float]
    stories: Optional[int] = 1
    buildup_level: str = "moderate"  # light, moderate, heavy
    water_access: bool = True
    urgency: str = "standard"  # standard, priority, emergency
    notes: Optional[str]
    vehicle_count: Optional[int]
    promo_code: Optional[str]

class QuoteResponse(BaseModel):
    quote_id: str
    line_items: list
    subtotal: float
    discounts: float
    surcharges: float
    total: float
    deposit_required: float
    balance_due: float
    expires_at: str

@router.post("/api/quotes/calculate")
async def calculate_quote(request: QuoteRequest):
    """Calculate quote without saving"""
    result = run_quote_calculation(request)
    return result

@router.post("/api/quotes/create")
async def create_quote(request: QuoteRequest):
    """Calculate and save quote to database"""
    quote_id = f"XLR8-{datetime.now().strftime('%Y%m%d')}-{str(uuid.uuid4())[:6].upper()}"
    result = run_quote_calculation(request)
    result["quote_id"] = quote_id
    result["status"] = "quote_created"
    result["created_at"] = datetime.now().isoformat()
    result["expires_at"] = (datetime.now() + timedelta(days=30)).isoformat()
    
    # Save to database
    # await db.quotes.insert_one({...result, "customer": request.dict()})
    
    # Notify owner
    await notify_owner_new_quote(quote_id, request, result["total"])
    
    return result

@router.post("/api/stripe/create-checkout-session")
async def create_checkout_session(quote_id: str, payment_type: str = "full"):
    """Create Stripe Checkout Session from quote"""
    # Load quote from database
    # quote = await db.quotes.find_one({"quote_id": quote_id})
    
    # For demo - calculate amount
    amount_cents = 0  # Load from quote
    
    if payment_type == "deposit":
        amount_cents = int(amount_cents * 0.50)
    
    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=[{
            "price_data": {
                "currency": "usd",
                "product_data": {
                    "name": f"XLR8 Pressure Washing — Quote {quote_id}",
                },
                "unit_amount": amount_cents,
            },
            "quantity": 1,
        }],
        mode="payment",
        success_url=f"{os.getenv('FRONTEND_URL')}/ConfirmAppointment?quote_id={quote_id}&session_id={{CHECKOUT_SESSION_ID}}",
        cancel_url=f"{os.getenv('FRONTEND_URL')}/instant-quote?quote_id={quote_id}",
        metadata={
            "quote_id": quote_id,
            "payment_type": payment_type,
        }
    )
    
    return {"checkout_url": session.url, "session_id": session.id}

@router.post("/api/stripe/webhook")
async def stripe_webhook(request):
    """Handle Stripe webhook events"""
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, os.getenv("STRIPE_WEBHOOK_SECRET")
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        quote_id = session["metadata"]["quote_id"]
        payment_type = session["metadata"]["payment_type"]
        
        # Update quote status
        # await db.quotes.update_one(
        #     {"quote_id": quote_id},
        #     {"$set": {"status": "deposit_paid" if payment_type == "deposit" else "paid_in_full"}}
        # )
        
        # Send confirmation email to customer
        # await send_customer_confirmation(quote_id, session["customer_details"]["email"])
        
        # Notify owner
        # await notify_owner_payment_received(quote_id, session["amount_total"] / 100)
    
    return {"received": True}
```

---

### Quote Calculation Function

```python
# backend/utils/quote_calculator.py

def run_quote_calculation(request):
    """Core pricing logic — maps to pricingConfig.js values"""
    
    line_items = []
    base_total = 0
    
    # SERVICE BASE CALCULATIONS
    service = request.service.upper()
    sqft = request.square_footage or 0
    
    if service == "DRIVEWAY":
        if sqft <= 400:
            base = 150
        elif sqft <= 600:
            base = 175 + (sqft - 400) * 0.22
        else:
            base = 225 + (sqft - 600) * 0.22
        line_items.append({"description": "Driveway Pressure Washing", "amount": round(base, 2)})
        base_total += base
    
    elif service == "HOUSE_WASHING":
        base = max(300, 300 + (sqft - 1000) * 0.14) if sqft > 1000 else 300
        line_items.append({"description": "House Washing", "amount": round(base, 2)})
        base_total += base
    
    elif service == "ROOF_SOFT_WASH":
        base = max(350, sqft * 0.22)
        line_items.append({"description": "Roof Soft Washing", "amount": round(base, 2)})
        base_total += base
    
    # ... (add remaining services)
    
    # SURCHARGES
    surcharges = 0
    if request.buildup_level == "heavy":
        heavy_fee = round(base_total * 0.25, 2)
        line_items.append({"description": "Heavy Buildup Surcharge", "amount": heavy_fee})
        surcharges += heavy_fee
    
    if request.stories == 2:
        story_fee = round(base_total * 0.15, 2)
        line_items.append({"description": "Multi-Story Surcharge (2 stories)", "amount": story_fee})
        surcharges += story_fee
    elif request.stories and request.stories >= 3:
        story_fee = round(base_total * 0.30, 2)
        line_items.append({"description": "Multi-Story Surcharge (3+ stories)", "amount": story_fee})
        surcharges += story_fee
    
    if not request.water_access:
        line_items.append({"description": "No Water Access Fee", "amount": 35.00})
        surcharges += 35.00
    
    if request.urgency == "priority":
        line_items.append({"description": "Priority Scheduling", "amount": 50.00})
        surcharges += 50.00
    elif request.urgency == "emergency":
        line_items.append({"description": "Emergency Scheduling", "amount": 75.00})
        surcharges += 75.00
    
    subtotal = base_total + surcharges
    
    # DISCOUNTS
    discounts = 0
    # Apply promo codes, bundles, etc. here
    
    total = max(subtotal - discounts, 125.00)  # Never below residential minimum
    deposit_required = total * 0.50 if total >= 300 else 0
    
    return {
        "line_items": line_items,
        "subtotal": round(base_total, 2),
        "surcharges": round(surcharges, 2),
        "discounts": round(discounts, 2),
        "total": round(total, 2),
        "deposit_required": round(deposit_required, 2),
        "balance_due": round(total - deposit_required, 2),
    }
```

---

### Owner Notification Function

```python
# backend/utils/notifications.py
import os
import httpx

OWNER_EMAIL = "robertg@xlr8pressurewashing.com"
OWNER_PHONE = os.getenv("OWNER_PHONE")  # Set in environment

async def notify_owner_new_quote(quote_id, request, total):
    """Send email/SMS to owner when new quote is created"""
    
    subject = f"🔔 New XLR8 Quote — {request.customer_name} | ${total:.2f}"
    body = f"""
New Quote Created: {quote_id}

Customer: {request.customer_name}
Phone: {request.customer_phone}
Email: {request.customer_email}
Address: {request.service_address}
Service: {request.service}
Property Type: {request.property_type}
Total: ${total:.2f}

Admin: https://xlr8pws.com/QuotesManagement
    """
    
    # Send email via your email provider (SendGrid, Mailgun, etc.)
    # await send_email(OWNER_EMAIL, subject, body)
    
    # Send SMS via Twilio
    # await send_sms(OWNER_PHONE, f"New XLR8 Quote: {request.customer_name} | ${total:.2f} | {request.service_address}")
    
    print(f"Owner notified: {quote_id}")
```

---

### Required Environment Variables

```
# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PUBLISHABLE_KEY=

# App URLs
FRONTEND_URL=https://xlr8pws.com
BACKEND_URL=https://api.xlr8pws.com

# Notifications
OWNER_EMAIL=robertg@xlr8pressurewashing.com
OWNER_PHONE=+18324595981
SENDGRID_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=...
TWILIO_FROM_NUMBER=+1...

# Database
DATABASE_URL=postgresql://...
# or
MONGO_URL=mongodb+srv://...

# Admin
ADMIN_ACCESS_KEY=xlr8admin2026
```

---

### Testing Checklist — Quote to Payment Flow

- [ ] Driveway 400 sqft, standard → calculates $150
- [ ] Driveway 600 sqft, heavy buildup, 2-story → calculates correctly with surcharges
- [ ] House wash 2,000 sqft, standard → calculates $372 (300 + 1000*0.14)
- [ ] Commercial storefront → minimum $275 applies
- [ ] Itemized invoice displays before Stripe button
- [ ] Total on invoice matches Stripe checkout total exactly
- [ ] Stripe checkout session created with correct amount
- [ ] Payment success → webhook fires → status updated
- [ ] Owner receives email within 60 seconds of quote creation
- [ ] Customer receives confirmation email after payment
- [ ] Admin QuotesManagement shows new record
- [ ] Invalid/out-of-zone address triggers travel surcharge
- [ ] No water access checkbox adds $35
- [ ] Priority scheduling adds $50
- [ ] Promo code field accepts/rejects codes correctly
- [ ] Mobile layout of quote form is usable on iPhone
- [ ] Commercial "Request Formal Quote" option routes to email/call CTA instead of forcing instant payment

---

## FINAL NOTES & PRIORITIES

### Do This Week (Highest ROI):

1. **Fix the title tag** — costs nothing, immediate SEO impact
2. **Change $99 to $150 starting price** on main website (keep $99 as promo only)
3. **Lock down admin pages** — CRM, automation, management pages should not be publicly accessible
4. **Add LocalBusiness schema markup** — JSON-LD in site head
5. **Add certifications to hero section** — MBE/DBE/VOSB trust bar above the fold

### Do This Month:

6. Install Google Analytics 4 + Google Search Console
7. Create capability statement PDF for download on Commercial page
8. Fix quote calculator pricing logic to reflect updated price menu
9. Wire owner notifications on quote submissions
10. Update meta descriptions on all major service pages

### Do This Quarter:

11. Build out service-area landing pages (Humble, Katy, Kingwood, etc.) for local SEO
12. Launch monthly/quarterly commercial service contract program
13. Pursue HOA and property management vendor relationships using capability statement
14. Add video testimonials or before/after gallery with real job photos

---

*Report generated automatically — May 15, 2026 | XLR8 Pressure Washing Services Strategy Agent*
