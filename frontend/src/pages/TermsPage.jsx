import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              By creating an account or using the Free, Pro, Elite, or Legacy Founder tiers of
              PEN2PRO, you agree to use the platform for lawful business planning purposes and to
              provide accurate information during intake and account setup.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO's RMIE (Rapid Monetization Intelligence Engine) generates roadmaps, strategy,
              and readiness checklists based on the information you provide. We do not guarantee
              income, funding approval, credit repair outcomes, or business success. See our{" "}
              <Link to="/disclaimer" className="text-[#FF8A00] font-semibold">Disclaimer</Link> for
              full details.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Subscriptions &amp; Billing</h2>
            <p>
              Pro, Elite, and Legacy Founder tiers are subscription or one-time offers as described
              on their respective pages at the time of purchase. Pricing, features, and
              availability may change, and current subscribers will be notified of material
              changes affecting their plan.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Content</h2>
            <p>
              You own the business ideas, roadmaps, and content you create using PEN2PRO. We use
              your inputs only to generate your roadmap and improve your account experience.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Account Termination</h2>
            <p>
              You may cancel your account at any time. We may suspend accounts used for unlawful
              activity, abuse of the platform, or violation of these terms.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold">Start Your Free Roadmap</Link>
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold">Privacy Policy</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
