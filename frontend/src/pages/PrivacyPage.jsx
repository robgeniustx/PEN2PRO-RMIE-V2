import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "When you use PEN2PRO, we collect information you provide directly — such as your name, email address, business idea, phone number (optional), and plan interest level when you join our waitlist or create an account.",
      "We also collect information automatically when you use our platform, including your IP address, browser type, pages visited, time spent on pages, and interactions with our AI tools. This helps us improve your experience.",
      "If you connect a payment method through Stripe, we do not store your card details. Stripe handles all payment data under their own security and compliance standards.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use your information to operate and improve the PEN2PRO platform, generate your business roadmap, communicate with you about your account and plan status, and personalize your experience based on your tier.",
      "We may use your email to send you important product updates, waitlist status notifications, and educational content relevant to your business goals. You can unsubscribe at any time.",
      "We do not sell your personal information to third parties. We do not share your data with advertisers.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "Your data is stored on secure servers. We use industry-standard encryption for data in transit and at rest. We take reasonable precautions to protect your information from unauthorized access, disclosure, alteration, or destruction.",
      "No system is completely secure. While we work hard to protect your information, we cannot guarantee absolute security. In the event of a data breach, we will notify affected users as required by applicable law.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "PEN2PRO uses cookies and similar tracking technologies to keep you logged in, remember your preferences, and analyze platform usage. You can disable cookies in your browser settings, though some features may not function correctly without them.",
      "We do not use third-party advertising tracking cookies. Any analytics we use are for improving our own product, not for targeting you with external ads.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We use the following third-party services to operate PEN2PRO: Stripe for payment processing, OpenAI for AI-powered roadmap and strategy generation, ElevenLabs and Twilio for voice agent features (Pro and Elite tiers), and standard cloud hosting infrastructure.",
      "Each of these services has its own privacy policy. We share only the minimum data required to provide the service you requested.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete the personal information we hold about you. To request access or deletion, contact us at the email below.",
      "If you are located in the European Union or California, you may have additional rights under GDPR or CCPA. We honor these rights and will respond to requests within the legally required timeframe.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "PEN2PRO is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us immediately so we can remove it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will update the date at the top of this page and notify users with active accounts via email if the changes are material.",
      "Continued use of the platform after updates constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or how we handle your data, please contact us at: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] py-16 px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Last updated: June 2026. We keep this plain and honest — no legal jargon designed to confuse you.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="rounded-2xl border border-[#1A2D50] p-8 mb-8" style={{ background: "#0F1520" }}>
          <p className="text-slate-300 leading-8">
            PEN2PRO is committed to protecting your privacy. This policy explains what data we collect, how we use it, and what choices you have. We built this platform for people who've had enough of systems that don't respect them — and that includes how we handle your personal information.
          </p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", color: "#fff" }}
                >
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3 pl-11">
                {section.content.map((para, j) => (
                  <p key={j} className="text-slate-400 leading-7">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] py-14 px-5 text-center">
        <p className="text-slate-500 text-sm mb-6">Questions about how we handle your data?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/terms" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">
            Read Terms of Service
          </Link>
          <Link to="/disclaimer" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">
            Read Disclaimer
          </Link>
          <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Start Your Free Roadmap
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
