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
  { name: "Stripe", category: "Payment Processing", desc: "Accept payments online and in-person. 2.9% + 30¢ per transaction.", url: "https://stripe.com" },
  { name: "Square", category: "Payment Processing", desc: "Free card reader, POS system, and invoicing for service businesses.", url: "https://squareup.com" },
  { name: "PayPal Business", category: "Payment Processing", desc: "Send invoices, accept cards and bank transfers.", url: "https://www.paypal.com/us/business" },
  { name: "Wave", category: "Bookkeeping", desc: "Free invoicing, accounting, and receipt scanning. Perfect for startups.", url: import.meta.env.VITE_AFFILIATE_BOOKKEEPING_URL || "https://www.waveapps.com" },
  { name: "QuickBooks", category: "Bookkeeping", desc: "Industry-standard accounting software. $30/mo Simple Start.", url: "https://quickbooks.intuit.com" },
  { name: "FreshBooks", category: "Bookkeeping", desc: "Invoicing-first accounting for service businesses. $17/mo.", url: "https://www.freshbooks.com" },
  { name: "HubSpot CRM", category: "CRM", desc: "Free CRM for managing clients and deals. Scales to paid tiers.", url: "https://www.hubspot.com/products/crm" },
  { name: "GoHighLevel", category: "CRM", desc: "All-in-one CRM + marketing automation for agencies and service businesses.", url: "https://www.gohighlevel.com" },
  { name: "Mailchimp", category: "Email Marketing", desc: "Free email marketing up to 500 contacts. Drag-and-drop builder.", url: "https://mailchimp.com" },
  { name: "ConvertKit", category: "Email Marketing", desc: "Creator-focused email marketing. Free up to 1,000 subscribers.", url: "https://convertkit.com" },
  { name: "Next Insurance", category: "Business Insurance", desc: "General liability from $400/yr. Apply in 5 minutes online.", url: "https://www.nextinsurance.com" },
  { name: "Hiscox", category: "Business Insurance", desc: "Small business insurance specialists. BOP and GL policies.", url: "https://www.hiscox.com" },
];

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
            Earn While You <span className="gradient-text">Build</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The exact tools used by serious founders — vetted, categorized, and ready to use. Plus, earn commissions when you refer PEN2PRO members.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Affiliate Partner Section */}
        <div className="mb-16 rounded-2xl border border-[#D4A017] p-8" style={{ background: "#D4A01708" }}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Become a PEN2PRO Affiliate Partner</h2>
              <p className="text-slate-400 text-sm leading-7 mb-6">
                Refer other founders, veterans, and entrepreneurs to PEN2PRO and earn commissions on every upgrade. Our affiliate program launches June 10, 2026 alongside the full platform.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pro Referral", value: "$14/mo recurring (30%)" },
                  { label: "Elite Referral", value: "$29/mo recurring (30%)" },
                  { label: "Founders Referral", value: "$149 one-time (30%)" },
                  { label: "Cookie Window", value: "90 days" },
                  { label: "Payout", value: "Monthly via PayPal or direct deposit" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-[#1A2235] px-4 py-3" style={{ background: "#0F1520" }}>
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <span className="text-sm font-bold" style={{ color: "#D4A017" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Join the Waitlist", desc: "Sign up for the affiliate program through the waitlist. Affiliate access opens at launch." },
                  { step: "2", title: "Get Your Link", desc: "We'll send you a unique referral link and affiliate dashboard login on June 10." },
                  { step: "3", title: "Share with Your Network", desc: "Share your link on social media, in communities, or 1-on-1 with people who need this." },
                  { step: "4", title: "Earn Every Month", desc: "Get paid recurring commissions as long as your referrals stay subscribed." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-gold text-sm font-black text-[#080C14]">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{s.title}</p>
                      <p className="text-xs text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/waitlist?interest=affiliate" className="btn-gold mt-6 block w-full py-3 text-center text-sm font-bold">
                Join Affiliate Waitlist
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
                        rel="noopener noreferrer"
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
