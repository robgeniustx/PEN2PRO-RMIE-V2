import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business idea details — when you build a roadmap, join the waitlist, or create an account.",
      "We use this information to generate your roadmap, respond to inquiries, improve the platform, and, where you've opted in, to send updates about PEN2PRO plans and features.",
      "We do not sell your personal information. We may share data with service providers (such as hosting, email, and payment processors) strictly to operate the platform.",
      "You can request access to, correction of, or deletion of your data at any time by contacting the PEN2PRO team.",
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: 2026",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when building your roadmap or creating an account.",
      "PEN2PRO provides AI-generated business strategy, planning, and readiness tools. Roadmaps, plans, and recommendations are informational and educational — they are not legal, financial, tax, or credit advice.",
      "Pro, Elite, and Founders plans are subscription or one-time offerings described on their respective pages. Pricing and features may change as the platform evolves; active subscribers will be notified of material changes.",
      "PEN2PRO may suspend accounts that violate these terms, abuse the platform, or attempt to misuse AI-generated content for unlawful purposes.",
    ],
  },
  disclaimer: {
    eyebrow: "Legal",
    title: "Disclaimer",
    updated: "Last updated: 2026",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
      "Roadmaps, checklists, and strategy output are educational tools meant to organize and accelerate your own decision-making — they are not a substitute for a licensed attorney, accountant, credit counselor, or financial advisor.",
      "Any affiliate links to third-party services (banking, LLC formation, credit, funding, marketing, and similar tools) are provided for convenience. PEN2PRO may earn a commission from these partners at no additional cost to you.",
      "Use PEN2PRO's strategy, funding readiness, and credit readiness tools as part of a broader plan — always verify critical financial and legal decisions with a qualified professional.",
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">{data.eyebrow}</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{data.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{data.updated}</p>

        <div className="space-y-6">
          {data.body.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out anytime, or head back to your{" "}
            <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
              free roadmap
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
