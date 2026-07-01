import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mb-8 text-3xl font-black text-white md:text-4xl">Disclaimer</h1>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No Guaranteed Outcomes</h2>
            <p>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not a
              promise of any specific financial or business outcome.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Not Legal, Tax, or Financial Advice</h2>
            <p>
              Roadmap output, funding readiness checklists, and credit readiness content are for educational and
              planning purposes only. They are not a substitute for advice from a licensed attorney, accountant,
              or financial advisor.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you sign up with partners linked from the Affiliate, Funding, or
              Credit Repair pages (such as LLC formation, business banking, or funding providers). These
              relationships do not change the price you pay and do not influence the honesty of our guidance.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Individual Results Vary</h2>
            <p>
              Every business, market, and financial situation is different. Effort, timing, capital, and factors
              outside PEN2PRO's control all affect results.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
