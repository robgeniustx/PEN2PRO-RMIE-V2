import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p className="text-sm leading-7 text-slate-400">
            PEN2PRO does not guarantee income, funding approval, loan approval, business credit results, personal
            credit repair outcomes, or business success. The platform provides education, strategy, organization,
            and readiness tools — the results you get depend on your own effort, resources, and market conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Not Financial, Legal, or Credit Repair Advice</h2>
          <p className="text-sm leading-7 text-slate-400">
            Content on PEN2PRO — including the RMIE roadmap, funding readiness checklist, and credit readiness
            guidance — is for informational and strategic planning purposes only. It is not a substitute for advice
            from a licensed attorney, accountant, credit counselor, or financial advisor. Consult a qualified
            professional before making legal, tax, or financial decisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Affiliate Relationships</h2>
          <p className="text-sm leading-7 text-slate-400">
            Some links on PEN2PRO (LLC formation, banking, credit, funding, domains, bookkeeping, payments, CRM, and
            insurance partners) are affiliate links. PEN2PRO may earn a commission if you sign up through these
            links, at no extra cost to you. We only recommend tools we believe in — commissions do not influence our
            recommendations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Your Responsibility</h2>
          <p className="text-sm leading-7 text-slate-400">
            You are responsible for verifying any third-party terms, pricing, and eligibility requirements before
            acting on them, and for complying with all applicable laws in your business.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
