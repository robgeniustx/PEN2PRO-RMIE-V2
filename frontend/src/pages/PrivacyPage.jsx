import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "Account information you provide during registration: name, email address, and password.",
      "Business intake data you enter when generating roadmaps, blueprints, or using RMIE tools.",
      "Waitlist submissions including name, email, phone number (optional), business idea, and interest level.",
      "Payment and billing information processed securely through Stripe — PEN2PRO never stores raw card data.",
      "Usage data: pages visited, features used, session duration, and device/browser type for product improvement.",
      "Referral source when you arrive via a referral link (?ref= parameter).",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your personalized RMIE business roadmap, blueprint, and strategy output.",
      "To communicate product updates, waitlist status, and account-related notifications.",
      "To process payments and manage subscription access tiers (Free, Pro, Elite, Founders).",
      "To improve platform features, fix bugs, and analyze aggregate usage patterns.",
      "To send you relevant resources related to business building, funding, and credit readiness — if you have opted in.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "Stripe — payment processing. Stripe's privacy policy governs their data handling.",
      "OpenAI — AI-generated roadmap and strategy content. Inputs may be processed by OpenAI's API under their data usage policies.",
      "ElevenLabs — voice agent functionality, if enabled.",
      "Twilio — SMS and phone features, if enabled.",
      "MongoDB Atlas — secure cloud database storage for your account and blueprint data.",
      "No data is sold, rented, or shared with advertisers or data brokers.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Your account data is retained for as long as your account is active.",
      "If you delete your account, your personal data is removed within 30 days, except where retention is required by law.",
      "Anonymized usage analytics may be retained indefinitely for product improvement purposes.",
    ],
  },
  {
    title: "Security",
    body: [
      "Passwords are hashed using bcrypt and never stored in plain text.",
      "All data transmission uses HTTPS/TLS encryption.",
      "Authentication tokens (JWT) expire automatically after a set period.",
      "We implement access controls to limit employee access to user data.",
      "No system is 100% secure. We encourage you to use a strong, unique password.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request a copy of your personal data by contacting us.",
      "You may request deletion of your account and associated data at any time.",
      "You may opt out of marketing emails using the unsubscribe link in any email.",
      "California residents may have additional rights under the CCPA.",
      "To exercise any right, contact us at the email below.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "PEN2PRO uses minimal cookies for session management and authentication.",
      "We do not use third-party advertising cookies.",
      "Analytics cookies (if enabled) help us understand how users navigate the platform.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions, data requests, or concerns, contact us at: privacy@pen2pro.com",
      "This privacy policy was last updated June 2026 and may be updated periodically.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-5">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            PEN2PRO is committed to protecting your personal information. This policy explains what
            data we collect, how we use it, and what rights you have.
          </p>
          <p className="mt-3 text-sm text-slate-600">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-5">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
              <h2 className="text-xl font-black mb-5" style={{ color: "#1E88E5" }}>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#FF8A00]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
            <p className="text-slate-400 text-sm mb-5">
              Questions about your data or this policy?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/waitlist"
                className="rounded-xl px-6 py-3 text-sm font-black text-black"
                style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
              >
                Join the Waitlist
              </Link>
              <Link
                to="/about"
                className="rounded-xl px-6 py-3 text-sm font-bold text-slate-300 border border-[#1A2D50] hover:border-[#1E88E5] transition-colors"
              >
                About PEN2PRO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
