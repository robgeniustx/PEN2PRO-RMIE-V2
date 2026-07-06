import LegalPage from "../components/layout/LegalPage";

const SECTIONS = [
  {
    heading: "What we collect",
    body: [
      "When you use PEN2PRO — creating a roadmap, joining the waitlist, signing in, or upgrading your plan — we collect the information you give us directly: name, email, phone (if provided), business idea details, and payment information processed by our payment provider.",
      "We also collect basic usage data (pages visited, features used, referral source) to understand how people use the platform and to improve it.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your information to generate your business roadmap, manage your account and subscription tier, respond to you, and improve PEN2PRO's tools and content.",
      "If you join the waitlist or express interest in Pro, Elite, Funding, Credit Repair, or the Affiliate program, we use that information to follow up about the specific thing you asked about — nothing else.",
    ],
  },
  {
    heading: "What we don't do",
    body: [
      "We do not sell your personal information. We do not share your business idea or roadmap content with third parties for marketing purposes.",
      "Payment details are handled by our payment processor (Stripe) — PEN2PRO does not store your full card number.",
    ],
  },
  {
    heading: "Your control",
    body: [
      "You can ask us to update or delete your account information at any time by contacting support. If you're on the waitlist and want to be removed, let us know and we'll remove your entry.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy? Reach out through the contact details on our waitlist or pricing pages.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={SECTIONS}
    />
  );
}
