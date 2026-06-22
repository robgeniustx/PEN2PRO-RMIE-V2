import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Last updated: June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "PEN2PRO collects information you provide directly — including your name, email address, business idea, and plan interest — when you join the waitlist, create an account, or submit an intake form. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to deliver the PEN2PRO service, send platform updates and launch communications, personalize your roadmap experience, and improve our product. We do not sell your personal data to third parties.",
      },
      {
        heading: "Email Communications",
        body: "By joining the waitlist or creating an account, you agree to receive email updates about PEN2PRO launches, new features, and relevant offers. You may unsubscribe at any time by clicking the unsubscribe link in any email we send.",
      },
      {
        heading: "Cookies & Analytics",
        body: "PEN2PRO uses standard web analytics tools to understand how visitors use the platform. This may include cookies and session data. No personally identifiable information is shared with analytics providers beyond what is standard for web analytics.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO integrates with third-party services including Stripe (payments), Twilio (voice), and OpenAI (AI generation). Each service maintains its own privacy policy. Affiliate links on the platform may track referrals through cookies.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard encryption and security practices to protect your data. However, no system is 100% secure. We encourage you to use a strong, unique password and to notify us immediately if you suspect unauthorized access.",
      },
      {
        heading: "Contact",
        body: "For privacy questions or data requests, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Effective: June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform. These terms apply to all users, visitors, and others who access the service.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO grants you a limited, non-exclusive, non-transferable license to use the platform for your personal or business purposes. You may not resell, copy, or redistribute PEN2PRO content without written permission.",
      },
      {
        heading: "User Accounts",
        body: "You are responsible for maintaining the security of your account and password. PEN2PRO cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is for educational and planning purposes only. It does not constitute legal, financial, or professional advice. Results will vary based on your specific situation, market conditions, and execution.",
      },
      {
        heading: "Payments & Subscriptions",
        body: "Paid plans are billed monthly or as a one-time lifetime payment as described at checkout. You may cancel your subscription at any time. Refunds are handled on a case-by-case basis. Founders Lifetime purchases are non-refundable after 7 days.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO and its original content, features, and functionality are owned by PEN2PRO and are protected by intellectual property laws. The AI-generated roadmap output created specifically for your business idea is yours to use.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our liability is limited to the amount you paid for the service in the 12 months preceding the claim.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms at any time. Continued use of PEN2PRO after changes constitutes acceptance of the new terms. We will notify users of material changes via email.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Important Notice",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee business success, income, revenue, funding approval, loan approval, credit score improvement, or any specific outcome. The platform provides education, strategy, organization, and readiness tools. Your results depend entirely on your own effort, execution, market conditions, and individual circumstances.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial advice, legal advice, tax advice, or investment advice. All content — including AI-generated roadmaps, strategies, and checklists — is for educational and informational purposes only. Consult a licensed financial advisor, attorney, or CPA before making significant business or financial decisions.",
      },
      {
        heading: "Credit and Funding",
        body: "PEN2PRO provides information about credit-building strategies and funding readiness as general education. We do not guarantee that following our guidance will result in credit approval, loan approval, or improved credit scores. Credit outcomes depend on your full financial profile and the decisions of lenders.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may earn commissions from affiliate partnerships with third-party tools, services, and platforms referenced on the site. These partnerships do not influence our recommendations. We only partner with services we believe provide value to our users.",
      },
      {
        heading: "AI Output Accuracy",
        body: "Business roadmaps, revenue projections, market estimates, and other AI-generated content are based on general patterns and the information you provide. They are not guaranteed to be accurate for your specific market, location, or business type. Always validate AI output with your own research and professional advisors.",
      },
      {
        heading: "Forward-Looking Statements",
        body: "Any references to expected revenue, growth potential, or market opportunity are illustrative estimates, not promises. Building a business involves significant risk. Many businesses do not achieve profitability. PEN2PRO exists to increase your odds of success — not to guarantee it.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            {page.badge}
          </div>
          <h1 className="mb-10 font-display text-4xl font-black md:text-5xl">{page.title}</h1>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="mb-4 text-sm text-slate-400">
              Questions? Contact us at{" "}
              <span className="font-semibold text-[#FF8A00]">support@pen2pro.com</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/" className="rounded-xl btn-gold px-6 py-2.5 text-sm font-black text-[#0A0F1E]">
                Back to Home
              </Link>
              <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Start Free Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
