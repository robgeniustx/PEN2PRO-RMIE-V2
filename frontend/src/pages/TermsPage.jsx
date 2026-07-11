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
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Acceptance of Terms</h2>
          <p className="text-sm text-slate-400 leading-7">
            By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use
            the platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">The Service</h2>
          <p className="text-sm text-slate-400 leading-7">
            PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business
            roadmaps, strategy guidance, and execution tools based on information you provide. Output is generated
            using AI and general business knowledge — it is educational and strategic in nature, not professional
            legal, tax, financial, or investment advice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Plans and Billing</h2>
          <p className="text-sm text-slate-400 leading-7">
            Starter access is free. Pro, Elite, and Founders are paid tiers billed on the schedule shown at
            checkout. Founders pricing is offered for a limited time to early adopters and is subject to
            availability. You may cancel a recurring plan at any time; access continues through the end of the
            current billing period.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p className="text-sm text-slate-400 leading-7">
            PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit score
            outcomes. Results depend on your individual effort, market conditions, and factors outside our
            control. Roadmaps and checklists are strategic starting points, not promises of outcome.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Acceptable Use</h2>
          <p className="text-sm text-slate-400 leading-7">
            You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful
            purposes. We may suspend or terminate accounts that violate these terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Limitation of Liability</h2>
          <p className="text-sm text-slate-400 leading-7">
            PEN2PRO is provided "as is" without warranties of any kind. To the maximum extent permitted by law,
            PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the
            platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Changes to These Terms</h2>
          <p className="text-sm text-slate-400 leading-7">
            We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you
            accept the updated terms.
          </p>
        </section>

        <div className="pt-4 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
