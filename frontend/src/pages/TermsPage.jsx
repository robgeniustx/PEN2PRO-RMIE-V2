import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: [
      "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Rapid Monetization Intelligence Engine (RMIE). By creating an account or using the platform, you agree to these terms.",
      "You must be 18 or older to create an account. You're responsible for the accuracy of the information you provide and for keeping your login credentials secure.",
    ],
  },
  {
    heading: "Plans & Billing",
    body: [
      "Free roadmaps are available at no cost. Pro, Elite, and Founders tiers are subscription or one-time offerings billed through our payment processor. You can cancel a subscription at any time; access continues through the end of the paid period.",
      "Pricing and features are subject to change, and we'll do our best to notify active subscribers of material changes in advance.",
    ],
  },
  {
    heading: "No Guarantees",
    body: [
      "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "Don't use PEN2PRO to generate content that is illegal, fraudulent, or infringes on someone else's rights. We may suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes take effect means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
