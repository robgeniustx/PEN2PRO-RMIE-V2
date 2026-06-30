import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated June 2026",
    sections: [
      {
        heading: "What we collect",
        body:
          "When you build a roadmap, join the waitlist, or create an account, we collect the information you give us directly — name, email, phone (optional), business idea details, and the interest level you select. We also collect basic usage data (pages visited, features used) to improve PEN2PRO.",
      },
      {
        heading: "How we use it",
        body:
          "We use your information to generate your business roadmap, manage your account, follow up on waitlist and upgrade interest, and improve the platform. We do not sell your personal information.",
      },
      {
        heading: "Third parties",
        body:
          "We may use trusted third-party services for payments, hosting, analytics, and affiliate partner referrals (LLC formation, banking, funding, credit, and similar business-services partners). These partners only receive what's needed to provide their service.",
      },
      {
        heading: "Your control",
        body:
          "You can request a copy of your data or request deletion of your account at any time by contacting support. We retain waitlist and roadmap data only as long as needed to operate the platform.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body:
          "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its RMIE (Rapid Monetization Intelligence Engine). Free, Pro, Elite, and Founders tiers unlock different levels of access, as described on the Pricing page.",
      },
      {
        heading: "No guarantees",
        body:
          "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Roadmaps, strategies, and checklists are tools for education, planning, and organization — outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Not professional advice",
        body:
          "Nothing on PEN2PRO is legal, tax, financial, or credit-repair advice. For LLC formation, contracts, taxes, or credit disputes, consult a licensed professional. Affiliate and partner links are provided for convenience — review any third-party service's own terms before signing up.",
      },
      {
        heading: "Accounts and payment",
        body:
          "You're responsible for keeping your account credentials secure. Paid tiers (Pro, Elite, Founders) are billed as described at checkout. You can cancel a recurring plan at any time; access continues through the end of the current billing period.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated June 2026",
    sections: [
      {
        heading: "Results vary",
        body:
          "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Every roadmap, checklist, and strategy is built to give you structure and direction — what you do with it determines the outcome.",
      },
      {
        heading: "Funding & credit tools",
        body:
          "The Funding Readiness and Credit Repair tools are educational and organizational. They help you understand where you stand and what lenders typically look for — they are not a promise of approval, and PEN2PRO is not a credit repair organization, lender, or law firm.",
      },
      {
        heading: "Affiliate relationships",
        body:
          "PEN2PRO may earn a commission when you sign up for a partner service (LLC formation, business banking, funding, credit-building, domains, bookkeeping, payment processing, CRM, or insurance) through links on this site. We only recommend services we believe are useful to founders — always review the partner's own terms and pricing.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.terms;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{data.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10">{data.title}</h1>

        <div className="space-y-10">
          {data.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-5 text-sm text-slate-500" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The
          platform provides education, strategy, organization, and readiness tools.
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/about" className="text-sm font-semibold text-slate-400 hover:text-white">About PEN2PRO</Link>
          <Link to="/pricing" className="text-sm font-semibold text-slate-400 hover:text-white">Pricing</Link>
          <Link to="/starter" className="text-sm font-semibold text-slate-400 hover:text-white">Start Free Roadmap</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
