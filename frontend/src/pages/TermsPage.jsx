import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps users turn
              ideas, skills, and lived experience into business roadmaps, launch strategies, and monetization plans.
              By using PEN2PRO, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Plans &amp; Access</h2>
            <p>
              PEN2PRO offers a Free roadmap tier and paid Pro, Elite, and Founders tiers. Paid tiers unlock deeper
              roadmap output, tracking, branding support, and strategist guidance as described on each plan page.
              Features may change as the platform evolves.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, structure, and organization tools. We do not guarantee business
              success, revenue, funding approval, loan approval, or credit repair outcomes. Results depend on your
              effort, market conditions, and factors outside PEN2PRO's control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Responsibilities</h2>
            <p>
              You agree to provide accurate information, use PEN2PRO for lawful purposes, and not misuse, resell, or
              scrape the platform's content or AI output without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these Terms as PEN2PRO grows. Continued use of the platform after changes means you
              accept the updated Terms.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
