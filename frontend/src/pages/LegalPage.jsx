import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "PEN2PRO collects the information you provide directly — name, email, phone, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, operate your account, communicate updates about your plan, and improve PEN2PRO's AI outputs. We do not sell your personal information.",
      },
      {
        heading: "Data Sharing",
        body: "We only share data with service providers required to operate the platform (hosting, payments, email delivery) and with affiliate partners you explicitly choose to engage with through our resource links.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting us. You can also unsubscribe from marketing emails at any time.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy can be sent through the waitlist form or your account contact email.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. By using the platform, you agree to use the outputs as guidance — not as legal, financial, tax, or professional advice.",
      },
      {
        heading: "Accounts & Plans",
        body: "Free, Pro, Elite, and Legacy Founder tiers unlock different levels of access. Subscription plans renew automatically until canceled. You can manage or cancel your plan at any time from your dashboard.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee income, funding approval, credit repair results, or business success. Outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree not to misuse the platform, attempt to reverse-engineer the AI systems, or use PEN2PRO for unlawful purposes.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. Roadmaps, checklists, and AI-generated plans are starting points — not guarantees of outcomes.",
      },
      {
        heading: "No Financial, Legal, or Tax Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, or credit repair advice. Consult a licensed professional before making business, legal, or financial decisions.",
      },
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit score improvement, or business success. Results depend on individual effort, execution, and market conditions.",
      },
      {
        heading: "Affiliate Relationships",
        body: "Some links on PEN2PRO are affiliate links. We may earn a commission if you use a recommended partner, at no additional cost to you.",
      },
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{data.title}</h1>
        <p className="mb-12 text-sm text-slate-500">{data.updated}</p>

        <div className="space-y-10">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-xl font-bold text-white">{section.heading}</h2>
              <p className="leading-7 text-slate-400">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-5 text-sm text-slate-500" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
          PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success.
          The platform provides education, strategy, organization, and readiness tools.
        </div>
      </div>
      <Footer />
    </div>
  );
}
