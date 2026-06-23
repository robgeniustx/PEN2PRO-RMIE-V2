import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    subtitle: "How PEN2PRO collects, uses, and protects your information.",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — including name, email address, and business details entered during account creation, waitlist signup, or roadmap intake. We also collect usage data such as pages visited, features used, and session information to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to generate your personalized business roadmap, communicate platform updates and your waitlist status, improve PEN2PRO features, and process payments when applicable. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored securely using industry-standard encryption. We use reputable hosting providers and take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure.",
      },
      {
        heading: "Cookies & Tracking",
        body: "PEN2PRO uses cookies and similar technologies to maintain sessions, remember preferences, and analyze usage patterns. You can control cookie settings in your browser. Some platform features may not function correctly if cookies are disabled.",
      },
      {
        heading: "Third-Party Services",
        body: "We may use third-party services for payment processing (Stripe), analytics, email delivery, and AI generation (OpenAI). These providers have their own privacy policies and we encourage you to review them.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal information. To request changes or deletion of your data, contact us at support@pen2pro.com. We will respond within 30 days.",
      },
      {
        heading: "Contact",
        body: "Questions about this privacy policy? Reach us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    subtitle: "By using PEN2PRO, you agree to these terms.",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform. These terms may be updated from time to time — continued use after changes constitutes acceptance.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO is an AI-powered business development platform. You agree to use it only for lawful purposes and in accordance with these terms. You are responsible for any content you submit or actions you take through the platform.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized access to your account. PEN2PRO is not liable for losses resulting from unauthorized account use.",
      },
      {
        heading: "Subscriptions & Payments",
        body: "Paid plans are billed as described on the pricing page. Monthly subscriptions renew automatically. Lifetime plans are a one-time payment with no recurring charges. Refunds are handled on a case-by-case basis — contact support@pen2pro.com within 7 days of purchase.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is for informational and planning purposes only. It does not constitute legal, financial, or investment advice. Results vary based on user effort, market conditions, and other factors.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO and its content, features, and functionality are owned by PEN2PRO and its licensors. You may not copy, reproduce, or distribute platform content without written permission. Roadmaps generated for your specific business are yours to use.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the platform. Our maximum liability is limited to the amount you paid in the 12 months preceding any claim.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Reach us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    subtitle: "Important information about PEN2PRO's limitations and what we can and cannot guarantee.",
    updated: "June 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee business success, income generation, funding approval, credit improvement, or any specific financial outcome. Business results depend on individual effort, market conditions, execution quality, and many factors outside our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Content generated by PEN2PRO — including roadmaps, strategies, financial projections, and checklists — is for educational and planning purposes only. It does not constitute financial, legal, accounting, or investment advice. Consult a licensed professional for advice specific to your situation.",
      },
      {
        heading: "Credit & Funding Readiness",
        body: "PEN2PRO provides credit and funding education, organization tools, and readiness checklists. We do not guarantee credit approval, loan approval, or specific credit score improvements. Results depend on individual financial history, lender requirements, and other factors.",
      },
      {
        heading: "AI-Generated Output",
        body: "Roadmaps and strategies are generated using artificial intelligence based on your inputs. AI output may contain errors, omissions, or outdated information. Always verify important business decisions with qualified professionals.",
      },
      {
        heading: "Affiliate Disclosures",
        body: "PEN2PRO may include affiliate links to third-party services. We may receive compensation if you purchase through these links. This does not affect our editorial recommendations, and we only recommend services we believe provide value to our users.",
      },
      {
        heading: "Forward-Looking Statements",
        body: "Any projections, targets, or forward-looking statements on this platform are estimates based on general business data. They are not predictions of actual results. Your individual results will vary.",
      },
      {
        heading: "Contact",
        body: "Questions? Reach us at support@pen2pro.com.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-500">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>
          <p className="mt-3 text-slate-400">{page.subtitle}</p>
          <p className="mt-2 text-xs text-slate-600">Last updated: {page.updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 font-display text-lg font-black text-white">{s.heading}</h2>
              <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom nav */}
      <section className="border-t border-[#1A2D50] px-5 py-10">
        <div className="mx-auto max-w-3xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6">
            <Link to="/privacy" className={`text-sm font-semibold transition-colors ${pathname === "/privacy" ? "text-[#D4A017]" : "text-slate-400 hover:text-white"}`}>Privacy Policy</Link>
            <Link to="/terms" className={`text-sm font-semibold transition-colors ${pathname === "/terms" ? "text-[#D4A017]" : "text-slate-400 hover:text-white"}`}>Terms of Service</Link>
            <Link to="/disclaimer" className={`text-sm font-semibold transition-colors ${pathname === "/disclaimer" ? "text-[#D4A017]" : "text-slate-400 hover:text-white"}`}>Disclaimer</Link>
          </div>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">← Back to PEN2PRO</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
