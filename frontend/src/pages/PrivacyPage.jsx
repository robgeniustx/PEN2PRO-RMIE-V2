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
            "When you use PEN2PRO, we collect the information you provide directly — your name, email, phone number (optional), business idea details, and roadmap intake answers — along with basic usage data like which pages and features you interact with.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "We use your information to generate your roadmap, save your progress, communicate with you about your account, and improve the platform. If you join the waitlist, we use your details to notify you about Pro, Elite, and Founders access.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Affiliate & Partner Links",
          body: [
            "Some pages (Funding, Credit Repair, Affiliate resources) link to third-party services such as LLC formation, business banking, and credit tools. PEN2PRO may earn a referral commission from these partners. Clicking a partner link takes you to that partner's own site, governed by their own privacy policy.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "Roadmap and account data is stored on secured infrastructure. We take reasonable technical measures to protect your information, but no system is 100% secure, and you share information at your own discretion.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting us through the platform.",
          ],
        },
      ]}
    />
  );
}
