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
        body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) so we can improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your roadmap, save your progress, communicate with you about your account, waitlist status, and product updates, and to improve PEN2PRO's AI outputs and tools. We do not sell your personal information.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO uses third-party services for payments (Stripe), AI processing, and analytics. These providers only receive the data required to perform their function and are bound by their own privacy and security standards.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. Opting out of marketing emails will not affect access to your saved roadmap or account.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy can be sent through the contact options on our About page.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, resell, or scrape its outputs without permission.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on the cadence shown at checkout. You can cancel recurring plans at any time; access continues through the end of the paid period. Founders pricing, where offered, is locked in for as long as the account remains active and in good standing.",
      },
      {
        heading: "Intellectual Property",
        body: "Roadmaps and content generated for your account are yours to use for your business. PEN2PRO's platform, branding, prompts, and underlying technology remain the property of PEN2PRO.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides business strategy, planning, credit-readiness, and funding-readiness tools for educational and organizational purposes. Nothing on this platform is legal, tax, financial, or credit-repair advice.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Results depend on individual effort, financial history, lender requirements, and market conditions that are outside our control.",
      },
      {
        heading: "Credit & Funding Tools",
        body: "Credit-building and funding-readiness checklists are organizational and educational tools. For disputes, legal credit repair action, or lending decisions, work with a licensed professional or your financial institution directly.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you use partner links for services like LLC formation, business banking, or bookkeeping. We only recommend tools we believe are useful to founders, and using a partner link never costs you extra.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.terms;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">PEN2PRO</p>
        <h1 className="font-display text-4xl font-black text-white mb-2">{page.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5 text-xs leading-6 text-slate-500">
          PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business
          success. The platform provides education, strategy, organization, and readiness tools — not legal,
          financial, or credit-repair advice.
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="btn-outline px-6 py-2.5 text-sm font-bold">Back Home</Link>
          <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">Start Free Roadmap</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
