# PEN2PRO BusinessOS — Task List

## Phase 1: Foundation & Route Structure

### In Progress
_Nothing in progress yet_

### Pending

#### 🔧 PHASE 1 — CORE INFRASTRUCTURE
- [ ] **P1-01** Audit existing routes & nav — map what's wired vs. broken
- [ ] **P1-02** Add missing routes to AppRoutes.jsx (about, rmie, businessos, command-center/*, voice-agent/*, website-builder/*, domain-search)
- [ ] **P1-03** Upgrade Navbar — add RMIE, Command Center, AI Voice Agent, Website Builder, Domain Finder, About links
- [ ] **P1-04** Create `industries.js` constants file with all 28 niches

#### 🏠 PAGES — MISSING / NEEDS CREATION
- [ ] **P1-05** Create `/about` — Robert Green founder story (currently redirects to `/`)
- [ ] **P1-06** Create `/businessos` — PEN2PRO BusinessOS overview landing page
- [ ] **P1-07** Create `/rmie` — RMIE engine landing/intro page
- [ ] **P1-08** Create `/command-center` — P2P Command Center landing page
- [ ] **P1-09** Create `/command-center/dashboard` — P2P Command Center dashboard mockup
- [ ] **P1-10** Create `/voice-agent/dashboard` — AI Voice Agent dashboard mockup
- [ ] **P1-11** Create `/website-builder` — Website Builder landing page (upgrade WebsiteBuilderPage.jsx)
- [ ] **P1-12** Create `/domain-search` — Domain Finder page
- [ ] **P1-13** Create stub pages for command-center sub-routes (customers, leads, opportunities, pipeline, quotes, invoices, calendar, reputation, reports, automations, funnels, forms, websites, domains, settings, upgrade)
- [ ] **P1-14** Create stub pages for voice-agent sub-routes (calls, scripts, calendar, settings, pricing)
- [ ] **P1-15** Create stub pages for website-builder sub-routes (templates, editor, domains)

#### 💰 PRICING
- [ ] **P1-16** Upgrade PricingPage.jsx — add BusinessOS tiers (Free, Pro $89, Elite $247, Founder $1,497, Elite $499)

#### 🔒 UPGRADE MODALS
- [ ] **P1-17** Create UpgradeModal / LockedFeatureCard component for locked plan features

#### 🔧 ENV / CONFIG
- [ ] **P1-18** Update backend/.env.example with full BusinessOS variable list

#### ✅ VERIFICATION
- [ ] **P1-19** Run dev server and verify all routes load without blank screens
- [ ] **P1-20** Test mobile nav hamburger menu

---

## Phase 2: Backend & Waitlist (Upcoming)
- [ ] POST /api/waitlist endpoint
- [ ] GET /api/admin/waitlist endpoint
- [ ] MongoDB Atlas connection
- [ ] Waitlist email confirmation (SendGrid/Mailgun)

## Phase 3: RMIE AI Output Upgrade (Upcoming)
- [ ] Improve AI roadmap output quality
- [ ] 7-day / 30-day / 90-day plan structure
- [ ] Specific vs. generic advice enforcement
- [ ] Free vs. Pro/Elite output differentiation

## Phase 4: Stripe + Auth (Upcoming)
- [ ] Stripe pricing tiers connected
- [ ] Real login/signup auth (JWT)
- [ ] Protected routes by tier

## Phase 5: P2P Command Center — Real CRM (Upcoming)
- [ ] Contacts/leads CRUD
- [ ] Pipeline board
- [ ] Invoices
- [ ] Calendar integration

---

## Completed
_Nothing completed yet_
