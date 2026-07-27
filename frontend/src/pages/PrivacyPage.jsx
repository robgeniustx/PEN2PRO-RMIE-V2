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
            "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and answers you give during roadmap intake, waitlist signup, or account creation.",
            "We also collect basic usage data (pages visited, features used, referral source) to improve the product and understand what's working.",
          ],
        },
        {
          heading: "How We Use It",
          body: [
            "Your information is used to generate your roadmap, manage your account, communicate with you about PEN2PRO updates and offers, and improve our AI-powered strategy tools.",
            "If you join the waitlist or express interest in Pro, Elite, Founders, Affiliate, Funding, or Credit Repair support, we use your interest level and business idea to follow up with relevant information.",
          ],
        },
        {
          heading: "What We Don't Do",
          body: [
            "We do not sell your personal information to third parties.",
            "We do not share your business idea or roadmap details publicly without your permission.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "We use trusted third-party services for payment processing (Stripe), hosting, and analytics. These providers only receive the information necessary to perform their function.",
            "Affiliate and partner links on the platform (LLC formation, banking, credit, funding, and related services) are provided for convenience. We are not responsible for the privacy practices of those third-party sites.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting us.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about this policy? Reach out through the contact options on our waitlist or support pages."],
        },
      ]}
    />
  );
}
