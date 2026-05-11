import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PERSONAL_CHECKLIST = [
  { id: "p1", label: "Credit score 650 or higher" },
  { id: "p2", label: "No major derogatory marks in the last 12 months" },
  { id: "p3", label: "Credit utilization below 30% on all revolving accounts" },
  { id: "p4", label: "6+ months of personal bank statements available" },
  { id: "p5", label: "Personal tax returns for 2 years available (2022 & 2023)" },
  { id: "p6", label: "Valid government-issued photo ID" },
];

const BUSINESS_CHECKLIST = [
  { id: "b1", label: "LLC or corporation registered with your state" },
  { id: "b2", label: "EIN obtained from IRS.gov (free)" },
  { id: "b3", label: "Business bank account open — separate from personal" },
  { id: "b4", label: "3+ months of business bank statements" },
  { id: "b5", label: "Business address established (UPS Store mailbox is fine)" },
  { id: "b6", label: "Net-30 vendor accounts established (Uline, Quill, Grainger)" },
  { id: "b7", label: "Business credit profile started on Dun & Bradstreet or Nav" },
];

const FUNDING_PATHS = [
  {
    range: "$0–$5K",
    label: "Starter",
    color: "#64748B",
    items: [
      "Secured business credit cards (Capital One Spark Secured)",
      "Net-30 vendor accounts (Uline, Quill, Grainger — free)",
      "Personal savings or family/friends",
      "Microloans from CDFIs (Accion, Grameen America)",
    ],
  },
  {
    range: "$5K–$50K",
    label: "Growth",
    color: "#00C9B1",
    items: [
      "SBA Microloan Program (up to $50,000) — sba.gov",
      "CDFI lenders (Community Development Finance Institutions)",
      "Invoice financing / factoring for service businesses",
      "Business line of credit (after 6+ months of bank history)",
      "Local SCORE chapter grants and pitch competitions",
    ],
  },
  {
    range: "$50K+",
    label: "Scale",
    color: "#D4A017",
    items: [
      "SBA 7(a) loan program (up to $5M) — sba.gov",
      "SBA 504 loan (real estate/equipment)",
      "Bank business lines of credit",
      "Alternative lenders (Kabbage, BlueVine, OnDeck)",
      "Angel investors or revenue-based financing",
    ],
  },
];

const AFFILIATE_RESOURCES = [
  { name: "ZenBusiness", category: "LLC Formation", desc: "Form your LLC fast. Starts at $0 + state fee.", link: "#" },
  { name: "Mercury Bank", category: "Business Banking", desc: "No-fee business banking built for startups.", link: "#" },
  { name: "Nav", category: "Business Credit", desc: "Monitor and build your business credit score.", link: "#" },
  { name: "Next Insurance", category: "Business Insurance", desc: "General liability from $400/yr, apply in minutes.", link: "#" },
];

