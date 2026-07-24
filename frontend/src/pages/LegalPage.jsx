import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you give us directly — your name, email, phone number (if provided), business idea details, and any answers you submit in the roadmap builder, waitlist form, or account setup. We also collect basic usage data (pages visited, features used) to improve the product.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, save your progress, send account and product updates, respond to support requests, and — if you opt in — send you offers related to Pro, Elite, or Founders access. We do not sell your personal information to third parties.",
      },
      {
        heading: "AI Processing",
        body: "Roadmap and blueprint content you submit is processed by AI systems to generate your business plan, strategy, and recommendations. Do not submit sensitive personal data (SSNs, full account numbers, medical records) into any roadmap or intake form.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO uses third-party providers for payments (Stripe), hosting, and analytics. Affiliate links on pages like Funding and Credit Repair may earn PEN2PRO a commission if you sign up through them — this does not cost you extra and does not influence the accuracy of our guidance.",
      },
      {
        heading: "Your Rights",
        body: "You can request a copy of your data, ask us to correct it, or request deletion at any time by emailing support@pen2pro.com. We will respond within a reasonable timeframe.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Email support@pen2pro.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through the RMIE (Rapid Monetization Intelligence Engine). By using this platform, you agree to use it for lawful purposes and to provide accurate information when creating your account or roadmap.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, credit score improvement, or any specific outcome. Results depend on your effort, market conditions, execution, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Payments",
        body: "Pro, Elite, and Founders plans are billed through Stripe according to the pricing shown at checkout. Founders access is a limited, early-access offer subject to availability. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE engine, and platform content are the property of PEN2PRO. Roadmap output generated for your account is yours to use for your own business purposes.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for keeping your login credentials secure and for all activity under your account. Do not share your account access with others.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Email support@pen2pro.com.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO and its RMIE (Rapid Monetization Intelligence Engine) provide business strategy, planning, and educational content generated with the help of AI. This is not legal, tax, financial, credit repair, or investment advice.",
      },
      {
        heading: "No Guarantee of Income, Funding, or Credit Results",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcome depends on your own effort, decisions, and market conditions.",
      },
      {
        heading: "Credit & Funding Content",
        body: "Content on the Funding Readiness and Credit Repair pages is for educational purposes. Dispute processes, vendor tradelines, and funding readiness steps described are strategies, not guarantees. Always verify current requirements with the relevant bureau, lender, or agency directly.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you sign up for services (LLC formation, banking, credit monitoring, funding partners, and similar tools) through links on this site. We only recommend tools we believe are useful, but you should do your own research before signing up for any third-party service.",
      },
      {
        heading: "Professional Advice",
        body: "For legal, tax, or financial decisions specific to your situation, consult a licensed attorney, accountant, or financial advisor. PEN2PRO is a strategy and execution platform, not a substitute for licensed professional advice.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          PEN2PRO
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">{data.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{data.updated}</p>

        <div className="mt-10 space-y-8">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border p-5 text-sm text-slate-400" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
          PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform provides
          education, strategy, organization, and readiness tools. Results depend on individual effort and market
          conditions.
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/about" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00]">
            About PEN2PRO
          </Link>
          <Link to="/starter" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00]">
            Start Your Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
