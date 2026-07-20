import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          body: "When you use PEN2PRO, we collect information you give us directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use your information to generate your business roadmap, operate your account, respond to support requests, send updates about your plan or the PEN2PRO waitlist, and improve our AI-powered tools. We do not sell your personal information.",
        },
        {
          heading: "Data Sharing",
          body: "We share information only with service providers who help us run PEN2PRO (such as hosting, payment processing, and email delivery), and only to the extent needed to provide the service. We do not share your data with third parties for their own marketing purposes.",
        },
        {
          heading: "Data Security",
          body: "We take reasonable technical and organizational measures to protect your information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "Your Choices",
          body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also unsubscribe from marketing emails using the link included in those emails.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy can be sent through the contact options listed on our About page.",
        },
      ]}
    />
  );
}
