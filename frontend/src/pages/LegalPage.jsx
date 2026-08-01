import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, manage your account, communicate about your plan or waitlist status, and improve PEN2PRO's AI-powered recommendations. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "PEN2PRO's Funding, Credit Repair, and Affiliate pages link to third-party partners (business formation, banking, credit, and funding services). If you click through and take action with a partner, PEN2PRO may earn a referral commission. Your relationship with any third-party partner is governed by that partner's own privacy policy and terms.",
      },
      {
        heading: "Data Storage & Security",
        body: "Roadmap and waitlist data is stored securely and used only to operate and improve PEN2PRO. We take reasonable technical and organizational measures to protect your data, but no system is 100% secure.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. Unsubscribing from email communications will not affect your access to any paid plan you've purchased.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, strategy, and execution guidance. By using PEN2PRO, you agree to use the platform lawfully and not to misuse, resell, or scrape its content or AI outputs without permission.",
      },
      {
        heading: "Plans & Billing",
        body: "The Starter roadmap is free. Pro, Elite, and Founders are paid tiers billed on the terms shown at checkout. You may cancel a recurring plan at any time; cancellation stops future billing but does not refund already-billed periods unless required by law.",
      },
      {
        heading: "No Professional Guarantee",
        body: "PEN2PRO provides business education, strategy, planning tools, and organizational support. It is not legal, tax, financial, or credit repair advice, and it does not guarantee income, funding approval, loan approval, credit score changes, or business success. Outcomes depend on your own effort, market conditions, and factors outside PEN2PRO's control.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, platform, and AI-generated roadmap frameworks are the property of PEN2PRO. Your business idea and the roadmap generated for you are yours to use freely in your own business.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. It is not a law firm, a bank, a lender, a credit repair organization, or a registered investment or financial advisor.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Roadmaps, checklists, and strategy output are informational starting points — real-world results depend on your effort, execution, local market, and factors PEN2PRO does not control.",
      },
      {
        heading: "Credit & Funding Content",
        body: "Any credit-building, business credit, or funding readiness content on PEN2PRO is educational. Always verify requirements directly with lenders, credit bureaus, or financial institutions before taking action.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may link to and earn commission from third-party partners referenced on the Affiliate, Funding, and Credit Repair pages. These are not endorsements of guaranteed outcomes — do your own due diligence before using any third-party service.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">PEN2PRO Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2">{page.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400 leading-7">
            Questions about these policies, or want something clarified? Reach out from your{" "}
            <Link to="/dashboard" className="text-[#FF8A00] font-semibold hover:underline">dashboard</Link>{" "}
            or start with a{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">free roadmap</Link>{" "}
            to see PEN2PRO in action.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
