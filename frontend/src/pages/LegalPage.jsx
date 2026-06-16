import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — including your name, email address, phone number, and business details when you create an account, join the waitlist, or generate a roadmap. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, communicate platform updates and your launch status, improve the PEN2PRO experience, and send relevant business resources. We never sell your data to third parties.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard encryption and secure servers to protect your information. Your roadmap data and personal information are stored securely and never shared without your consent.",
      },
      {
        heading: "Cookies",
        body: "We use essential cookies to keep you signed in and remember your preferences. We may use analytics cookies to understand how people use the platform. You can disable cookies in your browser settings.",
      },
      {
        heading: "Contact",
        body: "Questions about your privacy? Contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these terms. If you do not agree, do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and business development resources for educational and planning purposes. You are responsible for how you use the information provided.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee business success, income, funding approval, loan approval, or credit repair results. Roadmaps and strategies are generated based on the information you provide. Results depend entirely on individual effort, market conditions, and execution.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the security of your account credentials. Do not share your login with others. You are responsible for all activity under your account.",
      },
      {
        heading: "Payments and Refunds",
        body: "Subscription fees are billed as described at checkout. Founders Lifetime is a one-time payment. Refund requests are handled on a case-by-case basis within 7 days of purchase. Contact support@pen2pro.com for refund inquiries.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO content, branding, and platform code are the property of PEN2PRO. You retain ownership of the business ideas and content you input into the platform.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Not Financial or Legal Advice",
        body: "PEN2PRO is a business planning and strategy platform. Nothing on this platform constitutes financial advice, legal advice, tax advice, or investment advice. Always consult licensed professionals for financial, legal, and tax decisions.",
      },
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that use of the platform will result in income, revenue, profit, business success, or employment. Business outcomes depend on individual effort, market conditions, competition, and many factors outside our control.",
      },
      {
        heading: "No Funding Guarantee",
        body: "Funding readiness tools and credit guidance are for educational purposes only. PEN2PRO does not guarantee loan approval, credit approval, grant eligibility, or access to capital. Lender decisions are made independently.",
      },
      {
        heading: "No Credit Repair Guarantee",
        body: "Credit-related guidance on PEN2PRO is educational only. PEN2PRO is not a credit repair organization and does not guarantee improvement to credit scores, removal of negative items, or changes to credit profiles.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may earn commissions from affiliate partnerships with third-party tools and services listed on the platform. These partnerships do not affect our recommendations. We only list services we believe are useful to entrepreneurs.",
      },
    ],
  },
};

export default function LegalPage() {
  const loc = useLocation();
  const page = CONTENT[loc.pathname] || CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO</div>
        <h1 className="mb-2 font-display text-4xl font-black">{page.title}</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated: {page.lastUpdated}</p>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 text-center">
          <p className="mb-4 text-sm text-slate-400">
            Questions? Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="font-semibold text-[#FF8A00]">
              support@pen2pro.com
            </a>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-6 py-2.5 text-sm font-black text-[#080C14] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2235] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
