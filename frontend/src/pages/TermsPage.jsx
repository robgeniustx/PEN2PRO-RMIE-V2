import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources
              through the Rapid Monetization Intelligence Engine (RMIE). By creating an account or using the
              platform, you agree to use it lawfully and not misuse, resell, or scrape the service.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Plans & Billing</h2>
            <p>
              Free, Pro, Elite, and Founders plans are billed as described on the Pricing page. Subscriptions
              renew automatically until canceled. You can cancel or change your plan at any time from your
              dashboard settings.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
              income, funding approval, loan approval, credit repair results, or business success. Outcomes
              depend on individual effort, market conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              The PEN2PRO platform, brand, and AI-generated frameworks are owned by PEN2PRO. Roadmaps and
              content generated for your account are yours to use for your own business.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after changes take
              effect means you accept the updated terms.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
          <Link to="/pricing" className="btn-gold px-6 py-3 text-sm font-bold text-center">View Pricing</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
