import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Disclaimer</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Educational & Strategic Guidance Only</h2>
            <p>
              PEN2PRO and its Rapid Monetization Intelligence Engine (RMIE) provide business education,
              roadmap strategy, and organizational tools. Nothing on this platform constitutes legal,
              financial, tax, or credit repair advice.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guaranteed Outcomes</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or
              business success. Every business outcome depends on individual effort, execution, market
              conditions, and factors beyond our control. Roadmaps and checklists are starting points, not
              promises.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Credit & Funding Content</h2>
            <p>
              Credit-building and funding-readiness content is for informational purposes only. For legal
              disputes involving your credit report, consult a licensed credit repair organization or
              attorney. For funding decisions, consult a licensed lender or financial advisor.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you use partner links for LLC formation, business banking,
              credit tools, funding, or other services recommended on this platform. We only recommend tools
              we believe are useful to founders.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
          <Link to="/funding" className="btn-gold px-6 py-3 text-sm font-bold text-center">Funding Readiness</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
