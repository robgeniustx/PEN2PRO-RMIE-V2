import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into a business roadmap. By using the platform, you agree to provide accurate information and use the tools for lawful purposes.",
        },
        {
          heading: "Plans and billing",
          body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans renew automatically until canceled. You can cancel or change your plan at any time from your dashboard.",
        },
        {
          heading: "No guarantees",
          body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, funding approval, loan approval, credit repair results, or business success. Results depend on individual effort, market conditions, and factors outside our control.",
        },
        {
          heading: "Intellectual property",
          body: "The roadmaps, checklists, and content PEN2PRO generates for you are yours to use for your business. The PEN2PRO platform, brand, and underlying technology remain the property of PEN2PRO.",
        },
        {
          heading: "Changes to these terms",
          body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
        },
      ]}
    />
  );
}
