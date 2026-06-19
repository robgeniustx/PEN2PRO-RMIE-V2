import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use PEN2PRO, we collect information you provide directly — including your name, email address, phone number (optional), and business information you enter during roadmap intake.",
      "We also collect usage data such as pages visited, features used, session duration, and device/browser information to improve platform performance and user experience.",
      "If you connect a Google account, we receive basic profile information (name, email) in accordance with Google's OAuth policy. We do not access your Google Drive, Gmail, or Calendar without explicit permission.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to generate your business roadmap, deliver platform features, and improve our AI models and recommendations.",
      "If you join the waitlist, we use your email and interest level to send you relevant updates about PEN2PRO launches, offers, and platform access.",
      "We do not sell your personal information to third parties. We may share information with trusted service providers (payment processors, email platforms) only as needed to operate the platform.",
    ],
  },
  {
    title: "3. Payments & Financial Data",
    body: [
      "All payment processing is handled by Stripe. PEN2PRO does not store your credit card numbers, bank account information, or full payment details on our servers.",
      "Stripe's privacy policy governs the handling of payment data. You can review it at stripe.com/privacy.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    body: [
      "PEN2PRO uses cookies and similar tracking technologies to maintain your session, remember preferences, and analyze platform usage.",
      "We may use third-party analytics tools (such as Google Analytics or PostHog) to understand how users interact with the platform. These tools may set their own cookies.",
      "You can disable cookies in your browser settings. Some platform features may not function correctly if cookies are disabled.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain your account data and roadmap history as long as your account is active. You may request deletion of your account and associated data at any time by contacting us.",
      "Waitlist entries are retained until you unsubscribe or request removal.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you.",
      "To exercise these rights, contact us at support@pen2pro.com. We will respond within 30 days.",
      "If you are in the European Economic Area (EEA), you have additional rights under GDPR, including the right to data portability and to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    title: "7. Children's Privacy",
    body: [
      "PEN2PRO is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have collected data from a minor, contact us immediately.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We implement industry-standard security measures including HTTPS encryption, secure authentication (JWT tokens), and access controls to protect your data.",
      "No system is 100% secure. If you become aware of a security issue, please contact us at support@pen2pro.com.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page with a revised effective date. Continued use of PEN2PRO after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your data, contact us at:",
      "PEN2PRO | Email: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026 | Last Updated: June 19, 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-7">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the PEN2PRO platform, website, and services.
          </div>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 text-xl font-bold text-white">{s.title}</h2>
                <div className="space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-sm leading-7 text-slate-400">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 border-t border-[#1A2D50] pt-10 sm:flex-row sm:justify-center">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