export default function FundingReadinessPage() {
  const [personal, setPersonal] = useState({});
  const [business, setBusiness] = useState({});

  const personalScore = Object.values(personal).filter(Boolean).length;
  const businessScore = Object.values(business).filter(Boolean).length;
  const totalScore = personalScore + businessScore;
  const totalItems = PERSONAL_CHECKLIST.length + BUSINESS_CHECKLIST.length;
  const pct = Math.round((totalScore / totalItems) * 100);

  function readinessLabel() {
    if (pct >= 85) return { label: "Ready to Apply", color: "#00C9B1" };
    if (pct >= 55) return { label: "Getting There", color: "#D4A017" };
    if (pct >= 25) return { label: "Building Foundation", color: "#64748B" };
    return { label: "Just Getting Started", color: "#64748B" };
  }

  const rl = readinessLabel();

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            FUNDING READINESS
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Are You <span className="gradient-text">Funding-Ready?</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Check every box before you walk into a lender. Most applications get rejected because of missing foundations — not the idea.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Readiness Score */}
        <div className="mb-12 rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Your Readiness Score</p>
          <div className="font-display text-5xl font-black mb-2" style={{ color: rl.color }}>
            {totalScore}/{totalItems}
          </div>
          <p className="text-sm font-bold mb-4" style={{ color: rl.color }}>{rl.label}</p>
          <div className="mx-auto max-w-sm h-2.5 rounded-full bg-[#1A2235]">
            <div
              className="h-2.5 rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: rl.color }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">{pct}% complete</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
          {/* Personal Checklist */}
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-5">
              Personal Funding Readiness
              <span className="ml-2 text-sm font-normal text-slate-500">({personalScore}/{PERSONAL_CHECKLIST.length})</span>
            </h2>
            <div className="space-y-3">
              {PERSONAL_CHECKLIST.map(item => (
                <label
                  key={item.id}
                  className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition-all ${
                    personal[item.id]
                      ? "border-[#00C9B1]/40 bg-[#00C9B1]/5"
                      : "border-[#1A2235] hover:border-[#1A2235]"
                  }`}
                  style={{ background: personal[item.id] ? undefined : "#0F1520" }}
                >
                  <input
                    type="checkbox"
                    checked={!!personal[item.id]}
                    onChange={e => setPersonal(p => ({ ...p, [item.id]: e.target.checked }))}
                    className="h-5 w-5 rounded accent-[#D4A017]"
                  />
                  <span className={`text-sm ${personal[item.id] ? "text-white line-through text-slate-400" : "text-slate-300"}`}>
                    {item.label}
                  </span>
                  {personal[item.id] && <span className="ml-auto text-sm" style={{ color: "#00C9B1" }}>✓</span>}
                </label>
              ))}
            </div>
          </div>

          {/* Business Checklist */}
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-5">
              Business Funding Readiness
              <span className="ml-2 text-sm font-normal text-slate-500">({businessScore}/{BUSINESS_CHECKLIST.length})</span>
            </h2>
            <div className="space-y-3">
              {BUSINESS_CHECKLIST.map(item => (
                <label
                  key={item.id}
                  className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition-all ${
                    business[item.id]
                      ? "border-[#00C9B1]/40 bg-[#00C9B1]/5"
                      : "border-[#1A2235] hover:border-[#1A2235]"
                  }`}
                  style={{ background: business[item.id] ? undefined : "#0F1520" }}
                >
                  <input
                    type="checkbox"
                    checked={!!business[item.id]}
                    onChange={e => setBusiness(b => ({ ...b, [item.id]: e.target.checked }))}
                    className="h-5 w-5 rounded accent-[#D4A017]"
                  />
                  <span className={`text-sm ${business[item.id] ? "text-slate-400 line-through" : "text-slate-300"}`}>
                    {item.label}
                  </span>
                  {business[item.id] && <span className="ml-auto text-sm" style={{ color: "#00C9B1" }}>✓</span>}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Needed */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Documents You Need to Apply</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Government-issued photo ID",
              "Social Security Number",
              "Articles of Incorporation / LLC Operating Agreement",
              "EIN letter from IRS",
              "Business bank statements (3–12 months)",
              "Personal bank statements (3–6 months)",
              "Personal tax returns (2 years)",
              "Business tax returns (if available)",
              "Proof of business address",
              "Business plan or revenue projections",
              "Voided business check",
              "Accounts receivable aging report (if applicable)",
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-[#1A2235] px-4 py-3" style={{ background: "#0F1520" }}>
                <span style={{ color: "#D4A017" }} className="text-sm">📄</span>
                <p className="text-sm text-slate-300">{doc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Paths */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Funding Paths</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FUNDING_PATHS.map((path, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#1A2235] p-6"
                style={{ background: "#0F1520" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-xl border px-3 py-1 text-xs font-black" style={{ color: path.color, borderColor: path.color + "40" }}>
                    {path.range}
                  </span>
                  <span className="text-sm font-bold" style={{ color: path.color }}>{path.label}</span>
                </div>
                <ul className="space-y-2">
                  {path.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                      <span style={{ color: path.color }} className="mt-0.5 text-xs">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline block w-full py-2 text-center text-xs font-bold"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-10 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            <strong className="text-slate-400">Disclaimer:</strong> PEN2PRO does not guarantee funding approval or specific loan terms.
            Funding eligibility depends on your individual financial profile, lender requirements, and business history.
            Information provided is for educational purposes only and does not constitute financial advice.
            Consult a licensed financial advisor before making funding decisions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Ready to take the next step?</h2>
          <p className="text-slate-400 mb-6">Join the PEN2PRO waitlist and get matched with funding resources when we launch.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="btn-gold px-8 py-3 text-sm font-bold">
              Join Waitlist — Free
            </Link>
            <Link to="/credit-repair" className="btn-outline px-8 py-3 text-sm font-bold">
              Build Business Credit →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
