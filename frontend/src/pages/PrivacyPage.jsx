import LegalPage from "../components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we," "our," "us") respects your privacy. This policy explains what information we
        collect when you use the platform, how we use it, and the choices you have.
      </p>
      <p>
        <strong className="text-white">Information we collect:</strong> account details you provide
        (name, email, phone), roadmap and business intake responses, waitlist submissions, and basic
        usage analytics (pages visited, features used, referral source).
      </p>
      <p>
        <strong className="text-white">How we use it:</strong> to generate your business roadmap and
        AI-powered recommendations, to operate and improve the platform, to communicate updates about
        your account or the PEN2PRO launch, and to understand which features provide the most value.
      </p>
      <p>
        <strong className="text-white">What we don't do:</strong> we do not sell your personal
        information to third parties. Affiliate and partner links on this site are clearly marked and
        only shared with your consent when you choose to explore those resources.
      </p>
      <p>
        <strong className="text-white">Your choices:</strong> you may request a copy of your data,
        request deletion of your account, or unsubscribe from communications at any time by contacting
        support@pen2pro.com.
      </p>
      <p>
        We use reasonable administrative and technical safeguards to protect your data, but no system
        is perfectly secure. Continued use of PEN2PRO means you accept this policy, which may be
        updated as the platform evolves.
      </p>
    </LegalPage>
  );
}
