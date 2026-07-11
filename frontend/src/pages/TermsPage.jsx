import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-slate-400 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              By using PEN2PRO, you agree to provide accurate information and use the platform's
              roadmaps, strategy tools, and resources for lawful business purposes only.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not
              guarantee income, funding approval, loan approval, credit repair outcomes, or
              business success. Results depend on individual effort and market conditions.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Subscriptions &amp; Billing</h2>
            <p>
              Pro, Elite, and Founders plans are billed according to the terms shown at checkout.
              You may cancel a recurring subscription at any time; access continues through the
              end of the paid billing period.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              Roadmaps and content generated for your account are yours to use for your business.
              The PEN2PRO platform, brand, and underlying technology remain the property of
              PEN2PRO.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold">Back Home</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold">Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
