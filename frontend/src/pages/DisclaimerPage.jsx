import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guaranteed Results</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, or business
              success. Results depend on individual effort, execution, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Not Financial, Legal, or Credit Advice</h2>
            <p>
              PEN2PRO does not guarantee credit repair results. Content on this platform — including
              roadmaps, funding readiness checklists, and credit-building steps — is provided for
              education, strategy, organization, and readiness purposes only. It is not a substitute
              for advice from a licensed attorney, accountant, credit counselor, or financial
              advisor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Responsibility</h2>
            <p>
              Any business, financial, or credit decision you make based on PEN2PRO content is
              your own responsibility. We encourage you to verify important decisions with a
              qualified professional before acting.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
