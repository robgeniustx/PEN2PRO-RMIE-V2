import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    heading: "The Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, launch strategies, funding readiness plans, and related guidance based on the information you provide. Outputs are AI-generated and should be reviewed with your own judgment, and where appropriate, a qualified professional (attorney, accountant, financial advisor).",
  },
  {
    heading: "Accounts & Plans",
    body: "PEN2PRO offers a free Starter roadmap and paid Pro, Elite, and Founders tiers. Paid tiers unlock additional features as described on the Pricing page. Pricing and features may change as the platform evolves; Founders-tier members receive the access commitments described at signup.",
  },
  {
    heading: "Acceptable Use",
    body: "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to attempt to disrupt, reverse-engineer, or abuse the platform or its AI systems.",
  },
  {
    heading: "No Guarantee of Outcomes",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee business success, income, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the maximum extent permitted by law, PEN2PRO and its founders are not liable for indirect, incidental, or consequential damages arising from your use of the platform.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return <LegalPageLayout title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
