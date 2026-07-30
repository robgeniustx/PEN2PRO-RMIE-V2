import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            These Terms govern your use of PEN2PRO, the AI-powered Rapid Monetization Intelligence
            Engine (RMIE) that helps people turn ideas, skills, and lived experience into business
            roadmaps. By creating an account, generating a roadmap, joining the waitlist, or
            subscribing to Pro, Elite, or Founders, you agree to these Terms.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">1. The Service</h2>
          <p>
            PEN2PRO provides AI-generated business roadmaps, strategy tools, funding and credit
            readiness checklists, branding direction, and execution support. Free, Pro, Elite, and
            Founders tiers unlock different levels of access, as described on the Pricing page.
            Feature availability may change as the platform evolves.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">2. Accounts</h2>
          <p>
            You are responsible for the accuracy of the information you provide and for keeping
            your login credentials secure. You must be at least 18 years old to create an account
            or subscribe to a paid plan.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">3. Subscriptions &amp; Billing</h2>
          <p>
            Pro and Elite are billed on a recurring basis through our payment processor (Stripe)
            until canceled. Founders access is offered as a limited, early-adopter tier under the
            terms presented at checkout. You can cancel a recurring subscription at any time; access
            continues through the end of the paid period.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">4. No Guarantee of Outcomes</h2>
          <p>
            PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
            credit repair results. See the Disclaimer page for full detail. Roadmaps and strategy
            output are planning tools, not promises.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">5. Acceptable Use</h2>
          <p>
            You agree not to misuse the platform — including attempting to reverse engineer the AI
            engine, submit unlawful content, or resell PEN2PRO output as your own software product
            without permission.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">6. Termination</h2>
          <p>
            We may suspend or terminate accounts that violate these Terms. You may close your
            account at any time by contacting support.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">7. Changes</h2>
          <p>
            We may update these Terms as PEN2PRO grows. Continued use of the platform after an
            update means you accept the revised Terms.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
