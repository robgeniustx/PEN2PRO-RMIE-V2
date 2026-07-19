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
            The rules for using the PEN2PRO platform.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl border border-[#1A2235] p-8 space-y-8" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-500">Last updated: 2026</p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptance of Terms</h2>
            <p className="text-slate-400 leading-7">
              By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use
              the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">The PEN2PRO Service</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business
              roadmaps, strategy content, and readiness checklists based on information you provide. Free, Pro,
              Elite, and Legacy Founder tiers unlock different levels of access, as described on our Pricing page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
              business success, revenue, funding approval, loan approval, or credit repair results. Outcomes
              depend on your own effort, market conditions, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Payments and Subscriptions</h2>
            <p className="text-slate-400 leading-7">
              Paid tiers (Pro, Elite, Legacy Founder) are billed through our payment processor. Subscriptions
              renew automatically unless canceled. Pricing and plan details are shown at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptable Use</h2>
            <p className="text-slate-400 leading-7">
              You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful
              purposes. We may suspend accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
            <p className="text-slate-400 leading-7">
              We may update these Terms of Service from time to time. Continued use of PEN2PRO after changes are
              posted constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
