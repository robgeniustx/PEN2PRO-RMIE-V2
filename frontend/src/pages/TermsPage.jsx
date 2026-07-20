import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
        },
        {
          heading: "What PEN2PRO Provides",
          body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, branding direction, and readiness checklists based on information you provide. Free, Pro, Elite, and Founders tiers unlock different levels of access, as described on our Pricing page.",
        },
        {
          heading: "No Guarantee of Results",
          body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on individual effort, market conditions, and factors outside our control.",
        },
        {
          heading: "Your Responsibilities",
          body: "You agree to provide accurate information, use the platform lawfully, and not misuse, resell, or attempt to reverse-engineer any part of the service.",
        },
        {
          heading: "Payments and Subscriptions",
          body: "Paid plans (Pro, Elite, Founders) are billed as described at checkout. You may cancel a subscription at any time; cancellation stops future billing but does not refund past charges except where required by law.",
        },
        {
          heading: "Changes to the Service",
          body: "We may update, modify, or discontinue features of PEN2PRO at any time as the platform evolves. We will make reasonable efforts to communicate material changes to paying members.",
        },
        {
          heading: "Limitation of Liability",
          body: "PEN2PRO and its founders are not liable for indirect, incidental, or consequential damages arising from use of the platform, to the fullest extent permitted by law.",
        },
      ]}
    />
  );
}
