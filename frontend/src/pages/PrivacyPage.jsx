import LegalPage from "./LegalPage";

const sections = [
  {
    heading: "What we collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    heading: "How we use it",
    body: "We use your information to generate your business roadmap, respond to waitlist and account requests, improve PEN2PRO's tools, and, if you opt in, send updates about Pro, Elite, and Founders access.",
  },
  {
    heading: "How we protect it",
    body: "We take reasonable technical and organizational measures to protect your data. No online platform can guarantee absolute security, and we encourage you to use a strong, unique password for your account.",
  },
  {
    heading: "Third parties",
    body: "We do not sell your personal information. We may share limited data with service providers (such as payment processors and analytics tools) strictly to operate PEN2PRO.",
  },
  {
    heading: "Your choices",
    body: "You can request access to, correction of, or deletion of your data at any time by contacting us. You can unsubscribe from email updates at any point.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy can be directed to the PEN2PRO team through the contact options on our site.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={sections} />;
}
