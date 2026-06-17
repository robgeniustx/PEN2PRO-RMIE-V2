import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "PEN2PRO collects information you provide directly — name, email address, phone number, and business details — when you register, join the waitlist, or use the platform. We also collect usage data to improve your experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to deliver our platform services, send platform updates and announcements, provide customer support, improve our AI recommendations, and communicate pricing and product changes. We do not sell your personal data to third parties.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored on secured servers with encryption in transit and at rest. We use industry-standard practices to protect your information. No system is 100% secure, and we encourage you to use strong passwords.",
      },
      {
        heading: "Cookies",
        body: "We use cookies and similar technologies to keep you logged in, remember preferences, and analyze platform usage. You can control cookie behavior through your browser settings.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO integrates with Stripe for payments, OpenAI for AI capabilities, and other vetted third-party services. These services have their own privacy policies and we encourage you to review them.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at support@pen2pro.com. We will respond within 30 days.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO is a business strategy and roadmap platform. You may use it for lawful business purposes only. You may not use the platform for illegal activities, to harm others, or to violate any applicable law or regulation.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. Notify us immediately at support@pen2pro.com if you suspect unauthorized access.",
      },
      {
        heading: "Subscription & Billing",
        body: "Paid plans are billed on the terms stated at checkout. You may cancel at any time. Refunds are evaluated on a case-by-case basis. The Founders Lifetime plan is a one-time purchase and is non-refundable after 14 days.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses AI to generate business roadmaps, strategies, and recommendations. This content is for informational purposes only and does not constitute legal, financial, or professional advice. Always consult qualified professionals before making major business or financial decisions.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO and all associated content, branding, and technology are owned by PEN2PRO. You retain ownership of the business information you input. We do not claim ownership of your ideas or business plans.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these Terms. You may terminate your account at any time by contacting support@pen2pro.com.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not liable for business outcomes, income loss, investment decisions, or any indirect, consequential, or incidental damages arising from your use of the platform.",
      },
      {
        heading: "Contact",
        body: "For terms-related questions, contact support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, revenue, business success, funding approval, loan approval, credit repair results, or any specific business outcome. Results depend entirely on individual effort, market conditions, execution, timing, and factors outside our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "The content, roadmaps, strategies, and recommendations provided by PEN2PRO are for educational and informational purposes only. They do not constitute financial advice, legal advice, accounting advice, or professional consulting services of any kind.",
      },
      {
        heading: "Credit & Funding",
        body: "PEN2PRO does not guarantee credit repair results, tradeline outcomes, funding approvals, or lender decisions. Credit and funding outcomes depend on your individual credit profile, lender criteria, and financial history. We provide education, readiness tools, and organizational support only.",
      },
      {
        heading: "AI Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI outputs may be incomplete, inaccurate, or not suitable for your specific situation. Always apply your own judgment and consult qualified professionals.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may include affiliate links to third-party tools and services. We may receive compensation when you use these links. We only recommend services we believe are relevant and useful, but we are not responsible for the performance, reliability, or quality of third-party providers.",
      },
      {
        heading: "Forward-Looking Statements",
        body: "Any statements about potential income, growth, or business success on the platform or our marketing materials are illustrative examples only — not guarantees or typical results. Individual results will vary.",
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
        {/* Header */}
        <div className="mb-12">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.08)" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {page.updated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 text-center">
          <p className="text-sm text-slate-500">
            Questions about this policy?{" "}
            <a href="mailto:support@pen2pro.com" className="font-semibold" style={{ color: "#D4A017" }}>
              support@pen2pro.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
