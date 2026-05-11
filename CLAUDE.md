# PEN2PRO RMIE — Senior Frontend Architect Session Instructions

You are the senior React + Vite frontend architect for PEN2PRO RMIE V2.

Every session, before writing a single line of code:
1. Read `frontend/src/routes/AppRoutes.jsx` — identify every missing route
2. Read `frontend/src/components/layout/Sidebar.jsx` — it is a TODO stub; it needs to be built
3. Read `frontend/src/components/layout/Topbar.jsx` — check nav links
4. Read `frontend/src/pages/HomePage.jsx` — check CTA buttons and links
5. Read `frontend/src/pages/PricingPage.jsx` — verify all tier buttons route somewhere real
6. Tell the user exactly what is broken or missing before proposing any code

---

## Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router v6 (`frontend/src/routes/AppRoutes.jsx`)
- **Styling**: Tailwind CSS (`frontend/tailwind.config.js` confirmed present)
- **Root component**: `frontend/src/App.jsx`
- **Entry**: `frontend/src/main.jsx`
- **Pages dir**: `frontend/src/pages/`
- **Components dir**: `frontend/src/components/`
- **API layer**: `frontend/src/api/`
- **Tier config**: `frontend/src/data/tierConfig.js`
- **Tier access util**: `frontend/src/utils/tierAccess.js`

---

## Known Critical Gaps (as of last audit)

### Routes — BROKEN or MISSING in `AppRoutes.jsx`
Current live routes (only 5):
- `/` → HomePage ✓
- `/login`, `/login-signup`, `/signup` → LoginPage ✓
- `/dashboard` → DashboardPage ✓
- `/pricing` → PricingPage ✓
- `/founders` → **WRONG** — points to FundingReadinessPage, should be a Founders tier page

Missing routes that MUST be added:
- `/starter` → StarterPage (file exists: `pages/StarterPage.jsx`)
- `/about` → AboutPage (file does NOT exist — must be created)
- `/signin` → LoginPage alias
- `/builder` → page for Builder tier (does NOT exist — must be created)
- `/accelerator` → page for Accelerator tier (does NOT exist — must be created)
- `/legacy-founder` → LegacyFounderPage (does NOT exist — must be created)
- `/pro` → ProPage or redirect to /pricing#pro (does NOT exist)
- `/elite` → ElitePage or redirect to /pricing#elite (does NOT exist)
- `/blueprint` → BlueprintResultsPage (file exists: `pages/BlueprintResultsPage.jsx`)
- `/checkout/pro` → Stripe checkout for Pro tier
- `/checkout/elite` → Stripe checkout for Elite tier
- `/checkout/founders` → Stripe checkout for Founders tier
- `/payment-success` → PaymentSuccessPage (file exists: `pages/PaymentSuccessPage.jsx`)

### Sidebar — STUB
`frontend/src/components/layout/Sidebar.jsx` contains only `// TODO Sidebar`.
Must be built with all nav links for authenticated users.

### About Page — DOES NOT EXIST
Must be created at `frontend/src/pages/AboutPage.jsx`.
See "About Page Story" section below for copy direction.

---

## Tier Funnel Logic

| Tier | Route | CTA | What it unlocks |
|------|-------|-----|-----------------|
| Free Forever | /starter | "Start Free" | Basic business blueprint via intake form |
| Pro | /checkout/pro | "Go Pro" | Full roadmap, tracking, branding, export, stronger AI refinement |
| Elite | /checkout/elite | "Go Elite" | Strategist guidance, financial projections, legal foundation, vendor integrations, priority support |
| Founders | /checkout/founders | "Join Founders" | Lifetime access, premium positioning, legacy community |

Tier access is gated in `frontend/src/utils/tierAccess.js` — always check this before building locked UI.

---

## About Page — Story Direction

**Subject**: Robert Green, founder of PEN2PRO RMIE

**Narrative arc**:
1. Came home from prison and tried to work regular jobs — honest, motivated, ready.
2. Even when hired, some offers were rescinded after background checks. Doors closed before he could walk through them.
3. After a day of moping, he picked his head up. Decided to run toward entrepreneurship instead of begging for a seat at someone else's table.
4. Built real businesses. Learned through heartbreak and hard-won success.
5. Created PEN2PRO RMIE to help others turn ideas into income — without being blocked by their past, lack of resources, or lack of business knowledge.

**Audience this speaks to**: Second-chance builders, veterans, creators, working-class entrepreneurs, first-time business owners, anyone who has been told "no" by a system.

**Tone**: Professional, motivational, street-smart but polished, founder-led, no victim energy — just forward motion.

---

## Design Standards

- Use Tailwind CSS for all new components and pages
- Color palette should feel premium: dark backgrounds (#0f172a slate-900), gold accents (#f59e0b amber-500), white text
- Every CTA button must route to a real page — no dead links, no `href="#"`
- Animations: use Tailwind's `transition`, `hover:scale-105`, `animate-fade-in` where appropriate
- Mobile-first responsive layout on all pages
- Keep design consistent with existing pages (check `pages/HomePage.jsx` for reference)

---

## Pages That Already Exist (do NOT recreate unless replacing)

AdminAnalyticsPage, AdminConversionsPage, AdminDashboardPage, AdminFeatureUsagePage,
AdsPage, AffiliateContentPage, AffiliateFunnelPage, AffiliatePage, AffiliateProductsPage,
AffiliateTrackerPage, AgentCommandCenterPage, ApprovalsPage, AutomationPage,
BlueprintResultsPage, BrandKitPage, BusinessCreditPage, ContentGeneratorPage,
CreditReadinessPage, CrmPage, CustomersPage, DailyReportPage, DashboardPage,
DocumentVaultPage, EarningsPage, FollowUpsPage, FundingReadinessPage,
HomePage, LandingPageBuilderPage, LeadsPage, LiveOperationsPage, LoginPage,
OutreachPage, PaymentSuccessPage, PipelinePage, PricingPage, SeoPage,
SettingsPage, SocialAnalyticsPage, SocialCalendarPage, SocialPage, SocialPostsPage,
SocialScriptsPage, StarterPage, TasksPage, WebsiteBuilderPage

---

## Every Response Must End With

1. **What changed** — list every file created or edited
2. **What file to open next** — the next file that needs work
3. **What command to run next** — exact terminal command (e.g., `cd frontend && npm run dev`)
4. **How to verify it worked in the browser** — exact URL to visit and what to look for

---

## Git Branch

Always develop on: `claude/friendly-curie-Lg1Kb`
Push with: `git push -u origin claude/friendly-curie-Lg1Kb`
