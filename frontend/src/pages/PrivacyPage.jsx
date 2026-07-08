import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="LEGAL"
      title="Privacy Policy"
      updated="July 8, 2026"
      sections={[
        {
          heading: "What We Collect",
          body: [
            "PEN2PRO collects the information you give us directly — name, email, phone number (optional), business idea details, and roadmap intake answers — plus basic usage data like pages visited and features used, so we can improve the platform.",
            "If you join the waitlist, we also store your interest level (Free Roadmap, Pro, Elite, Legacy Founder, Affiliate, Funding, Credit Repair) and the page you signed up from.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "We use your information to generate your business roadmap, manage your account, communicate about your subscription tier, and improve the RMIE (Rapid Monetization Intelligence Engine) experience.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Affiliate & Partner Links",
          body: [
            "Some pages (like Affiliate Resources) contain links to third-party tools. We may earn a commission if you sign up through those links. Clicking an affiliate link does not share your PEN2PRO account data with that partner — only what you submit directly to them.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted over the internet.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting us. Waitlist signups can unsubscribe from future communications at any time.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy? Reach out through the contact options listed on our Waitlist or About page.",
          ],
        },
      ]}
    />
  );
}
