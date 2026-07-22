import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea, and interest level — through the roadmap intake, waitlist, and account forms. We also collect basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use your information to generate your business roadmap, communicate with you about PEN2PRO plans and updates, improve our AI outputs, and — where you've opted in — reach out about Pro, Elite, Founders, affiliate, funding, or credit-readiness opportunities.",
        },
        {
          heading: "How We Protect Your Information",
          body: "We use industry-standard safeguards to protect your data. We do not sell your personal information to third parties. Affiliate and partner links on PEN2PRO may collect information independently once you leave our platform, governed by their own privacy policies.",
        },
        {
          heading: "Your Choices",
          body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing communications using the link in any email we send.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy can be sent through the contact options listed on the PEN2PRO waitlist and pricing pages.",
        },
      ]}
    />
  );
}
