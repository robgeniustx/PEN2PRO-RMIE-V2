import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            By using PEN2PRO, you agree to these terms. If you do not agree, please do not use
            the platform.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">The Platform</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that provides
              business roadmaps, strategy content, and readiness checklists. It is an educational
              and planning tool — not a substitute for legal, tax, financial, or credit advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Accounts &amp; Plans</h2>
            <p>
              Free, Pro, Elite, and Founders tiers unlock different levels of roadmap detail and
              support. Features and pricing may change as the platform evolves; Founders members
              retain the access terms locked in at signup.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it to
              generate content that is unlawful, fraudulent, or infringing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, funding approval, loan approval, credit score
              improvement, or business success. Outcomes depend on your effort, market conditions,
              and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO grows. Continued use of the platform after an
              update means you accept the revised terms.
            </p>
          </section>

          <p className="text-sm text-slate-600 pt-4 border-t border-[#1A2D50]">
            Last updated: 2026.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
