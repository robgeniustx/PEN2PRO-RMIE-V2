import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, plan tier) that helps us improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account and dashboard, respond to support requests, send product and waitlist updates, and improve PEN2PRO's AI-generated strategy output over time. We do not sell your personal information.",
  },
  {
    title: "3. Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials on its own servers — payment details are handled directly by our payment processor under their own security and compliance standards.",
  },
  {
    title: "4. Data Sharing",
    body: "We share data only with service providers that help us operate the platform (hosting, email delivery, payment processing, analytics) and only to the extent needed to provide the service. We do not share your roadmap content, financial details, or personal history with third parties for marketing purposes.",
  },
  {
    title: "5. Data Retention",
    body: "We retain account and roadmap data for as long as your account is active, or as needed to provide the service, comply with legal obligations, and resolve disputes. You can request deletion of your account and associated data at any time.",
  },
  {
    title: "6. Your Choices",
    body: "You can update your account information, unsubscribe from marketing emails, and request a copy or deletion of your data by contacting support. Waitlist submissions can be removed on request.",
  },
  {
    title: "7. Security",
    body: "We use industry-standard safeguards — encrypted connections, access controls, and hashed credentials — to protect your information. No system is 100% secure, and we encourage users to use strong, unique passwords.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0A0F1E] p-6">
          <p className="text-sm text-slate-400">
            Questions about your data? Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">
              support@pen2pro.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
