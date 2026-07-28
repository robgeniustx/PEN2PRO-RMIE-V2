import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, and improve PEN2PRO's AI models and features. We do not sell your personal information.",
      },
      {
        heading: "Sharing",
        body: "We only share information with service providers who help us operate the platform (such as hosting, email, and payment processing) and only to the extent needed to provide the service. We do not share your data with third parties for their own marketing purposes.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also unsubscribe from marketing emails using the link in any message we send.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Reach out through the contact options on our waitlist or support pages.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it lawfully and not misuse, resell, or attempt to reverse-engineer the service.",
      },
      {
        heading: "Accounts & Plans",
        body: "Free, Pro, Elite, and Legacy Founder plans provide different levels of access as described on our Pricing page. We may update plan features, pricing, or availability as the platform evolves. Paid subscriptions are billed as described at checkout.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, platform, and roadmap content are the property of PEN2PRO. Roadmaps generated for your account are yours to use for your own business purposes.",
      },
      {
        heading: "Changes",
        body: "We may update these Terms as the platform grows. Continued use of PEN2PRO after changes take effect means you accept the updated Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO is an AI-powered educational and strategy platform. Roadmaps, checklists, and guidance are meant to help you organize, plan, and take action — they are not professional legal, financial, tax, or credit repair advice.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business formation outcomes, or business success. Every situation is different, and results depend on your individual effort, resources, and market conditions.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "PEN2PRO may link to third-party partners (such as LLC formation, business banking, funding, or credit services) for your convenience. We may earn a referral commission from these partners. We encourage you to do your own research before choosing any provider.",
      },
      {
        heading: "Your Responsibility",
        body: "You are responsible for the decisions you make for your business, including legal formation, financial commitments, and credit applications. Consult a qualified attorney, accountant, or financial advisor for advice specific to your situation.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.disclaimer;

  useEffect(() => {
    document.title = `${data.title} | PEN2PRO`;
  }, [data.title]);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-2 font-display text-4xl font-black leading-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="mb-12 text-sm text-slate-500">{data.updated}</p>

          <div className="space-y-10">
            {data.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
