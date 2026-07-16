import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO — including the free roadmap tool, waitlist, and account sign-up — we collect the information you provide directly (name, email, phone, business idea, plan interest) and basic usage data (pages visited, features used) to improve the product.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your roadmap, save your progress, communicate about your account and plan upgrades, and improve PEN2PRO. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & partner links",
        body: "PEN2PRO's Affiliate Resource Center links to third-party services (LLC formation, banking, credit, funding, and more). We may earn a commission when you use these links. Each partner has its own privacy policy — review it before sharing information with them.",
      },
      {
        heading: "Data security",
        body: "We use industry-standard safeguards to protect your account and roadmap data. No online system is 100% secure, and you should use a strong, unique password for your PEN2PRO account.",
      },
      {
        heading: "Your choices",
        body: "You can request a copy of your data, ask us to delete your account, or unsubscribe from emails at any time by contacting support.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to resell, scrape, or misrepresent PEN2PRO-generated content as professional legal, tax, or financial advice.",
      },
      {
        heading: "Plans & billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans renew automatically unless canceled. Founders pricing, where offered, is limited-time and subject to availability.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO gives you structure, strategy, and readiness tools — not guaranteed income, funding approval, credit repair outcomes, or business success. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Intellectual property",
        body: "The PEN2PRO platform, brand, and RMIE methodology are owned by PEN2PRO. Roadmaps generated for your business are yours to use.",
      },
      {
        heading: "Changes to these terms",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational tool, not a guarantee",
        body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. The platform provides education, strategy, organization, and readiness tools — the execution and outcome depend on you.",
      },
      {
        heading: "Not legal, tax, or financial advice",
        body: "Roadmap content, credit-building steps, and funding-readiness checklists are for informational purposes only and are not a substitute for advice from a licensed attorney, accountant, or financial advisor.",
      },
      {
        heading: "Credit & funding readiness",
        body: "Our Credit Repair and Funding Readiness pages provide preparation and organization strategies. They are not a credit repair service under the Credit Repair Organizations Act, and they do not guarantee dispute outcomes, score increases, or lender approval.",
      },
      {
        heading: "Affiliate relationships",
        body: "PEN2PRO may earn a commission from partner links (LLC formation, banking, credit, funding, and other tools). Recommendations are based on genuine usefulness to founders, not payment alone.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{page.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">
          {page.title}
        </h1>
        <div className="space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-sm font-bold text-center">
            Start Your Free Roadmap
          </Link>
          <Link to="/" className="btn-outline px-8 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
