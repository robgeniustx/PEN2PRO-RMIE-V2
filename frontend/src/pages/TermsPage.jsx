import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
          ],
        },
        {
          heading: "The Platform",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy tools, and educational content. Outputs are generated based on the information you provide and general business knowledge — they are guidance, not guarantees.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information when creating an account or submitting roadmap intake data.",
          ],
        },
        {
          heading: "Subscriptions & Payments",
          body: [
            "Paid tiers (Pro, Elite, Founders) are billed as described at checkout. Founders Lifetime access is a one-time purchase tied to a limited number of available spots. Refunds and cancellations follow the policy shown at checkout.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: [
            "You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful purposes.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated Terms.",
          ],
        },
      ]}
    />
  );
}
