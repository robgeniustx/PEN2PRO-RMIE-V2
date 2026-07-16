import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps
              users turn ideas, skills, and lived experience into business roadmaps, strategy
              plans, and launch guidance. By using the Starter roadmap, Builder, Accelerator,
              Pro, Elite, or Founders tools, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Accounts & tiers</h2>
            <p>
              Free, Pro, Elite, and Founders access unlock different levels of roadmap depth,
              tracking, and support as described on the Pricing page. Subscription tiers renew
              on the billing cycle you select at checkout and can be managed or canceled from
              your account.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No guarantee of results</h2>
            <p>
              PEN2PRO provides education, strategy, structure, and readiness tools. It does not
              guarantee income, business success, credit repair outcomes, loan approval, or
              funding approval. Outcomes depend on your own effort, market conditions, and factors
              outside our control.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Acceptable use</h2>
            <p>
              You agree not to misuse the platform — including attempting to disrupt the service,
              reverse-engineer the AI systems, or use generated roadmaps for unlawful purposes.
              Content you generate through PEN2PRO is yours to use for your own business.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Third-party links</h2>
            <p>
              Pages such as Funding, Credit Repair, and Affiliate link to independent third-party
              service providers. PEN2PRO is not responsible for the services, terms, or outcomes
              of those third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to these terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after
              changes are posted means you accept the updated terms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
