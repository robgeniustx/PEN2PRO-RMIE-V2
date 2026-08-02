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
            "When you use PEN2PRO, we collect the information you provide directly — your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data like pages visited and features used.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to generate your business roadmap, save your progress, communicate with you about your account or the waitlist, and improve the PEN2PRO platform. We do not sell your personal information.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "Your data is stored on secured infrastructure. We use industry-standard practices to protect your information, but no system is 100% secure, and we encourage you to use a strong, unique password.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "PEN2PRO may share limited data with trusted service providers (such as payment processors and email delivery services) solely to operate the platform. Affiliate links on PEN2PRO may track referrals in accordance with each partner's own privacy policy.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may unsubscribe from marketing emails using the link in any message we send.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can be sent through the contact options listed on the PEN2PRO waitlist and support pages.",
          ],
        },
      ]}
    />
  );
}
