import LegalPage from "../components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          body: [
            "When you use PEN2PRO — including the free Starter Roadmap, Builder, Accelerator, waitlist, or account sign-up — we collect the information you provide directly: name, email, phone number (optional), business idea details, and answers you give during intake.",
            "We also collect basic usage data (pages visited, features used, referral source) to improve the product and understand which tools founders actually rely on.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "Your information is used to generate your roadmap, save your progress, communicate updates about your account or the waitlist, and improve PEN2PRO's AI outputs and features.",
            "If you join the waitlist with a referral link (?ref=), we store the referral source so we can track how people found PEN2PRO.",
          ],
        },
        {
          heading: "What We Don't Do",
          body: [
            "We do not sell your personal information. We do not share your business idea or roadmap content with third parties for marketing purposes.",
            "Affiliate and partner links (LLC formation, business banking, funding, credit tools) are provided for your convenience — clicking them is your choice, and those third-party sites have their own privacy policies.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We use reasonable technical and administrative safeguards to protect your data. No system is 100% secure, so we encourage using a strong, unique password for your PEN2PRO account.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting us through the account settings or support channel listed on the platform.",
          ],
        },
      ]}
    />
  );
}
