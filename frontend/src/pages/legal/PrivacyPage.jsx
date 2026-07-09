import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what
        information we collect when you use the platform, why we collect it, and how
        it's used.
      </p>
      <h2 className="text-base font-bold text-white">Information We Collect</h2>
      <p>
        When you create a roadmap, join the waitlist, or create an account, we collect
        information you provide directly — such as your name, email, phone number,
        business idea, and interest level. We also collect basic usage data (pages
        visited, features used) to improve the product.
      </p>
      <h2 className="text-base font-bold text-white">How We Use Your Information</h2>
      <p>
        We use your information to generate your roadmap, communicate with you about
        your account and PEN2PRO updates, improve our AI models and product, and — if
        you opt in — send you offers related to Pro, Elite, Founders, funding, or
        credit-readiness resources.
      </p>
      <h2 className="text-base font-bold text-white">What We Don't Do</h2>
      <p>
        We do not sell your personal information. We only share data with service
        providers (payment processing, email delivery, hosting) as needed to run the
        platform, and with affiliate/funding/credit partners only when you explicitly
        request an introduction.
      </p>
      <h2 className="text-base font-bold text-white">Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your data at any time
        by contacting us. Removing your data may limit your ability to use saved
        roadmaps or account features.
      </p>
      <h2 className="text-base font-bold text-white">Contact</h2>
      <p>Questions about this policy? Reach out through the contact options on our About page.</p>
    </LegalPageLayout>
  );
}
