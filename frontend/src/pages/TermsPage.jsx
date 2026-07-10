import LegalPage from "../components/layout/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        These Terms govern your use of PEN2PRO, an AI-powered RMIE (Rapid Monetization Intelligence
        Engine) platform that generates business roadmaps, strategy guidance, and execution support.
        By using PEN2PRO, you agree to these terms.
      </p>
      <p>
        <strong className="text-white">The platform is educational and strategic in nature.</strong>{" "}
        Roadmaps, business plans, financial estimates, and recommendations produced by PEN2PRO are
        generated to help you plan and organize — they are not legal, financial, tax, or professional
        advice, and they do not guarantee any specific business, funding, credit, or income outcome.
      </p>
      <p>
        <strong className="text-white">Your account.</strong> You are responsible for the accuracy of
        information you submit and for keeping your login credentials secure. Free, Pro, Elite, and
        Founders tiers unlock different levels of access as described on our Pricing page.
      </p>
      <p>
        <strong className="text-white">Acceptable use.</strong> You agree not to misuse the platform,
        attempt to disrupt its operation, or use generated content for unlawful purposes.
      </p>
      <p>
        <strong className="text-white">Payments.</strong> Paid tiers are billed as described at
        checkout. Founders/lifetime offers, where available, are limited and subject to the terms
        presented at time of purchase.
      </p>
      <p>
        <strong className="text-white">Changes.</strong> We may update these Terms as PEN2PRO evolves.
        Continued use after changes take effect constitutes acceptance of the updated Terms.
      </p>
      <p>Questions about these Terms can be sent to support@pen2pro.com.</p>
    </LegalPage>
  );
}
