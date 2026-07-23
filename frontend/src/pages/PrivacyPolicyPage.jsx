import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicyPage() {
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
          <p className="text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") operates an AI-powered Rapid Monetization Intelligence Engine (RMIE)
            that helps people turn ideas, skills, and lived experience into business roadmaps. This Privacy
            Policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Account information you provide, such as name, email, and password.</li>
              <li>Business and roadmap inputs you submit — business ideas, goals, skills, and related details used to generate your blueprint.</li>
              <li>Waitlist submissions — name, email, phone (optional), business idea (optional), and interest level.</li>
              <li>Payment information processed securely through Stripe. PEN2PRO does not store your full card details.</li>
              <li>Usage data such as pages visited, features used, and device/browser information.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To generate your roadmap, blueprint, and personalized strategy output.</li>
              <li>To operate, maintain, and improve the platform.</li>
              <li>To communicate with you about your account, roadmap, and product updates.</li>
              <li>To process payments and manage subscriptions.</li>
              <li>To respond to waitlist and support inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">How We Share Information</h2>
            <p>
              We do not sell your personal information. We share information only with service providers that
              help us operate PEN2PRO (such as payment processing, hosting, and AI processing partners), and
              only to the extent necessary to provide the service. We may disclose information if required by
              law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information by contacting
              us. You may unsubscribe from marketing emails at any time using the unsubscribe link included in
              those emails.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your information.
              No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              Questions about this Privacy Policy can be sent through our{" "}
              <Link to="/waitlist" className="text-[#1E88E5] hover:underline">contact form</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
