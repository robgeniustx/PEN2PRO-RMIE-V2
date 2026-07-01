import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Income &amp; Results <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 space-y-10 text-slate-300 leading-7">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p>
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business income, or
            business success. The platform provides education, strategy, organization, and readiness tools — not
            promises of a specific outcome.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Roadmaps &amp; Strategy Output</h2>
          <p>
            Your business roadmap, launch plan, marketing plan, and growth strategy are generated based on the
            information you provide and general best practices. Results vary based on effort, market conditions,
            location, competition, and factors outside PEN2PRO's control.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Not Legal, Financial, or Credit Repair Services</h2>
          <p>
            PEN2PRO is not a law firm, accounting firm, licensed credit repair organization, or lender. Funding
            readiness checklists, credit-building steps, and business formation guidance are educational in nature.
            For legal, tax, or credit repair matters, consult a licensed professional.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Affiliate &amp; Partner Links</h2>
          <p>
            PEN2PRO may recommend or link to third-party partners (LLC formation, banking, credit monitoring,
            funding, and other services). PEN2PRO may earn a commission from these partners. We do not control
            their approval decisions, pricing, or service quality.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Your Responsibility</h2>
          <p>
            You are responsible for the decisions you make about your business, credit, and finances. PEN2PRO gives
            you structure and strategy — the execution, licensing, compliance, and legal setup in your jurisdiction
            are your responsibility.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Questions</h2>
          <p>
            For questions about this disclaimer, reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account
            support channel.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
