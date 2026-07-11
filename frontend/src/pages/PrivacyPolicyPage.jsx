import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
          <p className="text-sm text-slate-400 leading-7">
            When you use PEN2PRO, we collect information you provide directly, such as your name, email address,
            phone number, business idea details, and roadmap intake answers. We also collect basic usage data
            (pages visited, features used, and referral source) to improve the platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Your Information</h2>
          <p className="text-sm text-slate-400 leading-7">
            We use your information to generate your business roadmap, manage your account, communicate with you
            about PEN2PRO plans and updates, process payments for Pro, Elite, and Founders tiers, and improve our
            AI-driven strategy tools. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Data Sharing</h2>
          <p className="text-sm text-slate-400 leading-7">
            We share data only with service providers necessary to operate PEN2PRO — such as payment processors,
            hosting providers, and email delivery services — and only to the extent required to provide our
            services. Affiliate partners linked from pages like Funding and Credit Repair only receive information
            you choose to submit directly to them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Data Security</h2>
          <p className="text-sm text-slate-400 leading-7">
            We use reasonable administrative and technical safeguards to protect your information. No system is
            100% secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
          <p className="text-sm text-slate-400 leading-7">
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us. You can also unsubscribe from marketing emails using the link included in those emails.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
          <p className="text-sm text-slate-400 leading-7">
            Questions about this policy can be directed through the contact options on our Waitlist and About pages.
          </p>
        </section>

        <div className="pt-4 flex flex-col gap-3 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-2.5 text-center text-sm font-bold">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
