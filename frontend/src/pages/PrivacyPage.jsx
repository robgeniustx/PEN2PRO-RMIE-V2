import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: [
      "When you use PEN2PRO, we may collect information you provide directly — your name, email address, phone number, business idea, and answers you give during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used) to improve the platform.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to generate your business roadmap, deliver Pro/Elite/Founders features, respond to support requests, send updates about your account, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Affiliate & Third-Party Links",
    body: [
      "PEN2PRO links to third-party services (LLC formation, business banking, credit tools, funding partners, and similar resources) as part of our affiliate program. If you click one of these links, you leave PEN2PRO and are subject to that provider's own privacy policy. We are not responsible for the practices of third-party sites.",
    ],
  },
  {
    heading: "Data Storage & Security",
    body: [
      "We take reasonable technical and organizational measures to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from the platform.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also unsubscribe from waitlist or marketing emails using the link included in those messages.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this Privacy Policy or how your data is handled can be sent to the support contact listed on the PEN2PRO waitlist and pricing pages.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026" sections={SECTIONS} />
  );
}
