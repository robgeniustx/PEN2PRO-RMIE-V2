import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: [
      "When you use PEN2PRO — including the free roadmap builder, waitlist, and account sign-up — we collect the information you provide directly, such as your name, email, phone number (optional), business idea, and roadmap intake answers.",
      "We also collect basic usage data (pages visited, features used, referral source) to improve the platform and understand how people move through the roadmap, Builder, and Accelerator flows.",
    ],
  },
  {
    heading: "How We Use It",
    body: [
      "We use your information to generate your business roadmap, manage your account, communicate updates about Pro, Elite, and Founders access, and improve PEN2PRO's AI-generated strategy output.",
      "If you join the waitlist or express interest in Funding, Credit Repair, or the Affiliate program, we may follow up with relevant guidance and offers tied to that interest.",
    ],
  },
  {
    heading: "What We Don't Do",
    body: [
      "We do not sell your personal information. We do not share your roadmap content or intake answers with third parties for advertising purposes.",
      "Payment details for Pro, Elite, and Founders plans are processed by Stripe — PEN2PRO does not store your card information on our servers.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request a copy of your data, ask us to delete your account, or unsubscribe from waitlist and marketing emails at any time by contacting us.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
