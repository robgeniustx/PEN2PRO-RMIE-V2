import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Disclaimer
        </h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p className="text-lg text-white font-semibold">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or
            business success.
          </p>

          <p>
            The PEN2PRO RMIE (Rapid Monetization Intelligence Engine) platform provides education,
            strategy, organization, and readiness tools — not guaranteed outcomes. Every roadmap,
            checklist, and recommendation is generated to help you plan and execute, but your
            results depend on your own effort, resources, timing, and market conditions.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Not Financial, Legal, or Credit Advice</h2>
            <p>
              Nothing on PEN2PRO constitutes financial, legal, tax, or credit-repair advice.
              Funding readiness checklists, credit-building steps, and business formation
              guidance are educational starting points. Consult a licensed attorney, accountant,
              or financial advisor before making major financial or legal decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">No Income or Success Guarantee</h2>
            <p>
              Any income examples, growth projections, or success stories referenced on the
              platform are illustrative, not typical outcomes. Building a business takes
              consistent work — PEN2PRO gives you structure and strategy, not a shortcut.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Third-Party Resources</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners for services like LLC formation,
              business banking, funding, or credit repair. We are not responsible for the
              outcomes, terms, or performance of third-party providers.
            </p>
          </section>

          <p className="text-sm text-slate-600 pt-4 border-t border-[#1A2D50]">
            Questions about this disclaimer? Reach out through the contact details on our{" "}
            <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
