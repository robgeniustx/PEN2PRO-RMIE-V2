import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    subtitle: "How PEN2PRO collects, uses, and protects your information.",
    updated: "June 22, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — name, email address, phone number, and business idea when you sign up, join the waitlist, or generate a roadmap. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, send you launch updates and product announcements, improve the PEN2PRO platform, and connect you with relevant resources. We do not sell your personal information to third parties.",
      },
      {
        heading: "Cookies and Tracking",
        body: "PEN2PRO uses cookies to maintain session state and improve your experience. You can disable cookies in your browser settings, though some features may not function correctly.",
      },
      {
        heading: "Data Security",
        body: "We implement industry-standard security measures to protect your data. Passwords are hashed and never stored in plain text. API traffic is encrypted via HTTPS.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@pen2pro.com.",
      },
      {
        heading: "Contact",
        body: "Questions about this Privacy Policy? Email support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    subtitle: "By using PEN2PRO you agree to these terms.",
    updated: "June 22, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO grants you a limited, non-exclusive, non-transferable license to use the platform for your own business development purposes. You may not resell, reverse-engineer, or redistribute platform content or output.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
      },
      {
        heading: "Subscription and Payments",
        body: "Paid plans are billed as described on the pricing page. Subscriptions renew automatically until canceled. Refunds are handled on a case-by-case basis within 7 days of purchase. Contact support@pen2pro.com.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, and organizational tools. We do not guarantee income, revenue, funding approval, business success, or credit improvement. Results depend entirely on individual effort and market conditions.",
      },
      {
        heading: "Intellectual Property",
        body: "All platform content, design, and code is the intellectual property of PEN2PRO. AI-generated roadmap output is provided for your personal use. You may not republish or resell roadmap output.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraud, or abuse the platform.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    subtitle: "Important information about PEN2PRO's services and limitations.",
    updated: "June 22, 2026",
    sections: [
      {
        heading: "No Financial, Legal, or Credit Advice",
        body: "PEN2PRO is an AI-powered business development platform. Nothing on this platform constitutes financial advice, legal advice, credit counseling, or investment advice. All roadmaps, checklists, and strategies are for educational and planning purposes only.",
      },
      {
        heading: "No Guarantee of Income or Revenue",
        body: "PEN2PRO does not guarantee that you will earn any specific amount of income, generate revenue, or achieve profitability. Business results depend on individual effort, market conditions, execution, and many factors outside of our control.",
      },
      {
        heading: "No Guarantee of Funding Approval",
        body: "PEN2PRO provides funding readiness education and checklists. We do not guarantee that you will be approved for any loan, line of credit, SBA program, grant, or business financing. Lender decisions are made independently and are outside our control.",
      },
      {
        heading: "No Guarantee of Credit Improvement",
        body: "PEN2PRO provides credit education, strategy guidance, and organizational tools. We do not guarantee any improvement to your personal or business credit score. Credit results depend on your payment history, utilization, disputes, and lender reporting.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may earn affiliate commissions when you purchase products or services through links on our platform. We only recommend resources we believe are valuable. Affiliate relationships do not influence our roadmap output or strategy recommendations.",
      },
      {
        heading: "Testimonials",
        body: "Results described in testimonials on this platform are individual experiences and are not typical. Your results will vary based on your effort, idea, market, resources, and execution.",
      },
      {
        heading: "Contact",
        body: "Questions? Contact support@pen2pro.com.",
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
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO Legal</p>
          <h1 className="mb-3 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-2 text-slate-400">{page.subtitle}</p>
          <p className="mb-12 text-xs text-slate-600">Last updated: {page.updated}</p>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="text-sm text-slate-400">
              Questions about our legal policies?{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#FF8A00] hover:underline">
                support@pen2pro.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
