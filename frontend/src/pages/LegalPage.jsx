import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, communicate with you about your account and the waitlist, improve our AI recommendations, and — if you opt in — send updates about Pro, Elite, and Founders access.",
      },
      {
        heading: "How We Protect It",
        body: "Your data is stored securely and is never sold to third parties. Affiliate and funding partner referrals only occur when you actively click a partner link — we do not share your roadmap details with partners without your action.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. Waitlist and account data is retained only as long as needed to operate the platform.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through the RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use the output as guidance — not as legal, financial, tax, or credit advice.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on the cadence shown at checkout. You may cancel at any time; access continues through the end of the paid period. Founders pricing, where offered, is locked in for the life of the account under the terms presented at signup.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to resell or redistribute generated roadmaps and strategy content without permission.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. Roadmaps, funding readiness checklists, and credit-building guidance are informational only and are not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.",
      },
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every situation is different, and results depend on your own effort, credit history, market, and execution.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a referral commission when you use partner links for services like LLC formation, business banking, funding, or bookkeeping. We only recommend partners we believe offer real value, but you should always do your own due diligence before signing up.",
      },
      {
        heading: "Founder Story",
        body: "Stories shared on this platform, including the founder's personal experience, reflect one individual's journey. They are shared for inspiration and context, not as a promise of similar outcomes for every user.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">{page.updated}</p>
        <h1 className="mb-10 font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-xl font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-[#FF8A00]">Privacy</Link>
          <Link to="/terms" className="text-sm text-slate-500 hover:text-[#FF8A00]">Terms</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-[#FF8A00]">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-[#FF8A00]">Back Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
