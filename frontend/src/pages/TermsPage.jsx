import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            These Terms govern your use of PEN2PRO. By creating an account, generating a roadmap, or using
            any part of the platform, you agree to these Terms.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">The Service</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business
              roadmaps, strategy guidance, and execution tools. Output is generated based on the information
              you provide and general business knowledge — it is educational and strategic in nature, not
              legal, financial, tax, or credit advice.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, credit outcomes, or business success.
              Results depend on your effort, market conditions, and factors outside our control.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Accounts &amp; Plans</h2>
            <p>
              Free, Pro, Elite, and Founders plans unlock different levels of access as described on the
              Pricing page. Subscription plans renew automatically unless canceled. Founders/lifetime offers
              are limited and subject to availability.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful
              purposes.
            </p>
          </div>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
