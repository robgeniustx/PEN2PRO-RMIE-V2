import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "PRIVACY POLICY",
    title: "Your Data, Handled Responsibly",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone number (optional), business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Data",
        body: "Your information is used to generate your roadmap, manage your account, communicate updates about your plan, and — if you opt in — notify you about waitlist status, Pro/Elite/Founders access, and relevant funding or credit resources.",
      },
      {
        heading: "What We Don't Do",
        body: "We do not sell your personal information to third parties. We do not share your business idea or roadmap contents outside of PEN2PRO's internal systems except where required to operate the service (e.g. payment processing) or by law.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored using industry-standard security practices. Access to admin and waitlist data is restricted and protected. No system is 100% secure, and we encourage you to use a strong, unique password for your account.",
      },
      {
        heading: "Your Rights",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. If you joined the waitlist and want to be removed, reach out and we'll process the request promptly.",
      },
    ],
  },
  terms: {
    eyebrow: "TERMS OF SERVICE",
    title: "The Ground Rules",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and readiness tool — not a guarantee of income, funding approval, credit repair, or business success. Outcomes depend on your effort, market conditions, and factors outside our control. Roadmaps and checklists are educational guidance, not professional financial, legal, or tax advice.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans have different feature access as described on the Pricing page. Where subscriptions are active, billing is handled through our payment processor and can be managed or cancelled from your account settings.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes are posted constitutes acceptance of the updated terms.",
      },
    ],
  },
  disclaimer: {
    eyebrow: "DISCLAIMER",
    title: "Read This Before You Build",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Education & Strategy, Not Guarantees",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. The platform provides education, strategy, organization, and readiness tools to help you make informed decisions — the execution and outcome depend on you.",
      },
      {
        heading: "Not Financial, Legal, or Tax Advice",
        body: "Roadmap output, funding readiness checklists, and credit-building guidance are for informational purposes only. Always consult a licensed attorney, accountant, or financial advisor before making binding business, legal, credit, or funding decisions.",
      },
      {
        heading: "Third-Party Resources",
        body: "PEN2PRO may reference or link to third-party services (LLC formation, banking, credit monitoring, funding partners, and similar tools). We do not control these third parties and are not responsible for their services, pricing, or outcomes.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every founder's starting point, market, and effort level is different. Stories and examples shared on PEN2PRO — including the founder's own story — reflect individual experiences and are not a promise of similar results for any other user.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {data.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">{data.title}</h1>
          <p className="text-sm text-slate-500">{data.updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {data.sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.heading}</h2>
            <p className="text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out any time, or{" "}
            <Link to="/waitlist" className="font-semibold" style={{ color: "#FF8A00" }}>
              join the waitlist
            </Link>{" "}
            to stay updated as PEN2PRO grows.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
