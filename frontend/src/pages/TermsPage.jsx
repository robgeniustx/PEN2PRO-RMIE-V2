import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the PEN2PRO platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform. PEN2PRO reserves the right to update these terms at any time.",
  },
  {
    title: "Use of the Platform",
    body: "PEN2PRO grants you a limited, non-exclusive, non-transferable license to access and use the platform for your personal or business purposes. You may not share account credentials, resell platform access, or use the platform to generate content for competing services.",
  },
  {
    title: "Subscription Plans",
    body: "PEN2PRO offers Free, Pro ($249/mo), Elite ($499/mo), and Founders Lifetime ($1,899) plans. Paid subscriptions are billed in advance. Cancellations are effective at the end of the current billing period. The Founders Lifetime plan is a one-time payment with no recurring charges.",
  },
  {
    title: "Refund Policy",
    body: "We offer a 30-day satisfaction review for monthly subscribers. If you are unsatisfied within the first 30 days, contact us at support@pen2pro.com. Refund eligibility is reviewed on a case-by-case basis. Founders Lifetime purchases are non-refundable after 7 days.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is provided for educational and planning purposes only. AI output does not constitute legal, financial, or professional advice. Always consult qualified professionals before making major business or financial decisions.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO brand, platform design, and proprietary features are the intellectual property of PEN2PRO. Roadmaps and blueprints generated through the platform belong to the user who created them. You retain ownership of any business information you submit.",
  },
  {
    title: "Prohibited Uses",
    body: "You may not use PEN2PRO to engage in fraudulent activity, violate applicable laws, infringe on intellectual property rights, transmit harmful content, or attempt to reverse-engineer the platform. Violation of these terms may result in immediate account termination.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for business losses, failed funding applications, credit decisions, or outcomes resulting from the use of roadmaps, strategies, or AI-generated content. The platform is a tool — results depend on individual effort, market conditions, and execution.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact us at support@pen2pro.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            These Terms of Service govern your use of the PEN2PRO platform. Please read them carefully before using the platform.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy →
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
