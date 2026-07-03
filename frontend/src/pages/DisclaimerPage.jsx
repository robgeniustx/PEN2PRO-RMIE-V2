import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee that you will earn any specific amount of income, achieve profitability, or succeed in launching or growing a business. Outcomes depend on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists, vendor/tradeline guidance, and lender preparation content are educational only. PEN2PRO does not guarantee approval for any loan, grant, line of credit, or funding source. Approval decisions are made solely by third-party lenders and funders based on their own criteria.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-building and credit readiness content is for educational purposes only. PEN2PRO is not a credit repair organization, does not perform dispute services on your behalf, and does not guarantee any change to your credit score, credit report, or credit profile.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO — including roadmap output, LLC/EIN checklists, branding guidance, or AI-generated strategy — constitutes legal, tax, accounting, or licensed financial advice. Consult a qualified attorney, CPA, or financial professional before making binding business, legal, or financial decisions.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps, strategy output, and recommendations are generated with the assistance of artificial intelligence based on the information you provide. AI output may contain errors, omissions, or generic guidance and should be reviewed critically before you act on it.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you use links to third-party partners for services such as LLC formation, business banking, credit tools, funding, domains, bookkeeping, payment processing, CRM, or insurance. We only recommend tools we believe are useful, but we do not control or guarantee the results of any third-party service.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">Disclaimer</h1>
          <p className="mb-12 text-slate-400 leading-relaxed">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            The platform provides education, strategy, organization, and readiness tools — the work of building your
            business is yours to do.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Terms of Service
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
