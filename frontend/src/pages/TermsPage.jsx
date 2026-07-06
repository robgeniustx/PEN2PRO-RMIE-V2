import LegalPage from "../components/layout/LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: [
      "PEN2PRO is an AI-powered business roadmap and monetization platform (RMIE — Rapid Monetization Intelligence Engine). By using the site, the free Starter roadmap, or a paid Pro, Elite, or Founders plan, you agree to these terms.",
    ],
  },
  {
    heading: "Accounts and plans",
    body: [
      "Free Starter roadmaps are available to anyone. Pro, Elite, and Founders plans unlock additional roadmap depth, tracking, and strategist support and are billed according to the plan you select at checkout.",
      "You're responsible for the accuracy of the business information you submit — PEN2PRO builds your roadmap from what you tell it.",
    ],
  },
  {
    heading: "No guarantee of outcomes",
    body: [
      "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmaps, strategy, and readiness checklists are educational tools — results depend on your effort, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "Don't use PEN2PRO to generate content for illegal activity, or attempt to abuse, reverse-engineer, or overload the platform's systems.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms as PEN2PRO grows. Continued use of the platform after an update means you accept the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={SECTIONS}
    />
  );
}
