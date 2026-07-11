import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Disclaimer</h1>
          <p className="text-slate-400">Please read before acting on any PEN2PRO roadmap or guidance.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guaranteed Results</h2>
          <p className="text-sm text-slate-400 leading-7">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business success,
            or income of any kind. Every roadmap, checklist, and strategy is an educational and organizational
            tool. Outcomes depend on your individual effort, market conditions, timing, and factors outside our
            control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Not Legal, Tax, or Financial Advice</h2>
          <p className="text-sm text-slate-400 leading-7">
            Content on PEN2PRO — including business formation checklists, credit-building steps, funding readiness
            guidance, and branding direction — is provided for general educational purposes. It is not a
            substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.
            Consult a qualified professional before making legal, tax, or financial decisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Credit Repair Disclaimer</h2>
          <p className="text-sm text-slate-400 leading-7">
            PEN2PRO is not a credit repair organization and does not perform disputes on your behalf. Credit
            Repair page content is strategy and education only — utilization guidance, dispute-readiness steps,
            and documentation checklists — to help you prepare to work with the credit bureaus or a licensed
            credit repair professional.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Funding & Affiliate Disclaimer</h2>
          <p className="text-sm text-slate-400 leading-7">
            Funding readiness content helps you prepare documentation and understand lender expectations — it is
            not a loan offer or approval. Some resource links on Affiliate, Funding, and Credit Repair pages are
            affiliate links; PEN2PRO may earn a commission if you sign up through them, at no added cost to you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Your Responsibility</h2>
          <p className="text-sm text-slate-400 leading-7">
            You are responsible for verifying any information before relying on it, and for the business, legal,
            and financial decisions you make. Use of PEN2PRO is at your own discretion and risk.
          </p>
        </section>

        <div className="pt-4 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Terms of Service</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
