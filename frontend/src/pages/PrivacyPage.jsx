import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          paragraphs: [
            "PEN2PRO collects information you provide directly, such as your name, email, phone number, business idea, and roadmap intake answers, and information generated as you use the platform, such as roadmap progress, saved blueprints, and feature usage.",
          ],
        },
        {
          heading: "How We Use Your Information",
          paragraphs: ["We use the information you provide to:"],
          list: [
            "Generate your business roadmap, blueprint, and AI-powered recommendations",
            "Save your progress across sessions and plan tiers",
            "Communicate with you about your account, waitlist status, or upgrades",
            "Improve the RMIE engine and the overall PEN2PRO platform",
            "Send optional updates about launch dates, new features, or offers",
          ],
        },
        {
          heading: "How We Protect Your Information",
          paragraphs: [
            "We use industry-standard safeguards to protect your data. We do not sell your personal information to third parties. Affiliate and partner links on the platform are clearly identified, and any data shared with a partner only happens when you choose to engage with that partner's service.",
          ],
        },
        {
          heading: "Your Choices",
          paragraphs: [
            "You can request a copy of your data, ask us to correct it, or ask us to delete your account and associated information at any time by contacting support.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about this policy can be sent through the contact options listed on the PEN2PRO waitlist and support pages.",
          ],
        },
      ]}
    />
  );
}
