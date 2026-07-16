import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  privacy: {
    title: "Privacy Policy",
    updated: "July 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your roadmap, operate your account, respond to support requests, improve PEN2PRO RMIE, and — if you opt in — share relevant Pro, Elite, Founders, funding, or credit-readiness updates. We do not sell your personal information.",
      },
      {
        heading: "Data Sharing",
        body: "We share data with service providers who help us run PEN2PRO (hosting, email, payment processing, analytics) under confidentiality obligations. Affiliate/funding/credit partner referrals only happen when you actively click through to a partner link.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. You can unsubscribe from marketing emails using the link in any email we send.",
      },
      {
        heading: "Security",
        body: "We use industry-standard safeguards to protect your data. No system is perfectly secure, and we encourage you to use a strong, unique password for your account.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "July 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through the RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, resell, or scrape the service without permission.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair outcomes, or business success. Roadmaps, strategies, and readiness checklists are educational tools — your results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on the cycle shown at checkout. You can cancel at any time; access continues through the end of the paid period. Founders pricing, where offered, is locked in for the terms stated at signup.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, and RMIE methodology are owned by PEN2PRO. Roadmaps generated for your account are yours to use for your own business.",
      },
      {
        heading: "Termination",
        body: "We may suspend accounts that violate these terms or misuse the platform. You may close your account at any time.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "July 2026",
    sections: [
      {
        heading: "Educational, Not Guaranteed",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not legal, financial, tax, or credit repair services.",
      },
      {
        heading: "Not Professional Advice",
        body: "Nothing on PEN2PRO constitutes legal, tax, accounting, or financial advice. Consult a licensed attorney, accountant, or financial advisor before making business, credit, or funding decisions.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "PEN2PRO may earn a commission when you use partner links for LLC formation, business banking, credit, funding, or other services. We only recommend partners we believe add value — but you should independently evaluate any offer before committing.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every founder's situation is different. Background, market, effort, timing, and resources all affect outcomes. Past results shared on this site — including the founder's story — are individual experiences, not promises of what you will achieve.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const content = PAGES[page];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
          Legal
        </p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">
          {content.title}
        </h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {content.updated}</p>

        <div className="space-y-8">
          {content.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about your data or these terms? Reach out any time, or head back and{" "}
            <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
              start your free roadmap
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
