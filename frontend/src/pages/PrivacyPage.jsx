import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
        information we collect when you use the platform, how we use it, and the choices
        you have.
      </p>

      <h2 className="font-display text-xl font-bold text-white pt-4">Information We Collect</h2>
      <p>
        When you create a free roadmap, join the waitlist, sign in, or upgrade to Pro,
        Elite, or Legacy Founder, we may collect your name, email address, phone number
        (optional), business idea details, and information about how you use the platform.
        If you complete a payment, our payment processor (Stripe) handles your card details
        directly — PEN2PRO never stores full card numbers.
      </p>

      <h2 className="font-display text-xl font-bold text-white pt-4">How We Use Your Information</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>To generate and save your business roadmap and blueprint</li>
        <li>To send you your roadmap, account updates, and relevant PEN2PRO communications</li>
        <li>To manage your subscription tier (Free, Pro, Elite, Legacy Founder)</li>
        <li>To improve the platform and understand which features are most useful</li>
        <li>To respond to support requests</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2 className="font-display text-xl font-bold text-white pt-4">Sharing</h2>
      <p>
        We share data only with service providers that help us operate the platform
        (for example: payment processing, hosting, and email delivery), and only to the
        extent needed for them to perform that service.
      </p>

      <h2 className="font-display text-xl font-bold text-white pt-4">Your Choices</h2>
      <p>
        You can request a copy of your data, ask us to correct it, or ask us to delete
        your account and associated data by contacting us. You can unsubscribe from
        marketing emails at any time using the link in those emails.
      </p>

      <h2 className="font-display text-xl font-bold text-white pt-4">Contact</h2>
      <p>
        Questions about this policy can be sent through the contact options on the{" "}
        <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
      </p>
    </LegalPageLayout>
  );
}
