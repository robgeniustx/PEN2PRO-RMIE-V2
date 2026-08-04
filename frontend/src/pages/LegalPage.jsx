import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    body: [
      [
        "What we collect",
        "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data like which pages and features you interact with.",
      ],
      [
        "How we use it",
        "We use your information to generate your roadmap, save your progress, respond to waitlist and support requests, improve the platform, and — if you opt in — send updates about PEN2PRO Pro, Elite, and Founders access.",
      ],
      [
        "How we protect it",
        "We do not sell your personal information. Data is stored with reasonable technical safeguards, and access to admin tools and waitlist records is restricted to authorized PEN2PRO staff.",
      ],
      [
        "Your choices",
        "You can request a copy of your data or ask us to delete it at any time by contacting us through the waitlist or affiliate contact channels listed on this site.",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    body: [
      [
        "Using PEN2PRO",
        "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      ],
      [
        "No guarantees",
        "Roadmaps, funding readiness checklists, and credit-building guidance are educational and strategic tools — not guarantees of income, funding approval, loan approval, or business success. Results depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
      ],
      [
        "Subscriptions and billing",
        "Pro, Elite, and Founders plans are billed according to the pricing shown at checkout. Founders pricing is offered for a limited time to early adopters and may not be available after launch.",
      ],
      [
        "Account responsibility",
        "You are responsible for the accuracy of the information you submit and for keeping your account credentials secure.",
      ],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    body: [
      [
        "Educational tool, not financial or legal advice",
        "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, or tax advice.",
      ],
      [
        "Consult a professional",
        "For legal formation, tax, credit repair, or lending decisions, consult a licensed attorney, accountant, credit counselor, or financial professional before acting.",
      ],
      [
        "Affiliate relationships",
        "Some links on PEN2PRO (LLC formation, banking, credit, funding, and other business services) are affiliate links. PEN2PRO may earn a commission if you use these services, at no extra cost to you.",
      ],
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">PEN2PRO</p>
        <h1 className="font-display text-4xl font-black text-white mb-2">{page.title}</h1>
        <p className="text-slate-500 text-sm mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.body.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="text-lg font-bold text-white mb-2">{heading}</h2>
              <p className="text-slate-400 leading-7">{text}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about this page? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link>{" "}
            and we'll follow up.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
