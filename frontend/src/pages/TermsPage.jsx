import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 15, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Acceptance of Terms</h2>
            <p>
              By creating an account, joining the waitlist, or purchasing a Pro, Elite, or Founders plan on
              PEN2PRO, you agree to these Terms of Service.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">The Service</h2>
            <p>
              PEN2PRO's RMIE (Rapid Monetization Intelligence Engine) generates business roadmaps, strategy
              guidance, and readiness checklists based on the information you provide. Output is
              AI-assisted educational and strategic guidance — not legal, financial, tax, or credit repair
              advice.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Subscriptions & Billing</h2>
            <p>
              Pro and Elite plans are billed on a recurring monthly basis; Founders access is billed as
              described at checkout. Subscriptions can be cancelled at any time and will remain active
              through the end of the current billing period. All payments are processed by Stripe.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Outcomes depend on your individual effort, market conditions, and
              factors outside PEN2PRO's control.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Account Responsibilities</h2>
            <p>
              You are responsible for the accuracy of the information you submit and for maintaining the
              confidentiality of your account credentials.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
            <p>
              We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take
              effect constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
