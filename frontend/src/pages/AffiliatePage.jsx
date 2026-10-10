import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const RESOURCES = [
  { name: "ZenBusiness", category: "LLC Formation", desc: "Form your LLC fast. Starts at $0 + state fee. Registered agent included.", url: import.meta.env.VITE_AFFILIATE_LLC_URL || "https://www.zenbusiness.com" },
  { name: "Incfile", category: "LLC Formation", desc: "Free LLC formation (state fee only). Fast processing.", url: "https://www.incfile.com" },
  { name: "Northwest Registered Agent", category: "LLC Formation", desc: "Privacy-focused LLC formation with excellent support.", url: "https://www.northwestregisteredagent.com" },
  { name: "Mercury Bank", category: "Business Banking", desc: "No-fee business banking built for entrepreneurs. Apply online in minutes.", url: import.meta.env.VITE_AFFILIATE_BANKING_URL || "https://mercury.com" },
  { name: "Relay Financial", category: "Business Banking", desc: "Free business banking with up to 20 accounts and team cards.", url: "https://relayfi.com" },
  { name: "Chase Business", category: "Business Banking", desc: "Chase Business Complete Checking. $300 bonus for new accounts.", url: "https://chase.com/business" },
  { name: "Nav", category: "Business Credit", desc: "Monitor business credit scores and get matched to funding.", url: import.meta.env.VITE_AFFILIATE_CREDIT_URL || "https://www.nav.com" },
  { name: "Tillful", category: "Business Credit", desc: "Business credit card that builds your business credit profile.", url: "https://www.tillful.com" },
  { name: "Divvy (BILL)", category: "Business Credit", desc: "Business Visa card with expense management. No personal guarantee.", url: "https://www.divvy.co" },
  { name: "Namecheap", category: "Domain / Website", desc: "Domain registration from $8.98/yr. Free WhoisGuard privacy.", url: import.meta.env.VITE_AFFILIATE_DOMAIN_URL || "https://www.namecheap.com" },
  { name: "Squarespace", category: "Domain / Website", desc: "Professional websites in a day. Best for service businesses.", url: "https://www.squarespace.com" },
  { name: "Stripe", category: "Payment Processing", desc: "Accept payments online and in-person. 2.9% + 30¢ per transaction.", url: import.meta.env.VITE_AFFILIATE_PAYMENT_URL || "https://stripe.com" },
  { name: "Square", category: "Payment Processing", desc: "Free card reader, POS system, and invoicing for service businesses.", url: "https://squareup.com" },
  { name: "PayPal Business", category: "Payment Processing", desc: "Send invoices, accept cards and bank transfers.", url: "https://www.paypal.com/us/business" },
  { name: "Wave", category: "Bookkeeping", desc: "Free invoicing, accounting, and receipt scanning. Perfect for startups.", url: import.meta.env.VITE_AFFILIATE_BOOKKEEPING_URL || "https://www.waveapps.com" },
  { name: "QuickBooks", category: "Bookkeeping", desc: "Industry-standard accounting software. $30/mo Simple Start.", url: "https://quickbooks.intuit.com" },
  { name: "FreshBooks", category: "Bookkeeping", desc: "Invoicing-first accounting for service businesses. $17/mo.", url: "https://www.freshbooks.com" },
  { name: "HubSpot CRM", category: "CRM", desc: "Free CRM for managing clients and deals. Scales to paid tiers.", url: import.meta.env.VITE_AFFILIATE_CRM_URL || "https://www.hubspot.com/products/crm" },
  { name: "GoHighLevel", category: "CRM", desc: "All-in-one CRM + marketing automation for agencies and service businesses.", url: "https://www.gohighlevel.com" },
  { name: "Mailchimp", category: "Email Marketing", desc: "Free email marketing up to 500 contacts. Drag-and-drop builder.", url: "https://mailchimp.com" },
  { name: "ConvertKit", category: "Email Marketing", desc: "Creator-focused email marketing. Free up to 1,000 subscribers.", url: "https://convertkit.com" },
  { name: "Next Insurance", category: "Business Insurance", desc: "General liability from $400/yr. Apply in 5 minutes online.", url: import.meta.env.VITE_AFFILIATE_INSURANCE_URL || "https://www.nextinsurance.com" },
  { name: "Hiscox", category: "Business Insurance", desc: "Small business insurance specialists. BOP and GL policies.", url: "https://www.hiscox.com" },
];

