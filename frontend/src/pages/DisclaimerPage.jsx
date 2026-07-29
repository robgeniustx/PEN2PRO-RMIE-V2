import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Disclaimer</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Educational Purposes Only</h2>
            <p>
              PEN2PRO provides business roadmaps, strategy guidance, credit and funding readiness tools, and
              educational content. Nothing on PEN2PRO constitutes legal, financial, tax, credit repair, or
              investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
              The platform provides education, strategy, organization, and readiness tools — the outcomes depend on
              your individual circumstances, effort, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Consult a Professional</h2>
            <p>
              Always consult a licensed attorney, accountant, financial advisor, or credit professional before
              making legal, tax, credit, or funding decisions for your business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you use recommended partners for LLC formation, business banking,
              credit monitoring, funding, or other services. Recommendations are based on usefulness to founders,
              not solely on affiliate relationships.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
