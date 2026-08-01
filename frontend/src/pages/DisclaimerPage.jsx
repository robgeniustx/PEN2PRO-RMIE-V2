import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Disclaimer</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <p>
              PEN2PRO is an education and strategy platform. It is not a law firm, accounting firm, credit repair
              organization, or lender, and nothing on this platform is legal, tax, credit, or financial advice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guaranteed Outcomes</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Roadmaps, checklists, and strategy output are educational and organizational tools.
              Results depend on your effort, market conditions, and circumstances outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Credit & Funding</h2>
            <p>
              Funding readiness and credit-building content is provided for educational purposes only. Always
              verify requirements directly with lenders, banks, and financial institutions before acting.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Links</h2>
            <p>
              PEN2PRO may earn a commission from third-party tools recommended on this platform (LLC formation,
              banking, credit, funding, and other partners). Recommendations are based on genuine usefulness to
              builders, not payment alone.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold inline-block">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
