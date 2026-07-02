import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-10">
          Last updated: 2026. By using PEN2PRO, you agree to these terms.
        </p>

        <div className="space-y-8 text-slate-400 leading-7">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">The platform</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates
              business roadmaps, strategy plans, and readiness checklists based on the information
              you provide. Free, Pro, Elite, and Founders tiers unlock different levels of access,
              described on the <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">No guarantee of results</h2>
            <p>
              PEN2PRO provides education, strategy, structure, and organization tools — not a
              guarantee of income, funding approval, loan approval, credit repair results, or
              business success. Outcomes depend on your effort, market conditions, and factors
              outside PEN2PRO's control.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Subscriptions and billing</h2>
            <p>
              Pro and Elite are billed on a recurring basis; Founders is a one-time lifetime-access
              offer while available. You can cancel a recurring subscription at any time; access
              continues through the end of the paid period. Checkout is processed securely by
              Stripe — PEN2PRO does not store your card details.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Acceptable use</h2>
            <p>
              You agree not to misuse the platform — including attempting to access other users'
              data, reverse-engineering the AI systems, or using generated content for unlawful
              purposes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after an
              update means you accept the revised terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
