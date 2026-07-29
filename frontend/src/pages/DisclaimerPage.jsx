import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Disclaimer</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
            <p className="text-white font-semibold">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not a
              promise of outcome.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Not Financial, Legal, or Tax Advice</h2>
            <p>
              Nothing on PEN2PRO constitutes financial, legal, tax, or investment advice. Roadmaps, checklists,
              and strategy guidance are for informational and planning purposes only. Consult a licensed
              attorney, accountant, or financial professional before making binding business, credit, or
              funding decisions.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Credit &amp; Funding Readiness Tools</h2>
            <p>
              Our credit readiness and funding readiness checklists are organizational tools meant to help you
              prepare — they are not a service that repairs your credit, disputes items on your behalf, or
              guarantees approval by any lender, bank, or vendor.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Income &amp; Business Results</h2>
            <p>
              Any income, revenue, or growth figures referenced on PEN2PRO are illustrative or based on
              individual user effort and are not typical or guaranteed results. Your results will vary based on
              your market, effort, resources, and circumstances.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Third-Party Affiliate Resources</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners for services like LLC formation, business
              banking, funding, or credit resources. We may earn a commission from these partners. We do not
              control and are not responsible for the outcomes of services provided by third parties.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
