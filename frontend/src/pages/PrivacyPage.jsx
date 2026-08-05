import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      sections={[
        {
          heading: "What We Collect",
          body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use your information to generate your business roadmap, communicate with you about your account and waitlist status, improve our AI models and product experience, and — where you've opted in — share relevant funding, credit, and affiliate resources.",
        },
        {
          heading: "How We Protect Your Data",
          body: "We use industry-standard security practices to protect your account and roadmap data. We do not sell your personal information to third parties.",
        },
        {
          heading: "Third-Party Services",
          body: "PEN2PRO may link to third-party affiliate partners (LLC formation, banking, funding, credit services). Once you leave PEN2PRO for a partner site, that partner's own privacy policy applies.",
        },
        {
          heading: "Your Choices",
          body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may also unsubscribe from marketing emails at any time.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy can be directed to the PEN2PRO team through the contact options listed on our waitlist and support pages.",
        },
      ]}
    />
  );
}
