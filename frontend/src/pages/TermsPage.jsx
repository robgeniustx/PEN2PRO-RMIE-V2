import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">The service</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that
              helps you turn ideas, skills, and lived experience into a business roadmap, launch
              strategy, and monetization plan. Free, Pro, Elite, and Founders tiers unlock
              different levels of depth, tracking, and support, as described on the Pricing page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your account</h2>
            <p>
              You're responsible for keeping your login credentials secure and for the accuracy of
              the information you submit. You must be at least 18 years old, or have a parent or
              guardian's consent, to create an account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Payments and upgrades</h2>
            <p>
              Paid plans are billed through Stripe on the cadence shown at checkout. You can cancel
              a recurring plan at any time; access continues through the end of the paid period.
              Founders/lifetime offers are subject to the terms shown on the Founders page at time
              of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Acceptable use</h2>
            <p>
              Don't use PEN2PRO to generate content for illegal activity, to harass others, or to
              misrepresent yourself. We reserve the right to suspend accounts that abuse the
              platform or its AI systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No guarantee of results</h2>
            <p>
              PEN2PRO provides education, strategy, structure, and readiness tools. It does not
              guarantee income, business success, credit repair outcomes, or funding/loan approval.
              See our full{" "}
              <a href="/disclaimer" className="font-semibold" style={{ color: "#FF8A00" }}>
                Disclaimer
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes to these terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Material changes will be reflected here
              with an updated date.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
