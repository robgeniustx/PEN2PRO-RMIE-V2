import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Agreement to Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
    ],
  },
  {
    heading: "Who Can Use PEN2PRO",
    body: [
      "PEN2PRO is intended for individuals 18 years or older who are exploring, building, or growing a business idea. By creating an account, you confirm the information you provide is accurate.",
    ],
  },
  {
    heading: "Plans and Billing",
    body: [
      "Free Roadmap access has no cost. Pro, Elite, and Founders plans are billed according to the pricing shown at checkout. Subscriptions renew automatically until canceled. Founders Lifetime access is a one-time purchase as described on the Founders page.",
      "You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You agree not to misuse the platform, attempt to reverse-engineer the AI systems, submit unlawful content, or use PEN2PRO to harm others. We may suspend accounts that violate these terms.",
    ],
  },
  {
    heading: "AI-Generated Output",
    body: [
      "Roadmaps, strategies, scripts, and other AI-generated content are provided for informational and planning purposes. You are responsible for reviewing, validating, and adapting any output before acting on it, including legal, financial, tax, or credit-related decisions.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    body: [
      "PEN2PRO provides education, strategy, structure, and tools. We do not guarantee business success, revenue, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "The PEN2PRO platform, brand, and underlying technology are owned by PEN2PRO. Roadmap content generated for your specific business idea is yours to use.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "PEN2PRO is provided \"as is.\" To the maximum extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
