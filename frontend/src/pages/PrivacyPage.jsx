import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you use PEN2PRO, we collect information you provide directly — such as your name, email address, phone number, and business information when you sign up, join the waitlist, or generate a business roadmap. We also collect usage data including pages visited, features used, and roadmap sessions to improve the platform experience.`,
  },
  {
    title: "How We Use Your Information",
    body: `Your information is used to deliver PEN2PRO's core services: generating personalized business roadmaps, sending platform updates, notifying you about waitlist status and plan availability, and improving AI output quality. We do not sell your personal data to third parties.`,
  },
  {
    title: "Data Storage and Security",
    body: `Your data is stored on secure servers. We use industry-standard encryption, access controls, and security practices to protect your information. No system is 100% secure, and we encourage you to use strong passwords and protect your account credentials.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses cookies and local storage to maintain your session, remember your preferences, and analyze platform usage. You can disable cookies in your browser settings, though some features may not function correctly without them.`,
  },
  {
    title: "Third-Party Services",
    body: `We use third-party services to operate PEN2PRO, including Stripe for payment processing, OpenAI for AI-powered roadmap generation, and email delivery providers. These providers have their own privacy policies and handle data according to their own terms.`,
  },
  {
    title: "Affiliate Links",
    body: `PEN2PRO's affiliate and resource pages may contain links to third-party products and services. If you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. We only recommend tools we believe are valuable for entrepreneurs.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, update, or delete your personal information at any time. To request data deletion or correction, contact us at the email address below. We will process your request within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not intended for users under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to our platform, contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we make material changes, we will notify registered users by email and update the effective date below. Continued use of the platform after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `For privacy-related questions or requests, contact us at: privacy@pen2pro.com. You can also reach us through the waitlist page or your account settings.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#080C14", color: "#E2E8F0" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#1A2D50] py-16 text-center px-5">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(30,136,229,0.12)", color: "#1E88E5", border: "1px solid rgba(30,136,229,0.25)" }}>
              Legal
            </span>
            <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Your privacy matters. This policy explains how PEN2PRO collects, uses, and protects your information.
            </p>
            <p className="mt-4 text-xs text-slate-600">Effective Date: June 15, 2026 · Last Updated: June 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-5 py-16 space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-8 text-sm">{s.body}</p>
            </div>
          ))}
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#1A2D50] py-12 text-center px-5">
          <p className="text-slate-500 text-sm mb-6">Questions about your data or this policy?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/waitlist"
              className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
              Join Waitlist
            </Link>
            <Link to="/about"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-300 border border-[#1A2D50] hover:border-[#2A3F6A]">
              About PEN2PRO
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
