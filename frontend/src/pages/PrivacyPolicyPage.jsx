import LegalLayout from "../components/legal/LegalLayout";

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you use PEN2PRO, we collect information you provide directly, such as your name, email address, phone number, business idea details, and any answers you submit through the roadmap builder, waitlist form, or account signup.",
      "We also collect limited technical information automatically, such as pages visited, referral source (including ?ref= parameters), device/browser type, and general usage activity, to help us understand how the platform is used and improve it.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use your information to generate your business roadmap and blueprint, operate your account, process subscription payments, respond to support requests, and communicate updates about PEN2PRO.",
      "If you join the waitlist, we use your information to notify you about product launches, plan availability, and relevant offers based on the interest level you selected.",
    ],
  },
  {
    heading: "3. Third-Party Services",
    body: [
      "PEN2PRO uses trusted third-party providers to operate the platform, including Stripe for payment processing and OpenAI for AI-generated roadmap content. These providers process the minimum data necessary to perform their function and maintain their own privacy and security practices.",
      "We may also link to affiliate partners (for example, LLC formation, business banking, or funding services). We do not share your personal information with affiliate partners unless you choose to engage with them directly.",
    ],
  },
  {
    heading: "4. Data Retention",
    body: [
      "We retain account and roadmap data for as long as your account is active, or as needed to provide the service. Waitlist submissions are retained until launch or until you request deletion.",
    ],
  },
  {
    heading: "5. Your Rights",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to verified requests within a reasonable timeframe.",
    ],
  },
  {
    heading: "6. Security",
    body: [
      "We use reasonable administrative and technical safeguards to protect your information. No system is completely secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this Privacy Policy can be sent through the contact options listed on the PEN2PRO website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalLayout title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
