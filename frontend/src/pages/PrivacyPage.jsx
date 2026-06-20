import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account or join the waitlist, we collect your name, email address, and optionally your phone number and business idea.",
      "When you use PEN2PRO tools (roadmap builder, blueprint generator, etc.), we collect the inputs you provide — such as business ideas, goals, and intake responses — to generate your personalized roadmap.",
      "We automatically collect basic usage data including pages visited, features used, and session duration to improve the platform. This data is aggregated and does not identify you individually.",
      "If you make a purchase, payment processing is handled by Stripe. We do not store your credit card details.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To deliver your business roadmap, blueprint results, and any platform features you access.",
      "To communicate important updates, product releases, and waitlist notifications. You can opt out of marketing emails at any time.",
      "To improve PEN2PRO — understanding which features are used most helps us build a better product.",
      "To process payments and manage your subscription or one-time purchase if applicable.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    title: "Data Storage & Security",
    body: [
      "Your data is stored on secure servers. We use industry-standard encryption for data in transit (HTTPS/TLS) and implement access controls to protect your information.",
      "Passwords are hashed and never stored in plain text.",
      "While we take security seriously, no system is perfectly secure. We encourage you to use a strong, unique password for your account.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "PEN2PRO uses session cookies to keep you logged in and to remember your preferences. These are necessary for the platform to function.",
      "We may use analytics cookies (such as anonymized usage tracking) to understand how the platform is used. You can disable cookies in your browser settings, though this may affect functionality.",
      "We do not use advertising trackers or sell your browsing behavior to ad networks.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You can request a copy of the personal data we hold about you at any time.",
      "You can request deletion of your account and associated data. Some data may be retained for legal or business compliance purposes.",
      "You can update your account information at any time from your dashboard settings.",
      "To exercise any of these rights, contact us at the email address below.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "PEN2PRO integrates with third-party services to deliver core functionality. These include: Stripe (payments), OpenAI (AI roadmap generation), and optionally Twilio (SMS notifications if enabled). Each service has its own privacy policy.",
      "Affiliate links on our platform may lead to third-party websites. We are not responsible for the privacy practices of those sites.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is intended for users 18 years of age or older. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us immediately.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page and notify active users via email for material changes.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your data, contact us at: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Effective date: June 15, 2026</p>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights as a user.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((sec) => (
            <div key={sec.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
              <h2 className="font-display text-xl font-bold text-white mb-5">{sec.title}</h2>
              <div className="space-y-4">
                {sec.body.map((para, i) => (
                  <p key={i} className="text-sm text-slate-400 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-xl">
          <p className="text-slate-400 mb-6 text-sm">
            Have questions or concerns about how your data is handled? Reach out — we're transparent about how we operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/waitlist" className="btn-gold rounded-xl px-6 py-3 text-sm font-bold text-[#0A0F1E]">
              Join the Waitlist
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
