import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — name, email, phone number, business idea details, and payment information processed securely through Stripe. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account and subscription tier, respond to support requests, send product updates, and improve PEN2PRO's AI-generated strategy output. We do not sell your personal information to third parties.",
  },
  {
    title: "Waitlist & Lead Data",
    body: "If you join the PEN2PRO waitlist or submit interest in Pro, Elite, Founders, Affiliate, Funding, or Credit Repair support, that information is stored so our team can follow up and so we can track referral sources (including ?ref= links).",
  },
  {
    title: "Payment Processing",
    body: "All payments are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how your payment data is handled.",
  },
  {
    title: "Data Sharing",
    body: "We share data only with the service providers required to run PEN2PRO (payment processing, hosting, email delivery, AI processing). We do not share your information with advertisers or data brokers.",
  },
  {
    title: "Your Rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "Security",
    body: "We use industry-standard safeguards to protect your data. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-6" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 mb-4">
            Questions about how your data is handled? Reach out to our team before joining, or read our Terms and Disclaimer for full context on how PEN2PRO operates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">Terms of Service →</Link>
            <Link to="/disclaimer" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">Disclaimer →</Link>
            <Link to="/waitlist" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">Join the Waitlist →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
