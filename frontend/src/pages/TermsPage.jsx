import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our Free, Pro, Elite, and Legacy Founder tiers. By using the platform you agree to use it for lawful purposes and to provide accurate information during intake.",
  },
  {
    heading: "No guarantees",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmaps, checklists, and strategy output are educational tools — outcomes depend on your own effort, market conditions, and execution.",
  },
  {
    heading: "Accounts and access",
    body: "You are responsible for keeping your login credentials secure. Pro, Elite, and Legacy Founder access is tied to your account and is non-transferable unless otherwise stated at purchase.",
  },
  {
    heading: "Billing",
    body: "Paid tiers renew on the billing cycle you select at checkout. You can cancel at any time from your account; access continues through the end of the current billing period.",
  },
  {
    heading: "Changes",
    body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
