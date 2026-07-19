import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By creating an account, joining the waitlist, or using any part of PEN2PRO — including the free Starter roadmap, Pro, Elite, Founders, Builder, or Accelerator tools — you agree to these Terms of Service.",
    ],
  },
  {
    heading: "What PEN2PRO Provides",
    body: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform. It generates business roadmaps, strategy plans, and readiness checklists based on the information you provide. Output is guidance and educational content — it is not legal, tax, financial, or investment advice.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your own effort, market conditions, and factors outside our control. Any examples, projections, or figures shown are illustrative, not promises.",
    ],
  },
  {
    heading: "Subscriptions & Billing",
    body: [
      "Pro, Elite, and Founders are paid tiers. Where billing is live, subscriptions renew automatically until canceled, and pricing shown at checkout is the price you are charged. Founders/Legacy Founder pricing, where offered, is tied to limited early-access availability and is not guaranteed to remain open.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You agree not to misuse the platform — including attempting to break, reverse-engineer, or overload it, submitting unlawful content, or using it to harass or defraud others.",
    ],
  },
  {
    heading: "Changes to the Service",
    body: [
      "PEN2PRO is under active development. Features, pricing, and page content may change as the platform evolves. We will make reasonable efforts to communicate material changes to paying members.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "PEN2PRO and its founder are not liable for indirect, incidental, or consequential damages arising from use of the platform, including business decisions made based on roadmap output.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026" sections={SECTIONS} />
  );
}
