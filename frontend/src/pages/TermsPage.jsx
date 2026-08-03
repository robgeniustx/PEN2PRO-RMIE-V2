import LegalPage from "../components/legal/LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, launch strategies, and funding readiness plans.",
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information in your roadmap intake, Builder, and Accelerator sessions.",
    ],
  },
  {
    heading: "Plans & Billing",
    body: [
      "The Starter roadmap is free. Pro, Elite, and Founders plans unlock additional strategy depth, tracking, and support and are billed according to the plan you select at checkout. You may cancel a recurring plan at any time; access continues through the end of the paid period.",
      "Founders access is offered as a limited, early-adopter tier and is subject to the availability described on the Founders page at the time of purchase.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    body: [
      "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your effort, execution, market conditions, and factors outside PEN2PRO's control.",
    ],
  },
  {
    heading: "AI-Generated Content",
    body: [
      "Roadmaps, business plans, scripts, and checklists are generated with AI assistance based on the information you provide. Review all AI-generated output — including legal, financial, and tax-related suggestions — with a qualified professional before acting on it.",
    ],
  },
  {
    heading: "Account Responsibility",
    body: [
      "You are responsible for keeping your login credentials secure and for the accuracy of the information you submit. PEN2PRO reserves the right to suspend accounts used for fraud, abuse, or violation of these terms.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="August 2026" sections={SECTIONS} />;
}
