import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Disclaimer
        </h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools. It
            does not guarantee credit repair results, funding approval, loan approval,
            business formation outcomes, or business success.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Not financial, legal, or credit advice</h2>
          <p>
            Roadmap output, funding readiness checklists, and credit-building guidance
            are for informational and planning purposes only. They are not a substitute
            for advice from a licensed attorney, accountant, credit counselor, or
            financial advisor. Consult a qualified professional before making legal,
            financial, or credit decisions.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">No guaranteed outcomes</h2>
          <p>
            Every business, credit profile, and funding situation is different. Past
            results — including the founder's own story — are not a promise of future
            results. Your outcomes depend on your effort, market conditions, and factors
            outside PEN2PRO's control.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Third-party resources</h2>
          <p>
            Affiliate links to LLC formation, banking, credit, funding, and other
            partners are provided for convenience. PEN2PRO may earn a commission from
            these partners. We do not control and are not responsible for third-party
            products, pricing, or services.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
