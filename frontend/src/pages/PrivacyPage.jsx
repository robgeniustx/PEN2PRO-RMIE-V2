import LegalPage from "../components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
        information we collect when you use the PEN2PRO RMIE platform, how we use it,
        and the choices you have.
      </p>
      <h2 className="pt-4 text-lg font-bold text-white">Information We Collect</h2>
      <p>
        We collect information you provide directly — such as your name, email, phone
        number, and business idea details — when you create a roadmap, join the
        waitlist, or contact us. We also collect basic usage data (pages visited,
        features used) to improve the platform.
      </p>
      <h2 className="pt-4 text-lg font-bold text-white">How We Use Your Information</h2>
      <p>
        We use your information to generate your business roadmap, communicate with
        you about your account and PEN2PRO updates, improve our AI models and
        product, and, where you've opted in, send marketing and affiliate offers
        relevant to building your business.
      </p>
      <h2 className="pt-4 text-lg font-bold text-white">Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share limited data with
        service providers (such as payment processors and hosting providers) solely
        to operate the platform.
      </p>
      <h2 className="pt-4 text-lg font-bold text-white">Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data
        at any time by contacting us. You can unsubscribe from marketing emails using
        the link in any email we send.
      </p>
      <h2 className="pt-4 text-lg font-bold text-white">Contact</h2>
      <p>
        Questions about this policy? Reach out through the contact options on our
        Waitlist or About pages.
      </p>
    </LegalPage>
  );
}
