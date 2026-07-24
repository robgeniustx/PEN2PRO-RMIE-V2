import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-slate-400 mb-8">
          Last updated: {new Date().getFullYear()}. By using PEN2PRO, you agree to the terms below.
        </p>

        <div className="space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources
              through its Free, Pro, Elite, and Founders tiers. You agree to use the platform for lawful
              purposes and to provide accurate information when creating an account or roadmap.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Roadmaps, strategies, and checklists are educational tools —
              outcomes depend on your effort, market conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Subscriptions & Billing</h2>
            <p>
              Pro, Elite, and Founders access may be offered as paid subscriptions or one-time purchases.
              Pricing, billing terms, and cancellation policies will be presented at checkout. Where
              subscriptions are not yet live, joining the waitlist reserves your interest but does not
              charge you.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              The PEN2PRO name, brand, RMIE methodology, and platform content are the property of
              PEN2PRO. Roadmaps generated for your account are yours to use for your own business.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after changes
              means you accept the updated terms.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
