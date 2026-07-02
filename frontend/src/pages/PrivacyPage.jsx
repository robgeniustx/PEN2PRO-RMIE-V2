import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What we collect",
    body: "When you use PEN2PRO's free roadmap tool, join the waitlist, or create an account, we collect the information you give us directly — name, email, phone number (optional), business idea, and interest level (Free Roadmap, Pro, Elite, Founder, Affiliate, Funding, or Credit Repair help). We also collect basic usage data, such as which pages you visit and which referral link brought you here, so we can improve the platform.",
  },
  {
    heading: "How we use it",
    body: "We use your information to generate your roadmap, save your progress, follow up about the waitlist, improve PEN2PRO's tools, and — if you opt in — send you updates about Pro, Elite, and Founder access. We do not sell your personal information.",
  },
  {
    heading: "Third parties",
    body: "PEN2PRO may share limited data with service providers that help us operate — payment processing, email delivery, hosting, and analytics — strictly to run the platform. Affiliate and funding partner links are clearly marked; we are not responsible for the privacy practices of external sites you choose to visit.",
  },
  {
    heading: "Your choices",
    body: "You can ask us to update or delete your information at any time by contacting us through the email associated with your account. Removing yourself from the waitlist or deleting your account stops future communication from PEN2PRO.",
  },
  {
    heading: "Data security",
    body: "We take reasonable technical and administrative steps to protect your data, but no platform can guarantee perfect security. Use a strong, unique password and avoid sharing sensitive account details.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
