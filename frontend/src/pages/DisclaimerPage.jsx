import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Disclaimer</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools for
            entrepreneurs. It does not provide legal, tax, financial, or credit-repair services
            unless explicitly stated, and nothing on this platform should be treated as
            professional advice.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, credit repair results, loan
              approval, or funding approval. Every roadmap, strategy, and checklist is a
              starting point — outcomes depend on your market, effort, timing, and execution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Credit & Funding</h2>
            <p>
              Credit readiness and funding readiness tools are educational. They do not
              constitute credit repair services under the Credit Repair Organizations Act, and
              they do not guarantee any lender, vendor, or bank will approve you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may recommend or link to third-party partners (LLC formation, banking,
              credit, funding, domains, bookkeeping, payments, CRM, insurance). We may earn a
              commission from these partners. We do not control their services and are not
              responsible for outcomes from using them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Responsibility</h2>
            <p>
              You are responsible for your own business decisions, licensing, legal structure,
              and compliance. Consult a licensed attorney, accountant, or financial advisor for
              advice specific to your situation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
