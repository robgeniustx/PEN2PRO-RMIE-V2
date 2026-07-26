import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated: January 2026. By using PEN2PRO, you agree to the terms below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10 text-slate-300 leading-7">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p>
            PEN2PRO ("we," "us," "the platform") provides AI-generated business roadmaps, strategy tools, and
            related educational content through our RMIE (Rapid Monetization Intelligence Engine). By creating an
            account, joining the waitlist, or purchasing a Pro, Elite, or Founders plan, you agree to use the
            platform lawfully and not to misuse, resell, or scrape the service without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Subscriptions & Billing</h2>
          <p>
            Pro and Elite are recurring subscriptions billed through Stripe. Founders access is offered under the
            pricing and terms shown at checkout at the time of purchase. You can cancel a recurring subscription at
            any time; access continues through the end of the paid billing period. Prices, features, and plan tiers
            may change as the platform evolves — active subscribers will be notified of material changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">No Guarantees</h2>
          <p>
            PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income,
            business success, funding approval, loan approval, or credit repair results. Outcomes depend on your
            own effort, market conditions, and factors outside our control. See the{" "}
            <Link to="/disclaimer" className="text-[#1E88E5] hover:underline">Disclaimer</Link> for full detail.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Intellectual Property</h2>
          <p>
            The PEN2PRO platform, brand, RMIE engine, and all associated content are owned by PEN2PRO. Roadmaps and
            blueprints generated for your account are yours to use for your own business purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
          <p>
            We may update these terms as PEN2PRO grows. Continued use of the platform after changes are posted
            means you accept the updated terms.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
