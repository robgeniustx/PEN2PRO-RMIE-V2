import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Straight talk about what PEN2PRO is — and isn't.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Not Financial, Legal, or Tax Advice</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO's roadmaps, funding readiness checklists, credit-building steps, and business plans are for
            educational and strategic planning purposes only. They are not financial, legal, tax, or credit repair
            advice. Consult a licensed attorney, accountant, or financial advisor before making major business,
            credit, or funding decisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guaranteed Outcomes</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            The platform provides education, strategy, organization, and readiness tools. Results depend on your
            individual circumstances, execution, and factors outside PEN2PRO's control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">AI-Generated Content</h2>
          <p className="text-sm text-slate-400 leading-6">
            Roadmaps and strategy output are generated with AI based on the information you provide. Review every
            recommendation against your own situation before acting on it — AI output can be wrong or incomplete.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Affiliate Relationships</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO may earn a commission from affiliate partners referenced in Funding, Credit Repair, and
            Affiliate resource pages. We only recommend resources we believe are genuinely useful — commissions
            don't change the price you pay.
          </p>
        </section>

        <div className="text-center pt-4">
          <Link to="/funding" className="btn-gold px-8 py-3 text-sm font-bold">Check Funding Readiness</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
