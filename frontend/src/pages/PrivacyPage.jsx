import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you use PEN2PRO, we may collect: your name, email address, phone number (optional), business idea or concept, interest level (Free, Pro, Elite, Founders), and referral source.",
      "We also collect standard usage data including IP address, browser type, pages visited, and session duration through our analytics systems.",
      "Payment information is processed directly by Stripe and is never stored on PEN2PRO servers.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To deliver the PEN2PRO RMIE experience — generating business roadmaps, strategy, and execution guidance based on your input.",
      "To contact you about your waitlist status, platform updates, and relevant business resources.",
      "To improve platform features, roadmap quality, and AI output accuracy.",
      "To send optional marketing communications. You can opt out at any time.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "PEN2PRO does not sell your personal information to third parties.",
      "We may share data with trusted service providers (hosting, email, payment processing, analytics) who are contractually bound to protect your information.",
      "We may disclose information when required by law or to protect the rights and safety of our users and platform.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "PEN2PRO uses cookies and similar tracking technologies to maintain session state, improve performance, and analyze platform usage.",
      "You can disable cookies in your browser settings, though this may affect platform functionality.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We implement industry-standard security measures including encrypted connections (HTTPS), secure password hashing, and access controls to protect your data.",
      "No system is 100% secure. We encourage you to use a strong, unique password for your PEN2PRO account.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information by contacting us at the email below.",
      "You may opt out of marketing emails at any time using the unsubscribe link in any email we send.",
      "California residents may have additional rights under the CCPA. Contact us for more information.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not intended for use by individuals under the age of 18. We do not knowingly collect information from minors.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date below. Continued use of the platform after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "Questions about this Privacy Policy? Contact us at: privacy@pen2pro.com",
      "PEN2PRO | Houston, TX",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the PEN2PRO platform and website.
          </p>

          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 text-lg font-bold text-white">{section.title}</h2>
              <ul className="space-y-3">
                {section.body.map((line) => (
                  <li key={line} className="text-slate-400 leading-relaxed text-sm flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E88E5]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
            <Link to="/" className="text-sm font-semibold text-[#FF8A00] hover:underline">← Back to Home</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/terms" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
