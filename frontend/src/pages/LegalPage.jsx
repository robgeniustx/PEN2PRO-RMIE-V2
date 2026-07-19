import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO — starting a free roadmap, joining the waitlist, or creating an account — we collect the information you provide directly, such as your name, email, phone number, and business idea details. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your roadmap and blueprint outputs, communicate with you about your account and product updates, improve PEN2PRO's tools, and — if you opt in — send you offers related to Pro, Elite, Founders, or affiliate partner services.",
      },
      {
        heading: "How we protect it",
        body: "We take reasonable technical and organizational measures to protect your data. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "Sharing",
        body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (hosting, email, payment processing) under confidentiality obligations, or when required by law.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy content, and execution tools through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, resell, or scrape the service without permission.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO is an education, strategy, and organization tool. We do not guarantee business success, income, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Where subscriptions are active, billing is handled securely through our payment processor. You may cancel a paid plan at any time; access continues through the end of the paid period.",
      },
      {
        heading: "Intellectual property",
        body: "The PEN2PRO name, brand, RMIE engine, and platform content are owned by PEN2PRO. Roadmap and blueprint content generated for your account is yours to use for your own business.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational and strategic tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and launch a business. It is not legal, tax, financial, credit repair, or investment advice.",
      },
      {
        heading: "No guaranteed outcomes",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, vendor tradeline approval, or credit repair results. Every situation is different, and results depend on your effort, resources, and market conditions.",
      },
      {
        heading: "Affiliate relationships",
        body: "PEN2PRO may recommend third-party services (LLC formation, business banking, credit, funding, bookkeeping, and similar partners) and may earn a commission if you use those links. We only recommend services we believe can help our users, but you should do your own research before signing up.",
      },
      {
        heading: "Professional advice",
        body: "Before making legal, tax, credit, or major financial decisions, consult a qualified attorney, accountant, or licensed professional. PEN2PRO is a strategy and execution platform, not a substitute for professional counsel.",
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
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.title}</h1>
        <p className="text-slate-500 text-sm mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about our policies? Reach out any time, or{" "}
            <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
              join the PEN2PRO waitlist
            </Link>{" "}
            to stay updated as the platform grows.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
