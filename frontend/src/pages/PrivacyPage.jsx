import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account or join the PEN2PRO waitlist, we collect your name, email address, and optionally your phone number and business idea description.",
      "When you use the RMIE roadmap builder, we store your inputs (business type, goals, resources) to generate and save your blueprint.",
      "We may collect usage data such as pages visited, features used, and session duration to improve the platform.",
      "Payment information is processed securely by Stripe. PEN2PRO does not store credit card numbers or payment credentials.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To provide and improve PEN2PRO services, including generating your RMIE business roadmap.",
      "To send you account-related communications, product updates, and — if you opt in — promotional content.",
      "To analyze platform usage and improve our AI tools, roadmap quality, and user experience.",
      "To process payments and manage subscription billing through Stripe.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "Your data is stored on secure servers. We use industry-standard encryption for data in transit (HTTPS/TLS) and at rest.",
      "Passwords are hashed and never stored in plain text.",
      "We retain your account data for as long as your account is active. You may request deletion at any time by contacting us.",
      "While we take reasonable security measures, no system is completely secure. We encourage you to use a strong, unique password.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses cookies and similar technologies to maintain your session, remember preferences, and analyze traffic.",
      "We may use analytics tools (such as Google Analytics or PostHog) to understand how users interact with the platform.",
      "You may disable cookies in your browser settings, but this may affect platform functionality.",
      "We do not use cookies to sell advertising or track you across unrelated third-party websites.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "PEN2PRO integrates with the following third-party services: Stripe (payments), OpenAI (AI generation), Twilio (communications), and ElevenLabs (voice features).",
      "These services have their own privacy policies and data handling practices.",
      "Affiliate links on the platform may track referrals. Clicking these links may result in PEN2PRO earning a commission at no cost to you.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to the personal data we hold about you at any time.",
      "You may request correction or deletion of your personal data by contacting us at the email below.",
      "You may opt out of marketing emails at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
      "California residents may have additional rights under the CCPA. Contact us for more information.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.",
      "If you believe a minor has provided us with personal information, please contact us so we can remove it.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be communicated via email or a notice on the platform.",
      "Continued use of PEN2PRO after policy updates constitutes acceptance of the revised policy.",
      "The date at the top of this page reflects when the policy was last updated.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For privacy-related questions, data requests, or concerns, contact PEN2PRO at: support@pen2pro.com",
      "You may also reach us through the waitlist form at pen2pro.com/waitlist.",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
    return () => { document.title = "PEN2PRO — Turn Your Idea Into Income"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: June 2026 · Effective for all PEN2PRO users</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          <p className="text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the PEN2PRO platform at pen2pro.com.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-black text-white">{s.title}</h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#FF8A00]">•</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-6 text-sm text-slate-500">
            Questions about this policy? Reach out or explore the platform.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Waitlist
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
