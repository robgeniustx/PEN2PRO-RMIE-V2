import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What we collect",
    body: "PEN2PRO collects the information you give us directly — name, email, phone (optional), business idea, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    heading: "How we use it",
    body: "We use your information to generate your business roadmap, manage your account, send updates about your plan or the PEN2PRO waitlist, and improve our AI-generated strategy output. We do not sell your personal information.",
  },
  {
    heading: "How we protect it",
    body: "Account and roadmap data is stored on secured infrastructure. Access is limited to what's needed to operate the platform and support you.",
  },
  {
    heading: "Third parties",
    body: "We may share limited data with service providers that power PEN2PRO (payment processing, email delivery, hosting) strictly to operate the platform. Affiliate partners linked from PEN2PRO have their own privacy policies.",
  },
  {
    heading: "Your choices",
    body: "You can request access to, correction of, or deletion of your data at any time by contacting us through the account settings or waitlist confirmation email.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
