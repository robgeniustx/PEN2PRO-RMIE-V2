import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guaranteed Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, credit repair results, or any specific financial outcome. Every roadmap, projection, and strategy on this platform is a planning tool based on the information you provide — not a promise.",
  },
  {
    title: "Credit & Funding Content",
    body: "Content on the Funding Readiness and Credit Repair pages — including checklists, utilization strategy, dispute readiness, and lender preparation guidance — is educational and organizational. PEN2PRO is not a credit repair organization, law firm, or lender, and does not guarantee removal of negative items, credit score increases, or funding/loan approval.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "PEN2PRO provides business strategy, structure, and readiness guidance, not legal, tax, or licensed financial advice. LLC/EIN checklists, company formation guidance, and funding readiness tools are starting points — consult a licensed attorney, accountant, or financial advisor for advice specific to your situation.",
  },
  {
    title: "AI-Generated Output",
    body: "Roadmaps, blueprints, financial projections, and strategy documents are generated using AI models combined with structured business frameworks. AI output can be incomplete or imperfect. Review all output critically before acting on it or presenting it to lenders, investors, or partners.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "PEN2PRO may earn a commission from third-party partners linked on the Affiliate, Funding, and Credit Repair pages (LLC formation, banking, credit, bookkeeping, and similar services). We only recommend tools we believe in; commissions do not change our recommendations, and we are not responsible for those companies' products, pricing, or outcomes.",
  },
  {
    title: "Individual Results Vary",
    body: "Results depend on your effort, market, industry, timing, resources, and execution. Testimonials or examples referenced anywhere on PEN2PRO are individual experiences, not typical or guaranteed results for every user.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <div className="rounded-2xl border border-[#D4A017]/30 p-6" style={{ background: "#D4A01708" }}>
          <p className="text-sm font-bold text-white mb-2">Key Disclaimer</p>
          <p className="text-sm text-slate-300 leading-7">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
            success. The platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>

        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 text-sm leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-7">
            See also our <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
