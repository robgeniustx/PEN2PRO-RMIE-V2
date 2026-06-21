import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "Account information: name, email address, and password when you register.",
      "Business intake data: business ideas, industry, goals, and other information you submit through our roadmap and strategy tools.",
      "Waitlist submissions: name, email, phone (optional), interest level, and referral source.",
      "Usage data: pages visited, features used, session duration, and device/browser information collected automatically.",
      "Payment information: processed securely through Stripe. PEN2PRO does not store credit card numbers.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your personalized business roadmap, strategy, and recommendations.",
      "To send account-related communications, including product updates and support responses.",
      "To improve the platform, features, and AI output quality.",
      "To process payments and manage your subscription tier.",
      "To send marketing communications if you have opted in — you may unsubscribe at any time.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We do not sell your personal information to third parties.",
      "We may share data with trusted service providers (e.g., Stripe, hosting providers, analytics tools) strictly to operate and improve PEN2PRO.",
      "We may disclose information if required by law or to protect the rights and safety of PEN2PRO and its users.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry-standard security practices including encrypted connections (HTTPS) and secure storage.",
      "While we take data security seriously, no system is 100% secure. Use a strong, unique password for your account.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data by contacting us.",
      "You may close your account at any time. Upon request, we will delete your data within 30 days, subject to legal retention requirements.",
      "California residents may have additional rights under the CCPA.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "PEN2PRO uses cookies and similar technologies to maintain sessions, remember preferences, and analyze usage patterns.",
      "You may disable cookies in your browser settings, though some features may not function correctly without them.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or in-app notice. Continued use of the platform after changes constitutes acceptance.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions or requests, contact us at: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Effective Date: June 15, 2026 &nbsp;·&nbsp; Last Updated: June 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") operates the platform available at pen2pro.com. This Privacy Policy describes how we collect, use, and protect the information you provide when using our services. By using PEN2PRO, you agree to the practices described in this policy.
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black text-[#0A0F1E]"
                    style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1 shrink-0 text-[#FF8A00]">›</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center border-t border-[#1A2D50] pt-10">
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
