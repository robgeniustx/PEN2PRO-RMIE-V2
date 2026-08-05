import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO is an education, strategy, and organization tool. It is not a law firm, credit
            repair organization, financial institution, or lender, and nothing on the platform is
            legal, tax, credit, or financial advice.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Results Are Not Guaranteed</h2>
            <p>
              PEN2PRO does not guarantee income, business success, credit repair results, funding
              approval, or loan approval. Roadmaps, checklists, and strategy output are generated
              based on the information you provide and general best practices — they are a
              starting point, not a promise.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Credit &amp; Funding Content</h2>
            <p>
              Credit-building and funding-readiness content is educational. Always verify
              requirements directly with lenders, banks, and credit bureaus, and consult a
              licensed professional before making financial decisions.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Affiliate Links</h2>
            <p>
              Some pages link to third-party services (LLC formation, banking, bookkeeping,
              funding partners, etc.). PEN2PRO may earn a commission from these links. We only
              recommend services we believe are useful, but we don't control their pricing,
              terms, or outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Use At Your Own Judgment</h2>
            <p>
              You are responsible for the decisions you make about your business, credit, and
              finances. PEN2PRO provides tools and structure — you provide the execution.
            </p>
          </div>
        </div>
        <Link to="/" className="mt-10 inline-block btn-outline px-6 py-3 text-sm font-bold">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
