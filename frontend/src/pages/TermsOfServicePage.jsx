import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsOfServicePage() {
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
          <p className="text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10 text-sm leading-7 text-slate-400">
          <p>
            These Terms of Service ("Terms") govern your use of PEN2PRO, an AI-powered Rapid Monetization
            Intelligence Engine (RMIE) platform. By creating an account, joining the waitlist, or using
            PEN2PRO, you agree to these Terms.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">The Service</h2>
            <p>
              PEN2PRO provides AI-generated roadmaps, business strategy, funding readiness guidance, credit
              readiness guidance, and related tools (Free, Pro, Elite, and Founders tiers). Output is generated
              based on the information you provide and is intended as education, strategy, and organizational
              support — not professional legal, financial, tax, or credit repair advice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activity under your account. You must provide accurate information when creating an account or
              submitting a roadmap request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Subscriptions & Payments</h2>
            <p>
              Pro, Elite, and Founders plans are billed through Stripe on the cadence shown at checkout.
              Subscriptions renew automatically until canceled. Founders pricing, where offered, is a limited
              early-access offer and availability may change without notice. You can cancel a recurring
              subscription at any time; access continues through the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Roadmaps, strategies, and recommendations are informational tools. Outcomes
              depend on your effort, market conditions, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, including attempting to disrupt the service, reverse
              engineer non-public parts of the product, or use PEN2PRO for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Termination</h2>
            <p>
              We may suspend or terminate access for violation of these Terms. You may stop using PEN2PRO and
              close your account at any time.
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
            <h2 className="font-display text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              Questions about these Terms can be sent through our{" "}
              <Link to="/waitlist" className="text-[#1E88E5] hover:underline">contact form</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
