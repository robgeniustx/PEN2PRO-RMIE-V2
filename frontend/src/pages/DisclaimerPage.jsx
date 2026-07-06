import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white mb-2">Disclaimer</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <p>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or
              business success. The platform provides education, strategy, organization, and readiness
              tools — not financial, legal, or credit repair services.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Not Financial or Legal Advice</h2>
            <p>
              Content on PEN2PRO, including AI-generated roadmaps, business plans, and checklists, is
              for informational and educational purposes only. It is not a substitute for advice from a
              licensed attorney, accountant, credit counselor, or financial advisor.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Credit & Funding Readiness</h2>
            <p>
              Funding readiness scores and credit-building checklists reflect general best practices.
              They do not guarantee approval from any lender, bank, or vendor. Individual results vary
              based on your credit history, business history, and lender-specific requirements.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Business Outcomes</h2>
            <p>
              Building a successful business requires consistent effort, market validation, and factors
              outside PEN2PRO's control. Any earnings or outcome examples on this platform are
              illustrative, not promises of your own results.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you use partner links for LLC formation, business
              banking, credit, funding, or other tools. These are provided as convenience resources and
              do not constitute an endorsement guarantee of outcome.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
