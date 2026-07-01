import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    label: "Privacy Policy",
    title: "Your data stays yours.",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) so we can improve the platform.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your business roadmap, manage your account, respond to support requests, and — if you opt in — send updates about PEN2PRO plans, waitlist status, and relevant resources. We do not sell your personal data.",
      },
      {
        heading: "Third-party services",
        body: "PEN2PRO uses trusted third-party providers (payment processing, hosting, analytics, AI infrastructure) to operate the platform. These providers only receive the data needed to perform their function and are bound by their own privacy and security obligations.",
      },
      {
        heading: "Your control",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. If you joined the waitlist or created an account, you may unsubscribe from communications whenever you like.",
      },
      {
        heading: "Security",
        body: "We use industry-standard safeguards to protect your information. No system is 100% secure, so we encourage strong, unique passwords and prompt reporting of any suspicious activity on your account.",
      },
    ],
  },
  "/terms": {
    label: "Terms of Service",
    title: "The ground rules for using PEN2PRO.",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using the platform",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources (RMIE — Rapid Monetization Intelligence Engine). By using the platform, you agree to provide accurate information and use the tools for lawful business purposes.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO gives you structure, strategy, and organization — not a guarantee of income, funding approval, credit repair outcomes, or business success. Results depend on your effort, market conditions, execution, and factors outside our control.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders plans each unlock different levels of access as described on the Pricing page. Paid plans are billed on the cycle shown at checkout. You can cancel a subscription at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Intellectual property",
        body: "The roadmaps and strategy output generated for your account are yours to use for your own business. PEN2PRO's platform, branding, prompts, and underlying technology remain the property of PEN2PRO.",
      },
      {
        heading: "Account responsibility",
        body: "You're responsible for keeping your login credentials secure and for activity that happens under your account. We may suspend accounts that violate these terms or misuse the platform.",
      },
    ],
  },
  "/disclaimer": {
    label: "Disclaimer",
    title: "Straight talk, no false promises.",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Education and strategy, not guarantees",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success of any kind. The platform provides education, strategy, organization, and readiness tools — the execution and outcome are up to you and the market.",
      },
      {
        heading: "Not legal, financial, or credit repair advice",
        body: "Content on PEN2PRO — including LLC/EIN checklists, funding readiness guidance, and credit-building steps — is for general informational purposes only. It is not a substitute for advice from a licensed attorney, accountant, credit repair organization, or financial advisor. Consult a qualified professional before making legal or financial decisions.",
      },
      {
        heading: "Third-party affiliate resources",
        body: "PEN2PRO may link to third-party services (business formation, banking, funding, credit, marketing tools, and similar) for your convenience. We may earn a referral commission from some of these links. We do not control and are not responsible for the products, services, or outcomes of third-party providers.",
      },
      {
        heading: "Your responsibility",
        body: "Every business carries risk. You are responsible for your own decisions, due diligence, and compliance with applicable laws and regulations in your industry and location.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">{page.label}</p>
          <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{page.title}</h1>
          <p className="text-sm text-slate-500 mb-10">{page.updated}</p>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
                <p className="text-slate-400 leading-7">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5 text-sm text-slate-500">
            PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform
            provides education, strategy, organization, and readiness tools.
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-[#FF8A00]">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-[#FF8A00]">Terms of Service</Link>
            <Link to="/disclaimer" className="text-slate-400 hover:text-[#FF8A00]">Disclaimer</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
