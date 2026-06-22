import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, phone number, business idea, and interest level when you join our waitlist, create an account, or use our platform. We also collect usage data such as pages visited, features used, and time spent on the platform to improve your experience.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to deliver and improve PEN2PRO services, send platform updates and launch communications, personalize your roadmap and business strategy recommendations, process payments through our secure payment provider (Stripe), and contact you with relevant business resources and opportunities. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage and Security",
    body: "Your data is stored on secure, encrypted servers. We use industry-standard security practices including HTTPS encryption, secure API authentication, and access controls. No data system is 100% secure, but we take reasonable measures to protect your information.",
  },
  {
    title: "Cookies and Tracking",
    body: "PEN2PRO uses cookies and similar technologies to maintain your session, remember your preferences, and analyze platform usage. You may disable cookies in your browser, but some features may not function correctly without them.",
  },
  {
    title: "Third-Party Services",
    body: "We use trusted third-party providers to operate our platform — including Stripe for payment processing, OpenAI for AI-powered roadmap generation, and cloud hosting providers. These providers have their own privacy policies and handle data in accordance with applicable law.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, update, or delete your personal information. To make a request, contact us at support@pen2pro.com. We will respond within 30 days. If you are located in the European Economic Area, you may have additional rights under GDPR.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is designed for adults (18+) and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us immediately.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will update the date at the top of this page. Continued use of PEN2PRO after changes are posted constitutes your acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
            <h1 className="font-display text-4xl font-black text-white mb-3">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">Last updated: June 2026</p>
            <p className="mt-4 text-slate-400 leading-7">
              PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the PEN2PRO platform.
            </p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-7">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 font-bold text-white">Contact Us</h2>
            <p className="text-sm text-slate-400">
              If you have questions about this Privacy Policy or how we handle your information, contact us at{" "}
              <span className="text-[#FF8A00]">support@pen2pro.com</span>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
            <Link to="/" className="hover:text-white transition">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
