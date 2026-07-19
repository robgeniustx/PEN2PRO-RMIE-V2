import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            How PEN2PRO collects, uses, and protects your information.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl border border-[#1A2235] p-8 space-y-8" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-500">Last updated: 2026</p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p className="text-slate-400 leading-7">
              When you use PEN2PRO, we may collect information you provide directly — such as your name, email,
              phone number, business idea, and roadmap intake answers — as well as usage data like pages visited
              and features used, which helps us improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p className="text-slate-400 leading-7">
              We use your information to generate your business roadmap, manage your account, communicate with
              you about your plan and upgrades, respond to waitlist and support requests, and improve our
              products. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Sharing</h2>
            <p className="text-slate-400 leading-7">
              We may share limited data with service providers that help us operate PEN2PRO (such as payment
              processing, hosting, and email delivery), and with affiliate partners only when you choose to click
              through to their offers. These providers are only permitted to use your data to perform services
              for us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
            <p className="text-slate-400 leading-7">
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us. You may also unsubscribe from marketing emails using the link included in those
              messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p className="text-slate-400 leading-7">
              Questions about this policy can be directed to our support team through the contact options
              available on the PEN2PRO platform.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
