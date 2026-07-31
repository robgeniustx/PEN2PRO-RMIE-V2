import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea, and answers you provide in the roadmap builder, waitlist form, and account tools. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to generate your business roadmap, manage your account, respond to support requests, send updates about your plan or the platform, and improve PEN2PRO's tools and content. We do not sell your personal information.",
  },
  {
    heading: "Affiliate & Partner Links",
    body: "PEN2PRO may link to third-party partners (LLC formation, banking, credit, funding, and other business services). If you click through and sign up, we may earn a referral commission at no extra cost to you. Those partners have their own privacy policies.",
  },
  {
    heading: "Data Storage & Security",
    body: "Your information is stored on secured infrastructure. We take reasonable technical and organizational measures to protect it, but no system is 100% secure, and we cannot guarantee absolute protection against unauthorized access.",
  },
  {
    heading: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy? Reach out through the contact options on the PEN2PRO site.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
