import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used, device/browser type) to help us improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, improve PEN2PRO's AI outputs, and — where you've opted in — send updates about new features, pricing, or founder access.",
  },
  {
    title: "3. How We Protect Your Information",
    body: "We use industry-standard safeguards to protect your data, including encrypted connections and restricted internal access. No system is 100% secure, and we continually work to strengthen our protections.",
  },
  {
    title: "4. Sharing of Information",
    body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (hosting, email delivery, payment processing) under obligations to protect it, or when required by law.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "PEN2PRO may use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">
          Effective date: January 1, 2026. This policy explains what information PEN2PRO collects, how we use it,
          and the choices you have.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 mb-4">Questions about your data or this policy?</p>
          <Link to="/about" className="btn-gold inline-block px-6 py-2.5 text-sm font-bold rounded-xl">
            Contact PEN2PRO
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
