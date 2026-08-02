import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            These terms govern your use of PEN2PRO's RMIE (Rapid Monetization Intelligence Engine)
            platform, including the free roadmap tool, Pro, Elite, and Founders tiers. By using
            PEN2PRO, you agree to these terms.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">What PEN2PRO Provides</h2>
            <p>
              PEN2PRO generates business roadmaps, strategy guidance, funding and credit-readiness
              checklists, and related planning tools using AI. Outputs are educational and
              strategic in nature — they are not legal, tax, financial, or credit-repair advice,
              and they do not guarantee any business, funding, or income outcome.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Accounts &amp; Access</h2>
            <p>
              You're responsible for the accuracy of the information you provide and for keeping
              your account credentials secure. Free, Pro, Elite, and Founders tiers unlock
              different levels of access as described on the Pricing page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Payments &amp; Upgrades</h2>
            <p>
              Paid tiers are billed as described at checkout. You may cancel a recurring
              subscription at any time; access continues through the end of the paid period.
              Founders pricing, where offered, is limited and subject to availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform — including attempting to disrupt the service,
              scrape data without permission, or use PEN2PRO outputs for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, credit repair
              results, or business success. Results depend on individual effort, execution, and
              market conditions. See our{" "}
              <a href="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</a> for
              details.
            </p>
          </section>

          <p className="text-sm text-slate-600 pt-4 border-t border-[#1A2D50]">
            Questions about these terms? Reach out through the contact details on our{" "}
            <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
