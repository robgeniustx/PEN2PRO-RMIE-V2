import LegalPage from "../components/legal/LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: [
      "When you use PEN2PRO, we collect the information you give us directly — your name, email, phone number (if provided), business idea details, and the answers you enter into the roadmap intake, Builder, and Accelerator tools.",
      "We also collect basic usage data — pages visited, features used, and referral source (including any ?ref= parameter) — so we can improve the platform and understand which tools are actually helping people.",
    ],
  },
  {
    heading: "How We Use It",
    body: [
      "We use your information to generate your business roadmap, save your progress, manage your account tier (Free, Pro, Elite, Founders), respond to waitlist and support requests, and improve PEN2PRO's AI outputs.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "AI Processing",
    body: [
      "Roadmap, Builder, and Accelerator outputs are generated using AI models. The business details you submit are processed to produce your personalized plan. Do not submit sensitive personal data (such as Social Security numbers or full financial account numbers) into any intake form.",
    ],
  },
  {
    heading: "Data Storage & Security",
    body: [
      "Your data is stored on secured infrastructure with access limited to what is needed to operate PEN2PRO. No system is 100% breach-proof, and we work to use reasonable, industry-standard safeguards.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal data at any time by reaching out through the waitlist form or your account settings once available. You can also opt out of marketing emails at any time.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "PEN2PRO's Affiliate, Funding, and Credit Repair pages link to third-party services (LLC formation, banking, funding partners, and similar tools). Those companies have their own privacy policies, and PEN2PRO is not responsible for how they handle your data.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="August 2026" sections={SECTIONS} />;
}
