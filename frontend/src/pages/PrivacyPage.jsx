import { Link } from "react-router-dom";
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
            What we collect, why we collect it, and how we keep it safe.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
          <p className="text-sm text-slate-400 leading-6">
            When you use PEN2PRO — including the free roadmap tool, Builder, Accelerator, waitlist, or account
            sign-in — we collect information you provide directly, such as your name, email address, phone number
            (optional), business idea details, and interest level. We also collect basic usage data (pages visited,
            roadmap progress) to improve the product.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Your Information</h2>
          <p className="text-sm text-slate-400 leading-6">
            We use your information to generate your business roadmap, communicate with you about your account or
            waitlist status, improve PEN2PRO's tools and content, and — if you opt in — send updates about Pro,
            Elite, and Legacy Founder access. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Payment Information</h2>
          <p className="text-sm text-slate-400 leading-6">
            Paid plans are processed through Stripe. PEN2PRO does not store your full card number. Stripe's own
            privacy practices govern data handled directly by their checkout system.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Data Retention & Your Choices</h2>
          <p className="text-sm text-slate-400 leading-6">
            You can request deletion of your account and personal data at any time by contacting us. Waitlist
            submissions are retained so our team can follow up on your interest, and you may ask to be removed at
            any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Third-Party Links</h2>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO links to third-party affiliate partners (LLC formation, business banking, credit, funding, and
            other tools). Once you leave PEN2PRO, that partner's own privacy policy applies.
          </p>
        </section>

        <div className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            Questions about this policy? Contact us through the waitlist form or your account dashboard.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link to="/waitlist" className="btn-gold px-8 py-3 text-sm font-bold">Join the Waitlist — Free</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
