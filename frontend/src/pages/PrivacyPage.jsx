import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: [
      "When you use PEN2PRO, we collect the information you give us directly — your name, email, phone number (optional), business idea, and roadmap intake answers — along with basic usage data like which pages and tools you interact with.",
      "If you join the waitlist, upgrade to a paid tier, or contact support, we collect the details needed to process that request (billing information is handled by our payment processor and is never stored on our servers).",
    ],
  },
  {
    heading: "How We Use It",
    body: [
      "We use your information to generate your business roadmap, save your progress, communicate with you about your account, and improve the PEN2PRO platform.",
      "We do not sell your personal information. We may share data with service providers (hosting, payment processing, email delivery) strictly to operate the platform, under agreements that require them to protect it.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request a copy of your data, ask us to correct it, or ask us to delete your account at any time by contacting support.",
      "You can unsubscribe from marketing emails using the link in any email we send.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use industry-standard safeguards to protect your data. No system is 100% secure, so we encourage you to use a strong, unique password for your account.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy? Reach out through the contact options on our Waitlist or Pricing pages.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
