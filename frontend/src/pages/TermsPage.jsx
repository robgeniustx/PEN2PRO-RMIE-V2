import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
        },
        {
          heading: "What PEN2PRO Provides",
          body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, and execution plans. Free, Pro, Elite, and Founders tiers unlock different levels of access, described on our Pricing page.",
        },
        {
          heading: "No Guarantee of Results",
          body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside our control.",
        },
        {
          heading: "Account Responsibilities",
          body: "You are responsible for the accuracy of information you submit and for keeping your account credentials secure. You agree not to use PEN2PRO for unlawful purposes.",
        },
        {
          heading: "Billing & Cancellation",
          body: "Pro, Elite, and Founders plans are billed on the schedule shown at checkout. You may cancel a recurring plan at any time; cancellation stops future billing but does not refund prior charges except where required by law.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.",
        },
      ]}
    />
  );
}
