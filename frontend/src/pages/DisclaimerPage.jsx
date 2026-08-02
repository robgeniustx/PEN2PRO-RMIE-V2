import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-6 font-display text-4xl font-black md:text-5xl">Disclaimer</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <p className="font-semibold text-white">
                PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
                success. The platform provides education, strategy, organization, and readiness tools.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Not Financial, Legal, or Credit Repair Services</h2>
              <p>
                PEN2PRO is not a bank, lender, law firm, credit repair organization, or investment advisor.
                Roadmap output, funding readiness checklists, and credit-building guidance are educational tools,
                not professional advice. Consult a licensed attorney, accountant, or financial advisor before
                making legal, tax, or major financial decisions.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Business Outcomes Vary</h2>
              <p>
                Every business idea, market, and founder is different. Results shown or implied anywhere on
                PEN2PRO — including example roadmaps, revenue projections, and growth plans — are illustrative,
                not promises of what you will earn or achieve.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Affiliate Relationships</h2>
              <p>
                PEN2PRO may earn a commission when you use partner links for services like LLC formation,
                business banking, funding, or bookkeeping tools listed on the Affiliate, Funding, and Credit
                Repair pages. We only recommend partners we believe can genuinely help builders — but you should
                evaluate any third-party service independently before signing up.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Personal Effort Required</h2>
              <p>
                A roadmap, checklist, or strategy is only as effective as the action taken on it. PEN2PRO gives
                you structure and direction; execution, consistency, and outcomes are ultimately in your hands.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
