import LegalPage from "../components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What we collect",
          body: "When you use PEN2PRO to build a roadmap, join the waitlist, or create an account, we collect the information you provide directly — name, email, phone number, business idea details, and roadmap answers. We also collect basic usage data (pages visited, features used) to improve the platform.",
        },
        {
          heading: "How we use it",
          body: "We use your information to generate your business roadmap, follow up about Pro/Elite/Founders access, improve PEN2PRO's AI outputs, and send updates about the platform. We do not sell your personal information to third parties.",
        },
        {
          heading: "Affiliate & partner links",
          body: "Some pages (LLC formation, business banking, funding, credit tools) link to third-party partners. If you click through and sign up, PEN2PRO may earn a referral commission at no extra cost to you. Those partners have their own privacy policies.",
        },
        {
          heading: "Data storage & security",
          body: "Your roadmap and waitlist data is stored securely and used only to operate and improve PEN2PRO. We take reasonable measures to protect your data, but no system is 100% secure.",
        },
        {
          heading: "Your choices",
          body: "You can request a copy of your data or ask us to delete your account and information at any time by contacting support through the waitlist or account settings.",
        },
      ]}
    />
  );
}
