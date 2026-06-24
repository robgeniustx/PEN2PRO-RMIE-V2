import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly to us — including your name, email address, phone number, and business details — when you register for the waitlist, generate a roadmap, create an account, or contact us. We also automatically collect certain technical data when you visit our platform, such as your IP address, browser type, and pages visited.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use the information we collect to provide, maintain, and improve our platform; send you updates about your account and our launch; personalize your experience; process payments; and communicate with you about products, services, and promotions. We will never sell your personal information to third parties.",
      },
      {
        heading: "Data Sharing",
        body: "We may share your information with trusted service providers who assist us in operating the platform (such as payment processors, email providers, and analytics tools), subject to confidentiality obligations. We may also disclose your information if required by law or to protect the rights and safety of our users.",
      },
      {
        heading: "Data Security",
        body: "We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "Your Rights",
        body: "You may request to access, correct, or delete your personal information by contacting us at support@pen2pro.com. We will respond to your request within 30 days.",
      },
      {
        heading: "Cookies",
        body: "We use cookies and similar tracking technologies to analyze usage patterns and improve our platform. You can control cookie settings through your browser, although disabling cookies may affect functionality.",
      },
      {
        heading: "Contact Us",
        body: "If you have questions about this Privacy Policy, contact us at: support@pen2pro.com",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using the PEN2PRO platform, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO grants you a limited, non-exclusive, non-transferable license to access and use the platform for your personal and business purposes. You may not resell, sublicense, or commercialize the platform outputs without written permission. You are responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree not to use the platform for any unlawful purpose, to upload malicious code, to attempt to gain unauthorized access to our systems, or to interfere with the platform's operation. Violations may result in immediate account termination.",
      },
      {
        heading: "Intellectual Property",
        body: "All content, features, and functionality of the PEN2PRO platform — including but not limited to the AI-generated roadmaps, templates, and strategic outputs — are the property of PEN2PRO or its licensors. Roadmap outputs generated specifically for your business idea may be used by you for your personal business purposes.",
      },
      {
        heading: "Payments and Refunds",
        body: "Subscription fees are billed in advance and are non-refundable except as required by law or as stated in our refund policy. We reserve the right to change our pricing at any time, with notice provided to existing subscribers.",
      },
      {
        heading: "Disclaimers",
        body: "THE PLATFORM IS PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND. PEN2PRO DOES NOT GUARANTEE BUSINESS SUCCESS, INCOME, FUNDING APPROVAL, CREDIT IMPROVEMENT, OR ANY SPECIFIC RESULTS. OUTCOMES DEPEND ENTIRELY ON INDIVIDUAL EFFORT, MARKET CONDITIONS, AND OTHER FACTORS OUTSIDE OUR CONTROL.",
      },
      {
        heading: "Limitation of Liability",
        body: "To the fullest extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate your account at any time for violations of these Terms. You may cancel your subscription at any time from your account settings.",
      },
      {
        heading: "Contact",
        body: "Questions about these Terms? Contact us at: support@pen2pro.com",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO provides business strategy education, planning tools, and roadmap generation. We do not guarantee any specific level of income, revenue, profit, or business success. Individual results will vary based on effort, skill, market conditions, resources, and many other factors.",
      },
      {
        heading: "No Funding Guarantee",
        body: "Information on the PEN2PRO platform related to funding readiness, credit preparation, and lender requirements is for educational and organizational purposes only. PEN2PRO does not guarantee funding approval, loan approval, credit approval, or any specific outcome from any lender, financial institution, or funding program.",
      },
      {
        heading: "No Credit Repair Guarantee",
        body: "Credit repair guidance provided by PEN2PRO is for educational purposes only. PEN2PRO is not a credit repair organization and does not guarantee improvement of your credit score, removal of negative items, or any specific outcome related to your credit profile. Consult a qualified financial professional for personalized credit advice.",
      },
      {
        heading: "Not Legal or Financial Advice",
        body: "Content provided by the PEN2PRO platform — including AI-generated roadmaps, business plans, legal checklists, and financial projections — is for informational purposes only and does not constitute legal, financial, tax, or professional advice. Always consult licensed professionals for advice specific to your situation.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may include affiliate links to third-party products and services. We may earn a commission if you make a purchase through these links. This does not affect the price you pay. We only recommend services we believe provide genuine value, but we are not responsible for the quality, performance, or claims of third-party providers.",
      },
      {
        heading: "Forward-Looking Statements",
        body: "Any projections, estimates, or forward-looking statements on the platform are based on assumptions and are not guarantees of future performance. Actual results may differ materially from any projections shown.",
      },
      {
        heading: "Contact",
        body: "For questions about this disclaimer, contact us at: support@pen2pro.com",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>PEN2PRO</p>
          <h1 className="font-display text-4xl font-black text-white">{page.title}</h1>
          <p className="mt-2 text-sm text-slate-500">Effective date: {page.effective}</p>
        </div>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 text-center">
          <p className="text-sm text-slate-400">
            Questions? Email us at{" "}
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
