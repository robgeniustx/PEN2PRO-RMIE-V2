import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What we collect",
          body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) so we can improve the platform.",
        },
        {
          heading: "How we use it",
          body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account and waitlist status, and improve PEN2PRO's AI recommendations. We do not sell your personal information.",
        },
        {
          heading: "Third-party services",
          body: "PEN2PRO may link out to trusted partners for LLC formation, business banking, credit monitoring, funding, and related services. Those partners have their own privacy policies — review them before sharing information directly with a partner.",
        },
        {
          heading: "Data security",
          body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, so we encourage you to use a strong, unique password for your PEN2PRO account.",
        },
        {
          heading: "Your choices",
          body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us through your account settings.",
        },
      ]}
    />
  );
}
