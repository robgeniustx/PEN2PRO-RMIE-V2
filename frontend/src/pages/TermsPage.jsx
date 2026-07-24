import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Acceptance of terms",
    body: [
      "By creating an account, generating a roadmap, or using any part of PEN2PRO, you agree to these terms. If you don't agree, please don't use the platform.",
    ],
  },
  {
    heading: "Using PEN2PRO",
    body: [
      "PEN2PRO's RMIE engine generates business roadmaps, strategy, and planning content based on the information you provide. You're responsible for the accuracy of what you submit and for how you use the output — PEN2PRO provides guidance, not guaranteed outcomes.",
      "Free, Pro, Elite, and Founders tiers unlock different levels of access. Features described on plan pages are subject to change as the platform develops toward launch.",
    ],
  },
  {
    heading: "Accounts and payments",
    body: [
      "You're responsible for keeping your account credentials secure. Paid tiers (Pro, Elite, Founders) are billed as described at checkout. Founders pricing, where offered, is a limited-time early-adopter offer and is not guaranteed to remain available.",
    ],
  },
  {
    heading: "No professional advice",
    body: [
      "PEN2PRO provides business, credit, and funding readiness education and strategy tools. It is not a law firm, accounting firm, credit repair organization, or licensed financial advisor. For legal, tax, or credit-repair matters, consult a licensed professional.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "PEN2PRO is provided \"as is.\" We do not guarantee business success, income, funding approval, loan approval, or credit outcomes. To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
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
