import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    label: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "What We Collect",
        body:
          "When you use PEN2PRO, we collect the information you give us directly — your name, email, phone number (optional), business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) so we can improve the platform.",
      },
      {
        title: "How We Use Your Information",
        body:
          "We use your information to generate your business roadmap, respond to waitlist and support requests, send product updates you've opted into, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
      },
      {
        title: "Payment Information",
        body:
          "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials on our servers.",
      },
      {
        title: "Data Retention & Control",
        body:
          "You can request a copy of your data or ask us to delete your account and associated roadmap data at any time by contacting support. We retain data only as long as needed to provide the service or as required by law.",
      },
      {
        title: "Third-Party Tools",
        body:
          "PEN2PRO integrates with third-party services (payment processing, email delivery, AI providers, affiliate partners) to operate the platform. Each of those providers has its own privacy practices governing the data they process on our behalf.",
      },
    ],
  },
  terms: {
    label: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "Using PEN2PRO",
        body:
          "PEN2PRO provides AI-generated business roadmaps, strategy content, and organizational tools (the \"Service\"). By creating an account or using the Service, you agree to these Terms.",
      },
      {
        title: "No Guarantee of Results",
        body:
          "PEN2PRO is an educational and strategic planning tool. We do not guarantee income, funding approval, loan approval, credit repair outcomes, or business success. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        title: "Subscriptions & Billing",
        body:
          "Pro and Elite plans are billed on a recurring basis until canceled. Founders/Legacy Founder access is offered under the terms presented at time of purchase. You can manage or cancel your subscription from your account settings.",
      },
      {
        title: "Acceptable Use",
        body:
          "You agree not to misuse the Service — including attempting to reverse-engineer the platform, submit unlawful content, or use PEN2PRO outputs to defraud others.",
      },
      {
        title: "Changes to the Service",
        body:
          "We may update, add, or remove features as PEN2PRO evolves. We'll do our best to communicate material changes that affect your plan.",
      },
    ],
  },
  disclaimer: {
    label: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        title: "Educational Purpose",
        body:
          "PEN2PRO provides business strategy, roadmap, credit-readiness, and funding-readiness content for educational and organizational purposes only. Nothing on this platform constitutes legal, financial, tax, or credit repair advice.",
      },
      {
        title: "No Guaranteed Outcomes",
        body:
          "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcome of any business, credit, or funding effort depends on you, your market, and factors outside our control.",
      },
      {
        title: "Credit & Funding Content",
        body:
          "Credit-readiness and funding-readiness guidance is not a substitute for advice from a licensed credit counselor, attorney, or financial advisor. Always verify requirements directly with lenders, vendors, and credit bureaus.",
      },
      {
        title: "Affiliate Relationships",
        body:
          "Some links on PEN2PRO (LLC formation, banking, credit, funding, and other business tools) are affiliate links. We may earn a commission if you sign up through them, at no extra cost to you. We only recommend tools we believe are useful to founders.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const location = useLocation();
  const fallbackVariant = location.pathname.replace("/", "");
  const key = variant || (CONTENT[fallbackVariant] ? fallbackVariant : "privacy");
  const page = CONTENT[key];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.label}</h1>
        <p className="mb-10 text-sm text-slate-500">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{section.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm leading-7 text-slate-400">
            Questions about privacy, terms, or how PEN2PRO works? Reach out anytime, or start building your free
            roadmap and see the platform for yourself.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="btn-gold px-6 py-3 text-center text-sm font-bold">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="btn-outline px-6 py-3 text-center text-sm font-bold">
              About PEN2PRO
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
