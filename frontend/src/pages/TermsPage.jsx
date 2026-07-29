import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            By using PEN2PRO, you agree to use the platform for lawful business planning purposes
            only. Roadmaps, strategies, checklists, and AI-generated output are provided for
            educational and planning purposes and do not constitute legal, tax, financial, or
            investment advice.
          </p>
          <p>
            Free, Pro, Elite, and Founders plans each unlock different levels of access as described
            on the Pricing page. Subscriptions, where active, renew automatically until canceled.
            Founders/lifetime access terms are locked at the price and tier active at time of
            purchase.
          </p>
          <p>
            You are responsible for the accuracy of the information you submit during roadmap
            intake. PEN2PRO is not liable for business outcomes, funding decisions, credit results,
            or third-party affiliate services linked from the platform.
          </p>
          <p>
            We may update these terms as the platform evolves. Continued use after changes are
            posted constitutes acceptance of the updated terms.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/pricing" className="btn-gold px-6 py-3 text-sm font-bold text-center">View Pricing</Link>
          <Link to="/waitlist" className="btn-outline px-6 py-3 text-sm font-bold text-center">Join the Waitlist</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
