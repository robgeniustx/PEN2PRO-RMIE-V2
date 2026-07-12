import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-slate-400 mb-8">
          Last updated: {new Date().getFullYear()}. By using PEN2PRO you agree to these terms.
          Please read them carefully.
        </p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Use of the Platform</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and readiness
              checklists through the RMIE (Rapid Monetization Intelligence Engine). Content is
              provided for informational and educational purposes and does not constitute legal,
              tax, financial, or investment advice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Account Responsibilities</h2>
            <p>
              You are responsible for the accuracy of information you provide and for keeping
              your account credentials secure. You agree not to misuse the platform, attempt to
              disrupt service, or use it for unlawful purposes.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Plans &amp; Billing</h2>
            <p>
              Free, Pro, Elite, and Founders tiers each unlock different levels of access as
              described on the Pricing page. Paid plans are billed on a recurring basis unless
              otherwise stated and can be canceled at any time from your account settings.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan
              approval, or credit repair outcomes. Results depend on individual effort, market
              conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
