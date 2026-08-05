import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            By using PEN2PRO, you agree to these terms. If you don't agree, please don't use the
            platform.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">The Service</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
              resources (RMIE — Rapid Monetization Intelligence Engine). Free, Pro, Elite, and
              Founders tiers unlock different levels of depth and support.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, credit repair
              results, or business success. Outcomes depend on individual effort, market
              conditions, and factors outside our control.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Your Responsibilities</h2>
            <p>
              You're responsible for the accuracy of the information you provide, for complying
              with applicable law when launching or operating your business, and for seeking
              licensed legal, tax, or financial advice where appropriate.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Billing</h2>
            <p>
              Pro, Elite, and Founders access is billed as described at checkout. You can cancel
              a recurring plan at any time; Founders access is a one-time lifetime offer while
              available.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Changes</h2>
            <p>We may update these terms as the platform evolves. Continued use means you accept the current version.</p>
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
