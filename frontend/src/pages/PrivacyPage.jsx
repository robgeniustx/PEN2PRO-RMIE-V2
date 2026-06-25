import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you use PEN2PRO, we may collect information you provide directly — such as your name, email address, phone number, business idea, and account credentials. We also collect usage data such as pages visited, features used, and time spent in the platform. This data helps us improve the product and your experience.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to operate and improve the PEN2PRO platform, deliver AI-generated business roadmaps and strategy, send platform updates and account notifications, process payments securely through Stripe, and respond to support requests. We do not sell your personal information to third parties.`,
  },
  {
    title: "Data Storage & Security",
    body: `Your data is stored securely using industry-standard encryption and access controls. PEN2PRO uses MongoDB with secure cloud hosting. Passwords are hashed and never stored in plaintext. While we take security seriously, no system is 100% immune from risk, and we encourage you to use a unique, strong password.`,
  },
  {
    title: "Cookies & Tracking",
    body: `PEN2PRO may use cookies and similar tracking technologies to maintain your session, remember preferences, and gather anonymous usage analytics. Analytics tools like Google Analytics or PostHog may be used to understand how users interact with the platform. You can disable cookies in your browser settings, though some platform features may not function correctly without them.`,
  },
  {
    title: "Third-Party Services",
    body: `PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI features), ElevenLabs (voice features), Twilio (calling), and MongoDB Atlas (data storage). Each of these providers has their own privacy policy. Affiliate links on the platform may track referral activity. PEN2PRO is not responsible for the privacy practices of third-party providers.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or delete your personal data. You may also request a copy of the data we hold about you. To exercise these rights, contact us at support@pen2pro.com. We will respond to verifiable requests within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the platform after changes constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-10 text-slate-400 text-sm">
            Effective Date: June 1, 2026 · Last Updated: June 25, 2026
          </p>

          <p className="mb-10 text-slate-300 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use the PEN2PRO platform at pen2pro.com.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5 text-sm text-slate-400">
            <p className="font-semibold text-white mb-1">Contact</p>
            <p>For privacy-related questions or data requests, email <span className="text-[#FF8A00]">support@pen2pro.com</span>.</p>
          </div>

          <div className="mt-8 flex gap-4 text-sm">
            <Link to="/terms" className="text-[#2d9cff] hover:underline">Terms of Service</Link>
            <Link to="/disclaimer" className="text-[#2d9cff] hover:underline">Disclaimer</Link>
            <Link to="/" className="text-slate-500 hover:text-white">← Back to PEN2PRO</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
