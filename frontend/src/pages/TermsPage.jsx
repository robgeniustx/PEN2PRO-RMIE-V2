import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">Terms of Service</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            By using PEN2PRO, you agree to the terms below. If you do not agree, please do not use the
            platform.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">The Platform</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates
              business roadmaps, strategy, and readiness tools based on the information you provide. Outputs
              are guidance, not professional legal, financial, tax, or credit advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Accounts &amp; Plans</h2>
            <p>
              Free, Pro, Elite, and Founders access different levels of platform features. You are
              responsible for keeping your account credentials secure and for activity under your account.
              Subscription tiers may change as the platform evolves; existing Founders pricing is honored per
              the terms presented at signup.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or
              business success. Results depend on your effort, market conditions, and factors outside our
              control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means
              you accept the updated terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
