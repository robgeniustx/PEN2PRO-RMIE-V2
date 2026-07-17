import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO collects the information you provide when you create an account, join the waitlist, or use the roadmap builder — including your name, email, phone (if provided), and business idea details.",
      "We use this information to generate your roadmap, operate your account, communicate updates about PEN2PRO, and improve the platform. We do not sell your personal information to third parties.",
      "We may share data with service providers who help us operate the platform (hosting, email delivery, payment processing) under confidentiality obligations.",
      "You can request access to, correction of, or deletion of your data at any time by contacting support.",
      "Continued use of PEN2PRO means you accept this policy. We may update it as the platform evolves.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when building your roadmap or account.",
      "PEN2PRO provides business education, strategy, planning tools, and organizational support. It is not a law firm, accounting firm, credit repair organization, or lender, and does not provide legal, tax, or financial advice.",
      "Free, Pro, Elite, and Founders plans each unlock different levels of access as described on the Pricing page. Features may change as the platform develops.",
      "You are responsible for the decisions you make using PEN2PRO's tools and output. PEN2PRO is not liable for business outcomes, financial results, or third-party actions.",
      "We may suspend accounts that violate these terms or misuse the platform. Continued use of PEN2PRO constitutes acceptance of these terms.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business success, or income of any kind.",
      "The platform provides education, strategy, organization, and readiness tools — not certified financial, legal, tax, or credit repair services.",
      "Results depend on individual effort, market conditions, execution, and factors outside of PEN2PRO's control. Nothing on this platform should be treated as a promise of specific outcomes.",
      "Before making major financial, legal, or credit decisions, consult a licensed professional in the relevant field.",
      "By using PEN2PRO, you acknowledge that the roadmaps, strategies, and tools provided are informational and directional — not a guarantee of results.",
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{page.updated}</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((p, i) => (
            <p key={i} className="text-slate-400 leading-7">{p}</p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
