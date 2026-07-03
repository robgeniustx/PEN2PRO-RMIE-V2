import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            By using PEN2PRO, you agree to these terms. If you do not agree, please do not use the platform.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">The Service</h2>
          <p>
            PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates
            business roadmaps, strategy guidance, and readiness checklists based on the information you
            provide. Free, Pro, Elite, and Founders tiers offer different levels of access and support.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">No Guarantee of Results</h2>
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
            income, business success, credit repair outcomes, funding approval, or loan approval. Results
            depend on your individual effort, market conditions, and factors outside our control.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Subscriptions & Billing</h2>
          <p>
            Paid plans (Pro, Elite, Founders) are billed through Stripe on the cadence described at checkout.
            You may cancel a subscription at any time; access continues through the end of the paid period.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Acceptable Use</h2>
          <p>
            You agree not to misuse the platform, attempt to access accounts or data that are not yours, or
            use PEN2PRO for unlawful purposes.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Changes</h2>
          <p>
            We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means
            you accept the updated terms.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Contact</h2>
          <p>Questions about these terms can be directed to the PEN2PRO team through the contact options on this site.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
