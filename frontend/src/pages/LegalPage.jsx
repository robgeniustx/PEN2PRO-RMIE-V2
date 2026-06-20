import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Last updated: June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — including name, email, phone (optional), and business details — when you sign up, join the waitlist, or use the PEN2PRO platform. We also collect usage data such as pages visited, features used, and device information to improve your experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to operate the PEN2PRO platform, generate your business roadmaps and blueprints, send you platform updates and launch communications, improve our AI tools and recommendations, and connect you with relevant affiliate resources when requested.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell your personal information to third parties. We may share data with service providers (payment processors, email platforms, infrastructure partners) who help us operate the platform, under strict confidentiality agreements.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard security practices to protect your data. Your payment information is processed by Stripe and never stored on our servers. We use encrypted connections for all data transmission.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of marketing communications while continuing to use the platform.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us at support@pen2pro.com. PEN2PRO is operated by Robert Earl Green Jr., Houston, TX.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Effective: June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO provides AI-powered business planning tools, roadmaps, and educational resources. You may use these tools for lawful business planning purposes only. You may not use PEN2PRO to generate content for illegal activities or to misrepresent your business intentions.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy tools, organization, and readiness frameworks. We do not guarantee income results, business success, funding approval, credit score improvement, or loan approval. Results depend entirely on individual effort, market conditions, and execution.",
      },
      {
        heading: "Subscriptions and Payments",
        body: "Paid plans are billed monthly (Pro, Elite) or as a one-time payment (Founders Lifetime). Subscriptions may be cancelled at any time. No refunds are provided for partial billing periods. Founders Lifetime is a one-time payment for permanent platform access.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO, the RMIE methodology, platform design, and content are owned by Robert Earl Green Jr. and PEN2PRO. Roadmaps generated for you are yours to use for your business. You may not resell or redistribute PEN2PRO platform features.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided as-is. To the maximum extent permitted by law, PEN2PRO shall not be liable for indirect, incidental, or consequential damages arising from your use of the platform.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Contact support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "PEN2PRO — Important Notice",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that you will earn any specific amount of income. Business results depend on individual effort, market conditions, competition, timing, personal skills, and many other factors outside of our control.",
      },
      {
        heading: "No Funding Guarantee",
        body: "PEN2PRO provides funding readiness education and tools to help you prepare for funding applications. We do not guarantee approval for any loan, line of credit, grant, or funding program. Approval decisions are made solely by lenders and funding institutions.",
      },
      {
        heading: "No Credit Repair Guarantee",
        body: "PEN2PRO provides credit education, organization tools, and readiness strategies. We are not a credit repair organization. We do not guarantee improvement in your personal or business credit scores. Speak with a qualified financial advisor regarding your specific credit situation.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may earn commissions when you use affiliate links to products and services we recommend (LLC formation, banking, insurance, CRM tools, etc.). These commissions help support the platform. We only recommend products we believe provide genuine value.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps and strategies generated by PEN2PRO RMIE are produced by AI and should be treated as starting frameworks, not final business plans. We recommend consulting with licensed business advisors, attorneys, and financial professionals for major decisions.",
      },
      {
        heading: "Educational Purpose",
        body: "All content on PEN2PRO — including roadmaps, strategies, checklists, scripts, and financial guidance — is provided for educational purposes only and does not constitute legal, financial, or professional advice.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/disclaimer"];

  useEffect(() => {
    document.title = `${page.title} | PEN2PRO`;
  }, [page.title]);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
            {page.badge}
          </div>
          <h1 className="mb-10 font-display text-4xl font-black text-white">{page.title}</h1>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.heading}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-[#FF8A00] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FF8A00] transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
            <Link to="/" className="hover:text-[#FF8A00] transition-colors">← Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
