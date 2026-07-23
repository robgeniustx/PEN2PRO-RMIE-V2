import { useEffect } from "react";
import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "What We Collect",
    paragraphs: [
      "When you use PEN2PRO, we collect the information you give us directly — your name, email, phone number (if provided), business idea details, and answers you submit through the Starter roadmap intake, waitlist form, or account signup.",
      "We also collect basic usage data (pages visited, features used, referral source) to understand how people move through the platform and improve it.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use your information to generate your business roadmap, save your progress, communicate with you about your account or waitlist status, and improve PEN2PRO's tools and content.",
      "If you join the waitlist or request funding/credit-repair resources, we may use your stated interest level to send relevant follow-up — never spam, and you can opt out at any time.",
    ],
  },
  {
    heading: "How We Protect It",
    paragraphs: [
      "We store your data on secured infrastructure and limit access to what's necessary to operate the platform. We do not sell your personal information to third parties.",
      "Affiliate and partner links (LLC formation, business banking, funding, credit tools, etc.) are provided for your convenience. If you click through to a partner site, that partner's own privacy policy applies to any information you share with them directly.",
    ],
  },
  {
    heading: "Your Choices",
    paragraphs: [
      "You can request that we update or delete your information at any time by contacting us. If you no longer want to receive updates, you can unsubscribe from any email we send.",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={SECTIONS}
    />
  );
}
