import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you create an account, submit a business idea, join the waitlist, or contact us. This includes your name, email address, phone number (optional), business idea details, and any other information you choose to provide.

We also collect usage data automatically, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This helps us improve the platform and understand how users interact with PEN2PRO.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Generate your personalized business roadmap and RMIE strategy
• Send you platform updates, product announcements, and relevant business resources
• Respond to your questions and support requests
• Improve and develop new features on the PEN2PRO platform
• Process payments and manage your subscription
• Send waitlist notifications and early access invitations
• Comply with legal obligations`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell your personal information to third parties. We may share your information with:

• Service providers who help us operate the platform (payment processors, email services, cloud hosting)
• Analytics providers to help us understand platform usage
• Legal authorities when required by law or to protect our rights

All third-party providers are contractually required to protect your data and use it only for the services they provide to us.`,
  },
  {
    title: "Data Security",
    content: `We use industry-standard security measures to protect your personal information, including encryption in transit and at rest, secure server infrastructure, and regular security audits. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password for your PEN2PRO account.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to maintain your session, remember your preferences, and analyze platform usage. You can control cookie settings through your browser, though disabling cookies may affect some platform features. We may also use analytics tools such as Google Analytics to understand platform traffic and behavior patterns.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Opt out of marketing communications
• Data portability

To exercise any of these rights, contact us at the email below. We will respond within 30 days.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide you services. If you delete your account, we will remove your personal data within 30 days, except where we are required to retain it for legal or business purposes.`,
  },
  {
    title: "Children's Privacy",
    content: `PEN2PRO is not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically. When we make significant changes, we will notify registered users by email and update the "Last Updated" date below. Your continued use of PEN2PRO after changes take effect constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle your data, contact us at:

PEN2PRO
Email: support@pen2pro.com
Website: pen2pro.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <main className="mx-auto max-w-4xl px-5 py-20">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0D1528] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            PEN2PRO is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0D1528" }}>
              <h2 className="mb-4 text-xl font-bold text-white">{section.title}</h2>
              <p className="text-sm leading-8 text-slate-400 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Back links */}
        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <Link to="/" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-bold text-slate-400 hover:text-white hover:border-[#FF8A00] transition-colors">
            ← Back to Home
          </Link>
          <Link to="/terms" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-bold text-slate-400 hover:text-white hover:border-[#FF8A00] transition-colors">
            Terms of Service
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-bold text-slate-400 hover:text-white hover:border-[#FF8A00] transition-colors">
            Disclaimer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
