import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO provides business strategy, roadmaps, and educational tools. We do not guarantee that you will earn income, launch a successful business, or achieve any specific outcome. Results depend on your effort, market conditions, capital, and factors outside our control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists and guidance on PEN2PRO are educational. We do not guarantee approval for any loan, grant, line of credit, or investment. Approval decisions are made solely by lenders and third-party institutions.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "PEN2PRO is not a credit repair organization. Credit-building and dispute-readiness content is educational only. We do not guarantee any change to your credit score or removal of any item from a credit report.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "PEN2PRO is not a law firm, CPA firm, or registered financial advisor. Guidance on LLC formation, EIN, business banking, and taxes is general information — consult a licensed attorney, accountant, or financial professional for advice specific to your situation.",
  },
  {
    title: "Affiliate Disclosure",
    body: "PEN2PRO may receive a commission when you use partner links for services such as LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, or insurance. This does not increase the price you pay and does not affect the objectivity of our recommendations.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          <span className="gradient-text">Disclaimer</span>
        </h1>
        <p className="mb-12 text-slate-400">PEN2PRO provides education, strategy, organization, and readiness tools — not guarantees.</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
