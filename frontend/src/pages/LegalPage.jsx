import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, communicate with you about your account and the PEN2PRO waitlist, improve our AI outputs, and where applicable, process payments through our payment provider.",
      },
      {
        heading: "What We Don't Do",
        body: "We do not sell your personal information to third parties. We do not share your roadmap or business idea details outside PEN2PRO except with service providers who help us operate the platform (hosting, email, payment processing) under confidentiality obligations.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard measures to protect your data, but no system is 100% secure. You are responsible for keeping your account credentials confidential.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can also opt out of non-essential email communications.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions and Billing",
        body: "Pro, Elite, and Founders plans are billed as described on the Pricing page at the time of purchase. Founders Lifetime access is a one-time payment for lifetime platform access under the terms in effect at purchase. You may cancel a recurring subscription at any time; access continues through the end of the paid period.",
      },
      {
        heading: "Intellectual Property",
        body: "The roadmaps, strategies, and content generated for your account are yours to use for your own business. PEN2PRO retains ownership of the platform, software, templates, and underlying AI systems.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO and its founders are not liable for business decisions made using platform outputs. Use the roadmaps, checklists, and strategy tools as guidance — always verify legal, tax, and financial decisions with a licensed professional.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, or tax advice.",
      },
      {
        heading: "Individual Results Vary",
        body: "Business outcomes depend on your market, effort, execution, capital, and factors outside PEN2PRO's control. Testimonials and examples referenced on this site reflect individual experiences and are not typical results.",
      },
      {
        heading: "Not Licensed Advice",
        body: "Nothing on PEN2PRO constitutes legal, tax, credit repair, or investment advice. Always consult a licensed attorney, accountant, or credit counselor before making decisions based on platform content.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you use affiliate links to third-party services (LLC formation, banking, funding, tools). We only recommend tools we believe add value, but you should independently evaluate any third-party service before purchasing.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const content = LEGAL_CONTENT[variant] || LEGAL_CONTENT.terms;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 pb-16 pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">
            PEN2PRO
          </p>
          <h1 className="mb-2 font-display text-4xl font-black leading-tight md:text-5xl">
            {content.title}
          </h1>
          <p className="mb-10 text-sm text-slate-500">{content.updated}</p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6"
              >
                <h2 className="mb-2 font-display text-lg font-black text-white">
                  {section.heading}
                </h2>
                <p className="text-sm leading-7 text-slate-300">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6 text-sm text-slate-400">
            Questions about this {content.title.toLowerCase()}? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">
              waitlist form
            </Link>{" "}
            or your account contact once you're a PEN2PRO member.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
