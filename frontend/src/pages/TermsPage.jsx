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
        <p className="text-slate-400 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through
              our Free, Pro, Elite, and Founders tiers. By using the platform, you agree to use it lawfully and
              not to misuse, resell, or scrape the service without permission.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Roadmaps, strategies, and readiness checklists are educational tools — outcomes
              depend on individual effort, market conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Subscriptions & Billing</h2>
            <p>
              Pro and Elite are recurring subscriptions billed through Stripe. Founders access is a one-time
              lifetime offer while spots remain available. You can cancel a recurring subscription at any time;
              access continues through the end of the current billing period.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              Roadmaps generated for your account are yours to use for your business. PEN2PRO's software,
              branding, and RMIE methodology remain the property of PEN2PRO.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p>We may update these terms as PEN2PRO evolves. Continued use of the platform means you accept the current terms.</p>
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
