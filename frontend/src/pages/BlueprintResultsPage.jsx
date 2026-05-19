import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const SAMPLE = {
  business_idea: "Pressure Washing Business",
  category: "Cleaning / Pressure Washing",
  isSample: true,
  snapshot: {
    names: ["AquaBlast Pro", "ClearPath Wash Co.", "HydroShield Services"],
    value_proposition: "On-demand exterior cleaning for residential and commercial properties with same-week service and guaranteed results.",
    target_customer: "Homeowners in suburbs with driveways, decks, and siding — households with $60K+ income, ages 30–55.",
    problem: "Property owners can't maintain curb appeal without time-consuming equipment rental or expensive contractor quotes.",
    revenue_model: "Per-job flat-rate pricing: driveways $150, full houses $300–$500, commercial contracts $800–$2,000/month.",
    startup_low: "$1,200",
    startup_realistic: "$3,500",
    startup_stretch: "$8,000",
  },
  offer_structure: {
    core: "Exterior pressure washing — driveways, decks, siding, fences, parking lots",
    tiers: [
      { name: "Starter Clean", price: "$149", includes: "Driveway only, up to 800 sq ft" },
      { name: "Full Home", price: "$349", includes: "Driveway + siding + walkways" },
      { name: "Premium Package", price: "$549", includes: "Full home + deck + fence + gutters" },
    ],
    entry_price: "$149",
    entry_why: "Low barrier gets you first 5 clients fast. Upsell from there once they see results.",
  },
  seven_days: [
    "Day 1: Register your LLC at your state's Secretary of State website. Cost: $50–$300. Download Wave (free invoicing app).",
    "Day 2: Get your EIN free at IRS.gov. Takes 5 minutes. Print and save the confirmation.",
    "Day 3: Open a Chase Business Complete Checking. Bring EIN letter, LLC docs, and personal ID.",
    "Day 4: Create your Google Business Profile at business.google.com. Add 5 photos — even phone photos work.",
    "Day 5: Buy your domain on Namecheap ($12). Set up Google Workspace business email ($6/mo).",
    "Day 6: Rent or buy a 3,500 PSI pressure washer. Home Depot rental: $65/day. Buy: $350–$800 on Amazon.",
    "Day 7: Message 20 neighbors/contacts on Facebook. Offer $99 intro rate for first job only.",
  ],
  thirty_day_plan: [
    "Week 1: Get your first 2 paid jobs. Offer $99 intro rate. Post before/after photos on Facebook and Nextdoor immediately.",
    "Week 2: Follow up on all Week 1 leads. Ask for referrals. Post 3x on social. Target: 4–5 total jobs.",
    "Week 3: Request Google reviews from every completed job. Apply for Uline net-30 vendor account for business credit.",
    "Week 4: Run a Nextdoor ad ($50 budget). Target: $1,500 in revenue by end of Day 30.",
  ],
  ninety_day_plan: [
    "Month 1: $0–$2,000 — Validate the offer, get 5 paying clients, collect 3 Google reviews.",
    "Month 2: $2,000–$5,000 — Systemize delivery, add a helper, get 10 testimonials, set recurring commercial account.",
    "Month 3: $5,000–$10,000 — Hire first part-time employee, run paid Facebook ads ($200/mo budget), add gutter cleaning upsell.",
  ],
  sales_script: {
    cold_dm: "Hey [Name] — I just launched a pressure washing service in [City]. First 5 jobs are $99 (normally $149). Interested in getting your driveway done this week?",
    follow_up: "Hey — just following up. I still have 2 intro spots open this week. Want to grab one before they're gone?",
    phone_opener: "Hey [Name], this is [Your Name]. I run a pressure washing company in [area]. I noticed your property could use a good wash — I have openings this week. Can I get you a quick quote?",
    objection: "Totally get it. Take 24 hours. But I only have 2 intro spots left at $99 — after that it's $149. What's the hesitation?",
    close: "Want me to pencil you in for [day] at [time]? Just need your address to confirm.",
  },
  branding: [
    "Business name registered with state",
    "Google Business Profile created and verified",
    "Logo created on Canva (free tier)",
    "Business email set up via Google Workspace ($6/mo)",
    "Instagram, Facebook, and Nextdoor profiles claimed",
    "Website domain purchased on Namecheap ($12/yr)",
  ],
  entity_legal: [
    "1. File LLC at your state Secretary of State — cost: $50 (TX) to $500 (CA)",
    "2. Get EIN free at IRS.gov — takes 5 minutes, free",
    "3. Open business bank account: Chase Business Complete Checking (requires EIN + LLC docs)",
    "4. Get business address: UPS Store mailbox ~$30/mo if home-based",
    "5. Get General Liability Insurance: $400–$800/yr via Next Insurance (nextinsurance.com) or Hiscox (hiscox.com)",
  ],
  credit_funding: {
    personal: [
      "Pull your free report at AnnualCreditReport.com",
      "Need 650+ to qualify for most business funding",
      "Dispute errors at consumerfinance.gov/complaint",
      "Keep all revolving balances below 30% utilization",
    ],
    business: [
      "Step 1: Open business bank account (already in legal section)",
      "Step 2: Apply for Uline net-30 vendor account — free, reports to Dun & Bradstreet (uline.com)",
      "Step 3: Apply for Quill net-30 account — free (quill.com)",
      "Step 4: Apply for Grainger net-30 account — free (grainger.com)",
      "Step 5: After 90 days on-time, apply for Divvy or Brex business card",
      "Step 6: After 6–12 months, apply for SBA Microloan ($500–$50,000) at sba.gov",
    ],
  },
  marketing: {
    primary: "Nextdoor — hyper-local, homeowners with purchasing intent",
    secondary: "Facebook Groups (neighborhood groups) + Facebook Business Page",
    frequency: "Post 4x per week: 2 before/afters, 1 tip, 1 promo",
    pillars: ["Before/after results", "Behind-the-scenes process", "Seasonal promotions"],
    paid_note: "Do NOT run paid ads until you have 3 paying clients and can describe your best customer precisely.",
    partnerships: "Reach out to: real estate agents (need homes cleaned for listings), property managers, HOA managers.",
  },
  tools: [
    { name: "CRM", tool: "HubSpot", price: "Free tier" },
    { name: "Invoicing", tool: "Wave", price: "Free" },
    { name: "Scheduling", tool: "Calendly", price: "Free tier" },
    { name: "Communication", tool: "Google Voice", price: "$10/mo" },
    { name: "Project Mgmt", tool: "Notion", price: "Free" },
    { name: "Social Posting", tool: "Buffer", price: "Free tier" },
    { name: "Accounting", tool: "Wave", price: "Free" },
  ],
  risks: [
    "Equipment failure during a job — always carry a backup hose and surface cleaner",
    "Weather cancellations — build a rebooking policy into every quote",
    "Customer disputes over damage — get liability insurance before your first job",
    "Slow season (winter in cold climates) — add soft washing or gutter cleaning as winter services",
    "Price undercutting from competitors — compete on speed and reviews, not price",
  ],
  upgrade_note: "This roadmap gives you the foundation. Pro members get full outreach automation, financial projections, AI marketing copy, and credit/funding resource matching. Elite members get done-with-you strategy sessions, vendor introductions, and launch support. If you are serious about hitting $5K/month within 90 days, upgrade to Pro or Elite now.",
};

