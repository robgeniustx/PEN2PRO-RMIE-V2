import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "July 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone (optional), business idea details, and any answers you give during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, manage your account, communicate with you about your plan or waitlist status, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "AI Processing",
        body: "Roadmap and blueprint content you submit may be processed by third-party AI providers (such as OpenAI) to generate your business plan output. This data is used only to produce your roadmap and is not used to train third-party models beyond standard provider terms.",
      },
      {
        heading: "Payment Data",
        body: "Subscription and Founders payments are processed by Stripe. PEN2PRO does not store your full card details — Stripe handles that securely under its own PCI-compliant systems.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. Waitlist submissions can be removed on request.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy can be sent to the contact address listed on the PEN2PRO website.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "July 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake, roadmap generation, and account creation.",
      },
      {
        heading: "No Guarantee of Outcomes",
        body: "PEN2PRO provides education, strategy, structure, and readiness tools. It does not guarantee income, business success, credit repair results, loan approval, or funding approval. Results depend on individual effort, execution, and market conditions.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders access is billed through Stripe on the plan terms shown at checkout. Subscriptions renew automatically until canceled. Founders access is offered as a one-time lifetime-style purchase under the terms shown on the Founders page at time of purchase.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for keeping your login credentials secure and for all activity under your account.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE engine, and platform content are the property of PEN2PRO and may not be copied, resold, or redistributed without permission. Roadmap output generated for your account is yours to use for your own business.",
      },
      {
        heading: "Changes to These Terms",
        body: "PEN2PRO may update these terms as the platform evolves. Continued use after an update means you accept the revised terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "July 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO is an AI-powered educational and strategic planning platform. It is not a law firm, accounting firm, credit repair organization, lender, or investment advisor.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Business, credit, and funding outcomes depend on individual circumstances, effort, execution, and factors outside PEN2PRO's control.",
      },
      {
        heading: "Not Legal, Financial, or Credit Repair Advice",
        body: "Roadmap output, funding readiness checklists, and credit-building guidance are for informational and organizational purposes only and should not be treated as legal, tax, financial, or credit repair advice. Consult a licensed attorney, accountant, or financial professional before making binding business, legal, or financial decisions.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you use partner links for services such as LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, or insurance. Recommendations are based on genuine usefulness to founders, not exclusively on commission.",
      },
      {
        heading: "Your Responsibility",
        body: "You are responsible for verifying any business, legal, credit, or financial decision before acting on it. PEN2PRO provides structure and strategy — execution and outcomes remain your responsibility.",
      },
    ],
  },
};

export default function LegalPage({ slug }) {
  const content = LEGAL_CONTENT[slug] || LEGAL_CONTENT.disclaimer;

  useEffect(() => {
    document.title = `${content.title} | PEN2PRO`;
    return () => {
      document.title = "PEN2PRO — Turn Your Idea Into Income";
    };
  }, [content.title]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">
            {content.title}
          </h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {content.updated}</p>

          <div className="space-y-10">
            {content.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              About PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
