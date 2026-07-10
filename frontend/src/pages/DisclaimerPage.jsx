import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) built to give you
            structure, strategy, and execution guidance for turning ideas into income. Please read this
            disclaimer carefully.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guaranteed Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Every roadmap, checklist, and strategy is a starting point — real-world
              outcomes depend on your effort, market conditions, execution, and factors outside PEN2PRO's
              control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Not Legal, Financial, or Credit Repair Advice</h2>
            <p>
              Content on PEN2PRO — including business formation checklists, funding readiness guidance, and
              credit-building steps — is for educational and organizational purposes only. It is not a
              substitute for advice from a licensed attorney, accountant, credit counselor, or financial
              advisor. Consult a qualified professional before making legal, tax, or financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission when you use links to partner services (LLC formation, business
              banking, funding, credit tools, and similar resources). We only recommend tools and partners
              we believe can genuinely help you build. These relationships never influence the strategy
              guidance PEN2PRO gives you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">AI-Generated Content</h2>
            <p>
              Roadmaps, plans, and recommendations are generated with the help of artificial intelligence.
              While we work to make outputs specific and actionable, you should verify critical details
              (legal requirements, pricing, regulations) before acting on them.
            </p>
          </section>

          <p className="text-sm text-slate-600">
            By using PEN2PRO, you acknowledge and accept this disclaimer along with our{" "}
            <a href="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</a> and{" "}
            <a href="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
