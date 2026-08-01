import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const POINTS = [
  {
    title: "No Guaranteed Income or Success",
    body: "PEN2PRO provides business planning tools, AI-generated roadmaps, and strategy guidance. We do not guarantee income, revenue, profit, or business success. Results depend on your effort, execution, market conditions, and factors outside our control.",
  },
  {
    title: "No Guaranteed Funding or Loan Approval",
    body: "Funding readiness checklists and guidance on the Platform are educational tools to help you prepare for lenders, investors, and vendors. PEN2PRO does not guarantee funding approval, loan approval, or credit line approval of any kind.",
  },
  {
    title: "No Guaranteed Credit Repair Results",
    body: "Credit readiness content is provided for education and organization purposes only. PEN2PRO is not a credit repair organization, does not perform disputes on your behalf, and does not guarantee any change to your credit score or credit report.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO — including AI-generated roadmaps, LLC/EIN checklists, and business structuring guidance — constitutes legal, tax, or financial advice. Consult a licensed attorney, accountant, or financial professional before making decisions that affect your business or finances.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps and strategy output are generated with the assistance of artificial intelligence based on the information you provide. Review all AI-generated content critically and verify anything related to legal compliance, licensing, or regulated industries.",
  },
  {
    title: "Third-Party & Affiliate Resources",
    body: "PEN2PRO may recommend or link to third-party services (LLC formation, banking, credit monitoring, funding partners, marketing tools, and similar resources). We may earn a commission from some of these partners. We do not control and are not responsible for the products, services, pricing, or outcomes of third parties.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or
            business success. The Platform provides education, strategy, organization, and readiness
            tools — the work of building your business is yours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {POINTS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-black text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-8">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-8 text-center" style={{ background: "#0F1520" }}>
          <p className="text-slate-400 mb-6">
            Ready to build your roadmap with a clear understanding of what PEN2PRO can — and can't — do for you?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold px-8 py-3 text-sm font-bold">
              Start Your Free Roadmap
            </Link>
            <Link to="/about" className="btn-outline px-8 py-3 text-sm font-bold">
              Read the Founder Story
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
