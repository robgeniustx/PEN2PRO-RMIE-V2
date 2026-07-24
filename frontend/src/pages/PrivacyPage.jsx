import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What we collect",
    body: [
      "When you create a roadmap, join the waitlist, or create an account, we collect the information you give us directly — name, email, phone (optional), business idea, and interest level. We also collect basic usage data (pages visited, features used) to improve the platform.",
      "We do not sell your personal information.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your information to generate your business roadmap, save your progress, communicate updates about PEN2PRO, and improve our AI-powered tools. If you join the waitlist, we use your interest level and referral source to prioritize outreach as tiers launch.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "PEN2PRO uses trusted third-party providers for payments, hosting, and analytics. These providers only receive the information needed to perform their function and are bound by their own privacy and security obligations.",
      "Affiliate and partner links (LLC formation, business banking, funding, credit tools, and similar services) are disclosed on the relevant pages. Clicking an affiliate link may share limited referral data with that partner.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can request access to, correction of, or deletion of your data at any time by contacting us. You can unsubscribe from waitlist or marketing emails using the link in any email we send.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use industry-standard safeguards to protect your data. No system is perfectly secure, so we encourage you to use a strong, unique password for your PEN2PRO account.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={SECTIONS}
    />
  );
}
