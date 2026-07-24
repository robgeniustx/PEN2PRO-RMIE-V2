import LegalPage from "../components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          body: "When you create a roadmap, join the waitlist, or create an account, PEN2PRO collects the information you provide directly — name, email, phone (optional), business idea, and interest level. We also collect basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use your information to generate your business roadmap, communicate with you about your account and PEN2PRO updates, improve our AI roadmap outputs, and — if you opt in — send you offers related to Pro, Elite, or Founders access.",
        },
        {
          heading: "How We Protect Your Information",
          body: "We use industry-standard safeguards to protect your data. We do not sell your personal information to third parties. Affiliate and partner links on this site are clearly marked and governed by the partner's own privacy practices.",
        },
        {
          heading: "Your Choices",
          body: "You can request access to, correction of, or deletion of your data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy? Reach out through the Waitlist or Sign In pages and our team will respond.",
        },
      ]}
    />
  );
}
