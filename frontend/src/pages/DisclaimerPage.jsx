import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-10 font-display text-4xl font-black md:text-5xl">Disclaimer</h1>

          <div className="space-y-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <p className="text-lg font-bold text-white">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              The platform provides education, strategy, organization, and readiness tools — not financial, legal,
              tax, or credit repair services. Your results depend on your individual effort, financial situation,
              market conditions, and factors outside PEN2PRO's control.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Roadmaps, checklists, and AI-generated strategy on PEN2PRO are informational starting points meant to
              help you plan and take action. Before making legal, financial, or credit-related decisions, consider
              speaking with a qualified attorney, accountant, or licensed financial professional.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Funding and credit-readiness content on the{" "}
              <Link to="/funding" className="text-[#FF8A00] hover:underline">Funding</Link> and{" "}
              <Link to="/credit-repair" className="text-[#FF8A00] hover:underline">Credit Repair</Link> pages does
              not constitute an offer of credit, a loan commitment, or a guarantee of dispute outcomes.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Affiliate links on PEN2PRO may earn us a commission at no extra cost to you. We only recommend tools
              and partners we believe can genuinely help you build.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
