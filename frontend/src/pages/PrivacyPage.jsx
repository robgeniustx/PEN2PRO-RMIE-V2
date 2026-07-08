import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you create a free roadmap, join the waitlist, or create an account, we collect the information you provide directly — name, email, phone (optional), business idea, and interest level (Free Roadmap, Pro, Elite, Legacy Founder, Affiliate, Funding, or Credit Repair help).",
            "We also collect basic usage data (pages visited, features used, referral source) to understand how PEN2PRO is helping people and where the product needs to improve.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "Your information is used to generate your roadmap, manage your account and subscription tier, follow up on waitlist and affiliate interest, and improve the RMIE engine.",
            "We do not sell your personal information. Affiliate and funding partner data is only shared when you explicitly request an introduction through the Affiliate, Funding, or Credit Repair pages.",
          ],
        },
        {
          heading: "Data storage and security",
          body: [
            "Roadmap, waitlist, and account data is stored on secured infrastructure. Access to admin tools (waitlist, metrics) is protected by an admin access key and limited to authorized PEN2PRO team members.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can request that your data be corrected or removed at any time by contacting us through the About page. Removing your data may limit your access to a saved roadmap or account history.",
          ],
        },
      ]}
    />
  );
}
