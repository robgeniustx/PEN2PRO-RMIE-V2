import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not
              use the platform.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">What PEN2PRO Provides</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates
              business roadmaps, strategy guidance, branding direction, and readiness checklists based on
              information you provide. PEN2PRO is a planning and education tool — it does not provide legal,
              financial, tax, or investment advice.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Plans &amp; Payment</h2>
            <p>
              Pro, Elite, and Founders plans are billed through Stripe according to the pricing displayed at
              checkout. Subscriptions renew automatically unless cancelled. Founders pricing, where offered,
              is limited and subject to availability.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Outcomes depend on your own effort, market conditions, and factors outside our
              control. Roadmaps and checklists are strategic guidance, not a promise of outcome.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">User Responsibilities</h2>
            <p>
              You agree to provide accurate information, use the platform lawfully, and not misuse, scrape, or
              attempt to disrupt PEN2PRO's systems.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted
              constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
