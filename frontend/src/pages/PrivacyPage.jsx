import LegalPageLayout from "../components/layout/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
        collect when you use the platform, why we collect it, and how it's handled.
      </p>
      <h2 className="text-lg font-bold text-white">Information We Collect</h2>
      <p>
        When you join the waitlist, build a roadmap, create an account, or contact us, we may collect your
        name, email address, phone number, business idea details, and usage data related to how you interact
        with the platform.
      </p>
      <h2 className="text-lg font-bold text-white">How We Use Your Information</h2>
      <p>
        We use your information to generate your business roadmap, communicate with you about your account
        and PEN2PRO updates, improve the platform, and — where you've opted in — share relevant offers from
        our affiliate and funding partners.
      </p>
      <h2 className="text-lg font-bold text-white">Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share limited data with service providers (such as
        payment processors and hosting infrastructure) strictly to operate the platform.
      </p>
      <h2 className="text-lg font-bold text-white">Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your data at any time by contacting us.
      </p>
      <h2 className="text-lg font-bold text-white">Contact</h2>
      <p>Questions about this policy can be sent to the PEN2PRO support team.</p>
    </LegalPageLayout>
  );
}
