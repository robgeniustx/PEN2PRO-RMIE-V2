import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-6 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              By accessing or using PEN2PRO, you agree to these Terms of Service. PEN2PRO provides AI-generated
              business roadmaps, strategy tools, and educational content through its Rapid Monetization
              Intelligence Engine (RMIE). PEN2PRO is a planning and strategy tool — it is not a law firm,
              accounting firm, credit repair organization, or lender.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Accounts</h2>
            <p>
              You are responsible for the accuracy of the information you submit and for keeping your account
              credentials secure. You must be at least 18 years old to create an account.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Plans and billing</h2>
            <p>
              Free, Pro, Elite, and Founders plans are described on our{" "}
              <Link to="/pricing" className="text-[#1E88E5] hover:underline">Pricing page</Link>. Paid plans renew
              automatically until canceled. Founders/lifetime offers are subject to availability and the terms
              presented at time of purchase.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">No guarantee of results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Outputs are strategic guidance based on the information you provide and general
              business knowledge — see our <Link to="/disclaimer" className="text-[#1E88E5] hover:underline">Disclaimer</Link> for full detail.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Acceptable use</h2>
            <p>
              You agree not to misuse the platform, attempt to reverse-engineer its systems, or use it for
              unlawful purposes.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you
              accept the updated terms.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
