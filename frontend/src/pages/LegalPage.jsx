import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "How PEN2PRO collects, uses, and protects your information.",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, communicate with you about your account, waitlist status, and plan upgrades, and to improve PEN2PRO's tools and content. We do not sell your personal information to third parties.",
      },
      {
        heading: "Waitlist & Roadmap Data",
        body: "If you join the waitlist or generate a free roadmap, your submission (name, email, phone if provided, business idea, and interest level) is stored so our team can follow up and so you can return to your saved roadmap.",
      },
      {
        heading: "Affiliate & Third-Party Links",
        body: "PEN2PRO links to third-party services (LLC formation, banking, credit, funding, and marketing tools). We may earn a referral commission from these partners. We are not responsible for the privacy practices of third-party sites.",
      },
      {
        heading: "Data Security",
        body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from the platform.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal information at any time by contacting our team through the site.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    subtitle: "The rules for using the PEN2PRO platform.",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "What PEN2PRO Provides",
        body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, and educational content. Free, Pro, Elite, and Founders tiers offer different levels of access, detail, and support.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Account Responsibilities",
        body: "You are responsible for the accuracy of the information you submit and for keeping your account credentials secure. You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful purposes.",
      },
      {
        heading: "Payments & Upgrades",
        body: "Pro, Elite, and Founders plans are billed as described at checkout. Founders/Legacy Founder pricing may be limited-time or limited-availability as stated on the offer page. Refund and cancellation terms are provided at the point of purchase.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, RMIE methodology, and generated content templates are the property of PEN2PRO. Your business ideas and roadmap content remain yours.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted means you accept the updated Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    subtitle: "Please read this before acting on PEN2PRO guidance.",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. Roadmaps, checklists, and AI-generated guidance are for informational purposes and should not be treated as legal, financial, tax, or credit repair advice.",
      },
      {
        heading: "No Guarantee of Income or Success",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or business outcomes of any kind. Every business, market, and individual situation is different. Results depend on your effort, resources, and market conditions.",
      },
      {
        heading: "No Guarantee of Credit Repair Results",
        body: "PEN2PRO does not guarantee credit repair results, score increases, or dispute outcomes. Credit-building content is educational and organizational — always verify current requirements with the credit bureaus and lenders directly.",
      },
      {
        heading: "Consult Licensed Professionals",
        body: "For legal, tax, accounting, or credit-related decisions, consult a licensed attorney, accountant, or credit professional. PEN2PRO is not a law firm, credit repair organization, or financial institution.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may recommend or link to third-party vendors (LLC formation, banking, funding, marketing tools). We are not responsible for the performance, pricing, or outcomes of third-party services.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.terms;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">{data.title}</h1>
        <p className="text-lg text-slate-400 mb-2">{data.subtitle}</p>
        <p className="text-xs text-slate-600 mb-10">{data.updated}</p>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 mb-4">
            Have questions about our policies? Join the waitlist and our team will follow up, or head back to your free roadmap.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="btn-gold rounded-xl px-6 py-3 text-sm font-black">Join the Waitlist</Link>
            <Link to="/starter" className="btn-outline rounded-xl px-6 py-3 text-sm font-semibold">Start Free Roadmap</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
