import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What we collect",
          body: "When you use PEN2PRO — including the free roadmap, waitlist, and Pro/Elite/Founders tools — we collect the information you submit directly (name, email, phone, business idea, and intake answers) along with basic usage data such as pages visited and features used.",
        },
        {
          heading: "How we use it",
          body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account and PEN2PRO updates, and improve the RMIE engine. We do not sell your personal information to third parties.",
        },
        {
          heading: "Payment data",
          body: "Subscription and Founders payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials on its own servers.",
        },
        {
          heading: "Affiliate links",
          body: "Some pages (Affiliate, Funding, Credit Repair) link to third-party partners. If you click one of those links, that partner's own privacy policy applies to information you share with them.",
        },
        {
          heading: "Your choices",
          body: "You can request a copy of your data, ask us to delete your account, or unsubscribe from emails at any time by contacting us through the About page.",
        },
      ]}
    />
  );
}
