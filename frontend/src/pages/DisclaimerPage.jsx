import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">
            Income & Results <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 space-y-10 text-slate-400 leading-7">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Education & Strategy, Not Guarantees</h2>
          <p>
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, income, or
            business success. The platform provides education, strategy, organization, and readiness
            tools — the roadmaps, checklists, and guidance are designed to help you plan and execute, but
            outcomes ultimately depend on your effort, market conditions, and factors outside our control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Funding & Credit</h2>
          <p>
            Content on our Funding Readiness and Credit Repair pages is informational. It is not financial,
            legal, or credit repair advice, and it does not replace consultation with a licensed
            professional where one is required. Lenders and creditors make independent approval decisions
            PEN2PRO does not control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Affiliate Relationships</h2>
          <p>
            PEN2PRO may earn a commission when you use certain partner links on our Affiliate page (for
            example, LLC formation, business banking, or bookkeeping tools). We only recommend tools we
            believe are useful to founders — recommendations are not a guarantee of any partner's results.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Individual Effort Matters</h2>
          <p>
            Two people can follow the same roadmap and get different results. PEN2PRO gives you structure,
            strategy, and execution support — the work of building the business is yours.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
