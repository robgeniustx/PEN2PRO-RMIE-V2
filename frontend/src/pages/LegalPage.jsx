import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL_CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Last updated: June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "PEN2PRO collects information you provide directly, including your name, email address, phone number, and business information submitted through intake forms, waitlist signups, and account registration. We also collect usage data to improve your experience on the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, send platform updates, respond to support requests, and improve our AI-powered tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored securely using industry-standard encryption. We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data by contacting us.",
      },
      {
        heading: "Cookies & Analytics",
        body: "PEN2PRO uses essential cookies to maintain session state and optional analytics tools to understand platform usage. You can disable non-essential cookies in your browser settings.",
      },
      {
        heading: "Third-Party Services",
        body: "We use Stripe for payment processing, OpenAI for AI-powered business roadmap generation, and other vetted service providers. Each provider operates under their own privacy policies.",
      },
      {
        heading: "Contact",
        body: "For privacy inquiries, contact us at support@pen2pro.com or through the waitlist form on this platform.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Effective: June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform. PEN2PRO reserves the right to update these terms with reasonable notice.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO is an AI-powered business development platform designed to help users create business roadmaps, strategies, and execution plans. The platform is for lawful business development purposes only.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use.",
      },
      {
        heading: "Subscription & Payments",
        body: "Paid plans (Pro, Elite, Founders) are billed as described on the pricing page. Subscriptions may be canceled at any time. Founders Lifetime is a one-time payment. No refunds are issued for partial billing periods unless required by law.",
      },
      {
        heading: "AI Output Disclaimer",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps and strategies. AI output is for educational and planning purposes only. We do not guarantee specific business results, income, funding approval, or credit outcomes.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, design, and proprietary AI systems are owned by PEN2PRO. Business roadmaps generated for your specific idea belong to you. You may not reproduce or resell platform content without written permission.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform. Our total liability is limited to the amount paid for your subscription in the preceding 30 days.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Important Notice",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides AI-powered business planning tools, education, strategy frameworks, and organizational resources. We do not guarantee income, revenue, business success, funding approval, credit score improvement, or any specific financial outcome.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, or investment advice. The platform is designed to help you organize and plan your business idea. For legal, financial, or tax matters, consult a licensed professional.",
      },
      {
        heading: "Credit & Funding Disclaimer",
        body: "PEN2PRO's credit readiness and funding readiness tools provide educational guidance and preparation frameworks. We are not a lender, credit repair organization, or financial institution. We do not repair credit or guarantee loan approvals.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may display affiliate links to third-party products and services. We may earn a commission if you purchase through these links. This does not affect our recommendations — we only feature products relevant to business development.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps, strategies, scripts, and recommendations on PEN2PRO are generated by artificial intelligence. AI content may not account for all local regulations, market conditions, or individual circumstances. Always verify information with qualified professionals.",
      },
      {
        heading: "Individual Results Vary",
        body: "Business success depends on many factors including effort, market conditions, execution, capital, and timing. Testimonials on this platform reflect individual experiences and are not typical or guaranteed.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const content = LEGAL_CONTENT[pathname] || LEGAL_CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
            {content.badge}
          </div>
          <h1 className="mb-10 font-display text-4xl font-black md:text-5xl">{content.title}</h1>

          <div className="space-y-10">
            {content.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-8 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="mb-4 text-sm text-slate-400">Questions about our policies? Reach out before signing up.</p>
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
