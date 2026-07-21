import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you create an account, join the waitlist, or use the PEN2PRO roadmap tools, we collect information you provide directly — such as your name, email address, phone number (optional), business idea details, and payment information processed through our payment provider. We also collect usage data (pages visited, features used, roadmap inputs) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to create and save your business roadmap, provide account access, process payments and subscriptions, respond to support requests, send product updates you've opted into, and improve PEN2PRO's AI-generated recommendations. We do not sell your personal information to third parties.",
  },
  {
    title: "3. AI-Generated Content",
    body: "PEN2PRO uses AI to generate roadmaps, strategies, and recommendations based on the information you provide. Inputs you submit (business ideas, goals, financial details) may be processed by our AI infrastructure to generate your personalized output. Do not submit sensitive personal information (Social Security numbers, full account numbers) into roadmap or chat fields.",
  },
  {
    title: "4. Data Sharing",
    body: "We share data only with service providers who help us operate PEN2PRO — payment processing, hosting, email delivery, and analytics — under agreements that require them to protect your information. We may disclose information if required by law or to protect the rights, property, or safety of PEN2PRO, our users, or the public.",
  },
  {
    title: "5. Data Security",
    body: "We use industry-standard safeguards to protect your data, including encrypted connections and access controls. No system is 100% secure, and we cannot guarantee absolute security of information transmitted to or stored by PEN2PRO.",
  },
  {
    title: "6. Your Choices",
    body: "You can update or delete your account information at any time by contacting support. You can unsubscribe from marketing emails using the link in any email we send. Waitlist and roadmap data can be removed upon request.",
  },
  {
    title: "7. Cookies & Analytics",
    body: "PEN2PRO uses cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Effective date: January 1, 2026. Your trust matters — here's exactly how PEN2PRO handles your information.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-7">
            Questions about this policy or your data? Contact us through the{" "}
            <Link to="/waitlist" className="text-[#D4A017] hover:underline">waitlist form</Link> or your account dashboard.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
