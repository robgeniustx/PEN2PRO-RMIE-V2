import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "Account information: name, email address, and password when you register.",
      "Business information: business idea, category, revenue, timeline, and challenge details you provide during roadmap intake.",
      "Waitlist data: name, email, phone (optional), business idea, and interest level.",
      "Usage data: pages visited, features used, and interactions with the platform.",
      "Payment data: processed securely by Stripe — we never store your card number.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "Generate your AI-powered business roadmap and blueprint.",
      "Send you product updates, launch announcements, and account-related communications.",
      "Improve the platform based on usage patterns and feedback.",
      "Process payments through our payment processor (Stripe).",
      "Provide customer support and respond to your inquiries.",
    ],
  },
  {
    title: "Information Sharing",
    body: [
      "We do not sell your personal information to third parties.",
      "We may share anonymized, aggregated data for analytics purposes.",
      "We use trusted service providers (Stripe for payments, MongoDB for database, OpenAI for AI generation) who process data on our behalf.",
      "We may disclose information if required by law or to protect the rights and safety of users.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry-standard encryption for data in transit (HTTPS/TLS).",
      "Passwords are hashed and never stored in plain text.",
      "Access to user data is restricted to authorized team members.",
      "We regularly review our security practices to protect your information.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to the personal data we hold about you.",
      "You may request correction of inaccurate information.",
      "You may request deletion of your account and associated data.",
      "You may opt out of marketing communications at any time.",
      "To exercise these rights, contact us at support@pen2pro.com.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "PEN2PRO uses minimal cookies for session management and authentication.",
      "We do not use tracking cookies for advertising.",
      "You may disable cookies in your browser settings, though this may affect platform functionality.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time.",
      "We will notify registered users of material changes by email.",
      "Continued use of the platform after changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-2 text-slate-500 text-sm">Effective Date: January 1, 2026</p>
          <p className="mb-10 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 text-lg font-bold text-white">{s.title}</h2>
                <ul className="space-y-2.5">
                  {s.body.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF8A00] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h3 className="mb-2 font-bold text-white">Contact</h3>
            <p className="text-sm text-slate-400">
              Questions about this Privacy Policy? Contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">
                support@pen2pro.com
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/terms" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Terms of Service</Link>
            <span className="text-slate-700">·</span>
            <Link to="/disclaimer" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
            <span className="text-slate-700">·</span>
            <Link to="/" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
