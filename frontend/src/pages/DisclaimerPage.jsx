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
            Disclaimer
          </h1>
          <p className="text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10 text-sm leading-7 text-slate-400">
          <section className="rounded-xl border border-[#D4A017]/30 p-6" style={{ background: "#D4A01708" }}>
            <p className="text-slate-300">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not
              professional legal, financial, tax, or credit repair services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Business & Financial Guidance</h2>
            <p>
              Roadmaps, business plans, launch strategies, marketing plans, and financial estimates generated
              by PEN2PRO's AI (RMIE) are informational and educational tools based on the information you
              provide. They are not a substitute for advice from a licensed attorney, accountant, financial
              advisor, or other qualified professional. Actual costs, timelines, and outcomes will vary.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Credit & Funding Readiness</h2>
            <p>
              Content on the Credit Repair and Funding Readiness pages is educational. PEN2PRO does not perform
              credit repair services, dispute items on your behalf, or guarantee any change to your credit
              score. Funding readiness checklists and lender preparation guidance do not guarantee approval by
              any lender, bank, or funding partner.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission from some links and partners referenced on the platform, including
              on the <Link to="/affiliate" className="text-[#1E88E5] hover:underline">Affiliate</Link> page.
              We only recommend tools and partners we believe provide value. Commissions do not influence the
              guidance in your roadmap.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Income</h2>
            <p>
              Any income, revenue, or growth figures referenced on PEN2PRO are illustrative examples, not
              promises or guarantees. Results depend on your individual effort, market conditions, execution,
              and factors outside PEN2PRO's control.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
