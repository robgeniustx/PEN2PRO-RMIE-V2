import LegalLayout from "../components/legal/LegalLayout";

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
    ],
  },
  {
    heading: "2. Description of Service",
    body: [
      "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, and related educational tools based on information you provide. Free, Pro, Elite, and Founders tiers offer different levels of access described on the Pricing page.",
    ],
  },
  {
    heading: "3. Accounts & Eligibility",
    body: [
      "You must provide accurate information when creating an account or submitting the waitlist form. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
    ],
  },
  {
    heading: "4. Payments & Subscriptions",
    body: [
      "Paid plans (Pro, Elite, Founders) are billed through Stripe. Subscription plans renew automatically until canceled. Founders access, where offered as a one-time purchase, is non-recurring. Prices and plan features may change with notice on the Pricing page.",
      "Refunds are handled on a case-by-case basis. Contact support before disputing a charge with your bank or card issuer.",
    ],
  },
  {
    heading: "5. Acceptable Use",
    body: [
      "You agree not to misuse the platform, including attempting to reverse-engineer the AI system, submit unlawful content, resell access without authorization, or interfere with the service's operation.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "PEN2PRO, the RMIE engine, and all associated branding, design, and content are the property of PEN2PRO. Roadmaps and blueprints generated for your account are yours to use for your own business purposes.",
    ],
  },
  {
    heading: "7. Disclaimer of Warranties",
    body: [
      "PEN2PRO provides business strategy, education, and organizational tools. We do not guarantee income, funding approval, loan approval, credit repair outcomes, or business success. Results depend on individual effort, execution, and market conditions. See the full Disclaimer page for details.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform, including business or financial decisions made based on roadmap output.",
    ],
  },
  {
    heading: "9. Termination",
    body: [
      "We may suspend or terminate access for violation of these Terms. You may cancel your subscription or close your account at any time.",
    ],
  },
  {
    heading: "10. Changes to These Terms",
    body: [
      "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return <LegalLayout title="Terms of Service" updated="July 2026" sections={SECTIONS} />;
}
