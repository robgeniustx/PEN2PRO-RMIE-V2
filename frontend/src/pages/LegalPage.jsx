import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO — including the free roadmap builder, waitlist, Builder, Accelerator, or Pro/Elite/Founders tools — we collect the information you submit directly (name, email, phone if provided, business idea details, roadmap answers) and basic usage data (pages visited, features used, referral source) to operate and improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your roadmap and blueprint, manage your account and subscription tier, respond to support requests, send updates about your waitlist status or plan, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
      },
      {
        heading: "Payment Data",
        body: "Subscription and Founders payments are processed by Stripe. PEN2PRO does not store your full card number — Stripe handles payment collection and PCI compliance directly.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "Some pages (Affiliate, Funding, Credit Repair) link to third-party services for LLC formation, business banking, credit, and funding. Once you leave PEN2PRO for a partner site, that partner's own privacy policy applies.",
      },
      {
        heading: "Data Retention & Your Rights",
        body: "You can request a copy of your data or ask us to delete your account and associated roadmap data at any time by contacting support. We retain waitlist and account data only as long as needed to operate the platform.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy can be sent through the Sign In / Contact channels on the platform.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into a business roadmap. By creating a roadmap, joining the waitlist, or subscribing to Pro, Elite, or Founders, you agree to these terms.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, structure, and organizational tools. We do not guarantee income, business success, funding approval, loan approval, credit repair results, or any specific outcome. Results depend on your own effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro and Elite are recurring subscriptions billed through Stripe until canceled. Founders access is offered as a limited, early-adopter tier under the pricing shown at checkout. You can manage or cancel your subscription at any time from your account.",
      },
      {
        heading: "Acceptable Use",
        body: "Do not use PEN2PRO to generate content for illegal activity, to defraud lenders or credit issuers, or to misrepresent your business to customers, partners, or government agencies.",
      },
      {
        heading: "Intellectual Property",
        body: "Roadmaps, blueprints, and strategy output generated for your account are yours to use for your business. The PEN2PRO platform, brand, and underlying software remain the property of PEN2PRO.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "January 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurship, funding preparation, and credit building. It is not a law firm, accounting firm, licensed credit repair organization, lender, or registered investment advisor.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every roadmap, checklist, and strategy is a starting point — outcomes depend on individual effort, execution, timing, and market conditions.",
      },
      {
        heading: "Credit & Funding Content",
        body: "Content on the Credit Repair and Funding Readiness pages is for informational and organizational purposes. It does not replace advice from a licensed credit counselor, attorney, accountant, or lender. Dispute outcomes with credit bureaus are never guaranteed by any service.",
      },
      {
        heading: "Third-Party Affiliate Links",
        body: "PEN2PRO may link to third-party providers (LLC formation, banking, bookkeeping, insurance, marketing, and funding partners) and may earn a referral commission. We do not control and are not responsible for the products, pricing, or outcomes of third-party services.",
      },
      {
        heading: "Your Responsibility",
        body: "You are responsible for verifying legal, tax, and financial decisions with a qualified professional before acting on them. Use PEN2PRO's roadmaps and checklists as a strategic guide, not as a substitute for professional advice.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/privacy"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-5xl">
          {page.title}
        </h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: {page.updated}</p>

        <div className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-lg font-bold text-white mb-2 md:text-xl">
                {section.heading}
              </h2>
              <p className="text-slate-400 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#1A2D50] pt-8 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">
            Start Your Free Roadmap
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
