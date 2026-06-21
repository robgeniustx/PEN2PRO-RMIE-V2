import { useParams, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly, including name, email address, phone number, and business information when you register, join the waitlist, or use PEN2PRO services.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use collected information to provide and improve our services, communicate with you about your account and our products, send relevant updates and marketing communications (with your consent), and process payments.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell your personal data. We may share data with service providers who assist in operating our platform (payment processors, email providers, analytics) under strict confidentiality agreements.",
      },
      {
        heading: "Data Security",
        body: "We implement industry-standard security measures to protect your information. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@pen2pro.com.",
      },
      {
        heading: "Contact",
        body: "Questions about this Privacy Policy? Email us at support@pen2pro.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.",
      },
      {
        heading: "Description of Services",
        body: "PEN2PRO provides AI-powered business roadmap tools, strategy resources, and educational content to help entrepreneurs plan and build businesses. We are a software and education platform — not a law firm, financial advisor, or licensed business consultant.",
      },
      {
        heading: "User Accounts",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.",
      },
      {
        heading: "Payment and Subscriptions",
        body: "Paid plans are billed as described at checkout. Subscriptions may be cancelled at any time. Refund eligibility is determined on a case-by-case basis. Founders Lifetime is a one-time payment with no refunds after 7 days.",
      },
      {
        heading: "Prohibited Use",
        body: "You agree not to use PEN2PRO for any unlawful purpose, to transmit harmful content, to impersonate others, or to interfere with the platform's operation.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided 'as is.' We are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, revenue, business success, funding approval, loan approval, or credit repair results. All outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, or investment advice. PEN2PRO provides business education, strategy tools, and organizational resources only. Consult a licensed professional for financial, legal, or tax guidance.",
      },
      {
        heading: "Credit and Funding",
        body: "PEN2PRO provides credit readiness and funding readiness education. We do not guarantee credit score improvement, loan approvals, or access to capital. Lending decisions are made by third-party lenders, not PEN2PRO.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may receive compensation for referrals to partner services through affiliate links. This does not affect our editorial independence or the honesty of our recommendations.",
      },
      {
        heading: "Testimonials",
        body: "Any results or testimonials shared on PEN2PRO represent individual experiences and are not typical. Your results may vary significantly.",
      },
    ],
  },
};

export default function LegalPage() {
  const { page: paramPage } = useParams();
  const { pathname } = useLocation();
  const page = paramPage || pathname.replace(/^\//, "");
  const content = CONTENT[page];

  if (!content) {
    return (
      <div className="min-h-screen bg-[#080C14] text-white">
        <Navbar />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
          <h1 className="font-display text-3xl font-black mb-4">Page Not Found</h1>
          <Link to="/" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Go Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-2 font-display text-4xl font-black">{content.title}</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {content.lastUpdated}</p>

          <div className="space-y-10">
            {content.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400 leading-relaxed">
              Questions? Contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] font-semibold hover:underline">
                support@pen2pro.com
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <Link to="/privacy" className="text-slate-500 hover:text-white transition">Privacy Policy</Link>
              <span className="text-slate-700">·</span>
              <Link to="/terms" className="text-slate-500 hover:text-white transition">Terms of Service</Link>
              <span className="text-slate-700">·</span>
              <Link to="/disclaimer" className="text-slate-500 hover:text-white transition">Disclaimer</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
