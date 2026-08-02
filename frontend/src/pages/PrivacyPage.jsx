import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout eyebrow="LEGAL" title="Privacy Policy" updated="August 2026">
      <p>
        PEN2PRO (“we,” “us,” “our”) built this platform to help people turn ideas, skills, and lived
        experience into real business roadmaps. This policy explains what information we collect when
        you use the site, why we collect it, and how it&apos;s handled.
      </p>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
        <p>
          When you generate a roadmap, join the waitlist, or create an account, we may collect your
          name, email address, phone number (optional), business idea details, and the plan tier
          you&apos;re interested in. We also collect basic usage data (pages visited, features used,
          referral source) to improve the product.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">How We Use It</h2>
        <p>
          We use your information to generate your roadmap, respond to waitlist and account requests,
          improve PEN2PRO RMIE, and — if you&apos;ve opted in — send updates about product launches,
          pricing, and offers relevant to the tier you selected.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">What We Don&apos;t Do</h2>
        <p>
          We do not sell your personal information. We do not share your business idea details with
          third parties for marketing purposes. Affiliate/partner links on this site (LLC formation,
          banking, credit, funding, tools) go to third-party services with their own privacy policies —
          we encourage you to review those before signing up.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Data Storage &amp; Security</h2>
        <p>
          Data submitted through PEN2PRO (roadmap intake, waitlist forms, account details) is stored on
          our backend infrastructure with reasonable technical safeguards. No system is perfectly
          secure, and we cannot guarantee absolute security of information transmitted over the
          internet.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
        <p>
          You can request access to, correction of, or deletion of your personal information at any
          time by contacting us. You can unsubscribe from email updates using the link in any message
          we send.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Changes to This Policy</h2>
        <p>
          As PEN2PRO grows, this policy may be updated. Material changes will be reflected on this page
          with a new “last updated” date.
        </p>
      </div>
    </LegalPageLayout>
  );
}
