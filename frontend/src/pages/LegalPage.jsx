import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your roadmap, save your progress, communicate updates about your plan or the waitlist, and improve PEN2PRO's AI and product experience. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "Some pages (Affiliate, Funding, Credit Repair) link to third-party services for LLC formation, banking, credit, and funding. PEN2PRO may earn a commission from these partners. Reviewing a partner's own privacy policy before signing up is your responsibility.",
      },
      {
        heading: "Data Security",
        body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted to the platform.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. Opting out of marketing communications will not affect your access to a roadmap you've already generated.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Professional Advice",
        body: "PEN2PRO does not provide legal, tax, financial, or credit repair advice. Roadmaps, checklists, and strategy output are educational tools meant to organize your thinking and next steps — not a substitute for a licensed attorney, accountant, or financial advisor.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders tiers unlock different levels of access as described on the Pricing page. Where checkout is not yet live, plan pages route to the waitlist. Paid plans, once active, bill on the cycle disclosed at checkout and can be managed or canceled from your account.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO. Roadmap output generated for your business idea is yours to use.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided \"as is.\" We do not guarantee specific business outcomes, income, funding approval, or credit results. Your success depends on your own effort, market conditions, and execution.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, checklist, and strategy is an educational tool — outcomes depend on your market, effort, resources, and execution.",
      },
      {
        heading: "Credit & Funding Content",
        body: "Content on the Funding Readiness and Credit Repair pages is for education and organization only. It does not constitute credit repair services under the Credit Repair Organizations Act, legal advice, or a promise of lender approval.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may receive compensation from third-party partners linked on the Affiliate, Funding, and Credit Repair pages. This does not increase your cost, but you should independently evaluate any partner before purchasing.",
      },
      {
        heading: "Lived-Experience Content",
        body: "Founder story and testimonial content reflect one individual's personal experience. Results and journeys vary — nothing on this site should be read as a typical or expected outcome.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">{data.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">{data.title}</h1>

        <div className="space-y-10">
          {data.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business
            success. The platform provides education, strategy, organization, and readiness tools.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
              Start Your Free Roadmap
            </Link>
            <Link to="/waitlist" className="btn-outline px-6 py-2.5 text-sm font-bold">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
