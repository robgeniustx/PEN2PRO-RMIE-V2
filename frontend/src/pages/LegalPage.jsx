import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO — including the Starter roadmap, waitlist, Builder, Accelerator, and account sign-up — we collect the information you provide directly (name, email, phone, business idea) along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your business roadmap, communicate with you about your account and PEN2PRO updates, personalize your experience, and improve our AI-generated strategy output. We do not sell your personal information.",
      },
      {
        heading: "Data sharing",
        body: "We share data only with service providers that help us operate PEN2PRO (hosting, email, payment processing, analytics) under confidentiality obligations, or when required by law.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting us. You may also unsubscribe from marketing emails at any time.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information when completing intake forms.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans renew automatically unless canceled. Founders Lifetime access is a one-time purchase tied to a limited number of spots.",
      },
      {
        heading: "No guarantees",
        body: "PEN2PRO provides strategy, structure, and education — not a guarantee of income, funding, credit improvement, or business success. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Intellectual property",
        body: "Roadmaps and content generated for your account are yours to use for your business. PEN2PRO retains ownership of the platform, software, and underlying AI systems.",
      },
    ],
  },
  disclaimer: {
    eyebrow: "Legal",
    title: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Educational purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurship, credit building, and funding preparation. Nothing on this platform constitutes legal, financial, tax, or credit repair advice.",
      },
      {
        heading: "No guaranteed results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business formation success, or income. Every business, credit profile, and funding situation is different.",
      },
      {
        heading: "Professional guidance",
        body: "For legal, tax, credit repair, and lending decisions, consult a licensed attorney, accountant, or financial professional. PEN2PRO's roadmaps and checklists are a starting point, not a substitute for professional advice.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          {data.eyebrow}
        </p>
        <h1 className="font-display text-4xl font-black text-white md:text-5xl">{data.title}</h1>
        <p className="mt-3 text-sm text-slate-500">{data.updated}</p>

        <div className="mt-12 space-y-10">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm leading-6 text-slate-400">
            PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business
            success. Results depend on individual effort, market conditions, and factors outside our control.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/privacy" className="text-sm font-semibold text-slate-400 hover:text-white">Privacy</Link>
          <Link to="/terms" className="text-sm font-semibold text-slate-400 hover:text-white">Terms</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-white">Disclaimer</Link>
          <Link to="/" className="text-sm font-semibold text-[#FF8A00] hover:text-white">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
