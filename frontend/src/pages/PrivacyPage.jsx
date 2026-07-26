import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated: January 2026. This page explains what information PEN2PRO collects, how it's used, and the choices you have.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10 text-slate-300 leading-7">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
          <p>
            When you use PEN2PRO — including the free roadmap builder, waitlist, Pro/Elite/Founders checkout, and
            dashboard tools — we may collect information you provide directly, such as your name, email address,
            phone number, business idea details, and payment information (processed securely by Stripe; PEN2PRO
            never stores your full card number). We also collect basic usage data (pages visited, features used,
            referral source) to improve the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To generate your business roadmap, blueprint, and strategy output.</li>
            <li>To manage your account, subscription tier, and dashboard access.</li>
            <li>To communicate with you about your roadmap, waitlist status, or account.</li>
            <li>To improve PEN2PRO's tools, content, and AI output quality.</li>
            <li>To process payments securely through Stripe.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">What We Don't Do</h2>
          <p>
            We do not sell your personal information to third parties. We do not share your business idea or
            roadmap content outside of the systems required to generate and deliver it to you (including our AI
            provider used to build your roadmap).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any time by
            contacting us. If you joined the waitlist or created an account, you can ask to be removed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy? Reach out through the contact options on our{" "}
            <Link to="/about" className="text-[#1E88E5] hover:underline">About page</Link>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
