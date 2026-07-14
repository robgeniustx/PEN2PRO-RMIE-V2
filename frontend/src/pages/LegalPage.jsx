import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data such as pages visited and features used, so we can improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, save your progress, communicate updates about your account or the waitlist, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "PEN2PRO may recommend third-party services (LLC formation, business banking, funding partners, and similar tools) through affiliate links. We may earn a commission if you use these links. Those third parties have their own privacy policies, which we encourage you to review.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored using industry-standard security practices. While no system is 100% secure, we take reasonable steps to protect your information from unauthorized access.",
      },
      {
        heading: "Your Choices",
        body: "You can request a copy of your data, ask us to correct it, or request deletion of your account and associated data at any time by contacting support.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and readiness tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Legacy Founder plans each unlock different levels of access. Where subscriptions are active, billing is processed securely through Stripe. You may cancel a recurring plan at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO. Your business ideas and roadmap content remain yours.",
      },
      {
        heading: "Account Termination",
        body: "We may suspend or terminate accounts that violate these terms, abuse the platform, or attempt to misuse the AI systems. You may close your account at any time.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. It is not a law firm, accounting firm, credit repair organization, or licensed financial advisor, and nothing on this platform should be treated as legal, tax, financial, or credit advice.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business formation approval, or business success of any kind. Results depend on individual effort, financial history, market conditions, and factors beyond our control.",
      },
      {
        heading: "Affiliate Relationships",
        body: "Some links on this platform (LLC formation, banking, funding, credit tools, and similar services) are affiliate links. PEN2PRO may earn a commission from these partners at no extra cost to you. We only recommend services we believe can genuinely help our users.",
      },
      {
        heading: "Your Responsibility",
        body: "Before making significant legal, financial, or credit decisions, we recommend consulting a licensed attorney, accountant, or financial professional. You are responsible for the decisions you make using PEN2PRO's roadmaps and strategy tools.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">{page.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">{page.title}</h1>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5">
          <p className="text-sm leading-7 text-slate-500">
            PEN2PRO does not guarantee income, funding approval, loan approval, or credit repair results. The platform
            provides education, strategy, organization, and readiness tools. Results depend on individual effort and
            market conditions.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/about" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            About PEN2PRO
          </Link>
          <Link to="/starter" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            Start Your Free Roadmap
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
