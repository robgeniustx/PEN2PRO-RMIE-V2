import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          <span className="gradient-text">Disclaimer</span>
        </h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section className="rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
            <p className="text-white font-semibold">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not
              financial, legal, or credit-repair services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Business & Income Results</h2>
            <p>
              Roadmaps, blueprints, and strategy output from the RMIE engine are planning tools based on the
              information you provide. Results depend on your market, effort, execution, capital, and factors
              outside PEN2PRO's control. Examples of income, growth, or outcomes shown on this site are
              illustrative, not promises of what you will achieve.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Credit & Funding Readiness</h2>
            <p>
              The Funding and Credit Repair tools help you organize documentation, understand utilization and
              dispute readiness concepts, and prepare for lender or vendor conversations. PEN2PRO is not a credit
              repair organization, law firm, or lender, and does not perform disputes, negotiate on your behalf,
              or guarantee any change to your credit profile or approval odds.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Not Legal, Tax, or Financial Advice</h2>
            <p>
              Content covering LLC/EIN formation, business banking, branding, and funding readiness is general
              education. Consult a licensed attorney, accountant, or financial advisor for guidance specific to
              your situation before making legal, tax, or financial decisions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              Some links on PEN2PRO (LLC formation, banking, credit, funding, domains, and other business tools)
              are affiliate links. We may earn a commission if you sign up through them, at no extra cost to you.
              We only recommend tools we believe are useful to founders building a business.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
