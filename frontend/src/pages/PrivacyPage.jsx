import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <section>
        <h2>What We Collect</h2>
        <p>
          When you use PEN2PRO — including the free roadmap tool, the waitlist, Pro/Elite/Founders
          accounts, and the dashboard — we collect the information you give us directly: your name,
          email, phone number (optional), business idea details, and account credentials. We also
          collect basic usage data (pages visited, features used) to improve the product.
        </p>
      </section>
      <section>
        <h2>How We Use It</h2>
        <ul>
          <li>To generate and save your business roadmap or blueprint</li>
          <li>To create and manage your account, including tier access (Free, Pro, Elite, Founders)</li>
          <li>To process payments through Stripe when you upgrade</li>
          <li>To contact you about your waitlist status, roadmap, or account</li>
          <li>To improve PEN2PRO's features and RMIE output quality</li>
        </ul>
      </section>
      <section>
        <h2>What We Don't Do</h2>
        <p>
          We do not sell your personal information. We do not share your business idea or roadmap
          content with third parties for marketing purposes. Payment details are handled directly by
          Stripe — PEN2PRO never stores your card number.
        </p>
      </section>
      <section>
        <h2>Third-Party Services</h2>
        <p>
          PEN2PRO uses trusted third-party services to operate the platform, including Stripe for
          payment processing and infrastructure providers for hosting. Affiliate links on pages like
          Funding, Credit Repair, and Affiliate may take you to partner sites with their own privacy
          policies.
        </p>
      </section>
      <section>
        <h2>Your Choices</h2>
        <p>
          You can request access to, correction of, or deletion of your personal data at any time by
          contacting us through the waitlist form or your account settings. You can also opt out of
          non-essential email communications.
        </p>
      </section>
      <section>
        <h2>Data Security</h2>
        <p>
          We use industry-standard measures to protect your data, including encrypted connections and
          access controls. No system is 100% secure, and we encourage you to use a strong, unique
          password for your PEN2PRO account.
        </p>
      </section>
    </LegalPageLayout>
  );
}
