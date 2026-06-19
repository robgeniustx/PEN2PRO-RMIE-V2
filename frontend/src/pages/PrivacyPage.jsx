import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, phone number (optional), business idea, and interest level — when you sign up for the waitlist, create an account, or use the PEN2PRO platform. We also collect usage data such as pages visited, features used, and referral source to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to operate and improve PEN2PRO, send you platform updates and launch notifications, personalize your roadmap experience, track referrals, and communicate with you about your account. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies and Tracking",
    body: "PEN2PRO uses cookies and similar technologies to remember your preferences, maintain session state, and analyze platform usage. You can control cookie settings through your browser. Disabling cookies may affect certain features of the platform.",
  },
  {
    title: "Data Storage and Security",
    body: "Your data is stored securely using industry-standard encryption and access controls. We use reputable cloud infrastructure to host the platform. While we take security seriously, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including Stripe (payment processing), OpenAI (AI roadmap generation), and email delivery providers. These services have their own privacy policies and data handling practices. We encourage you to review their policies.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal information. To request changes to your data or to close your account, contact us at support@pen2pro.com. We will respond to all valid requests within 30 days.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us immediately.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this privacy policy from time to time. When we make material changes, we will notify registered users by email. Continued use of PEN2PRO after changes take effect constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            PEN2PRO ("we", "us", or "our") is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our platform at pen2pro.com.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-2 text-lg font-bold text-white">Contact Us</h2>
            <p className="text-sm text-slate-400">
              Questions about this privacy policy? Email us at{" "}
              <span className="text-[#FF8A00]">support@pen2pro.com</span> or visit our{" "}
              <Link to="/waitlist" className="text-[#1E88E5] hover:underline">waitlist page</Link> to get in touch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
