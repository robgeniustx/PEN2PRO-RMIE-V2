import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources under the Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake, roadmap generation, and account setup.",
        },
        {
          heading: "Plans & Billing",
          body: "Free, Pro, Elite, and Founders plans are described on the Pricing page. Paid plans are billed on the cycle shown at checkout and processed securely through Stripe. You may cancel a subscription at any time; access continues through the end of the current billing period.",
        },
        {
          heading: "No Guarantee of Results",
          body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Roadmaps, strategies, and checklists are educational tools. Results depend on your effort, market conditions, and factors outside our control.",
        },
        {
          heading: "Intellectual Property",
          body: "The PEN2PRO name, brand, RMIE engine, and platform content are the property of PEN2PRO. Roadmap output generated for your account is yours to use for your own business purposes.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised Terms.",
        },
      ]}
    />
  );
}
