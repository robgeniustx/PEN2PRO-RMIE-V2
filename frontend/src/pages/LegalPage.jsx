import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone number (optional), business idea details, and answers you provide during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, manage your account, respond to support requests, send you updates about PEN2PRO features and offers, and understand how the platform is used so we can improve it. We do not sell your personal information.",
      },
      {
        heading: "Sharing",
        body: "We share data with service providers who help us run PEN2PRO (hosting, payment processing, email delivery, analytics) under agreements that require them to protect your information. If you click an affiliate link (LLC formation, banking, credit, funding, etc.), that third party's own privacy policy governs the information you share with them.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
      },
      {
        heading: "Security",
        body: "We use reasonable administrative and technical safeguards to protect your data. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Reach out through the contact options on our About page.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By creating an account or using the platform, you agree to these terms.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, credit repair outcomes, or loan approval. Results depend on your effort, market conditions, execution, and factors outside our control.",
      },
      {
        heading: "Your Account",
        body: "You are responsible for keeping your login credentials secure and for all activity under your account. You must provide accurate information when creating an account or submitting roadmap intake details.",
      },
      {
        heading: "Subscriptions & Payments",
        body: "Pro, Elite, and Founders plans are billed as described on the Pricing page at the time of purchase. Founders plans are one-time lifetime-access offers; Pro and Elite are recurring subscriptions that can be cancelled at any time. Prices and features are subject to change for future billing cycles with notice.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree not to misuse the platform — including attempting to reverse-engineer the AI systems, submitting unlawful content, or using PEN2PRO to harass, defraud, or harm others.",
      },
      {
        heading: "Third-Party Links",
        body: "PEN2PRO links to third-party services for LLC formation, banking, credit, funding, and other business needs. We are not responsible for the products, services, or terms of those third parties.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and pursue a business idea. It is not a guarantee of any outcome.",
      },
      {
        heading: "No Guarantee of Income, Funding, or Credit Results",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. It also does not guarantee credit repair results — credit outcomes depend on your credit history, actions taken by creditors and bureaus, and factors outside our control. Any figures shown in sample roadmaps (revenue, cost, timelines) are illustrative estimates, not promises.",
      },
      {
        heading: "Not Legal, Financial, or Tax Advice",
        body: "Nothing on PEN2PRO constitutes legal, financial, tax, or credit-repair legal advice. Business formation (LLC/EIN), funding, and credit decisions should be reviewed with a qualified attorney, accountant, or financial professional before you act.",
      },
      {
        heading: "Your Effort Matters",
        body: "PEN2PRO gives you structure and strategy. The execution — outreach, sales, marketing, follow-through — is on you. Results vary from person to person based on effort, market, and circumstances.",
      },
      {
        heading: "Affiliate Relationships",
        body: "Some links on PEN2PRO (LLC formation, banking, credit monitoring, funding partners, and other tools) are affiliate links. We may earn a commission if you sign up through them, at no extra cost to you. We only recommend tools we believe are useful for entrepreneurs.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.title}</h1>
        <p className="text-slate-500 text-sm mb-12">{page.updated}</p>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-slate-400 text-sm leading-6">
            PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business
            success. The platform provides education, strategy, organization, and readiness tools.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link>
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
