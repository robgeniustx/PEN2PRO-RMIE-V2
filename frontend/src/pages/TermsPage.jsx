import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    paragraphs: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, strategy, and execution plans. By creating an account or using the free roadmap tool, you agree to these terms.",
    ],
  },
  {
    heading: "Plans & Billing",
    paragraphs: [
      "Starter access is free. Pro, Elite, and Founders are paid tiers billed on a recurring or one-time basis depending on the plan, processed securely through Stripe. You can cancel a recurring subscription at any time from your dashboard or by contacting support; cancellation stops future billing but does not refund past charges except where required by law.",
      "Founders pricing is offered at limited availability and locked-in rates for early adopters — terms of that offer are described on the Founders page at time of purchase.",
    ],
  },
  {
    heading: "No Guarantees",
    paragraphs: [
      "PEN2PRO provides education, strategy, planning, and organizational tools. We do not guarantee income, business success, credit repair outcomes, funding approval, or loan approval. Results depend on your effort, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Acceptable Use",
    paragraphs: [
      "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to attempt to disrupt or reverse-engineer the platform. We reserve the right to suspend accounts that violate these terms.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these terms as PEN2PRO grows. Material changes will be reflected on this page with an updated date.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPageLayout title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
