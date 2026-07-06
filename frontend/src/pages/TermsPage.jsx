import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">Last updated: 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p className="text-sm leading-7 text-slate-400">
            PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources (the "RMIE
            engine" and related tools). By using PEN2PRO you agree to use the platform lawfully, provide accurate
            information, and not attempt to disrupt, reverse-engineer, or misuse the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Plans & Billing</h2>
          <p className="text-sm leading-7 text-slate-400">
            Free, Pro, Elite, and Founders plans are described on the{" "}
            <a href="/pricing" className="text-[#1E88E5] hover:underline">pricing page</a>. Paid subscriptions renew
            automatically until cancelled. Founders/lifetime offers are limited-availability and priced as described
            at time of purchase. Prices and features may change for future customers but not for active
            subscriptions without notice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantees</h2>
          <p className="text-sm leading-7 text-slate-400">
            PEN2PRO provides strategy, structure, and education — not a guarantee of income, funding approval, loan
            approval, credit outcomes, or business success. Results depend on your effort, market conditions, and
            factors outside our control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Intellectual Property</h2>
          <p className="text-sm leading-7 text-slate-400">
            The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps generated
            for your account are yours to use for your own business purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Limitation of Liability</h2>
          <p className="text-sm leading-7 text-slate-400">
            PEN2PRO is provided "as is." To the fullest extent permitted by law, PEN2PRO is not liable for indirect,
            incidental, or consequential damages arising from use of the platform or reliance on its output.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
