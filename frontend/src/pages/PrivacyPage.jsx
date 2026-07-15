import LegalPageShell from "../components/legal/LegalPageShell";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you create a free roadmap, join the waitlist, or create an account, we collect information you provide directly — name, email, phone number (optional), business idea, and answers to intake questions used to generate your PEN2PRO roadmap. We also collect basic usage data (pages visited, features used, plan tier) to improve the product.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, respond to support requests, send product and launch updates, and improve PEN2PRO's AI models and recommendations. We do not sell your personal information to third parties.",
  },
  {
    heading: "Affiliate & Partner Links",
    body: "Some pages (Funding, Credit Repair, Affiliate) link to third-party services for business formation, banking, credit, and funding. PEN2PRO may earn a referral commission from these partners. Clicking a link does not share your PEN2PRO account data with the partner unless you separately submit information on their site.",
  },
  {
    heading: "Data Storage & Security",
    body: "Your data is stored on secured infrastructure with access limited to PEN2PRO team members who need it to operate the platform. No system is 100% secure, and we continually work to protect your information.",
  },
  {
    heading: "Your Choices",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting support. You may unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy can be sent through the contact options listed on the PEN2PRO waitlist and support pages.",
  },
];

export default function PrivacyPage() {
  return <LegalPageShell title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
