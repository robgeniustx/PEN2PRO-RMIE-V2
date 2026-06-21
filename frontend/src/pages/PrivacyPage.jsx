import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "Account information: name, email address, and password when you create a PEN2PRO account.",
      "Business intake data: your business idea, goals, industry, target customer, and roadmap preferences that you submit through the RMIE engine.",
      "Waitlist submissions: name, email, phone (optional), business interest, and referral source.",
      "Payment information: processed securely by Stripe. PEN2PRO does not store your full card number, CVV, or banking credentials.",
      "Usage data: pages visited, features used, session duration, and general interaction patterns used to improve the platform.",
      "Device and browser data: IP address, browser type, and operating system collected automatically through standard web analytics.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your personalized RMIE business roadmap and provide platform features.",
      "To process payments and manage your subscription.",
      "To send account confirmation, roadmap updates, and platform announcements.",
      "To improve platform features, fix issues, and develop new tools.",
      "To maintain security, prevent fraud, and comply with legal obligations.",
      "To communicate waitlist updates, launch announcements, and relevant offers you opted into.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "Your data is stored in secured cloud databases with encryption at rest and in transit.",
      "We use industry-standard authentication practices, including JWT-based session management.",
      "Payment processing is handled entirely by Stripe, a PCI-DSS compliant payment processor.",
      "We take reasonable steps to protect your information but no system is 100% immune to security risks.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "PEN2PRO does not sell your personal data to third parties.",
      "We may share data with trusted service providers (such as payment processors, email services, and analytics tools) who operate under data protection agreements.",
      "We may disclose information when required by law or to protect the rights, safety, or property of PEN2PRO and its users.",
      "Aggregated, anonymized data may be used for product analytics and research.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses cookies to maintain login sessions and save your preferences.",
      "We may use analytics tools such as Google Analytics or similar platforms to understand usage patterns.",
      "You can disable cookies in your browser settings, but some platform features may not function correctly without them.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to the personal data we hold about you.",
      "You may request correction of inaccurate information.",
      "You may request deletion of your account and associated data by contacting us.",
      "You may opt out of marketing emails at any time using the unsubscribe link in any email we send.",
      "If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA).",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain your account data for as long as your account is active or as needed to provide services.",
      "Waitlist data is retained until you request removal or the waitlist period ends.",
      "Roadmap and blueprint data is retained to allow you to access and export your plans.",
      "You may request deletion of your data at any time by contacting support@pen2pro.com.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not intended for users under the age of 18.",
      "We do not knowingly collect personal information from minors.",
      "If you believe a minor has submitted data through our platform, contact us immediately.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
      "We will notify registered users of material changes via email or a notice on the platform.",
      "Your continued use of PEN2PRO after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or your data, contact us at: support@pen2pro.com",
      "PEN2PRO — Rapid Monetization Intelligence Engine",
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
      <section className="border-b border-[#1A2D50] px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-slate-400">
            Last updated: June 21, 2026
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains what information we collect, how we use it, and how we keep it secure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-black text-white">{s.title}</h2>
              <ul className="space-y-3">
                {s.body.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#FF8A00]">•</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-6 text-slate-400">
            Questions about your privacy? Email us at{" "}
            <a href="mailto:support@pen2pro.com" className="font-semibold text-[#FF8A00] hover:underline">
              support@pen2pro.com
            </a>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] btn-gold">
              Back to PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
