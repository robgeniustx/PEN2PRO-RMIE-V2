import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea details, and waitlist or account preferences. We also collect basic usage data (pages visited, features used, referral source) to improve the product.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your roadmap, save your progress, communicate with you about your account or the waitlist, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & partner links",
        body: "Some pages link to third-party services (LLC formation, banking, credit, funding, and other business tools). PEN2PRO may earn a referral commission from these partners at no extra cost to you. Using a partner link does not obligate you to purchase anything.",
      },
      {
        heading: "Data security",
        body: "We use industry-standard safeguards to protect your data. No system is 100% secure, so we encourage you to use a strong, unique password and avoid sharing sensitive personal or financial information in free-text fields.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You can also unsubscribe from email communications at any time.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform you agree to use it lawfully and not to misuse, scrape, or resell the output without permission.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO is a strategy, planning, and readiness tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & billing",
        body: "Free, Pro, Elite, and Legacy Founder plans are described on our Pricing page. Paid plans renew automatically until canceled. You can cancel at any time from your account settings; access continues through the end of the current billing period.",
      },
      {
        heading: "Intellectual property",
        body: "The PEN2PRO platform, brand, and roadmap templates are owned by PEN2PRO. Roadmaps generated for your business are yours to use for your own venture.",
      },
      {
        heading: "Changes to these terms",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    eyebrow: "Legal",
    title: "Disclaimer",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Education & strategy, not guarantees",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the work of building and running your business is still yours to do.",
      },
      {
        heading: "Not financial, legal, or tax advice",
        body: "Nothing on PEN2PRO is financial, legal, tax, or credit-repair advice. Roadmaps, checklists, and readiness tools are for informational and planning purposes only. Consult a licensed attorney, accountant, or financial professional before making binding business, legal, or financial decisions.",
      },
      {
        heading: "Third-party partners",
        body: "PEN2PRO links to third-party providers (LLC formation, banking, credit, funding, and other services) for convenience. We are not responsible for the products, services, terms, or outcomes provided by these third parties.",
      },
      {
        heading: "Individual results vary",
        body: "Founder stories and examples shared on PEN2PRO reflect individual experiences. Your results will depend on your market, effort, resources, and circumstances.",
      },
    ],
  },
};

export default function LegalPage({ type = "privacy" }) {
  const page = CONTENT[type] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{page.eyebrow}</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about this page? Reach out any time, or head back to your{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              free roadmap
            </Link>{" "}
            to keep building.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
