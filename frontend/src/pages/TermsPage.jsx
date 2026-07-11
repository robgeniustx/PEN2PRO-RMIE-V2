import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Using PEN2PRO",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, strategy, and execution support. By creating an account or joining the waitlist, you agree to these Terms.",
  },
  {
    title: "2. Plans & Payment",
    body: "PEN2PRO offers a free Starter roadmap and paid tiers — Pro, Elite, and Founders. Paid subscriptions are billed through Stripe on a recurring basis unless noted as one-time (such as certain Founders offers). You can cancel a recurring subscription at any time; access continues through the end of the paid period.",
  },
  {
    title: "3. No Guaranteed Outcomes",
    body: "PEN2PRO provides education, strategy, planning tools, and organization — not guaranteed results. We do not guarantee income, business success, credit repair outcomes, loan approval, or funding approval. Your results depend on your own effort, market conditions, and factors outside our control.",
  },
  {
    title: "4. Your Content",
    body: "You retain ownership of the business ideas and information you enter into PEN2PRO. You grant us a limited license to process that information solely to generate your roadmap and provide the service.",
  },
  {
    title: "5. Acceptable Use",
    body: "Don't use PEN2PRO to submit unlawful content, attempt to breach platform security, resell platform access without authorization, or misrepresent yourself. We may suspend or terminate accounts that violate these Terms.",
  },
  {
    title: "6. Third-Party Services & Affiliate Links",
    body: "PEN2PRO links to third-party services for LLC formation, banking, credit monitoring, funding, and other business needs. These are independent companies. We are not responsible for their products, pricing, or terms, and we may earn a referral commission from some of these links.",
  },
  {
    title: "7. Disclaimer of Warranties",
    body: "PEN2PRO is provided \"as is.\" AI-generated roadmaps and strategy content are informational and should be reviewed with your own judgment — and, where appropriate, a licensed attorney, accountant, or financial advisor — before you rely on them for legal, tax, or financial decisions.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the fullest extent permitted by law, PEN2PRO and its founders are not liable for indirect, incidental, or consequential damages arising from your use of the platform, including business losses or missed opportunities.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400">Last updated: 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-6">
            See how your data is handled, and what to expect from credit and funding guidance.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/pricing" className="btn-gold rounded-lg px-5 py-2.5 text-sm font-bold text-[#080C14]">
              View Pricing
            </Link>
            <Link to="/privacy" className="btn-outline rounded-lg px-5 py-2.5 text-sm font-bold">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="btn-outline rounded-lg px-5 py-2.5 text-sm font-bold">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
