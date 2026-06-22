import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you use PEN2PRO, we collect information you provide directly — such as your name, email address, phone number, and business information submitted through forms. We also collect usage data automatically, including pages visited, features used, and session information, to improve the platform experience.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to operate and improve the PEN2PRO platform, send you updates and communications you've opted into, process payments securely through Stripe, provide AI-generated business roadmaps and strategy content, and respond to support requests. We do not sell your personal information to third parties.`,
  },
  {
    title: "Waitlist and Communications",
    body: `When you join the PEN2PRO waitlist, you agree to receive email updates about platform launch, new features, and relevant offers. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly at support@pen2pro.com.`,
  },
  {
    title: "Payment Processing",
    body: `All payment processing is handled by Stripe, a third-party payment processor. PEN2PRO does not store your full credit card information. Stripe's privacy policy governs how your payment data is handled. You can review Stripe's privacy policy at stripe.com/privacy.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses cookies and similar technologies to maintain session state, remember your preferences, and analyze usage patterns. You can disable cookies in your browser settings, but some features of the platform may not function correctly without them.`,
  },
  {
    title: "Data Retention",
    body: `We retain your account information and usage data for as long as your account is active or as needed to provide services. You may request deletion of your data by contacting us at support@pen2pro.com. We will process deletion requests within 30 days, subject to legal obligations.`,
  },
  {
    title: "Third-Party Services",
    body: `PEN2PRO integrates with third-party services including OpenAI for AI content generation, Stripe for payment processing, and ElevenLabs for voice features. These services have their own privacy policies and terms of service. We encourage you to review them as applicable.`,
  },
  {
    title: "Security",
    body: `We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. However, no internet-based service can guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at support@pen2pro.com.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or by posting a notice on the platform. Your continued use of PEN2PRO after changes take effect constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy or how your information is handled, contact us at: support@pen2pro.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
          <p className="mt-4 text-slate-400 leading-7">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the PEN2PRO platform.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
          <p className="text-slate-400 text-sm mb-4">Have questions about your privacy?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
