import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you use PEN2PRO, we collect information you give us directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the product.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account or the waitlist, and improve PEN2PRO's AI outputs. We do not sell your personal information.",
  },
  {
    heading: "Waitlist & Contact Data",
    body: "If you join the waitlist, we store your name, email, phone (if provided), business idea, and interest level so our team can follow up about Pro, Elite, Founders, affiliate, funding, or credit repair opportunities.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your data. No system is perfectly secure, so we cannot guarantee absolute security, but we work to keep your information safe.",
  },
  {
    heading: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    heading: "Third-Party Services",
    body: "PEN2PRO may use third-party services (such as payment processors, AI providers, and analytics tools) to operate the platform. These providers only receive the data necessary to perform their function.",
  },
];

export default function PrivacyPage() {
  return <LegalPageLayout title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
