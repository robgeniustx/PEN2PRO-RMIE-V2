import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    lastUpdated: "June 20, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "PEN2PRO collects information you provide directly, including name, email address, phone number, and business information when you create an account, join the waitlist, or use our platform features. We also collect usage data such as pages visited, features accessed, and roadmaps generated.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to provide and improve the PEN2PRO platform, send you product updates and important notices, personalize your roadmap and business strategy output, process payments, and respond to your support requests.",
      },
      {
        heading: "Information Sharing",
        body: "We do not sell your personal information. We may share data with trusted service providers who help us operate the platform (such as payment processors, email services, and cloud hosting), and as required by law.",
      },
      {
        heading: "Data Security",
        body: "We implement industry-standard security measures to protect your information. However, no system is 100% secure. We encourage you to use a strong password and keep your account credentials confidential.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data by contacting us at support@pen2pro.com. You may also unsubscribe from marketing emails at any time using the link in any email we send.",
      },
      {
        heading: "Contact",
        body: "Questions about this privacy policy? Email us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    lastUpdated: "June 20, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO is an AI-powered business development platform. You may use the platform for lawful business purposes only. You may not use PEN2PRO to engage in fraudulent, deceptive, or illegal activity.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
      },
      {
        heading: "Subscription and Payments",
        body: "Paid plans are billed on a monthly or one-time basis as described at the time of purchase. Refund policies are outlined during checkout. We reserve the right to change pricing with reasonable notice.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO and its content, features, and functionality are owned by PEN2PRO and are protected by applicable intellectual property laws. Your business roadmap output is yours to use.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid in the prior 12 months.",
      },
      {
        heading: "Termination",
        body: "We may suspend or terminate your account if you violate these terms. You may cancel your account at any time from your dashboard settings.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    lastUpdated: "June 20, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit improvement. Business results depend on individual effort, market conditions, execution, and many factors outside our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on the PEN2PRO platform constitutes financial, legal, tax, or investment advice. The roadmaps, checklists, and strategies provided are educational tools only. Consult a licensed professional for advice specific to your situation.",
      },
      {
        heading: "Credit and Funding Information",
        body: "PEN2PRO provides educational information about credit-building strategies and funding readiness. We do not guarantee that following this information will result in credit approval, loan approval, or specific credit score improvements.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn commissions from affiliate partnerships with third-party services listed on the platform. These are services we believe may be useful, but we do not endorse or guarantee any third-party service.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps and strategy output are generated by artificial intelligence. AI output should be reviewed critically and validated against your specific market, legal requirements, and financial situation before acting on it.",
      },
      {
        heading: "Contact",
        body: "Questions about this disclaimer? Email support@pen2pro.com.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-2">{page.title}</h1>
          <p className="text-sm text-slate-600 mb-12">Last updated: {page.lastUpdated}</p>

          <div className="space-y-10">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-bold text-white mb-3">{s.heading}</h2>
                <p className="text-base leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-white mb-1">Questions?</p>
              <p className="text-xs text-slate-500">We're here to help. Reach out any time.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="mailto:support@pen2pro.com"
                className="rounded-xl px-5 py-2.5 text-sm font-black text-[#080C14] btn-gold">
                Email Us
              </a>
              <Link to="/waitlist"
                className="rounded-xl border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
                Join Waitlist
              </Link>
            </div>
          </div>

          <div className="mt-8 flex gap-6 text-xs text-slate-600">
            <Link to="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-slate-400 transition">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
