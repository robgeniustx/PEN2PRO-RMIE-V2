import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-8">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
            <p>
              PEN2PRO (the "RMIE" — Rapid Monetization Intelligence Engine) provides AI-generated business roadmaps,
              strategy tools, and educational resources. By creating an account or using any free, Pro, Elite, or
              Founders tier of the platform, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides strategy, structure, and education — not guaranteed outcomes. We do not guarantee
              income, business success, funding approval, loan approval, or credit repair results. Your results
              depend on your own effort, resources, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Subscriptions &amp; Billing</h2>
            <p>
              Pro, Elite, and Founders tiers are billed through Stripe on a recurring or one-time basis as described
              on the Pricing page at the time of purchase. You may cancel a recurring subscription at any time;
              access continues through the end of the paid billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to reverse-engineer the AI systems, or use PEN2PRO for
              unlawful purposes. We reserve the right to suspend accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes take effect
              constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
