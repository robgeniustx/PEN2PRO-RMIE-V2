import { useEffect } from "react";
import LegalLayout from "../components/legal/LegalLayout";

const SECTIONS = [
  {
    heading: "Using PEN2PRO",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Starter, Pro, Elite, and Founders tiers. You must be 18 or older to create an account or make a purchase.",
  },
  {
    heading: "Your Account",
    body: "You are responsible for the accuracy of the information you submit and for keeping your login credentials secure. PEN2PRO may suspend accounts used for fraudulent, abusive, or illegal activity.",
  },
  {
    heading: "Subscriptions & Billing",
    body: "Pro and Elite are recurring subscriptions billed through Stripe. Founders access is a one-time purchase for the terms described on the Founders page at the time of purchase. You can cancel a recurring subscription at any time; access continues through the end of the current billing period.",
  },
  {
    heading: "No Guarantee of Results",
    body: "PEN2PRO gives you structure, strategy, and tools — it does not guarantee income, funding approval, credit outcomes, or business success. Results depend on your effort, market conditions, and factors outside our control.",
  },
  {
    heading: "Intellectual Property",
    body: "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps generated for your business idea are yours to use.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO grows. Continued use of the platform after an update means you accept the revised Terms.",
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <LegalLayout title="Terms of Service" updated="July 6, 2026">
      <p>
        These Terms of Service govern your use of PEN2PRO. By creating an account, joining the waitlist, or
        purchasing a plan, you agree to these terms.
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
