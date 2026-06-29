import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 29, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "PEN2PRO collects information you provide directly — including your name, email address, phone number, business idea, and plan interest — when you sign up, use the platform, or join the waitlist. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to provide and improve PEN2PRO services, send you platform updates and communications you've opted into, process payments, and provide customer support. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Storage and Security",
        body: "Your data is stored securely using industry-standard encryption. We use reputable cloud infrastructure providers and follow best practices to protect your information. No system is 100% secure, but we take reasonable precautions.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses cookies and similar technologies to maintain session state, remember your preferences, and analyze site traffic. You can disable cookies in your browser settings, but some features may not function properly.",
      },
      {
        heading: "Third-Party Services",
        body: "We use third-party services including payment processors (Stripe), email delivery providers, and analytics tools. These providers have their own privacy policies and we recommend reviewing them.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal data. To make a request, contact us at support@pen2pro.com. We will respond within 30 days.",
      },
      {
        heading: "Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on the platform.",
      },
      {
        heading: "Contact",
        body: "Questions about this Privacy Policy? Reach us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 29, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Description of Service",
        body: "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy tools, funding readiness guidance, and related resources. PEN2PRO is an educational and organizational tool, not a licensed financial advisor, attorney, or credit repair organization.",
      },
      {
        heading: "User Accounts",
        body: "You are responsible for maintaining the security of your account credentials. You agree not to share your account with others or use another person's account. You must provide accurate information when creating your account.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree to use PEN2PRO only for lawful purposes. You may not use the platform to engage in fraud, harassment, or any activity that violates applicable laws or regulations.",
      },
      {
        heading: "Payment and Subscriptions",
        body: "Paid plans are billed monthly or as a one-time fee. Subscriptions renew automatically until cancelled. You may cancel at any time from your account settings. Refunds are handled on a case-by-case basis — contact support@pen2pro.com within 7 days of a charge if you have a concern.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee business success, income generation, funding approval, credit improvement, or any specific outcome. Results depend on individual effort, market conditions, and many factors outside our control.",
      },
      {
        heading: "Intellectual Property",
        body: "All PEN2PRO platform content, brand, software, and tools are the property of PEN2PRO. You may not reproduce, distribute, or create derivative works without written permission.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these Terms. You may close your account at any time by contacting support@pen2pro.com.",
      },
      {
        heading: "Contact",
        body: "Questions about these Terms? Reach us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 29, 2026",
    sections: [
      {
        heading: "General Disclaimer",
        body: "PEN2PRO is an AI-powered business development and educational platform. All content, roadmaps, strategies, and recommendations provided through PEN2PRO are for informational and educational purposes only.",
      },
      {
        heading: "No Financial Advice",
        body: "Nothing on PEN2PRO constitutes financial, investment, tax, or accounting advice. Always consult a qualified financial professional before making financial decisions.",
      },
      {
        heading: "No Legal Advice",
        body: "PEN2PRO does not provide legal advice. Business formation guidance, entity structuring suggestions, and compliance checklists are for informational purposes only. Consult a licensed attorney for legal advice specific to your situation.",
      },
      {
        heading: "No Credit Repair Services",
        body: "PEN2PRO is not a credit repair organization and does not provide credit repair services as defined under the Credit Repair Organizations Act (CROA). We provide education and organizational tools to help users understand and prepare their credit profile.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee any specific business outcome, income level, funding approval, loan approval, credit score improvement, or business success. Every user's situation is different, and results depend on individual effort, market conditions, and many factors beyond our control.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps, strategies, and recommendations are generated using AI and are not reviewed or verified by licensed professionals. Always validate AI-generated suggestions with qualified advisors before acting on them.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may earn commissions when users sign up for third-party services through affiliate links. These relationships do not affect our recommendations, but we disclose them for transparency.",
      },
      {
        heading: "Contact",
        body: "Questions about this Disclaimer? Contact us at support@pen2pro.com.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
            PEN2PRO Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">{page.title}</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {page.updated}</p>
        </div>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-white transition-colors">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">← Back to Home</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
