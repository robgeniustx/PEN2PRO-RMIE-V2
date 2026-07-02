import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps you turn ideas, skills, and lived experience into a business roadmap. By using the platform, you agree to provide accurate information and use the roadmap, tools, and content for your own business planning purposes.",
  },
  {
    heading: "Plans and billing",
    body: "The Free Roadmap is available at no cost. Pro, Elite, and Founder tiers unlock deeper strategy, tracking, and support and are billed according to the plan you select at checkout. You can cancel a recurring plan at any time; access continues through the end of the current billing period.",
  },
  {
    heading: "No guarantees",
    body: "PEN2PRO provides education, strategy, structure, and planning tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    heading: "Intellectual property",
    body: "The roadmaps, templates, and content PEN2PRO generates for you are yours to use for your business. The PEN2PRO platform, brand, and underlying technology remain the property of PEN2PRO.",
  },
  {
    heading: "Acceptable use",
    body: "Do not use PEN2PRO to generate content for illegal activity, to resell the platform's output as your own SaaS product, or to attempt to disrupt or reverse-engineer the service.",
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms as PEN2PRO grows. Continued use of the platform after an update means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
