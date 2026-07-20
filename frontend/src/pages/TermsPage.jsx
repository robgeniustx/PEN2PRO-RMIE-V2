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
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that
              generates business roadmaps, strategy guidance, and readiness checklists. By using the
              platform you agree to provide accurate information and use the tools for lawful business
              purposes.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Plans and billing</h2>
            <p>
              Pro, Elite, and Founders plans are billed through Stripe on the cadence shown at checkout.
              You can cancel a recurring subscription at any time; access continues through the end of
              the current billing period. Founders pricing, where offered, is locked in for the lifetime
              of an active account under the terms shown at purchase.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No guaranteed outcomes</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. It does not
              guarantee income, funding approval, loan approval, credit repair results, or business
              success. Outcomes depend on your effort, market conditions, and factors outside our
              control. See our full disclaimer for details.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Account responsibility</h2>
            <p>
              You are responsible for the accuracy of information you submit and for keeping your account
              credentials secure. PEN2PRO reserves the right to suspend accounts used for fraudulent or
              abusive activity.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">View Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
