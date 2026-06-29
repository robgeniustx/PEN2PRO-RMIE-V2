import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      sections={[
        {
          heading: "What We Collect",
          body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea details, and waitlist or account information. We also collect basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How We Use It",
          body: "We use your information to generate your roadmap, manage your account, respond to support requests, send updates about PEN2PRO (including waitlist and launch communications), and improve our AI engine and product experience.",
        },
        {
          heading: "How We Protect It",
          body: "We take reasonable technical and organizational measures to protect your data. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "Sharing",
          body: "We do not sell your personal information. We may share data with service providers (such as payment processors or email tools) strictly to operate PEN2PRO, or when required by law.",
        },
        {
          heading: "Your Choices",
          body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can also unsubscribe from non-essential emails at any time.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy can be sent to the email address associated with your PEN2PRO account or waitlist signup.",
        },
      ]}
    />
  );
}
