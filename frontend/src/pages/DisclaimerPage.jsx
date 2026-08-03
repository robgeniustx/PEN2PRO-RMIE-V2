import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Education and Strategy, Not Guarantees</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business
              roadmaps, strategy guidance, credit and funding readiness checklists, and execution support.
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not
              financial, legal, tax, or credit repair services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Not Professional Advice</h2>
            <p>
              Nothing on PEN2PRO constitutes legal, tax, financial, or investment advice. For decisions involving
              business formation, contracts, taxes, credit disputes, or financing, consult a licensed attorney,
              accountant, or financial professional.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you use partner links for LLC formation, business banking,
              credit building, funding, or other services referenced on the Affiliate, Funding, and Credit
              Repair pages. We only recommend partners we believe can genuinely help — but you should evaluate
              any provider independently before signing up.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Individual Results Vary</h2>
            <p>
              Every founder's starting point, market, effort, and resources are different. Roadmap examples,
              income opportunities, and success stories referenced on this platform are illustrative and are not
              a promise of what you will achieve.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
