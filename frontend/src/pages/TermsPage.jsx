import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Acceptance of Terms</h2>
            <p>
              By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree,
              do not use the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">The Service</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates
              business roadmaps, strategy guidance, and readiness checklists. Free, Pro, Elite, and
              Founders tiers offer different levels of access described on the Pricing page.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not
              guarantee income, business success, funding approval, loan approval, or credit repair
              results. Outcomes depend on your individual effort, market conditions, and factors
              outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Account Responsibilities</h2>
            <p>
              You are responsible for the accuracy of information you submit and for maintaining the
              confidentiality of your account credentials.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Payments & Subscriptions</h2>
            <p>
              Paid plans (Pro, Elite, Founders) are billed as described at checkout. Founders pricing
              reflects limited-availability early adopter terms and is subject to the specific offer
              presented at time of purchase.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Limitation of Liability</h2>
            <p>
              PEN2PRO is provided "as is." To the fullest extent permitted by law, PEN2PRO and its
              founders are not liable for indirect, incidental, or consequential damages arising from
              use of the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of PEN2PRO after changes means you accept the updated Terms.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
