import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, and related planning tools based on the information you provide. Free, Pro, Elite, and Founders tiers offer different levels of depth and support, as described on our Pricing page.",
  },
  {
    title: "3. No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools — not guarantees. We do not guarantee income, business success, credit repair outcomes, funding approval, or loan approval. Your results depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "4. Account Responsibilities",
    body: "You are responsible for the accuracy of the information you submit and for keeping your login credentials secure. You agree not to misuse the platform, attempt to disrupt its operation, or resell generated content as your own software product.",
  },
  {
    title: "5. Subscriptions & Billing",
    body: "Pro, Elite, and Founders plans are billed on the cadence shown at checkout. You may cancel a recurring subscription at any time; access continues through the end of the paid period. Founders offers, where available, are limited-availability and priced as shown at the time of purchase.",
  },
  {
    title: "6. Intellectual Property",
    body: "The PEN2PRO platform, brand, and underlying technology are owned by PEN2PRO. The roadmap and content generated for your account is yours to use for your own business purposes.",
  },
  {
    title: "7. Limitation of Liability",
    body: "PEN2PRO is provided “as is.” To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the platform or reliance on generated content.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take effect means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 leading-7 mb-10">
          These Terms govern your use of PEN2PRO's AI-powered RMIE platform, including the website,
          roadmap tools, dashboard, and any Pro, Elite, or Founders features.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 mb-4">
            Related reading before you start your roadmap:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/privacy" className="rounded-lg border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
