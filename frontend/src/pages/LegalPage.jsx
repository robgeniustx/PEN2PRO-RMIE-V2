import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    badge: "Privacy Policy",
    title: "Privacy Policy",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — including your name, email address, phone number (optional), business idea description, and interest level when you submit the waitlist or roadmap form. We also collect standard usage data such as pages visited and actions taken within the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, send you updates about PEN2PRO, notify you when your selected plan becomes available, and improve the platform. We do not sell your personal information to third parties. We may share data with service providers (such as email delivery and payment processing) strictly to operate the platform.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored securely using industry-standard encryption. We use MongoDB-based cloud storage with access controls. Payment processing is handled by Stripe — PEN2PRO never stores full credit card numbers.",
      },
      {
        heading: "Cookies & Analytics",
        body: "PEN2PRO may use cookies and analytics tools to understand how users interact with the platform. You can disable cookies in your browser settings. We may use analytics providers like PostHog or Google Analytics to measure usage patterns.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@pen2pro.com. We will respond to data requests within 30 days.",
      },
      {
        heading: "Contact",
        body: "Questions about this Privacy Policy? Email us at support@pen2pro.com. PEN2PRO is operated by Robert Earl Green Jr., Houston, TX.",
      },
    ],
  },
  "/terms": {
    badge: "Terms of Service",
    title: "Terms of Service",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By using PEN2PRO — including the website, AI roadmap generator, waitlist, and any paid plan — you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Platform Description",
        body: "PEN2PRO provides AI-powered business planning, roadmap generation, credit/funding readiness education, and strategy tools. The platform is educational and organizational in nature. PEN2PRO does not guarantee business success, income, funding approval, credit improvement, or any specific financial outcome.",
      },
      {
        heading: "Free Roadmap",
        body: "The free roadmap feature is provided as-is, at no charge. PEN2PRO reserves the right to limit, modify, or discontinue the free tier at any time with or without notice.",
      },
      {
        heading: "Paid Plans",
        body: "Pro and Elite plans are billed monthly. Founders Lifetime is a one-time payment. Subscriptions may be canceled at any time. No refunds are issued for partial billing periods. Founders Lifetime is non-refundable after 7 days of purchase.",
      },
      {
        heading: "Intellectual Property",
        body: "All content, design, branding, and code on PEN2PRO is owned by Robert Earl Green Jr. and PEN2PRO. You may not reproduce, distribute, or create derivative works from our content without written permission.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO shall not be liable for any indirect, incidental, or consequential damages resulting from use of the platform, reliance on roadmap output, or business decisions made based on PEN2PRO tools. Use the platform at your own risk.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by the laws of the State of Texas, United States. Any disputes will be resolved in Harris County, Texas.",
      },
    ],
  },
  "/disclaimer": {
    badge: "Disclaimer",
    title: "Important Disclaimer",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee that use of the platform will result in income, revenue, business success, funding approval, credit score improvement, or any other specific outcome. Business results depend entirely on individual effort, market conditions, execution quality, and factors outside PEN2PRO's control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial advice, legal advice, accounting advice, or investment advice. The roadmaps, checklists, and strategy tools provided are educational resources only. Always consult a licensed financial advisor, CPA, or attorney before making major financial or legal decisions.",
      },
      {
        heading: "Not a Credit Repair Service",
        body: "PEN2PRO is not a credit repair organization as defined by the Credit Repair Organizations Act (CROA). We do not dispute negative items on your credit report on your behalf. Our credit content is educational only. If you need professional credit repair services, work with a licensed credit repair company.",
      },
      {
        heading: "Not a Lender or Funding Broker",
        body: "PEN2PRO does not provide loans, lines of credit, or funding of any kind. We do not connect you with lenders on your behalf. Funding readiness tools are educational checklists and strategy guides — not applications or approvals.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn commissions when you sign up for services through our affiliate partner links (LLC formation, business banking, insurance, etc.). These relationships do not influence our recommendations and are disclosed where applicable.",
      },
      {
        heading: "Testimonials",
        body: "Testimonials and results shared on PEN2PRO reflect individual experiences and are not typical. Past results do not guarantee future performance. Your results may vary significantly.",
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

      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            {page.badge}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {page.updated}</p>
        </div>

        <div className="space-y-8">
          {page.sections.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
          <p className="mb-4 text-sm text-slate-400">
            Questions? Contact us at{" "}
            <span className="font-semibold text-[#FF8A00]">support@pen2pro.com</span>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Back to Home
            </Link>
            <Link to="/waitlist" className="rounded-xl px-6 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
