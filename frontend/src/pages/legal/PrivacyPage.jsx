import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="August 2026">
      <p>
        PEN2PRO ("we," "our," "us") respects your privacy. This policy explains what information we collect when you
        use the PEN2PRO RMIE platform, how we use it, and the choices you have.
      </p>

      <h2 className="text-lg font-bold text-white">Information We Collect</h2>
      <p>
        We collect information you provide directly, including your name, email, phone number, business idea, and
        interest level when you join the waitlist, create an account, or generate a roadmap. We also collect basic
        usage data (pages visited, features used) to improve the product.
      </p>

      <h2 className="text-lg font-bold text-white">How We Use Information</h2>
      <p>
        We use your information to generate your business roadmap, communicate with you about PEN2PRO plans and
        updates, process payments through our payment processor (Stripe), and improve our AI-generated recommendations.
        We do not sell your personal information to third parties.
      </p>

      <h2 className="text-lg font-bold text-white">Data Storage</h2>
      <p>
        Roadmap, account, and waitlist data are stored on secure infrastructure used to operate PEN2PRO. You may
        request deletion of your account and associated data at any time by contacting us.
      </p>

      <h2 className="text-lg font-bold text-white">Third-Party Services</h2>
      <p>
        PEN2PRO uses third-party services for payments (Stripe), AI processing, and hosting. Affiliate links on the
        Affiliate, Funding, and Credit Repair pages take you to third-party sites governed by their own privacy
        policies.
      </p>

      <h2 className="text-lg font-bold text-white">Your Choices</h2>
      <p>
        You can update your account information, unsubscribe from emails, or request data deletion at any time by
        contacting support.
      </p>

      <h2 className="text-lg font-bold text-white">Contact</h2>
      <p>Questions about this policy can be sent to the contact information listed on our About page.</p>
    </LegalPageLayout>
  );
}
