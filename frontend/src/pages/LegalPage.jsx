import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and waitlist interest selections — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, respond to waitlist and support requests, improve our AI models and product experience, and communicate updates about Pro, Elite, and Founders access.",
      },
      {
        heading: "How We Protect It",
        body: "We take reasonable technical and administrative measures to protect your data. We do not sell your personal information to third parties. Affiliate and partner links on this site are provided for your convenience and are governed by each partner's own privacy practices.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may opt out of non-essential communications at any time.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By using this site, you agree to use it for lawful purposes and to provide accurate information when creating an account or submitting a roadmap request.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans each unlock different levels of access as described on our Pricing page. Paid plans are billed on a recurring or one-time basis as stated at checkout. You may cancel a recurring plan at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Roadmaps, strategies, and tools are educational and organizational in nature — results depend on your own execution, market conditions, and factors outside our control.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE engine, and all platform content are the property of PEN2PRO and may not be copied, resold, or redistributed without permission. Roadmaps generated for your business are yours to use.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO is an educational and strategic planning platform. It provides business roadmaps, funding readiness checklists, credit-building guidance, and monetization strategy based on the information you provide and general best practices.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, investment returns, or credit repair results. Any figures, timelines, or projections shown are illustrative estimates, not promises.",
      },
      {
        heading: "Not Legal, Financial, or Credit Repair Services",
        body: "PEN2PRO is not a law firm, licensed financial advisor, lender, or credit repair organization. Nothing on this platform constitutes legal, tax, financial, or credit repair advice. Consult a qualified professional before making legal, financial, or credit-related decisions.",
      },
      {
        heading: "Your Responsibility",
        body: "Your results depend on your own effort, decisions, market conditions, and execution of the roadmap and strategies provided. PEN2PRO provides structure, organization, and strategy — you are responsible for the actions you take.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">{data.title}</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about this page? Reach out from the{" "}
            <Link to="/about" className="text-[#FF8A00] hover:underline">About</Link> page or join the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist</Link> to stay updated.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
