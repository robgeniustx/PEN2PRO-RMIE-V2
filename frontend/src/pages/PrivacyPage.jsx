import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          title: "What We Collect",
          body: (
            <p>
              When you use PEN2PRO — including the free roadmap builder, waitlist form, and account
              sign-up — we collect information you provide directly, such as your name, email address,
              phone number, business idea, and roadmap answers. We also collect basic usage data
              (pages visited, buttons clicked, referral source) to understand how the platform is used.
            </p>
          ),
        },
        {
          title: "How We Use Your Information",
          body: (
            <p>
              We use your information to generate your business roadmap, respond to waitlist and support
              requests, improve PEN2PRO's tools and content, and — if you opt in — send updates about
              Pro, Elite, and Founders access. We do not sell your personal information to third parties.
            </p>
          ),
        },
        {
          title: "Data Storage & Security",
          body: (
            <p>
              Your data is stored on secured infrastructure and access is limited to the systems and
              personnel needed to operate PEN2PRO. No online platform can guarantee absolute security,
              but we take reasonable technical and organizational measures to protect your information.
            </p>
          ),
        },
        {
          title: "Third-Party & Affiliate Links",
          body: (
            <p>
              PEN2PRO may link to third-party services for LLC formation, business banking, credit
              tools, funding partners, and other resources. Those services have their own privacy
              policies, and PEN2PRO is not responsible for how they handle your data once you leave
              our platform.
            </p>
          ),
        },
        {
          title: "Your Choices",
          body: (
            <p>
              You can request that we delete your account data or remove you from waitlist
              communications at any time by reaching out through the waitlist form or About page contact
              options. We will honor reasonable requests within a reasonable timeframe.
            </p>
          ),
        },
      ]}
    />
  );
}
