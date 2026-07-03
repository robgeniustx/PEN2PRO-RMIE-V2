import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with usage data like pages visited, features used, and referral source.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account and the PEN2PRO waitlist, improve our AI models and product, and — where applicable — connect you with relevant affiliate partners you choose to engage with.",
  },
  {
    title: "How We Protect Your Information",
    body: "We use reasonable administrative, technical, and physical safeguards to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or stored by PEN2PRO.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share limited information with service providers who help us operate PEN2PRO (such as hosting, email, and payment processing), or when required by law.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link provided in those emails.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO may use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-slate-400 leading-relaxed">
            Your trust matters to us. This policy explains what information PEN2PRO collects, how it's used, and the
            choices you have.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
