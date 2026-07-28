import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — such as your name, email, phone number, and business idea details submitted through the roadmap intake, waitlist, or account forms — along with basic usage data (pages visited, features used) to help us improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, manage your account and plan tier, communicate updates about PEN2PRO, and improve our AI-generated strategy output. We do not sell your personal information to third parties.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use third-party services for payment processing (Stripe), analytics, and affiliate partner referrals (business formation, banking, credit, and funding partners). Those providers have their own privacy policies governing data they process on our behalf.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. Opting out of marketing emails will not affect your access to your saved roadmap or account.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy can be sent to the support email listed on your account or waitlist confirmation.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Free, Pro, Elite, and Founders tiers. By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders access is billed according to the plan selected at checkout. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Founders lifetime offers are limited and subject to availability at time of purchase.",
      },
      {
        heading: "Intellectual Property",
        body: "Roadmaps and strategy output generated for your account are yours to use for your own business. The PEN2PRO platform, brand, and underlying technology remain the property of PEN2PRO.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      {
        heading: "Educational & Strategy Tool",
        body: "PEN2PRO's RMIE (Rapid Monetization Intelligence Engine) provides business planning, strategy, and organizational guidance. It is not a substitute for legal, tax, financial, or credit counseling advice from a licensed professional.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business formation approval, or business success of any kind. The platform provides education, strategy, organization, and readiness tools — the results depend on your execution and circumstances outside our control.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a referral commission from partner services (LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, and insurance providers) linked from the Affiliate, Funding, and Credit Repair pages. We only recommend services we believe can genuinely help our users.",
      },
      {
        heading: "Your Responsibility",
        body: "You are responsible for verifying any legal, tax, or financial decisions with a qualified professional before acting on them. PEN2PRO's guidance is meant to prepare and organize you, not replace professional advice.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-500">PEN2PRO</p>
        <h1 className="mb-10 font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#1A2D50] pt-10 sm:flex-row">
          <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
            Start Free Roadmap
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
