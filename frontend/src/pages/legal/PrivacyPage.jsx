import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what information we collect
        when you use the PEN2PRO RMIE platform, how we use it, and the choices you have.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Information We Collect</h2>
      <p>
        We collect the information you provide directly — such as your name, email, phone number, and
        business idea details — when you create a roadmap, join the waitlist, or create an account. We also
        collect basic usage data (pages visited, features used) to improve the platform.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">How We Use Information</h2>
      <p>
        We use your information to generate your business roadmap, communicate with you about your account
        or waitlist status, improve PEN2PRO's tools, and, where you've opted in, send updates about Pro,
        Elite, and Founders access.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share limited data with service providers who help
        us operate the platform (such as payment processing, email delivery, and hosting), each bound to
        protect your data.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal data at any time by contacting
        us. You may also unsubscribe from marketing emails using the link in any email we send.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Contact</h2>
      <p>Questions about this policy can be sent to the PEN2PRO support team through the contact options on our site.</p>
    </LegalPageLayout>
  );
}
