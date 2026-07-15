import LegalPageShell from "../components/legal/LegalPageShell";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: "By creating an account, generating a roadmap, joining the waitlist, or otherwise using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    heading: "What PEN2PRO Provides",
    body: "PEN2PRO (RMIE — Rapid Monetization Intelligence Engine) provides AI-generated business roadmaps, strategy tools, funding and credit readiness checklists, branding direction, and execution support. PEN2PRO is an education, strategy, and organization tool — it is not a law firm, accounting firm, credit repair organization, lender, or financial advisor.",
  },
  {
    heading: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on individual effort, market conditions, and factors outside PEN2PRO's control. Roadmaps, checklists, and scripts are guidance, not promises.",
  },
  {
    heading: "Plans & Billing",
    body: "Free, Pro, Elite, and Legacy Founder plans are described on the Pricing page. Where subscriptions are active, you may cancel at any time; access continues through the end of the current billing period. Legacy Founder pricing, where offered, is locked in for the account it was purchased under.",
  },
  {
    heading: "Acceptable Use",
    body: "You agree not to misuse the platform — including submitting unlawful content, attempting to break or reverse-engineer the service, or using PEN2PRO output to mislead investors, lenders, or customers.",
  },
  {
    heading: "Limitation of Liability",
    body: "PEN2PRO and its founders are not liable for indirect, incidental, or consequential damages arising from use of the platform, including business losses, missed opportunities, or funding decisions made based on PEN2PRO output.",
  },
  {
    heading: "Changes to These Terms",
    body: "PEN2PRO may update these terms as the platform evolves. Continued use after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return <LegalPageShell title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
