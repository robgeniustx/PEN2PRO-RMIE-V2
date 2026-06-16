import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you join the waitlist or create an account, we collect your name, email address, and optional phone number.",
      "When you use the business roadmap generator, we collect the information you submit — your business idea, category, budget range, and timeline.",
      "We collect usage data such as pages visited, features used, and session duration to improve the platform.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate and deliver your personalized business roadmap.",
      "To send you product updates, launch announcements, and platform communications you opted into.",
      "To improve the PEN2PRO platform, refine AI outputs, and develop new features.",
      "To process payments and manage your subscription through Stripe.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We do not sell your personal data to third parties.",
      "We share data only with service providers required to operate PEN2PRO — including our AI provider (OpenAI), payment processor (Stripe), and email delivery provider.",
      "We may disclose information if required by law or to protect the rights and safety of PEN2PRO and its users.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "Your data is transmitted over encrypted HTTPS connections.",
      "Passwords are hashed and never stored in plain text.",
      "We follow industry-standard practices to protect your information.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "PEN2PRO uses cookies and local storage to maintain your session and remember your preferences.",
      "We may use analytics cookies to understand how users interact with the platform.",
      "You can disable cookies in your browser settings, though some features may not function correctly.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request to access, update, or delete your personal data at any time.",
      "To make a data request, contact us at support@pen2pro.com.",
      "We will respond to verified requests within 30 days.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not directed at children under 13 years of age.",
      "We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    title: "Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time.",
      "When we make material changes, we will notify users by email or by posting a notice on the platform.",
      "Your continued use of PEN2PRO after updates constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use the PEN2PRO platform.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 font-bold text-white text-lg">{s.title}</h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#FF8A00]">→</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
          <p className="font-semibold text-white mb-2">Contact Us</p>
          <p>For privacy-related questions or data requests, email us at <span className="text-[#FF8A00]">support@pen2pro.com</span></p>
        </div>

        <div className="mt-8 flex gap-4">
          <Link to="/terms" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
