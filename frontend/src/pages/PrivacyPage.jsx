import { useEffect } from "react";
import LegalLayout from "../components/legal/LegalLayout";

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you use PEN2PRO, we collect the information you give us directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to help us improve the platform.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to generate your business roadmap, save your progress, respond to waitlist and support requests, process payments for Pro, Elite, and Founders access, and send updates about your account or PEN2PRO launch milestones. We do not sell your personal information.",
  },
  {
    heading: "Payments",
    body: "Subscription and one-time payments are processed by Stripe. PEN2PRO does not store your full card number — Stripe handles that securely on our behalf.",
  },
  {
    heading: "Data Sharing",
    body: "We share information with service providers who help us run PEN2PRO (hosting, email delivery, payment processing, analytics) only as needed to operate the platform. We do not sell or rent your data to third parties for their own marketing.",
  },
  {
    heading: "Your Choices",
    body: "You can ask us to update or delete your account information at any time by contacting support. Waitlist entrants can unsubscribe from email updates at any time.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy? Reach out through the contact options listed on our Waitlist and About pages.",
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <LegalLayout title="Privacy Policy" updated="July 6, 2026">
      <p>
        This Privacy Policy explains what information PEN2PRO collects, how we use it, and the choices you have.
        By using PEN2PRO, you agree to the practices described below.
      </p>
      {SECTIONS.map((s) => (
        <div key={s.heading}>
          <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </LegalLayout>
  );
}
