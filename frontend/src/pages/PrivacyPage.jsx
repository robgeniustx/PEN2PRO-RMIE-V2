import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — when you join the waitlist, generate a free roadmap, create an account, or upgrade to Pro, Elite, or Founders. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use your information to generate your business roadmap, operate your account and dashboard, communicate launch updates and offers, process payments through our payment provider, and improve PEN2PRO's AI outputs and product experience. We do not sell your personal information.`,
  },
  {
    title: "3. Payment Information",
    body: `Payments for Pro, Elite, and Founders plans are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how they handle payment data.`,
  },
  {
    title: "4. Data Sharing",
    body: `We share information with service providers who help us run PEN2PRO (hosting, email delivery, payment processing, analytics) under confidentiality obligations. We do not share your personal data with third parties for their own marketing purposes without your consent.`,
  },
  {
    title: "5. Data Retention & Security",
    body: `We retain account and roadmap data for as long as your account is active, and take reasonable technical measures to protect it. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.`,
  },
  {
    title: "6. Your Choices",
    body: `You can request access to, correction of, or deletion of your personal information, and can unsubscribe from marketing emails at any time using the link in any email or by contacting us directly.`,
  },
  {
    title: "7. Contact",
    body: `Questions about this policy can be sent to the contact address listed on the PEN2PRO website.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-black text-white mb-2">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 text-xs">
            <Link to="/terms" className="rounded-lg border border-[#1A2235] px-4 py-2 text-slate-400 hover:border-yellow-500/50 hover:text-yellow-400 transition">Terms of Service →</Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2235] px-4 py-2 text-slate-400 hover:border-yellow-500/50 hover:text-yellow-400 transition">Disclaimer →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
