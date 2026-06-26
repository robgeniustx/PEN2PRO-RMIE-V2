import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL_CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 26, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, phone number, and business idea — when you sign up, join the waitlist, or use the PEN2PRO platform. We also collect usage data to improve the product experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to provide and improve the PEN2PRO platform, send you updates about your roadmap and account, communicate about plan changes, and — with your consent — send marketing communications about new features, plans, and resources.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell your personal information. We may share data with trusted service providers (Stripe for payments, email platforms, analytics tools) who are contractually bound to protect it. We may disclose information if required by law.",
      },
      {
        heading: "Cookies & Tracking",
        body: "PEN2PRO uses standard web analytics tools that may place cookies on your device to help us understand site traffic and usage patterns. You can disable cookies in your browser settings.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard measures to protect your data, including encrypted connections (HTTPS) and secure storage. No method of transmission over the internet is 100% secure, but we work to protect your information to the best of our ability.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data by contacting us at the email below. We will respond within 30 days.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, email: support@pen2pro.com",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 26, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO provides AI-powered business roadmap and strategy tools for educational and informational purposes. You agree to use the platform only for lawful purposes and in compliance with these terms.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. Notify us immediately of any unauthorized use.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Paid plans are billed on the schedule shown at purchase. You may cancel at any time; cancellation takes effect at the end of the current billing period. Refunds are handled on a case-by-case basis.",
      },
      {
        heading: "Intellectual Property",
        body: "All content, branding, AI output templates, and platform design are owned by PEN2PRO. Your business ideas and roadmap data remain yours. Do not resell, redistribute, or reverse-engineer the platform.",
      },
      {
        heading: "Disclaimer of Warranties",
        body: "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee business success, income results, funding approval, credit improvement, or any specific outcome from using the platform.",
      },
      {
        heading: "Limitation of Liability",
        body: "To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, or consequential damages arising from use of the platform.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.",
      },
      {
        heading: "Contact",
        body: "For terms questions, email: legal@pen2pro.com",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 26, 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee any level of income, business success, revenue, or profit. Results depend entirely on the individual user's effort, market conditions, business execution, and many factors outside our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "The content, roadmaps, and strategy outputs provided by PEN2PRO are for informational and educational purposes only. Nothing on this platform constitutes financial, legal, tax, or investment advice. Consult licensed professionals before making financial or legal decisions.",
      },
      {
        heading: "No Credit or Funding Guarantee",
        body: "PEN2PRO does not guarantee approval for any loan, line of credit, business funding, grant, or credit product. The platform provides readiness education and checklists — not underwriting, approval, or placement services.",
      },
      {
        heading: "AI Output Accuracy",
        body: "AI-generated content is based on general patterns and your inputs. It may not reflect current regulations, market conditions, or your specific legal jurisdiction. Always verify AI-generated business plans with qualified professionals before execution.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may earn commissions through affiliate partnerships with third-party services (banking, legal, insurance, etc.). These affiliates are vetted but we are not responsible for their products, services, terms, or pricing. Your relationship with those providers is independent of PEN2PRO.",
      },
      {
        heading: "Contact",
        body: "Questions about this disclaimer: legal@pen2pro.com",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const content = LEGAL_CONTENT[pathname] || LEGAL_CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">PEN2PRO</p>
          <h1 className="font-display text-4xl font-black text-white mb-3">{content.title}</h1>
          <p className="text-sm text-slate-500">Last updated: {content.updated}</p>
        </div>

        <div className="space-y-8">
          {content.sections.map((s, i) => (
            <div key={i} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="text-base font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold">Back to Home</Link>
          <Link to="/waitlist" className="btn-outline px-6 py-3 text-sm font-bold">Join Waitlist</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
