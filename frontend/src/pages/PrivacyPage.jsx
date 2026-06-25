import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, business idea, and interest level when you sign up or join the waitlist. We also collect usage data such as pages visited and features used to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to operate the PEN2PRO platform, deliver your business roadmap, send you relevant updates about your account and PEN2PRO offerings, and improve our AI-powered tools. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored securely using industry-standard encryption. We use reputable third-party services (Stripe for payments, MongoDB for data storage) that maintain their own security standards. We retain your data for as long as your account is active or as required by law.",
  },
  {
    title: "Cookies & Tracking",
    body: "We use cookies and local storage to keep you logged in and remember your preferences. We may use analytics tools to understand how users interact with the platform. You can disable cookies in your browser settings, though some features may not work as intended.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI generation), and others. These services have their own privacy policies. Affiliate links on our platform may earn us a commission if you make a purchase — this does not affect the price you pay.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal data. To make a request, contact us at support@pen2pro.com. We will respond within 30 days.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on the platform or emailing the address on file. Continued use of PEN2PRO after changes constitutes acceptance.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-2 text-sm text-slate-400">Effective date: June 1, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm text-slate-400">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
              support@pen2pro.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
