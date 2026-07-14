import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    intro:
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business idea details — to generate your roadmap, manage your account, and improve the platform.",
    sections: [
      {
        heading: "What We Collect",
        body: "Account details (name, email, password), roadmap intake responses, waitlist submissions, and basic usage analytics (pages visited, features used) to improve the product.",
      },
      {
        heading: "How We Use It",
        body: "To generate your business roadmap and AI-powered strategy output, communicate with you about your account or waitlist status, and improve PEN2PRO's tools and content.",
      },
      {
        heading: "What We Don't Do",
        body: "We do not sell your personal information. We do not share your roadmap contents with third parties except the service providers (hosting, email, payment processing) required to run the platform.",
      },
      {
        heading: "Your Control",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    intro:
      "By using PEN2PRO, you agree to these terms. PEN2PRO is a business planning and strategy platform — it provides education, structure, and AI-generated guidance, not guaranteed outcomes.",
    sections: [
      {
        heading: "The Service",
        body: "PEN2PRO (Rapid Monetization Intelligence Engine) generates business roadmaps, strategy plans, and readiness checklists based on information you provide. Free, Pro, Elite, and Founders tiers unlock different levels of depth and support.",
      },
      {
        heading: "Your Responsibilities",
        body: "You are responsible for the accuracy of the information you submit and for how you use the roadmaps, strategies, and recommendations PEN2PRO generates. Business decisions remain yours to make.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Outcomes depend on individual effort, execution, and market conditions.",
      },
      {
        heading: "Payments",
        body: "Pro, Elite, and Founders plans are billed as described at checkout. Pricing and features are subject to change prior to official launch.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro:
      "PEN2PRO provides education, strategy, organization, and readiness tools — not financial, legal, credit repair, or investment advice.",
    sections: [
      {
        heading: "No Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, or credit repair advice. Consult a licensed professional before making business, legal, credit, or financial decisions.",
      },
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Results depend on individual effort, execution, and market conditions.",
      },
      {
        heading: "AI-Generated Content",
        body: "Roadmaps, strategies, and scripts are generated with AI assistance based on the information you provide. Review all output critically before acting on it.",
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
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">{page.title}</h1>
        <p className="text-slate-400 text-lg leading-8 mb-10">{page.intro}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-black text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 leading-6">
            PEN2PRO does not guarantee income, funding approval, loan approval, or credit repair results. The
            platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>

        <Link to="/" className="mt-10 inline-block text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
