import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PERSONAL_STEPS = [
  { step: "Pull Your Free Reports", desc: "Go to AnnualCreditReport.com. Pull all 3 bureaus: Equifax, Experian, TransUnion. Do this once per year free.", url: "https://www.annualcreditreport.com" },
  { step: "Review for Errors", desc: "Look for: accounts you don't recognize, wrong balances, incorrect late payments, duplicate accounts, old negative items past 7 years." },
  { step: "File CFPB Dispute", desc: "Go to consumerfinance.gov/complaint. File a dispute for any inaccurate item. Bureau has 30 days to investigate.", url: "https://www.consumerfinance.gov/complaint" },
  { step: "Keep Utilization Below 30%", desc: "On every card. If you have a $1,000 limit, keep the balance below $300. Utilization is 30% of your FICO score." },
  { step: "Dispute with FTC If Identity Theft", desc: "Go to identitytheft.gov. File your report. Get an Identity Theft Report document. Send to the bureaus with your dispute.", url: "https://www.identitytheft.gov" },
];

const BUSINESS_STEPS = [
  { id: 1, step: "Register Your Business Entity", desc: "File your LLC at your state's Secretary of State. Cost: $50–$500. This is Step 1 — everything else depends on it.", link: "https://www.zenbusiness.com", linkLabel: "ZenBusiness (fast LLC filing)" },
  { id: 2, step: "Get Your EIN from IRS.gov", desc: "Go to IRS.gov, apply for an EIN online. Free. Takes 5 minutes. Required for banking, vendor accounts, and credit.", link: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online", linkLabel: "IRS EIN Application" },
  { id: 3, step: "Open a Business Bank Account", desc: "Chase Business Complete Checking, Mercury, or Relay. You need: EIN letter, LLC documents, personal ID. No mixing personal and business money.", link: null },
  { id: 4, step: "Apply for Uline Net-30", desc: "Uline.com — free account, reports to Dun & Bradstreet. Order $50+ of supplies, pay within 30 days. This starts your D&B PAYDEX score.", link: "https://www.uline.com", linkLabel: "Uline.com" },
  { id: 5, step: "Apply for Quill Net-30", desc: "Quill.com — free account, reports to Dun & Bradstreet and Experian Business. Order office supplies, pay on time.", link: "https://www.quill.com", linkLabel: "Quill.com" },
  { id: 6, step: "Apply for Grainger Net-30", desc: "Grainger.com — free account, reports to Dun & Bradstreet. Order safety or maintenance supplies. Pay within 30 days.", link: "https://www.grainger.com", linkLabel: "Grainger.com" },
  { id: 7, step: "Check D&B PAYDEX Score (90 Days)", desc: "After 90 days of on-time vendor payments, go to dnb.com to check your PAYDEX score. Target 80+ (pays on time) or 100 (pays early).", link: "https://www.dnb.com", linkLabel: "Dun & Bradstreet" },
  { id: 8, step: "Apply for Divvy or Brex Business Card", desc: "With 90+ days of history and a PAYDEX score, apply for Divvy (divvy.co) or Brex (brex.com). These report to business bureaus and don't do personal credit checks.", link: null },
  { id: 9, step: "Monitor with Nav Prime", desc: "Nav.com — business credit monitoring. See all 3 business bureau scores, track your progress, get funding recommendations.", link: "https://www.nav.com", linkLabel: "Nav.com" },
];

const TIMELINE_ITEMS = [
  { month: "0", label: "Start", events: ["Register LLC", "Get EIN", "Open business bank account"] },
  { month: "1", label: "Month 1", events: ["Apply for Uline net-30", "Apply for Quill net-30", "Apply for Grainger net-30", "Make first purchases and pay on time"] },
  { month: "3", label: "Month 3", events: ["Check D&B PAYDEX score (target 80+)", "Apply for Divvy or Brex card", "Apply for Nav Prime monitoring"] },
  { month: "6", label: "Month 6", events: ["Apply for SBA Microloan if needed", "Consider business line of credit", "Add 2–3 more vendor accounts"] },
  { month: "12", label: "Month 12", events: ["Strong business credit profile", "Eligible for SBA 7(a) loans", "Bank lines of credit available", "Business credit cards with real limits"] },
];

const DISPUTE_STEPS = [
  "1. Pull your reports at AnnualCreditReport.com — all 3 bureaus.",
  "2. Identify inaccurate, outdated, or fraudulent items.",
  "3. Write a dispute letter: your name, address, account number, what's wrong, what you want changed.",
  "4. Send certified mail to the bureau's dispute address (Equifax, Experian, TransUnion — addresses on their sites).",
  "5. File online at consumerfinance.gov/complaint to involve the CFPB.",
  "6. If identity theft: go to identitytheft.gov, file your FTC report, and use the Identity Theft Report as documentation.",
  "7. Bureau has 30 days to investigate and respond. If they verify incorrectly, escalate to CFPB again.",
];

const AFFILIATE_RESOURCES = [
  { name: "Nav", category: "Business Credit Monitoring", desc: "All-in-one business credit scores + funding matches.", link: "#" },
  { name: "ZenBusiness", category: "LLC Formation", desc: "Form your LLC starting at $0 + state fee.", link: "#" },
  { name: "Mercury", category: "Business Banking", desc: "No-fee business banking, instant setup online.", link: "#" },
  { name: "Divvy", category: "Business Credit Card", desc: "Business Visa with expense tracking. No personal guarantee.", link: "#" },
];

export default function CreditReadinessPage() {
  const [checked, setChecked] = useState({});
  const completedSteps = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((completedSteps / BUSINESS_STEPS.length) * 100);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            CREDIT READINESS
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Build Business Credit <span className="gradient-text">From Scratch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No business credit? No problem. Follow this exact sequence — in order — and you'll have a solid credit profile within 90 days.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Progress */}
        <div className="mb-12 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-white">Business Credit Progress</p>
            <p className="text-sm font-bold" style={{ color: "#D4A017" }}>{completedSteps}/{BUSINESS_STEPS.length} steps</p>
          </div>
          <div className="h-2.5 w-full rounded-full bg-[#1A2235]">
            <div
              className="h-2.5 rounded-full gradient-gold transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">{pct}% complete — {BUSINESS_STEPS.length - completedSteps} steps remaining</p>
        </div>

        {/* Personal Credit Section */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Personal Credit Foundation</h2>
          <p className="text-slate-400 text-sm mb-6">Your personal credit affects your ability to qualify for business funding, especially in the first 2 years. You need 650+ to access most programs.</p>
          <div className="space-y-4">
            {PERSONAL_STEPS.map((s, i) => (
              <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4A017]/40 text-xs font-black text-[#D4A017]">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{s.step}</p>
                    <p className="text-sm text-slate-400">{s.desc}</p>
                    {s.url && (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold mt-2 block" style={{ color: "#D4A017" }}>
                        {s.url} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Credit Steps */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-2">Business Credit Foundation — In This Exact Order</h2>
          <p className="text-slate-400 text-sm mb-6">Do not skip steps. Each step depends on the one before it.</p>
          <div className="space-y-4">
            {BUSINESS_STEPS.map((s) => (
              <label
                key={s.id}
                className={`flex items-start gap-4 rounded-2xl border p-5 cursor-pointer transition-all ${
                  checked[s.id]
                    ? "border-[#00C9B1]/40 bg-[#00C9B1]/5"
                    : "border-[#1A2235] hover:border-[#D4A017]/30"
                }`}
                style={{ background: checked[s.id] ? undefined : "#0F1520" }}
              >
                <input
                  type="checkbox"
                  checked={!!checked[s.id]}
                  onChange={e => setChecked(c => ({ ...c, [s.id]: e.target.checked }))}
                  className="mt-1 h-5 w-5 rounded accent-[#D4A017]"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-slate-600">STEP {s.id}</span>
                    <p className={`text-sm font-bold ${checked[s.id] ? "text-slate-400 line-through" : "text-white"}`}>{s.step}</p>
                  </div>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                  {s.link && (
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold mt-2 block" style={{ color: "#D4A017" }}>
                      {s.linkLabel} →
                    </a>
                  )}
                </div>
                {checked[s.id] && <span style={{ color: "#00C9B1" }} className="text-lg">✓</span>}
              </label>
            ))}
          </div>
        </div>

        {/* Credit Timeline */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-8">Your Credit Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-[#1A2235]" />
            <div className="space-y-6">
              {TIMELINE_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14] z-10">
                      {item.month === "0" ? "0" : item.month}
                    </div>
                  </div>
                  <div className="pb-6 flex-1">
                    <p className="text-sm font-bold text-white mb-2">{item.label}</p>
                    <div className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
                      <ul className="space-y-1">
                        {item.events.map((ev, j) => (
                          <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                            <span style={{ color: "#D4A017" }} className="mt-0.5 text-xs">→</span>
                            {ev}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dispute Section */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Credit Dispute & Identity Theft Process</h2>
          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <p className="text-sm text-slate-400 mb-5">If you find errors on your credit report or have been a victim of identity theft, follow these steps exactly.</p>
            <div className="space-y-3">
              {DISPUTE_STEPS.map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span style={{ color: "#D4A017" }} className="mt-0.5 shrink-0">→</span>
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                { label: "CFPB Complaint", url: "https://www.consumerfinance.gov/complaint" },
                { label: "FTC Identity Theft", url: "https://www.identitytheft.gov" },
                { label: "Free Credit Reports", url: "https://www.annualcreditreport.com" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#D4A017]/30 px-3 py-2 text-center text-xs font-semibold text-[#D4A017] hover:bg-[#D4A017]/10 transition-all"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Affiliate Resources */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Recommended Resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AFFILIATE_RESOURCES.map((r, i) => (
              <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                <span className="text-xs font-bold rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-2 py-0.5" style={{ color: "#D4A017" }}>
                  {r.category}
                </span>
                <h3 className="font-display text-base font-bold text-white mt-3 mb-1">{r.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{r.desc}</p>
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn-outline block w-full py-2 text-center text-xs font-bold">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-10 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            <strong className="text-slate-400">Disclaimer:</strong> PEN2PRO provides this information for educational purposes only.
            We do not guarantee any specific credit score outcomes or loan approvals.
            Credit-building results vary by individual. Consult a licensed credit counselor or financial advisor for personalized guidance.
            PEN2PRO may earn affiliate commissions from resource links above.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Get your full credit roadmap</h2>
          <p className="text-slate-400 mb-6">Pro members get AI-matched funding resources and a personalized credit-building plan.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="btn-gold px-8 py-3 text-sm font-bold">Join Waitlist — Free</Link>
            <Link to="/funding" className="btn-outline px-8 py-3 text-sm font-bold">Check Funding Readiness →</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
