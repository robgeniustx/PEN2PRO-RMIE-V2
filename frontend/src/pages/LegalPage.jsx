import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL_CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you create an account or join the waitlist, we collect your name, email address, phone number (optional), and information about your business idea and interest level. We collect this information only to improve your experience with PEN2PRO and to contact you about your account, roadmap, and relevant platform updates.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use collected information to generate your business roadmap, personalize your platform experience, send account-related communications, notify you about updates and new features, and process payments through our payment processor (Stripe). We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Storage and Security",
        body: "Your data is stored securely using industry-standard encryption. We use MongoDB with secure cloud hosting. Passwords are hashed and never stored in plain text. Payment information is processed and stored by Stripe — we do not store your card details.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses minimal cookies for authentication (JWT tokens stored in localStorage) and basic analytics to understand how users interact with the platform. We do not use advertising tracking cookies.",
      },
      {
        heading: "Your Rights",
        body: "You may request deletion of your account and associated data at any time by contacting us at support@pen2pro.com. You may also request a copy of your data or correction of inaccurate information.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO uses the following third-party services: Stripe (payment processing), OpenAI (AI roadmap generation), SendGrid (email delivery), and Cloudflare (security and performance). Each of these services has its own privacy policy governing their data use.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions or requests, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, do not use the platform.",
      },
      {
        heading: "Platform Description",
        body: "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy tools, funding readiness guidance, and execution support. PEN2PRO is an educational and organizational tool — not a licensed financial advisor, attorney, credit counselor, or business consultant.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, business success, funding approval, credit improvement, or any specific business outcome. Results depend entirely on individual effort, market conditions, business model viability, and external factors beyond our control. Every business is different. Past results described on this platform are illustrative and not typical.",
      },
      {
        heading: "User Responsibilities",
        body: "You are responsible for the accuracy of the information you provide. You agree not to misuse the platform, share account credentials, reverse-engineer the system, or use generated content to violate applicable laws. You must be 18 or older to create an account.",
      },
      {
        heading: "Subscriptions and Payments",
        body: "Paid subscriptions (Pro, Elite) are billed monthly. The Founders Lifetime plan is a one-time payment. Subscriptions can be cancelled at any time — you retain access through the end of the billing period. Refunds are handled on a case-by-case basis within 72 hours of a charge. Contact support@pen2pro.com for refund requests.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, name, logo, and software are owned by PEN2PRO LLC. AI-generated roadmap content produced by the platform using your inputs is provided to you for your personal and business use. You may not resell, license, or redistribute generated content as a standalone product.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided 'as is.' To the maximum extent permitted by law, PEN2PRO LLC shall not be liable for indirect, incidental, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the amount you paid in the 3 months preceding the claim.",
      },
      {
        heading: "Changes to Terms",
        body: "We reserve the right to update these terms. Material changes will be communicated by email or platform notification. Continued use of the platform after changes constitutes acceptance.",
      },
      {
        heading: "Contact",
        body: "For questions about these terms, contact support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Not Financial or Legal Advice",
        body: "PEN2PRO provides business strategy, roadmaps, and organizational tools for educational and planning purposes only. Nothing on this platform constitutes financial advice, legal advice, investment advice, credit counseling, or any form of licensed professional service.",
      },
      {
        heading: "No Guarantee of Income or Business Success",
        body: "PEN2PRO does not guarantee that following any roadmap, plan, or strategy generated by this platform will result in business success, income, profit, funding approval, or any specific financial outcome. All business outcomes depend on individual effort, market conditions, execution quality, capital, timing, and many external factors that PEN2PRO cannot control or predict.",
      },
      {
        heading: "No Guarantee of Credit or Funding Results",
        body: "PEN2PRO provides credit readiness education and funding preparation guidance. We do not guarantee that following our credit or funding readiness checklists will result in improved credit scores, loan approval, business credit approval, or funding of any kind. Credit and funding decisions are made by third-party lenders and creditors who are not affiliated with PEN2PRO.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn affiliate commissions when users sign up for or purchase third-party products and services through links on this platform (LLC formation services, business banking, credit tools, etc.). These affiliate relationships do not influence our recommendations. We only recommend services we believe are valuable for our users.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps and strategies generated by PEN2PRO are produced by AI models and are based on the information you provide. They represent starting points for your business planning — not expert-verified analysis. Always verify legal, financial, and regulatory requirements for your specific business type and location with appropriate licensed professionals.",
      },
      {
        heading: "Testimonials and Case Studies",
        body: "Any testimonials, results, or case studies shared on this platform represent individual experiences and are not necessarily typical. Results vary based on individual effort, skills, market, and many other factors.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const content = LEGAL_CONTENT[pathname] || LEGAL_CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
            Legal
          </div>
          <h1 className="mb-2 font-display text-4xl font-black text-white">{content.title}</h1>
          <p className="text-sm text-slate-500">Last updated: {content.lastUpdated}</p>
        </div>

        {/* Legal nav */}
        <div className="mb-10 flex flex-wrap gap-2">
          {[
            { label: "Privacy Policy", path: "/privacy" },
            { label: "Terms of Service", path: "/terms" },
            { label: "Disclaimer", path: "/disclaimer" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                pathname === path
                  ? "bg-[#1A2D50] text-white"
                  : "border border-[#1A2D50] text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {content.sections.map((section) => (
            <div key={section.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{section.heading}</h2>
              <p className="text-sm leading-relaxed text-slate-400">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Back CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            ← Back to PEN2PRO
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
