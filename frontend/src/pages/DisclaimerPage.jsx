import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO provides roadmaps, strategy, and execution guidance based on the information you provide. It does not guarantee income, revenue, profit, or business success of any kind. Results depend on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists and guidance are educational tools to help you prepare for lenders, investors, and vendors. PEN2PRO is not a lender, broker, or guarantor of funding, and does not guarantee approval for any loan, line of credit, grant, or investment.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-related content on PEN2PRO is educational and organizational — it helps you understand your credit profile and prepare documentation. PEN2PRO is not a credit repair organization and does not guarantee removal of negative items, score increases, or dispute outcomes.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Content on PEN2PRO — including LLC/EIN checklists, business structure guidance, and branding direction — is for general informational purposes only and is not a substitute for advice from a licensed attorney, accountant, or financial advisor. Consult a qualified professional before making legal, tax, or financial decisions.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you use affiliate links to third-party services (business formation, banking, funding, tools, etc.). We only recommend services we believe can genuinely help — but we do not control, and are not responsible for, the products, pricing, or outcomes of third-party providers.",
  },
  {
    title: "Lived-Experience Content",
    body: "Founder story content shared on PEN2PRO reflects one individual's personal experience. It is shared for context and inspiration, not as a promise of similar outcomes for any other person.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#1A2D50] p-8 text-center sm:flex-row sm:items-center sm:justify-between" style={{ background: "#0D1528" }}>
          <p className="text-sm text-slate-400">Questions about how PEN2PRO works?</p>
          <Link to="/about" className="btn-gold rounded-lg px-6 py-3 text-sm font-black whitespace-nowrap">
            Read Our Story
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
