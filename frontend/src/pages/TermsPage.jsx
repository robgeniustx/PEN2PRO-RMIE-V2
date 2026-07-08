import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="LEGAL"
      title="Terms of Service"
      updated="July 8, 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, launch plans, and monetization strategy.",
            "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information during roadmap intake, account creation, and waitlist signup.",
          ],
        },
        {
          heading: "Plans & Billing",
          body: [
            "Free Roadmap access is provided at no cost. Pro, Elite, and Legacy Founder tiers unlock additional tools and guidance and may require payment. Where subscriptions are not yet live, you may join the waitlist to be notified at launch.",
            "Pricing, features, and availability are subject to change as the platform evolves.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO and its founder. Roadmap output generated for your account is yours to use for your own business.",
          ],
        },
        {
          heading: "Account Responsibility",
          body: [
            "You are responsible for keeping your login credentials secure and for all activity under your account.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms as PEN2PRO grows. Continued use of the platform after changes means you accept the updated Terms.",
          ],
        },
      ]}
    />
  );
}
