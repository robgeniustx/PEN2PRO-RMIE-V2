import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO provides roadmaps, strategy, and AI-generated guidance to help you plan and launch a business idea. We do not guarantee any level of income, revenue, or business success. Results depend on your effort, execution, market conditions, and factors outside PEN2PRO's control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness tools, checklists, and guidance on PEN2PRO are educational. They help you organize documentation and understand what lenders and funders typically look for. PEN2PRO does not guarantee approval for any loan, grant, line of credit, or funding source, and is not a lender.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-related content on PEN2PRO (utilization strategy, dispute readiness, business credit foundation) is educational and organizational. PEN2PRO does not guarantee any specific credit score outcome, dispute result, or removal of negative items, and is not a credit repair organization performing disputes on your behalf.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO — including roadmap output, LLC/EIN checklists, branding guidance, or affiliate resources — should be treated as formal legal, tax, or financial advice. Always confirm business formation, licensing, tax, and compliance requirements with a qualified attorney, accountant, or advisor in your state.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission from partner links on pages such as Funding, Credit Repair, and Affiliate (LLC formation, business banking, business credit, payment processing, and similar services). This does not increase your cost, and we only link to services relevant to building a business. PEN2PRO is not responsible for the performance, pricing, or terms of third-party partners.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for how you use PEN2PRO's roadmaps, strategies, and tools. Building a business involves risk. Use good judgment, verify claims independently, and treat PEN2PRO as a strategic co-pilot — not a substitute for your own decisions.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">
            Disclaimer
          </h1>
          <p className="mb-14 text-slate-400">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#1A2D50] pt-8 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Privacy Policy
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Terms of Service
            </Link>
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
