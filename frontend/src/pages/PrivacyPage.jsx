import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: [
      "When you use PEN2PRO, we collect the information you give us directly — name, email, phone number, business idea, and roadmap intake responses — along with basic usage data like pages visited and features used, so we can improve the platform.",
    ],
  },
  {
    heading: "How We Use It",
    body: [
      "We use your information to generate your roadmap, save your progress, communicate with you about your account and the waitlist, and understand which features are helping people the most.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Affiliate & Partner Links",
    body: [
      "PEN2PRO may link to third-party partners for services like LLC formation, business banking, credit, funding, and marketing tools. We may earn a commission if you use these links. Those partners have their own privacy policies, and we encourage you to review them.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, so we encourage you to use strong, unique passwords and to contact us if you notice anything suspicious about your account.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can also unsubscribe from marketing emails at any time using the link in those emails.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy can be sent to the PEN2PRO team through the contact options listed on our website.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
