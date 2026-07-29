import LegalPageLayout from "../components/legal/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Overview",
    body: [
      "PEN2PRO (\"we\", \"us\", \"our\") operates an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps people turn ideas, skills, and lived experience into business roadmaps. This policy explains what information we collect, how we use it, and the choices you have.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Account information: name, email, and password when you create an account or join the waitlist.",
      "Roadmap intake data: business idea, target customer, goals, and other details you enter into the Starter, Builder, or Accelerator tools so we can generate your roadmap.",
      "Usage data: pages visited, features used, and general device/browser information, collected to improve the product.",
      "Optional information: phone number, referral source, and interest level submitted through the waitlist form.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To generate and save your business roadmap, blueprint, and related tools.",
      "To manage your account, tier (Free, Pro, Elite, Founders), and billing through our payment processor.",
      "To communicate updates about your roadmap, product launches, and relevant offers.",
      "To improve PEN2PRO's features based on aggregate usage patterns.",
    ],
  },
  {
    heading: "How We Protect Your Information",
    body: [
      "We use industry-standard safeguards to protect your data in transit and at rest. Access to waitlist and admin data is restricted to authorized administrators using a protected admin key.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "We may share limited data with service providers that help us operate PEN2PRO, such as payment processing, hosting, and email delivery. Affiliate links on the Affiliate, Funding, and Credit Repair pages lead to third-party partners with their own privacy policies.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by contacting support. You may unsubscribe from marketing emails using the link in any email we send.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPageLayout title="Privacy Policy" updated="July 29, 2026" sections={SECTIONS} />;
}
