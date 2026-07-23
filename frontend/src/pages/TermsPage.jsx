import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The ground rules for using PEN2PRO's roadmap, dashboard, and paid plans.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO's Rapid Monetization Intelligence Engine (RMIE) generates business roadmaps, strategy, and
            execution guidance based on the information you provide. By using the free roadmap, Starter, Builder,
            Accelerator, Pro, Elite, or Legacy Founder tools, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee business
            success, revenue, funding approval, loan approval, or credit repair outcomes. Every roadmap is a
            starting point — execution and results depend on you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Subscriptions & Billing</h2>
          <p className="text-sm text-slate-400 leading-6">
            Pro, Elite, and Legacy Founder are paid tiers billed through Stripe. Pricing, features, and billing
            cadence are shown on the Pricing page at checkout. You can cancel a recurring subscription at any time
            from your dashboard; access continues through the end of the paid period.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Acceptable Use</h2>
          <p className="text-sm text-slate-400 leading-6">
            Don't use PEN2PRO to submit fraudulent business information, resell platform access, or attempt to
            disrupt the service. We reserve the right to suspend accounts that abuse the platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Affiliate & Third-Party Links</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO may earn a commission when you use affiliate links for LLC formation, banking, credit, funding,
            or other recommended tools. This does not change your cost, and we only recommend resources we believe
            are useful for founders.
          </p>
        </section>

        <div className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            The platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link to="/starter" className="btn-gold px-8 py-3 text-sm font-bold">Start Your Free Roadmap</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
