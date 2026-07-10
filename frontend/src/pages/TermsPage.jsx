import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            These Terms of Service govern your use of PEN2PRO, an AI-powered Rapid Monetization
            Intelligence Engine (RMIE) platform. By using PEN2PRO, you agree to these terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources.
              You must provide accurate information when using the platform and are responsible for
              decisions you make based on PEN2PRO's output.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Plans & Payments</h2>
            <p>
              Free, Pro, Elite, and Founders plans are described on our{" "}
              <a href="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</a>. Paid plans are
              billed through our payment processor. You may cancel a subscription at any time; access
              continues through the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantees</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
              income, business success, funding approval, loan approval, or credit repair results. Outcomes
              depend on individual effort, market conditions, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to access accounts or data that are not yours,
              or use PEN2PRO for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes
              means you accept the updated terms.
            </p>
          </section>

          <p className="text-sm text-slate-600">
            See also our{" "}
            <a href="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</a> and{" "}
            <a href="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
