import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account, we collect your name, email address, and password (stored securely via bcrypt hashing).",
      "When you complete a business roadmap intake, we collect information about your business idea, industry, and goals to generate your personalized RMIE roadmap.",
      "When you join the waitlist, we collect your name, email, optional phone number, and stated interest level.",
      "We may collect usage data such as pages visited, features used, and session duration to improve the platform.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your AI-powered business roadmap and strategy documents.",
      "To send you important account updates, roadmap results, and platform announcements.",
      "To process payments securely through our third-party payment processor (Stripe).",
      "To improve our platform features, identify bugs, and analyze usage patterns.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "All passwords are hashed and never stored in plain text.",
      "Account data is transmitted over HTTPS using SSL/TLS encryption.",
      "Access to your account data is restricted to authorized personnel only.",
      "We use industry-standard practices to protect your data, but no system is 100% secure.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "PEN2PRO uses cookies to maintain your login session and remember your preferences.",
      "We may use analytics tools to understand how users interact with the platform.",
      "You can disable cookies in your browser settings, but this may limit platform functionality.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Stripe — used for payment processing. Your payment information is handled directly by Stripe and is never stored on our servers.",
      "OpenAI — used to generate your business roadmap content. Prompts may include your business idea description.",
      "ElevenLabs / Twilio — used for optional voice agent features. Usage is governed by their respective privacy policies.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data by contacting us.",
      "You may opt out of marketing emails at any time using the unsubscribe link in any email.",
      "You may delete your account by contacting support. Account deletion removes your personal data within 30 days.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on the platform.",
      "Continued use of PEN2PRO after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your data is handled, contact us at: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-2 text-slate-400">
            Last updated: June 2026
          </p>
          <p className="mb-12 text-slate-400 leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights as a user.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 font-display text-xl font-bold text-white">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1 shrink-0 text-[#FF8A00]">→</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service →
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