const SECTIONS = [
  { id: "snapshot", label: "Business Snapshot" },
  { id: "offer", label: "Offer Structure" },
  { id: "seven", label: "7-Day Plan" },
  { id: "thirty", label: "30-Day Plan" },
  { id: "ninety", label: "90-Day Growth" },
  { id: "sales", label: "Sales Scripts" },
  { id: "branding", label: "Branding Checklist" },
  { id: "entity", label: "Entity & Legal" },
  { id: "credit", label: "Credit & Funding" },
  { id: "marketing", label: "Marketing Strategy" },
  { id: "tools", label: "Tool Stack" },
  { id: "risks", label: "Risk Warnings" },
  { id: "upgrade", label: "Next Steps" },
];

function Section({ id, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="rounded-2xl border border-[#1A2235] overflow-hidden mb-4" style={{ background: "#0F1520" }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h2 className="font-display text-base font-bold text-white">{title}</h2>
        <span className="text-[#D4A017] text-xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

export default function BlueprintResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const modalTimer = useRef(null);

  const state = location.state || {};
  const roadmap = state.roadmap || JSON.parse(localStorage.getItem("pen2pro_last_roadmap") || "null") || SAMPLE;
  const isSample = state.isSample || roadmap.isSample || false;
  const formData = state.formData || {};

  useEffect(() => {
    if (roadmap) {
      localStorage.setItem("pen2pro_last_roadmap", JSON.stringify(roadmap));
    }
    modalTimer.current = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(modalTimer.current);
  }, []);

  const r = roadmap;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Upgrade Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-md rounded-2xl border border-[#D4A017] p-8 text-center" style={{ background: "#0F1520" }}>
            <div className="mb-4 text-4xl">🎯</div>
            <h2 className="font-display text-2xl font-black text-white mb-2">Your roadmap is ready.</h2>
            <p className="text-slate-400 text-sm mb-6">
              Secure full Pro or Elite access before the June 15, 2026 launch and lock in early pricing.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/waitlist?tier=pro" className="btn-gold w-full py-3 text-sm font-bold">
                Join Waitlist — Pro ($47/mo)
              </Link>
              <Link to="/waitlist?tier=elite" className="block w-full rounded-xl border border-[#D4A017] py-3 text-sm font-bold text-[#D4A017] hover:bg-[#D4A017]/10 transition-all">
                Join Waitlist — Elite ($97/mo)
              </Link>
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Continue reading my roadmap
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8">
          {isSample && (
            <div className="mb-4 rounded-xl border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-3 text-sm text-[#D4A017]">
              <strong>Demo Roadmap</strong> — This is a sample. Submit your idea on the{" "}
              <Link to="/starter" className="underline">roadmap form</Link> to get your personalized plan.
            </div>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-3 py-1 text-xs font-semibold text-[#D4A017] mb-2">
                YOUR ROADMAP
              </div>
              <h1 className="font-display text-3xl font-black text-white">
                {r.business_idea || formData.business_idea || "Your Business Roadmap"}
              </h1>
              {r.category && <p className="text-sm text-slate-500 mt-1">{r.category}</p>}
            </div>
            <Link to="/starter" className="btn-outline px-5 py-2.5 text-sm font-bold whitespace-nowrap">
              Generate New Roadmap
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Jump to section</p>
              <nav className="space-y-1">
                {SECTIONS.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-[#1A2235] hover:text-white transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 space-y-2">
                <Link to="/waitlist?tier=pro" className="btn-gold block w-full py-2.5 text-center text-xs font-bold">
                  Upgrade to Pro
                </Link>
                <Link to="/waitlist?tier=elite" className="btn-outline block w-full py-2.5 text-center text-xs font-bold">
                  Upgrade to Elite
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Business Snapshot */}
            <Section id="snapshot" title="1. Business Snapshot" defaultOpen>
              {r.snapshot && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-[#1A2235] p-4">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Business Name Ideas</p>
                    <div className="flex flex-wrap gap-2">
                      {(r.snapshot.names || []).map((n, i) => (
                        <span key={i} className="rounded-lg border border-[#D4A017]/40 bg-[#D4A017]/10 px-3 py-1 text-sm font-semibold text-[#D4A017]">{n}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { label: "Value Proposition", val: r.snapshot.value_proposition },
                      { label: "Target Customer", val: r.snapshot.target_customer },
                      { label: "Problem Solved", val: r.snapshot.problem },
                      { label: "Revenue Model", val: r.snapshot.revenue_model },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-[#1A2235] p-4">
                        <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-slate-300">{item.val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Low Budget", val: r.snapshot.startup_low },
                      { label: "Realistic", val: r.snapshot.startup_realistic },
                      { label: "Stretch", val: r.snapshot.startup_stretch },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-[#1A2235] p-4 text-center">
                        <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                        <p className="font-display text-xl font-black" style={{ color: "#D4A017" }}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Section>

            {/* Offer Structure */}
            <Section id="offer" title="2. Offer Structure" defaultOpen>
              {r.offer_structure && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-300"><strong className="text-white">Core Offer:</strong> {r.offer_structure.core}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {(r.offer_structure.tiers || []).map((tier, i) => (
                      <div key={i} className={`rounded-xl border p-4 ${i === 1 ? "border-[#D4A017]/50" : "border-[#1A2235]"}`}>
                        <p className="text-xs text-slate-500 mb-1">{tier.name}</p>
                        <p className="font-display text-2xl font-black text-white mb-2">{tier.price}</p>
                        <p className="text-xs text-slate-400">{tier.includes}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-4">
                    <p className="text-sm font-semibold text-[#D4A017]">Entry Price (First 90 Days): {r.offer_structure.entry_price}</p>
                    <p className="text-sm text-slate-400 mt-1">{r.offer_structure.entry_why}</p>
                  </div>
                </div>
              )}
            </Section>

            {/* 7-Day Plan */}
            <Section id="seven" title="3. First 7 Days — Day-by-Day">
              <div className="space-y-3">
                {(r.seven_days || []).map((day, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-[#1A2235] p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{day}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 30-Day Plan */}
            <Section id="thirty" title="4. 30-Day Launch Plan">
              <div className="space-y-3">
                {(r.thirty_day_plan || []).map((week, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-[#1A2235] p-4">
                    <div className="flex h-7 w-16 shrink-0 items-center justify-center rounded-full border border-[#D4A017]/40 text-xs font-bold text-[#D4A017]">
                      Wk {i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{week}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 90-Day Plan */}
            <Section id="ninety" title="5. 90-Day Growth Plan">
              <div className="space-y-3">
                {(r.ninety_day_plan || []).map((month, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-[#1A2235] p-4">
                    <div className="flex h-7 w-16 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                      M{i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{month}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Sales Script */}
            <Section id="sales" title="6. Sales Scripts — Copy & Paste Ready">
              {r.sales_script && (
                <div className="space-y-4">
                  {[
                    { label: "Cold Outreach (Text/DM)", val: r.sales_script.cold_dm },
                    { label: "Follow-Up Message", val: r.sales_script.follow_up },
                    { label: "Phone Call Opener", val: r.sales_script.phone_opener },
                    { label: "Objection Handler — 'I Need to Think About It'", val: r.sales_script.objection },
                    { label: "Close Line", val: r.sales_script.close },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-[#1A2235] p-4">
                      <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">{s.label}</p>
                      <p className="text-sm text-slate-200 italic">&ldquo;{s.val}&rdquo;</p>
                    </div>
                  ))}
                </div>
              )}
            </Section>

            {/* Branding */}
            <Section id="branding" title="7. Branding Checklist">
              <div className="space-y-2">
                {(r.branding || []).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-[#1A2235] px-4 py-3">
                    <span style={{ color: "#00C9B1" }}>✓</span>
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Entity & Legal */}
            <Section id="entity" title="8. Entity & Legal Foundation">
              <div className="space-y-2">
                {(r.entity_legal || []).map((step, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-[#1A2235] p-4">
                    <p className="text-sm text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Credit & Funding */}
            <Section id="credit" title="9. Credit & Funding Readiness">
              {r.credit_funding && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-bold text-white mb-3">Personal Credit</p>
                    <div className="space-y-2">
                      {(r.credit_funding.personal || []).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span style={{ color: "#D4A017" }} className="mt-0.5">→</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-3">Business Credit (In Order)</p>
                    <div className="space-y-2">
                      {(r.credit_funding.business || []).map((item, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl border border-[#1A2235] p-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                            {i + 1}
                          </div>
                          <p className="text-sm text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Section>

            {/* Marketing */}
            <Section id="marketing" title="10. Marketing Strategy">
              {r.marketing && (
                <div className="space-y-4">
                  {[
                    { label: "Primary Platform", val: r.marketing.primary },
                    { label: "Secondary Platform", val: r.marketing.secondary },
                    { label: "Posting Frequency", val: r.marketing.frequency },
                    { label: "Paid Ads Rule", val: r.marketing.paid_note },
                    { label: "Partnership Strategy", val: r.marketing.partnerships },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-[#1A2235] p-4">
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-slate-300">{item.val}</p>
                    </div>
                  ))}
                  <div className="rounded-xl border border-[#1A2235] p-4">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Content Pillars</p>
                    <ul className="space-y-1">
                      {(r.marketing.pillars || []).map((p, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                          <span style={{ color: "#D4A017" }}>✓</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Section>

            {/* Tools */}
            <Section id="tools" title="11. Tool Stack ($0–$50/mo Budget)">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {(r.tools || []).map((t, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-[#1A2235] px-4 py-3">
                    <div>
                      <p className="text-xs text-slate-500">{t.name}</p>
                      <p className="text-sm font-semibold text-white">{t.tool}</p>
                    </div>
                    <span className="rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-2 py-0.5 text-xs font-semibold" style={{ color: "#00C9B1" }}>
                      {t.price}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Risks */}
            <Section id="risks" title="12. Risk Warnings">
              <div className="space-y-2">
                {(r.risks || []).map((risk, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                    <span className="text-red-400 mt-0.5">⚠</span>
                    <p className="text-sm text-slate-300">{risk}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Upgrade */}
            <Section id="upgrade" title="13. Next Steps — Go Further">
              <div className="rounded-xl border border-[#D4A017] bg-[#D4A017]/5 p-6">
                <p className="text-sm text-slate-300 leading-7 mb-6">{r.upgrade_note}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link to="/waitlist?tier=pro" className="btn-gold block py-3 text-center text-sm font-bold">
                    Join Waitlist — Pro
                  </Link>
                  <Link to="/waitlist?tier=elite" className="btn-outline block py-3 text-center text-sm font-bold">
                    Join Waitlist — Elite
                  </Link>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#1A2235] py-3 px-4" style={{ background: "#0F1520" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <p className="hidden text-sm font-semibold text-white sm:block">
            Want full access? Launch is <span style={{ color: "#D4A017" }}>June 15, 2026</span>
          </p>
          <div className="flex gap-2">
            <Link to="/waitlist" className="rounded-xl border border-[#1A2235] px-4 py-2 text-xs font-bold text-slate-300 hover:border-[#D4A017]/50 transition-all">
              Join Waitlist
            </Link>
            <Link to="/waitlist?tier=pro" className="btn-gold px-4 py-2 text-xs font-bold">
              Upgrade to Pro
            </Link>
            <Link to="/waitlist?tier=elite" className="hidden sm:block btn-outline px-4 py-2 text-xs font-bold">
              Upgrade to Elite
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom padding for sticky bar */}
      <div className="h-20" />
    </div>
  );
}
