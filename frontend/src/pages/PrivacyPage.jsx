import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we," "us," "our") operates the PEN2PRO RMIE (Rapid Monetization Intelligence Engine) platform.
        This Privacy Policy explains what information we collect, how we use it, and the choices you have.
      </p>

      <h2 className="text-base font-bold text-white">Information We Collect</h2>
      <p>
        We collect information you provide directly — such as your name, email, phone number, business idea, and
        account credentials when you join the waitlist, generate a roadmap, create an account, or contact us.
        We also collect usage data (pages visited, features used, referral source) to improve the product.
      </p>

      <h2 className="text-base font-bold text-white">How We Use Information</h2>
      <p>
        We use your information to generate your business roadmap, operate your account, communicate with you about
        PEN2PRO plans and updates, process payments through our payment processor, and improve the platform. We do
        not sell your personal information.
      </p>

      <h2 className="text-base font-bold text-white">Sharing</h2>
      <p>
        We share information only with service providers that help us operate PEN2PRO (such as payment processing,
        hosting, and analytics providers), and only as needed to provide the service. We do not share your data with
        third parties for their own marketing purposes.
      </p>

      <h2 className="text-base font-bold text-white">Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal information at any time by contacting
        us. You can also unsubscribe from marketing emails using the link in any email we send.
      </p>

      <h2 className="text-base font-bold text-white">Contact</h2>
      <p>
        Questions about this policy can be sent through the contact options listed on the PEN2PRO waitlist and
        account pages.
      </p>
    </LegalPageLayout>
  );
}
