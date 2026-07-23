import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "What We Collect",
    paragraphs: [
      "When you use PEN2PRO — starting a free roadmap, joining the waitlist, or upgrading to Pro, Elite, or Founders — we collect the information you give us directly: name, email, phone (optional), business idea details, and the answers you provide during roadmap intake.",
      "We also collect basic usage data (pages visited, features used, referral source) so we can improve the platform and understand which tools founders rely on most.",
    ],
  },
  {
    heading: "How We Use It",
    paragraphs: [
      "Your information is used to generate your roadmap, save your progress, communicate with you about your account, and — if you opt in — notify you about Pro, Elite, Founders access, and platform updates.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Payment Information",
    paragraphs: [
      "Subscription payments are processed by Stripe. PEN2PRO does not store your card number, CVC, or full payment details on our servers — Stripe handles that securely on our behalf.",
    ],
  },
  {
    heading: "Data Retention & Access",
    paragraphs: [
      "We retain your roadmap and account data for as long as your account is active so you can pick up where you left off. You can request deletion of your data at any time by contacting support.",
    ],
  },
  {
    heading: "Third-Party Tools",
    paragraphs: [
      "PEN2PRO may link you to trusted third-party partners for services like LLC formation, business banking, business credit, and funding. Those partners have their own privacy policies — we recommend reviewing them before signing up.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPageLayout title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
