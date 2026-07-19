import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      sections={[
        {
          heading: "What We Collect",
          body: [
            "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data like pages visited and features used, so we can improve the platform.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "We use your information to generate your roadmap, save your progress, communicate updates about Pro, Elite, and Founders access, and improve the RMIE engine. We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Waitlist & Marketing",
          body: [
            "If you join the waitlist or start a free roadmap, we may follow up by email or phone about your submission, PEN2PRO updates, and relevant offers. You can ask to be removed at any time.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable technical and organizational measures to protect your information. No system is 100% secure, and we encourage you to use a strong, unique password for your account.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "PEN2PRO may link to third-party affiliate partners for services like LLC formation, business banking, credit building, and funding. Those partners have their own privacy policies, and we encourage you to review them before sharing information.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For questions about this policy or to request removal of your data, reach out through the contact options available on the platform.",
          ],
        },
      ]}
    />
  );
}
