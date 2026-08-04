import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            These Terms of Service govern your use of PEN2PRO, an AI-powered RMIE (Rapid Monetization
            Intelligence Engine) platform. By using PEN2PRO, you agree to these terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">The Platform</h2>
            <p>
              PEN2PRO provides business roadmaps, strategy tools, funding and credit readiness
              guidance, branding direction, and related educational content across Free, Pro, Elite,
              and Founders tiers. Output is generated with the help of AI and should be reviewed using
              your own judgment before acting on it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Roadmaps, strategies, and checklists are educational tools —
              outcomes depend on your effort, market conditions, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Accounts and Payment</h2>
            <p>
              Paid tiers (Pro, Elite, Founders) are billed as described on the Pricing page at the time
              of purchase. You are responsible for maintaining accurate account information. Founders
              access is offered on a limited-availability basis as described on the Founders page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it for any
              unlawful purpose. We may suspend access for violations of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
