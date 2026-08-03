import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    label: "Privacy Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone, business idea, and roadmap intake answers — plus basic usage data (pages visited, features used) so we can improve the product.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your roadmap, operate your account, communicate with you about PEN2PRO, and improve our AI models and product experience. We do not sell your personal data.",
      },
      {
        heading: "How we protect it",
        body: "We apply industry-standard safeguards to protect your data in transit and at rest. Access to customer data is limited to team members who need it to operate and support the platform.",
      },
      {
        heading: "Your choices",
        body: "You can request a copy of your data, ask us to delete your account, or unsubscribe from emails at any time by contacting support.",
      },
    ],
  },
  "/terms": {
    label: "Terms of Service",
    updated: "January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. You agree to use the platform for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No guarantees",
        body: "PEN2PRO does not guarantee income, funding approval, credit outcomes, or business success. Roadmaps, strategies, and recommendations are educational tools — your results depend on your own effort, market conditions, and execution.",
      },
      {
        heading: "Subscriptions & billing",
        body: "Pro, Elite, and Founders plans are billed on the cadence shown at checkout. You can cancel at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Account responsibility",
        body: "You are responsible for keeping your login credentials secure and for all activity under your account.",
      },
    ],
  },
  "/disclaimer": {
    label: "Disclaimer",
    updated: "January 2026",
    sections: [
      {
        heading: "Educational tool, not a guarantee",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, credit repair, or tax advice.",
      },
      {
        heading: "Consult a professional",
        body: "Before making major financial, legal, or business decisions, consult a licensed attorney, accountant, or financial advisor. PEN2PRO's AI-generated roadmaps are a starting point, not a substitute for professional guidance.",
      },
      {
        heading: "Individual results vary",
        body: "Every founder's situation is different. Prior outcomes — including the founder's own story — are not a promise of what you will experience. Your results depend on your market, resources, and execution.",
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
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">
          {page.label}
        </h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: {page.updated}</p>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on individual effort and market conditions. Questions about this page? Reach out to support.
          </p>
          <Link to="/waitlist" className="mt-4 inline-block rounded-lg px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
            Join the Waitlist
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
