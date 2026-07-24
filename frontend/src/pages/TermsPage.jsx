import LegalPage from "../components/layout/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through the Rapid Monetization Intelligence Engine (RMIE). By using this platform, you agree to use the content and tools for lawful purposes and to provide accurate information when creating your roadmap or account.",
        },
        {
          heading: "No Guarantee of Results",
          body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmaps, checklists, and strategy output are educational tools based on the information you provide. Results depend on individual effort, execution, and market conditions.",
        },
        {
          heading: "Plans & Billing",
          body: "Free, Pro, Elite, and Founders plans are described on their respective pages. Where checkout is live, subscriptions renew automatically until canceled. Where checkout is not yet live, joining the waitlist reserves your interest but does not create a billing obligation.",
        },
        {
          heading: "Intellectual Property",
          body: "The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO. Your business idea and roadmap content remain yours.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms as PEN2PRO grows. Continued use of the platform after changes means you accept the updated terms.",
        },
      ]}
    />
  );
}
