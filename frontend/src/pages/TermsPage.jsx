import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mt-2 text-3xl font-black sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <p>
            These Terms of Service govern your use of PEN2PRO, the AI-powered RMIE (Rapid
            Monetization Intelligence Engine) platform. By creating an account, generating a
            roadmap, or joining the waitlist, you agree to these terms.
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-white">The Service</h2>
            <p className="mt-2">
              PEN2PRO provides business roadmap generation, strategy planning, funding and credit
              readiness tools, branding direction, and execution support across Free, Pro, Elite,
              and Founders tiers. Features vary by tier and may change as the platform evolves.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Accounts &amp; Eligibility</h2>
            <p className="mt-2">
              You must provide accurate information when creating an account or submitting intake
              details. You are responsible for maintaining the confidentiality of your login
              credentials and for all activity under your account.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Subscriptions &amp; Payments</h2>
            <p className="mt-2">
              Pro, Elite, and Founders plans are billed through Stripe. Founders/Legacy Founder
              access is offered on limited-availability terms described on the Founders page.
              Prices and included features are subject to change for future billing cycles with
              notice; already-locked Founders pricing is honored as described at signup.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">No Guarantee of Outcomes</h2>
            <p className="mt-2">
              PEN2PRO does not guarantee income, funding approval, loan approval, credit score
              changes, or business success. See our <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link> for
              full details. Roadmap output is a planning tool, not a promise of results.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Acceptable Use</h2>
            <p className="mt-2">
              You agree not to misuse the platform, attempt to reverse engineer the RMIE engine,
              resell generated content as a competing product, or use PEN2PRO for unlawful
              purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Termination</h2>
            <p className="mt-2">
              We may suspend or terminate accounts that violate these terms. You may cancel a
              paid subscription at any time; cancellation takes effect at the end of the current
              billing period.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Changes to These Terms</h2>
            <p className="mt-2">
              We may update these Terms of Service as PEN2PRO evolves. Continued use of the
              platform after changes take effect constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link to="/pricing" className="rounded-lg px-5 py-2.5 text-sm font-bold text-[#0A0F1E] btn-gold">
            View Pricing
          </Link>
          <Link to="/privacy" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-bold text-slate-300 hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors">
            View Privacy Policy
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
