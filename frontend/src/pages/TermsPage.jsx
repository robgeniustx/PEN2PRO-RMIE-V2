import LegalPageLayout from "../components/legal/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Agreement to Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
    ],
  },
  {
    heading: "The Service",
    body: [
      "PEN2PRO provides an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy guidance, and readiness tools based on information you provide. Free, Pro, Elite, and Founders tiers unlock different levels of access, described on the Pricing page.",
    ],
  },
  {
    heading: "Accounts and Eligibility",
    body: [
      "You must provide accurate information when creating an account or submitting intake forms. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
    ],
  },
  {
    heading: "Subscriptions and Billing",
    body: [
      "Pro, Elite, and Founders access is billed according to the plan you select at checkout. Founders pricing, when offered, is a limited early-adopter offer subject to availability. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You agree not to misuse the platform, including attempting to reverse-engineer the AI engine, submit unlawful content, or use PEN2PRO to defraud others.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    body: [
      "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair results, or funding or loan approval. Outcomes depend on individual effort, execution, and market conditions.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "The PEN2PRO name, brand, and platform are the property of PEN2PRO. Roadmaps and content you generate for your own business are yours to use.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "We may suspend or terminate access for violation of these terms. You may stop using PEN2PRO at any time.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms of Service as the platform evolves. Continued use after changes take effect constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPageLayout title="Terms of Service" updated="July 29, 2026" sections={SECTIONS} />;
}
