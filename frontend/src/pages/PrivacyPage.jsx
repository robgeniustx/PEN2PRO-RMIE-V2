import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) so we can improve the platform.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to generate your business roadmap, manage your account, respond to support requests, send relevant product updates, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
  },
  {
    heading: "Affiliate & Partner Links",
    body: "PEN2PRO may link to partner services (LLC formation, business banking, credit tools, funding partners, and similar resources) and may earn a referral commission when you use these links. Using them does not affect the price you pay.",
  },
  {
    heading: "Data Storage & Security",
    body: "Your data is stored using industry-standard security practices. No system is 100% secure, so we recommend using a strong, unique password and not sharing your login credentials.",
  },
  {
    heading: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of non-essential email communications.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy can be sent through the contact options listed on the PEN2PRO website.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
