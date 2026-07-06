import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">What We Collect</h2>
          <p className="text-sm leading-7 text-slate-400">
            When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number,
            business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) to
            improve the platform. If you complete a checkout, payment details are processed by our payment provider
            (Stripe) and are never stored on PEN2PRO servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Use It</h2>
          <p className="text-sm leading-7 text-slate-400">
            We use your information to generate your roadmap, respond to waitlist and support requests, send account
            and product updates, and improve PEN2PRO's tools. We do not sell your personal information to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Sharing</h2>
          <p className="text-sm leading-7 text-slate-400">
            We share data only with service providers who help us operate PEN2PRO (payment processing, email
            delivery, hosting) and only to the extent needed to provide the service. Affiliate/partner links on
            PEN2PRO are operated by third parties with their own privacy practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
          <p className="text-sm leading-7 text-slate-400">
            You can request a copy of your data, ask us to correct it, or request deletion of your account and
            associated data at any time by contacting us. Roadmap and account data is stored only as long as needed
            to provide the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
          <p className="text-sm leading-7 text-slate-400">
            Questions about this policy? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#1E88E5] hover:underline">waitlist form</Link> or your account
            support channel and we'll get back to you.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
