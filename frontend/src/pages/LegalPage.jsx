import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO — including the free roadmap tool, waitlist form, and account sign-up — we collect the information you provide directly, such as your name, email, phone number, business idea details, and interest level. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How we use your information",
        body: "We use your information to generate your business roadmap, communicate with you about your account and upgrades, improve PEN2PRO's AI models and features, and to prioritize outreach for Pro, Elite, and Legacy Founder access. We do not sell your personal information to third parties.",
      },
      {
        heading: "Third-party services",
        body: "PEN2PRO may link you to trusted third-party services for business formation, banking, credit, funding, and marketing tools. Those services have their own privacy policies, and PEN2PRO is not responsible for how they handle your data.",
      },
      {
        heading: "Data security",
        body: "We take reasonable technical and organizational measures to protect your information. No system is 100% secure, and we encourage you to use strong, unique passwords for your account.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You can unsubscribe from marketing emails using the link in any email we send.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy content, and educational tools through its Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information when building your roadmap or business plan.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Legacy Founder access levels are described on the Pricing page. Where subscriptions or one-time payments are active, charges recur or apply as described at checkout. You may cancel a recurring plan at any time; access continues through the end of the paid period.",
      },
      {
        heading: "Intellectual property",
        body: "The roadmaps, strategies, and content PEN2PRO generates for you are yours to use for your business. The underlying PEN2PRO platform, brand, and RMIE technology remain the property of PEN2PRO.",
      },
      {
        heading: "Limitation of liability",
        body: "PEN2PRO, its founder, and affiliates are not liable for business losses, missed opportunities, or damages arising from use of the platform or reliance on generated content. Use professional legal, financial, and tax advice before making major business decisions.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational tool, not a guarantee",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success of any kind. The platform provides education, strategy, organization, and readiness tools — the outcome depends on you.",
      },
      {
        heading: "Not legal, financial, or credit repair advice",
        body: "Content on PEN2PRO — including roadmaps, funding readiness checklists, and credit-building guidance — is for informational purposes only and is not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.",
      },
      {
        heading: "Affiliate relationships",
        body: "PEN2PRO may earn a commission when you sign up for third-party services (LLC formation, banking, credit monitoring, funding partners, and similar tools) through links on this platform. We only recommend services we believe can genuinely help founders, but you should do your own research before signing up.",
      },
      {
        heading: "Individual results vary",
        body: "Every founder's background, market, effort level, and resources are different. Stories referenced on this platform, including the founder's own story, describe real individual outcomes and are not a promise of what you will experience.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">PEN2PRO</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{data.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{data.updated}</p>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border p-5" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out anytime, or head back to your{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              free roadmap
            </Link>{" "}
            and keep building.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
