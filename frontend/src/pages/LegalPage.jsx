import { useParams, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, business idea, and phone number when you sign up, join the waitlist, or use the RMIE platform. We also collect usage data including pages visited, features used, and roadmaps generated.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate business roadmaps, send platform updates and launch communications, improve the PEN2PRO experience, and connect you with relevant resources. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored on secure cloud infrastructure. We use industry-standard encryption for data in transit and at rest. Access to user data is restricted to authorized personnel only.",
      },
      {
        heading: "Cookies",
        body: "We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage patterns. You can disable cookies in your browser settings, though some platform features may not function correctly without them.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use third-party services including Stripe for payment processing, OpenAI for AI-powered features, and analytics tools. These services have their own privacy policies and we encourage you to review them.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@pen2pro.com. We will respond to all requests within 30 days.",
      },
      {
        heading: "Contact",
        body: "Questions about this Privacy Policy? Contact us at support@pen2pro.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO provides AI-powered business roadmap tools, strategy guidance, and resource access. You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of others.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately at support@pen2pro.com if you suspect unauthorized access to your account.",
      },
      {
        heading: "Subscription & Billing",
        body: "Paid plans are billed on the schedule shown at checkout. You may cancel at any time. Refunds are issued at our discretion and handled on a case-by-case basis. Contact support@pen2pro.com to initiate a refund request.",
      },
      {
        heading: "Intellectual Property",
        body: "All content, branding, and software on PEN2PRO are the property of PEN2PRO and its founders. You may not reproduce, distribute, or create derivative works without written permission.",
      },
      {
        heading: "Disclaimer of Warranties",
        body: "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee specific business outcomes, income, funding approval, or credit results. Results depend entirely on individual effort, market conditions, and external factors.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO and its founders shall not be liable for indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid in the 12 months preceding the claim.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "June 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee any specific level of income, revenue, profit, or business success. All roadmaps, strategies, and plans are educational in nature. Individual results will vary based on effort, experience, market conditions, and many other factors outside of our control.",
      },
      {
        heading: "No Funding or Credit Guarantee",
        body: "PEN2PRO does not guarantee loan approval, funding approval, credit score improvement, or access to any specific financial product. Funding readiness tools and credit guidance are educational resources only. We are not a financial institution, credit repair organization, or lender.",
      },
      {
        heading: "Not Legal or Financial Advice",
        body: "Nothing on PEN2PRO constitutes legal, financial, accounting, or tax advice. Information provided is for educational purposes only. Always consult a licensed attorney, CPA, or financial advisor for your specific situation.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may contain affiliate links to third-party products and services. We may earn a commission when you purchase through these links. This does not affect the price you pay. We only recommend resources we believe in.",
      },
      {
        heading: "Testimonials",
        body: "Testimonials on this platform represent individual experiences and are not guarantees of similar results. Forward-looking statements about business outcomes are aspirational and not promises of future performance.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps and strategy content. AI-generated content may contain errors or inaccuracies. Always validate recommendations with qualified professionals before taking significant business actions.",
      },
    ],
  },
};

export default function LegalPage() {
  const { page: paramPage } = useParams();
  const { pathname } = useLocation();
  const page = paramPage || pathname.replace(/^\//, "");
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 flex gap-3 text-xs text-slate-600">
          <Link to="/" className="hover:text-slate-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-400">{data.title}</span>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>

        <h1 className="mb-2 font-display text-4xl font-black">{data.title}</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated: {data.updated}</p>

        <div className="space-y-10">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm font-semibold text-white mb-3">Questions about this document?</p>
          <p className="text-sm text-slate-400 mb-4">
            Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">
              support@pen2pro.com
            </a>{" "}
            and we will respond within 3–5 business days.
          </p>
          <div className="flex flex-wrap gap-3">
            {["privacy", "terms", "disclaimer"].filter((p) => p !== page).map((p) => (
              <Link
                key={p}
                to={`/${p}`}
                className="rounded-lg border border-[#1A2D50] px-4 py-2 text-xs font-semibold text-slate-400 capitalize hover:text-white transition-colors"
              >
                {p === "privacy" ? "Privacy Policy" : p === "terms" ? "Terms of Service" : "Disclaimer"}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
