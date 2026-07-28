import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Overview",
    body: [
      "PEN2PRO (\"we,\" \"our,\" \"us\") respects your privacy. This policy explains what information we collect when you use the PEN2PRO RMIE platform, how we use it, and the choices you have.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Account information such as your name, email address, and phone number when you sign up, join the waitlist, or create a roadmap.",
      "Business and roadmap information you provide, including your idea, industry, goals, and answers used to generate your business roadmap.",
      "Usage data such as pages visited, features used, and general device/browser information, which helps us improve the platform.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To generate your business roadmap, strategy output, and personalized recommendations.",
      "To manage your account, process upgrades, and communicate important updates.",
      "To improve PEN2PRO's features, AI output quality, and overall platform experience.",
      "To send relevant emails about your roadmap, waitlist status, or plan updates. You can opt out of marketing emails at any time.",
    ],
  },
  {
    heading: "How We Protect Your Information",
    body: [
      "We use industry-standard safeguards to protect your data, including encrypted connections and access controls. No system is 100% secure, and we continuously work to strengthen our protections.",
    ],
  },
  {
    heading: "Sharing of Information",
    body: [
      "We do not sell your personal information. We may share limited data with trusted service providers (such as payment processors or email delivery services) strictly to operate the platform, and only as required by law.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by emailing support@pen2pro.com.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this policy as PEN2PRO grows. Material changes will be reflected on this page with an updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="July 2026" sections={SECTIONS} />;
}
