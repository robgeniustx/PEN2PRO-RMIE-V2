import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10 text-slate-300 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p>
            PEN2PRO provides AI-generated business roadmaps, strategy content, and readiness tools (the "RMIE"
            engine) across our Free, Pro, Elite, and Founders tiers. By creating an account or using any part of
            the platform, you agree to these Terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all
            activity under your account. You must provide accurate information when creating an account or
            completing a roadmap intake.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Subscriptions &amp; Payments</h2>
          <p>
            Pro, Elite, and Founders tiers are billed according to the plan you select at checkout. You may
            cancel a recurring subscription at any time; access continues through the end of the current
            billing period. Founders tier pricing and availability may be limited and change without notice.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
            business success, revenue, funding approval, loan approval, or credit repair results. Outcomes
            depend on your own effort, market conditions, and factors outside our control.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Acceptable Use</h2>
          <p>
            You agree not to misuse the platform, attempt to disrupt its operation, or use PEN2PRO for any
            unlawful purpose. We may suspend or terminate accounts that violate these Terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Changes to These Terms</h2>
          <p>
            We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take
            effect constitutes acceptance of the updated Terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about these Terms can be sent through the{" "}
            <Link to="/waitlist" className="text-[#1E88E5] underline">contact form</Link>. See also our{" "}
            <Link to="/disclaimer" className="text-[#1E88E5] underline">Disclaimer</Link>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
