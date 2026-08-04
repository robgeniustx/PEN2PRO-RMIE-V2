import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <p>
            These Terms of Service ("Terms") govern your use of PEN2PRO and the RMIE (Rapid
            Monetization Intelligence Engine) platform. By creating an account, generating a
            roadmap, or otherwise using PEN2PRO, you agree to these Terms.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">1. The Platform</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
              content across Starter (free), Pro, Elite, and Founders tiers. Roadmap output,
              strategy suggestions, and readiness checklists are informational and strategic
              guidance — not professional legal, tax, credit, or financial advice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">2. No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan
              approval, or credit repair results. Outcomes depend on your effort, market
              conditions, and factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity under your account. Notify us immediately of any
              unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">4. Subscriptions &amp; Billing</h2>
            <p>
              Pro, Elite, and Founders access may involve recurring or one-time charges as
              described on the Pricing page at the time of purchase. Founders pricing, where
              offered, is positioned as an early-access rate and subject to the terms presented
              at checkout.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">5. Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it
              for unlawful purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">6. Changes</h2>
            <p>
              We may update these Terms as PEN2PRO evolves. Continued use of the platform after
              changes take effect constitutes acceptance of the updated Terms.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-center text-sm font-bold">
            Start Your Free Roadmap
          </Link>
          <Link to="/" className="btn-outline px-8 py-3 text-center text-sm font-bold">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
