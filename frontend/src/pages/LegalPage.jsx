import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    label: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        title: "What We Collect",
        body: "PEN2PRO collects the information you provide directly — name, email, phone, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        title: "How We Use It",
        body: "We use your information to generate your business roadmap, manage your account and tier access, respond to waitlist and support requests, and improve PEN2PRO's AI outputs and tools.",
      },
      {
        title: "What We Don't Do",
        body: "We do not sell your personal information to third parties. Affiliate and funding partner links are clearly marked, and any data shared with a partner only happens when you choose to engage with that partner directly.",
      },
      {
        title: "Data Security",
        body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and you should avoid submitting sensitive financial account numbers or passwords through intake forms.",
      },
      {
        title: "Your Choices",
        body: "You can request a copy of your data or ask us to delete your account and associated data by contacting support through the app.",
      },
    ],
  },
  terms: {
    label: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        title: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        title: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders tiers each unlock different levels of access as described on the Pricing page. Paid plans are billed on the cadence shown at checkout. You can cancel a subscription at any time; access continues through the end of the current billing period.",
      },
      {
        title: "No Guarantees",
        body: "PEN2PRO provides strategy, structure, and education — not a guarantee of income, funding approval, loan approval, credit repair results, or business success. Outcomes depend on your own effort, execution, and market conditions.",
      },
      {
        title: "Intellectual Property",
        body: "The roadmaps, frameworks, and content PEN2PRO generates for you are yours to use for your business. The underlying PEN2PRO platform, brand, and RMIE technology remain the property of PEN2PRO.",
      },
      {
        title: "Account Responsibility",
        body: "You are responsible for keeping your login credentials secure and for the accuracy of the information you submit.",
      },
    ],
  },
  disclaimer: {
    label: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        title: "Educational, Not Guaranteed",
        body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. The platform provides education, strategy, organization, and readiness tools — the results depend on your own effort, execution, and circumstances.",
      },
      {
        title: "Not Financial, Legal, or Credit Repair Services",
        body: "PEN2PRO is not a law firm, credit repair organization, licensed financial advisor, or lender. Content related to LLC formation, business credit, funding readiness, and credit-building is educational guidance, not professional advice. Consult a licensed attorney, accountant, or financial advisor for decisions specific to your situation.",
      },
      {
        title: "Affiliate & Partner Links",
        body: "PEN2PRO may link to third-party partners for services like LLC formation, business banking, funding, or bookkeeping. PEN2PRO may earn a referral commission from these partners. We do not control, and are not responsible for, the products, pricing, or outcomes of third-party services.",
      },
      {
        title: "Lived-Experience Content",
        body: "Founder story and testimonial content reflect individual experiences and are shared for inspiration and context. Individual results vary and are not typical or guaranteed.",
      },
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">{data.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">{data.label}</h1>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-500">
            Questions about your data, billing, or these terms? Reach out any time and we'll help.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/about" className="btn-outline px-5 py-2.5 text-sm font-bold">
              About PEN2PRO
            </Link>
            <Link to="/starter" className="btn-gold px-5 py-2.5 text-sm font-bold">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
