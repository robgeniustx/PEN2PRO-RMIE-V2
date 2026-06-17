import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Your Data, Your Rights",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, phone number, and business idea when you create an account or join the waitlist. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to deliver the PEN2PRO platform, send you roadmap results and updates, respond to support requests, and improve the product. We do not sell your personal data to third parties.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO contains affiliate links to third-party services. If you click and purchase through those links, we may earn a commission at no additional cost to you. We only recommend tools we believe in.",
      },
      {
        heading: "Cookies & Analytics",
        body: "We use cookies and analytics tools (such as Google Analytics) to understand how users interact with the platform. You can disable cookies in your browser settings, though some features may not function as intended.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password for your account.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "How We Work Together",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO is a business planning and strategy tool. You may use the platform for lawful business purposes. You may not use PEN2PRO to violate any laws, infringe on intellectual property, or engage in harmful activity.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO provides education, structure, and strategy tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Results depend on your effort, market conditions, and individual circumstances.",
      },
      {
        heading: "Subscriptions & Payments",
        body: "Paid plans are billed on a monthly or one-time basis as described at the time of purchase. You may cancel a monthly subscription at any time. Refunds are not guaranteed and are handled on a case-by-case basis.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, platform design, AI logic, and content are owned by PEN2PRO. You may not reproduce, copy, or redistribute any part of the platform without written permission.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms at any time. Continued use of PEN2PRO after changes constitutes acceptance of the updated terms.",
      },
      {
        heading: "Contact",
        body: "For legal or terms-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Important Notice",
    sections: [
      {
        heading: "No Financial or Legal Advice",
        body: "PEN2PRO provides business education and strategy tools. Nothing on this platform constitutes financial advice, legal advice, tax advice, or investment advice. Consult a qualified professional before making financial or legal decisions.",
      },
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that you will earn income, build a successful business, or achieve any specific result. Business success depends on individual effort, market conditions, execution, and many other factors outside our control.",
      },
      {
        heading: "No Credit or Funding Guarantee",
        body: "The credit readiness and funding readiness tools on PEN2PRO are educational in nature. We do not guarantee loan approval, credit score improvement, or funding success. Lenders make their own decisions based on their criteria.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may earn affiliate commissions from links to third-party tools and services. These commissions do not affect the price you pay. We only recommend tools we believe provide genuine value.",
      },
      {
        heading: "Forward-Looking Statements",
        body: "Any projections, plans, timelines, or growth frameworks provided through the platform are illustrative and not guarantees. Actual results may vary significantly.",
      },
      {
        heading: "Contact",
        body: "For questions about this disclaimer, contact us at support@pen2pro.com.",
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

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
            ⚡ {page.badge}
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">{page.title}</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-2xl space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 font-display text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="mb-4 text-sm text-slate-400">Have questions? We're here to help.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/waitlist" className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] btn-gold">
                Join the Waitlist
              </Link>
              <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
