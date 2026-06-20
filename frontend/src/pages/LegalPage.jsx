import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly to us — including name, email address, phone number, and business information when you register, join the waitlist, or use our platform features.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; respond to your comments and questions; and send you marketing communications (you may opt out at any time).",
      },
      {
        heading: "Information Sharing",
        body: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share your information with trusted third parties who assist us in operating our platform, conducting our business, or servicing you — provided those parties agree to keep this information confidential.",
      },
      {
        heading: "Data Security",
        body: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
      },
      {
        heading: "Cookies",
        body: "We use cookies to understand and save your preferences for future visits, compile aggregate data about site traffic, and help improve our platform experience.",
      },
      {
        heading: "Contact Us",
        body: "If you have any questions about this Privacy Policy, please contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
      },
      {
        heading: "Use of Service",
        body: "PEN2PRO provides AI-powered business roadmap tools, strategy resources, and educational content. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.",
      },
      {
        heading: "Subscription and Billing",
        body: "Paid subscriptions are billed on a recurring basis. You may cancel at any time. Refunds are subject to our refund policy. Founders Lifetime access is a one-time payment with no recurring fees.",
      },
      {
        heading: "Intellectual Property",
        body: "All content, features, and functionality of PEN2PRO — including text, graphics, logos, and software — are owned by PEN2PRO and are protected by intellectual property laws.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
      },
      {
        heading: "Contact",
        body: "For questions about these Terms, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, revenue, business success, funding approval, credit improvement, or any specific business outcome. Results depend entirely on individual effort, market conditions, business decisions, and factors outside of our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "The content provided by PEN2PRO — including roadmaps, strategies, checklists, and AI-generated guidance — is for educational and informational purposes only. It does not constitute financial, legal, accounting, or professional business advice. Always consult qualified professionals before making financial or legal decisions.",
      },
      {
        heading: "Credit and Funding",
        body: "PEN2PRO does not guarantee credit repair results, loan approval, or access to funding. The platform provides education, strategy tools, and readiness checklists. Actual credit and funding outcomes depend on individual credit history, lender requirements, and other factors.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps and strategy recommendations. AI outputs are based on general patterns and information provided by the user. They are not a substitute for professional judgment and should be reviewed carefully before acting on them.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may include affiliate links to third-party products and services. We may receive compensation when you click or purchase through these links. This does not affect our recommendations — we only reference resources we believe can help our users.",
      },
      {
        heading: "Contact",
        body: "For questions about this Disclaimer, contact us at support@pen2pro.com.",
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

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Effective: {page.effective}
            </p>
            <h1 className="font-display text-4xl font-black text-white">{page.title}</h1>
          </div>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-slate-600">
            PEN2PRO — Rapid Monetization Intelligence Engine. For support, contact support@pen2pro.com.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
