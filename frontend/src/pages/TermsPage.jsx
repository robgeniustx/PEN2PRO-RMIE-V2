import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display mb-6 text-4xl font-black text-white">Terms of Service</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps
              users turn ideas, skills, and lived experience into business roadmaps, strategy plans, and
              launch guidance. By using PEN2PRO, you agree to use the platform for lawful purposes only.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Plans & Billing</h2>
            <p>
              PEN2PRO offers a Free roadmap and paid Pro, Elite, and Founders tiers. Paid tiers are billed
              according to the plan selected at checkout. You may cancel a recurring subscription at any
              time; access continues through the end of the current billing period.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. PEN2PRO does not
              guarantee income, business success, credit repair results, funding approval, or loan
              approval. Outcomes depend on your individual effort, market conditions, and factors outside
              our control.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your Content</h2>
            <p>
              You retain ownership of the business ideas and content you submit. You grant PEN2PRO a
              limited license to process that content in order to generate roadmaps, blueprints, and
              related outputs on your behalf.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt service, or use PEN2PRO to submit
              unlawful, fraudulent, or harmful content.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of PEN2PRO after changes take
              effect constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
