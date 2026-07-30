import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea, and answers you provide during roadmap intake — along with basic usage data (pages visited, features used, device/browser type) so we can improve the product.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan and the platform, improve our AI models and content, and — if you opt in — send updates about PEN2PRO Pro, Elite, Legacy Founder access, and relevant offers.",
      },
      {
        heading: "What we don't do",
        body: "We do not sell your personal information. We do not share your roadmap content or business details with third parties for their own marketing purposes. Affiliate partners referenced on this site (LLC formation, banking, funding, etc.) only receive information you choose to share directly with them.",
      },
      {
        heading: "Data storage & security",
        body: "Your data is stored on secured infrastructure with access controls limited to what's required to operate PEN2PRO. No system is 100% secure, and we work to apply reasonable safeguards against unauthorized access, alteration, or loss.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can also unsubscribe from marketing emails using the link in any message we send.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Reach out through the Waitlist or Sign In pages and we'll get back to you.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By creating an account or using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, funding approval, credit outcomes, or business success. Your results depend on your own effort, market conditions, execution, and factors outside our control.",
      },
      {
        heading: "Plans & billing",
        body: "Starter access is free. Pro, Elite, and Legacy Founder are paid tiers. Where subscriptions are active, billing terms, renewal, and cancellation details are presented at checkout. Where a tier is in waitlist status, no payment is collected until the plan is live.",
      },
      {
        heading: "Your content",
        body: "You own the business ideas, plans, and content you enter into PEN2PRO. We use it to generate your roadmap and improve the platform's outputs, but we do not claim ownership of your business concepts.",
      },
      {
        heading: "Acceptable use",
        body: "Don't use PEN2PRO to submit unlawful content, attempt to disrupt the platform, or misrepresent your identity. We reserve the right to suspend accounts that violate these terms.",
      },
      {
        heading: "Changes to these terms",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational, not guaranteed",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcomes depend on your individual actions, market conditions, and factors PEN2PRO cannot control.",
      },
      {
        heading: "Not financial, legal, or credit repair advice",
        body: "Content on PEN2PRO — including roadmaps, funding readiness checklists, and credit-building guidance — is for informational and strategic planning purposes only. It is not a substitute for advice from a licensed attorney, accountant, financial advisor, or credit counselor. Consult a qualified professional before making financial or legal decisions.",
      },
      {
        heading: "Affiliate relationships",
        body: "Some links on PEN2PRO (LLC formation, business banking, funding, bookkeeping, insurance, and similar services) are affiliate links. We may earn a commission if you sign up through them, at no additional cost to you. We only recommend services we believe are genuinely useful for founders.",
      },
      {
        heading: "Individual results vary",
        body: "Examples, case studies, and roadmap projections shown on PEN2PRO reflect illustrative scenarios or individual outcomes and are not a promise of what you will achieve. Business building carries real risk, including the risk of losing time and money.",
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
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>
        <p className="mt-3 text-sm text-slate-500">{page.updated}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm leading-7 text-slate-400">
            PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on
            individual effort and market conditions.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-[#D4A017]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D4A017]">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#D4A017]">Disclaimer</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-center text-sm font-bold">
            Start Your Free Roadmap
          </Link>
          <Link to="/waitlist" className="btn-outline px-8 py-3 text-center text-sm font-bold">
            Join the Waitlist
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
