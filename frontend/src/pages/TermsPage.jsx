import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="TERMS OF SERVICE"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          title: "Using PEN2PRO",
          body: (
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources
              through its Rapid Monetization Intelligence Engine (RMIE). By using the platform — free,
              Pro, Elite, or Founders tier — you agree to use it for lawful business planning purposes
              and to provide accurate information when completing intake forms.
            </p>
          ),
        },
        {
          title: "No Guarantee of Results",
          body: (
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Roadmaps, strategies, and checklists are educational tools built
              from real-world business practice. Outcomes depend on your effort, market conditions,
              execution, and factors outside PEN2PRO's control.
            </p>
          ),
        },
        {
          title: "Subscription Tiers & Billing",
          body: (
            <p>
              Pro, Elite, and Founders access are paid tiers. Where checkout is live, charges are
              processed securely through our payment provider and billing details are shown before you
              confirm. Where a tier is marked "waitlist," no payment is collected until that tier
              launches. You can cancel a recurring subscription at any time through your account or by
              contacting support.
            </p>
          ),
        },
        {
          title: "Intellectual Property",
          body: (
            <p>
              The PEN2PRO name, brand, RMIE methodology, and platform content are the property of
              PEN2PRO. Roadmaps generated for your account are yours to use for your own business. You
              may not resell, scrape, or redistribute PEN2PRO's underlying tools, prompts, or content.
            </p>
          ),
        },
        {
          title: "Changes to These Terms",
          body: (
            <p>
              We may update these Terms as PEN2PRO grows and new features launch. Continued use of the
              platform after an update means you accept the revised Terms.
            </p>
          ),
        },
      ]}
    />
  );
}
