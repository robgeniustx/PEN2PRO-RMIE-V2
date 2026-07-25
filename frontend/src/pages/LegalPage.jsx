import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO collects the information you provide directly — name, email, phone, and business details you submit through roadmap intake, waitlist, and account forms. We use this information to generate your roadmap, operate your account, and communicate with you about PEN2PRO.",
      "We do not sell your personal information. We may share limited data with service providers (payment processing, email delivery, analytics) strictly to operate the platform.",
      "You can request access to, correction of, or deletion of your data at any time by contacting support. We retain data only as long as needed to provide the service or as required by law.",
      "PEN2PRO uses cookies and similar technologies for authentication and basic product analytics. You can control cookies through your browser settings.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when creating roadmaps, business plans, or accounts.",
      "PEN2PRO provides AI-generated business strategy, planning, and readiness content. Outputs are informational and educational — they are not legal, financial, tax, or credit-repair advice, and they do not guarantee any business, funding, or income outcome.",
      "Paid tiers (Pro, Elite, Founders) are billed as described at checkout. You may cancel recurring plans at any time; access continues through the end of the paid period.",
      "You retain ownership of the business ideas and content you submit. PEN2PRO retains ownership of the platform, software, and generated templates/frameworks used to produce your roadmap.",
      "We may update these terms as the platform evolves. Continued use after an update means you accept the revised terms.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO is an AI-powered planning and strategy tool. It does not guarantee income, business success, funding approval, loan approval, or credit repair results.",
      "Roadmaps, checklists, and readiness plans are educational starting points built from the information you provide. Your actual results depend on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
      "Any credit, funding, or business-formation guidance is general education and organization support, not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.",
      "Affiliate and partner links on PEN2PRO may result in PEN2PRO earning a commission. We only recommend resources we believe can genuinely help founders execute.",
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
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">{page.updated}</p>
        <h1 className="font-display mb-10 text-4xl font-black text-white md:text-5xl">{page.title}</h1>
        <div className="space-y-6">
          {page.body.map((p, i) => (
            <p key={i} className="text-base leading-8 text-slate-400">
              {p}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
