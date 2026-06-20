import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly when you create an account, submit a business roadmap intake form, join the waitlist, or contact us. This includes your name, email address, phone number (if provided), business idea, and interest level. We also collect usage data such as pages visited, features used, and session duration to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to deliver the PEN2PRO RMIE platform, generate your business roadmap, communicate about your account, send platform updates, and improve our services. If you join the waitlist, we use your contact information to notify you about launch updates, new features, and relevant offers. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored securely using industry-standard encryption. We use secure cloud infrastructure and apply access controls to protect your information. While we take security seriously, no method of transmission or storage is 100% secure. We encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "Cookies & Tracking",
    body: "PEN2PRO uses cookies and similar technologies to maintain your session, remember your preferences, and analyze platform usage. You can control cookie settings in your browser. Disabling cookies may affect some platform functionality.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including Stripe for payment processing, SendGrid for email delivery, and OpenAI for AI-powered roadmap generation. These services have their own privacy policies. Affiliate links on the platform may track referrals through standard affiliate tracking technology.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of marketing communications at any time using the unsubscribe link in any email we send. Certain data may be retained for legal compliance or legitimate business purposes.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we learn we have collected data from a minor, we will delete it promptly.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify registered users of material changes by email. Continued use of PEN2PRO after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact",
    body: "For privacy-related questions or requests, contact us at support@pen2pro.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: June 2026</p>
        </div>
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/terms" className="text-sm font-semibold text-[#FF8A00] hover:opacity-80 transition">Terms of Service →</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#FF8A00] hover:opacity-80 transition">Disclaimer →</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
