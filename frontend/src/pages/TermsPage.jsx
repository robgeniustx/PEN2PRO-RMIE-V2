import LegalPage from "./LegalPage";

const sections = [
  {
    heading: "Acceptance of terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    heading: "What PEN2PRO provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy tools, and educational content. Outputs are guidance and strategy — not legal, financial, tax, or credit advice.",
  },
  {
    heading: "Accounts",
    body: "You are responsible for keeping your account credentials secure and for all activity under your account. Provide accurate information when you sign up.",
  },
  {
    heading: "Plans and billing",
    body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans are billed as shown at checkout. You may cancel a subscription at any time; access continues through the end of the current billing period.",
  },
  {
    heading: "Acceptable use",
    body: "You agree not to misuse PEN2PRO — including attempting to disrupt the platform, reverse-engineer it, or use it for unlawful purposes.",
  },
  {
    heading: "No guarantees",
    body: "PEN2PRO does not guarantee income, funding approval, credit outcomes, or business success. Results depend on individual effort, execution, and market conditions.",
  },
  {
    heading: "Changes",
    body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={sections} />;
}
