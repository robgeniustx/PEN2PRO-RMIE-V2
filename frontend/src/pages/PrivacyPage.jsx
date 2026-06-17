import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you join the PEN2PRO waitlist or create an account, we collect your name, email address, phone number (optional), and business idea (optional). We also collect usage data such as the pages you visit, features you use, and actions you take within the platform.",
      "If you complete a payment, your billing information is processed securely by Stripe. PEN2PRO never stores full credit card numbers.",
      "We may collect referral source data if you arrive via a referral link (?ref=) to credit affiliates appropriately.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To deliver PEN2PRO services, including business roadmap generation, billing, and account management.",
      "To send launch updates, platform announcements, and relevant business resources you opted into.",
      "To improve the platform — understanding how users interact with RMIE tools helps us build better features.",
      "To process affiliate referrals and commission tracking.",
      "We do not sell, rent, or share your personal information with third-party marketers.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "PEN2PRO uses industry-standard security practices including encrypted connections (HTTPS/TLS), hashed passwords, and secure cloud infrastructure.",
      "User data is stored on protected servers. We limit access to your personal information to authorized team members only.",
      "While we take reasonable steps to protect your data, no system is 100% secure. Use a strong, unique password for your PEN2PRO account.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "We use cookies and similar tracking technologies to maintain sessions, remember preferences, and gather usage analytics.",
      "Analytics tools (such as Google Analytics or PostHog) may collect anonymized data about how visitors use the platform. You can opt out via your browser settings or browser extensions.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI generation), ElevenLabs (voice), Twilio (SMS), and others listed in our affiliate directory.",
      "Each third-party service has its own privacy policy. We encourage you to review them independently.",
      "Affiliate links on PEN2PRO may result in referral commissions if you purchase through those links. This does not increase your cost.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data by contacting us at support@pen2pro.com.",
      "You may unsubscribe from marketing emails at any time using the unsubscribe link in any email we send.",
      "California residents may have additional rights under the CCPA. Contact us for more information.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy as the platform evolves. Significant changes will be communicated via email or a notice on the platform.",
      "Continued use of PEN2PRO after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "Questions about this Privacy Policy? Contact us at support@pen2pro.com or through the PEN2PRO platform.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use the PEN2PRO platform, including our website at pen2pro.com and all related services.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-black text-white border-l-4 border-[#FF8A00] pl-4">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p) => (
                  <p key={p} className="text-slate-400 text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-slate-500 text-sm">Questions about your data or this policy?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:support@pen2pro.com" className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] btn-gold">
              Contact Support
            </a>
            <Link to="/terms" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
