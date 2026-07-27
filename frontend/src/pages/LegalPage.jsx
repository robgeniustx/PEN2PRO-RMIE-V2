import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "What we collect",
        p: "When you use PEN2PRO — including the free roadmap builder, waitlist form, Builder, Accelerator, and account sign-up — we collect the information you provide directly: name, email, phone (optional), business idea details, and answers used to generate your roadmap. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        h: "How we use it",
        p: "Your information is used to generate your business roadmap, operate your account and dashboard, respond to support requests, and — if you opt in via the waitlist or sign-up flow — to send you updates about PEN2PRO Pro, Elite, and Founders access. We do not sell your personal information.",
      },
      {
        h: "Third-party services",
        p: "PEN2PRO uses trusted third-party providers to operate the platform, including payment processing (Stripe) for Pro/Elite/Founders checkout, AI providers to generate roadmap content, and affiliate partners linked from the Affiliate, Funding, and Credit Repair pages. Each of those providers has its own privacy practices governing data you share with them directly.",
      },
      {
        h: "Your choices",
        p: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. Waitlist and account data is retained only as long as needed to provide the service or as required by law.",
      },
      {
        h: "Contact",
        p: "Questions about this policy can be sent through the contact options listed on the About page.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "Using PEN2PRO",
        p: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps you turn ideas, skills, and experience into a business roadmap, launch plan, and strategy tools. By creating an account or using the free roadmap, Builder, Accelerator, Pro, Elite, or Founders tiers, you agree to these terms.",
      },
      {
        h: "No guarantee of results",
        p: "PEN2PRO provides education, strategy, planning tools, and organizational support. It does not guarantee income, business success, credit repair outcomes, funding approval, or loan approval. Results depend on your own effort, market conditions, and factors outside our control.",
      },
      {
        h: "Subscriptions and billing",
        p: "Pro and Elite are recurring subscriptions billed monthly; Founders is a one-time lifetime access purchase. Checkout is processed securely through Stripe. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
      },
      {
        h: "Acceptable use",
        p: "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to attempt to disrupt or reverse-engineer the platform. We may suspend accounts that violate these terms.",
      },
      {
        h: "Changes",
        p: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "Educational and strategic tool, not a guarantee",
        p: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcome of any plan depends on your execution, financial situation, market conditions, and decisions made by third parties such as lenders, banks, and credit bureaus.",
      },
      {
        h: "Not financial, legal, or credit repair services",
        p: "Nothing on PEN2PRO constitutes financial, legal, tax, or credit repair advice. Funding Readiness and Credit Repair content is provided for informational and organizational purposes. For decisions with legal, tax, or financial consequences, consult a licensed professional.",
      },
      {
        h: "Affiliate relationships",
        p: "PEN2PRO may earn a commission when you use links to partners for LLC formation, business banking, credit building, funding, domains, bookkeeping, payment processing, CRM, or insurance. We only recommend partners we believe add real value, but we do not control their services and are not responsible for their outcomes.",
      },
      {
        h: "Your responsibility",
        p: "You are responsible for verifying any business, credit, or funding decision before acting on it. PEN2PRO roadmaps and checklists are a starting structure, not a substitute for professional due diligence.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.title}</h1>
        <p className="text-slate-500 text-sm mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-white mb-2">{s.h}</h2>
              <p className="text-slate-400 leading-7">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-8 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/waitlist" className="btn-outline px-8 py-3 text-sm font-bold text-center">
            Join the Waitlist
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
