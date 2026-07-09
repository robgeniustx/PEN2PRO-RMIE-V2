import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and answers you give during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, operate your account, communicate with you about PEN2PRO plans and updates, and improve our AI-powered tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & Third-Party Links",
        body: "PEN2PRO links to third-party services (LLC formation, banking, funding, bookkeeping, and similar tools). Once you leave PEN2PRO through one of these links, that provider's own privacy policy applies to your data.",
      },
      {
        heading: "Data Security",
        body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we encourage you to use strong, unique passwords for your account.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also unsubscribe from marketing emails using the link in any email we send.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, resell, or scrape the service without permission.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Payments",
        body: "Free, Pro, Elite, and Legacy Founder plans are described on our Pricing page. Where payments are collected, they are processed securely through our payment provider. Founders/lifetime-style offers are limited and subject to the terms presented at time of purchase.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO and may not be copied or redistributed without permission. Roadmaps generated for your account are yours to use for your own business.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform or reliance on its guidance.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Not Financial, Legal, or Credit Repair Advice",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Content on this platform is for educational and strategic planning purposes only and is not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.",
      },
      {
        heading: "AI-Generated Content",
        body: "Roadmaps, plans, scripts, and strategy output are generated with the help of AI based on the information you provide. Review all output critically and adapt it to your specific situation before acting on it.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you sign up for tools recommended through our Affiliate, Funding, or Credit Repair pages. We only recommend tools we believe in, and commissions do not change the price you pay.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every founder story, including Robert Green's, reflects individual experience. Your results will depend on your effort, resources, market, and circumstances. Nothing on this platform is a promise of a specific outcome.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{page.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10">{page.title}</h1>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-xs leading-6 text-slate-500">
            PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on individual effort and market conditions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">Start Your Free Roadmap</Link>
          <Link to="/about" className="btn-outline px-6 py-2.5 text-sm font-bold">About PEN2PRO</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
