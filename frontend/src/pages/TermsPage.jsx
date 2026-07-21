import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            These Terms of Service govern your use of PEN2PRO, the AI-powered RMIE (Rapid
            Monetization Intelligence Engine) platform. By using PEN2PRO, you agree to these
            terms.
          </p>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">The Service</h2>
            <p>
              PEN2PRO provides business roadmaps, strategy guidance, and readiness tools
              generated with the help of AI. Free, Pro, Elite, and Founders tiers unlock
              different levels of access and support, described on our Pricing page.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">No Guarantees</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not
              guarantee income, business success, funding approval, loan approval, or credit
              repair results. Outcomes depend on your effort, market conditions, and factors
              outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Your Responsibilities</h2>
            <p>
              You agree to provide accurate information, use the platform lawfully, and not
              misuse, resell, or attempt to reverse-engineer the service.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Payments & Upgrades</h2>
            <p>
              Pro, Elite, and Founders access is billed as described at checkout. Founders access
              is offered at limited availability and pricing may change for future members.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after
              changes means you accept the updated terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
