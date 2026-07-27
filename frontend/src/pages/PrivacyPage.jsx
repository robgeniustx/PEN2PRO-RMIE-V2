import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account and subscription tier, respond to support requests, send product updates, and improve PEN2PRO's AI outputs. We do not sell your personal information.",
  },
  {
    title: "Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials — Stripe handles that data under its own security and compliance standards.",
  },
  {
    title: "Data Sharing",
    body: "We may share limited data with service providers who help us operate PEN2PRO (hosting, analytics, payment processing, email delivery). We do not share your personal information with third parties for their own marketing purposes.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain account and roadmap data as long as your account is active, plus a reasonable period afterward for legal and support purposes. We use industry-standard safeguards, but no system is 100% secure, and we cannot guarantee absolute protection of transmitted data.",
  },
  {
    title: "Your Choices",
    body: "You can request a copy of your data, ask us to correct it, or request deletion of your account at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to the support contact listed on your account or waitlist confirmation email.",
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[#1A2D50] pt-8">
            <Link to="/terms" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-lg px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
