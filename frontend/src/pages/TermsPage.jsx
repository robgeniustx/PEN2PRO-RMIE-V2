import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: [
      "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Starter, Pro, Elite, and Legacy Founder tiers. By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    body: [
      "PEN2PRO gives you structure, strategy, and tools — not a guarantee. Business outcomes, funding approval, credit results, and income depend on your effort, market conditions, and factors outside our control. Nothing on this platform is a promise of income or success.",
    ],
  },
  {
    heading: "Subscriptions & Billing",
    body: [
      "Pro, Elite, and Legacy Founder plans are billed on the terms shown at checkout. You can cancel a recurring subscription at any time, effective at the end of the current billing period, unless otherwise stated.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business.",
    ],
  },
  {
    heading: "Not Professional Advice",
    body: [
      "PEN2PRO is not a law firm, credit repair organization, or licensed financial advisor. Roadmap output, funding readiness checklists, and credit-building guidance are educational tools, not legal, tax, or financial advice. Consult a qualified professional for advice specific to your situation.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
