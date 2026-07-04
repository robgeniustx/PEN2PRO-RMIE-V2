import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          body: [
            "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, roadmap intake answers, and waitlist interest level — along with basic usage data like pages visited and features used.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "We use your information to generate your business roadmap, save your progress, communicate updates about Pro, Elite, and Founders access, and improve the PEN2PRO platform.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Affiliate & Partner Links",
          body: [
            "Some pages (Funding, Credit Repair, Affiliate) link to third-party partners for services like LLC formation, business banking, or funding. PEN2PRO may earn a referral commission from these partners. Reviewing a partner does not obligate you to use their service.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "Roadmap and waitlist data is stored on secured infrastructure. We take reasonable measures to protect your information, but no system is 100% secure.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request that we delete your account data or remove you from the waitlist at any time by contacting the PEN2PRO team.",
          ],
        },
      ]}
    />
  );
}