const FUNDING_RESOURCES = [
  { name: "SBA Lender Match", category: "Funding Partners", desc: "Free U.S. Small Business Administration tool that connects you with SBA-approved lenders.", url: "https://www.sba.gov/funding-programs/loans/lender-match" },
  { name: "Lendio", category: "Funding Partners", desc: "Loan marketplace that compares offers from multiple lenders with one application.", url: import.meta.env.VITE_AFFILIATE_FUNDING_URL || "https://www.lendio.com" },
  { name: "Kiva", category: "Funding Partners", desc: "0% interest crowdfunded loans for small businesses and underserved entrepreneurs.", url: "https://www.kiva.org/borrow" },
];
RESOURCES.push(...FUNDING_RESOURCES);

const CATEGORIES = [...new Set(RESOURCES.map(r => r.category))];

const CATEGORY_ICONS = {
  "LLC Formation": "🏢",
  "Business Banking": "🏦",
  "Business Credit": "📊",
  "Domain / Website": "🌐",
  "Payment Processing": "💳",
  "Bookkeeping": "📒",
  "CRM": "🤝",
  "Email Marketing": "📧",
  "Business Insurance": "🛡",
  "Funding Partners": "💰",
};

export default function AffiliatePage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            RESOURCES & PARTNERS
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Tools To <span className="gradient-text">Build</span> Faster
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The exact tools used by serious founders — vetted, categorized, and ready to use. Hand-picked for the steps in your roadmap.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Partner section */}
        <div className="mb-16 rounded-2xl border border-[#D4A017] p-8" style={{ background: "#D4A01708" }}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Partner With PEN2PRO</h2>
              <p className="text-slate-400 text-sm leading-7 mb-4">
                Are you a creator, coach, community leader, or business that serves entrepreneurs, veterans, or returning citizens? We work with partners who share our mission of giving people a real roadmap.
              </p>
              <p className="text-slate-400 text-sm leading-7">
                Partner terms are set one-to-one. Email us with who you serve and how you would like to work together.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a href="mailto:support@pen2pro.com?subject=PEN2PRO%20Partner%20Inquiry" className="btn-gold block w-full py-3 text-center text-sm font-bold">
                Email Us About Partnering
              </a>
              <Link to="/signup" className="btn-outline block w-full py-3 text-center text-sm font-bold">
                Create Free Account
              </Link>
              <Link to="/starter" className="text-center text-xs font-semibold text-slate-400 hover:text-white">
                Or start with a free roadmap →
              </Link>
            </div>
          </div>
        </div>

        {/* Resource Library */}
        <div>
          <h2 className="font-display text-2xl font-bold text-white mb-3">Recommended Resources</h2>
          <p className="text-slate-400 text-sm mb-10">
            Curated tools for building your business the right way. These are the exact tools we recommend in every roadmap.
          </p>

          {CATEGORIES.map(cat => {
            const catResources = RESOURCES.filter(r => r.category === cat);
            return (
              <div key={cat} className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{CATEGORY_ICONS[cat] || "📌"}</span>
                  <h3 className="font-display text-xl font-bold text-white">{cat}</h3>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catResources.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[#1A2235] p-5 flex flex-col"
                      style={{ background: "#0F1520" }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-display text-base font-bold text-white">{r.name}</h4>
                        <span className="ml-2 shrink-0 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-2 py-0.5 text-xs font-semibold" style={{ color: "#D4A017" }}>
                          {r.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 flex-1 mb-4">{r.desc}</p>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="btn-outline block w-full py-2.5 text-center text-xs font-bold"
                      >
                        Learn More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 mb-10 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            <strong className="text-slate-400">Affiliate Disclosure:</strong> PEN2PRO may earn affiliate commissions from the links on this page.
            We only recommend tools we believe in. Commissions do not affect our recommendations.
            All tools listed are independently reviewed. Prices and terms are subject to change — verify with the vendor before purchasing.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
