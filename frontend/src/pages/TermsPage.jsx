import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "The platform",
          body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, and execution tools for Free, Pro, Elite, and Founders users.",
        },
        {
          heading: "No guarantee of results",
          body: "PEN2PRO provides education, strategy, organization, and readiness tools. It does not guarantee income, business success, funding approval, loan approval, credit score changes, or any specific outcome. Results depend on your own effort, execution, and market conditions.",
        },
        {
          heading: "Your account",
          body: "You are responsible for the accuracy of the information you submit and for keeping your login credentials secure. Accounts are for individual or single-business use unless otherwise agreed.",
        },
        {
          heading: "Subscriptions and Founders access",
          body: "Pro and Elite are billed on a recurring basis and can be canceled at any time. Founders Lifetime access is a one-time purchase limited to a fixed number of spots and is non-transferable.",
        },
        {
          heading: "Acceptable use",
          body: "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to resell roadmap output as your own software or service without permission.",
        },
      ]}
    />
  );
}
