import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone number (optional), business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "Your information is used to generate your roadmap, save your progress, communicate with you about your account and the waitlist, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Payment Information",
        body: "Payments are processed securely through Stripe. PEN2PRO does not store your full card number or banking credentials on our servers.",
      },
      {
        heading: "Data Retention",
        body: "We retain account and roadmap data for as long as your account is active, or as needed to provide services and comply with legal obligations.",
      },
      {
        heading: "Your Choices",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting support.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee business success, revenue, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on a recurring or one-time basis as described on the Pricing page. You may cancel a recurring subscription at any time; access continues through the end of the paid period.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, and generated roadmap templates are the property of PEN2PRO. Your business ideas and the specific roadmap content generated for you remain yours to use.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO and its RMIE roadmaps, strategy tools, funding readiness checklists, and credit-building guidance are provided for educational and organizational purposes only. Nothing on this platform constitutes legal, financial, tax, or credit repair advice.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business licensing, trademark approval, or business success of any kind. Results vary based on individual circumstances, effort, and market conditions.",
      },
      {
        heading: "Independent Verification",
        body: "Always verify legal, tax, licensing, and financial requirements with a qualified attorney, accountant, or licensed professional before making business decisions based on PEN2PRO output.",
      },
      {
        heading: "Third-Party Links",
        body: "PEN2PRO may link to third-party services for business formation, banking, funding, or credit resources (including affiliate partners). We are not responsible for the products, services, or outcomes of those third parties.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const data = CONTENT[type] || CONTENT.terms;

  useEffect(() => {
    document.title = `${data.title} | PEN2PRO`;
  }, [data.title]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">{data.updated}</p>
        <h1 className="mb-10 font-display text-4xl font-black md:text-5xl">{data.title}</h1>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm text-slate-400">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="text-sm font-semibold text-[#1E88E5] hover:text-[#FF8A00] transition-colors">
            ← Back to Home
          </Link>
          <Link to="/starter" className="text-sm font-semibold text-[#1E88E5] hover:text-[#FF8A00] transition-colors">
            Start Free Roadmap
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
