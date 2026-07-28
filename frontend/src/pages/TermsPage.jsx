import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026">
      <p>
        These Terms of Service govern your use of PEN2PRO, an AI-powered business roadmap and strategy platform
        (the "RMIE"). By creating an account, generating a roadmap, or using any part of the platform, you agree to
        these terms.
      </p>

      <h2 className="text-base font-bold text-white">The Service</h2>
      <p>
        PEN2PRO provides business roadmaps, strategy guidance, branding direction, funding and credit readiness
        checklists, and related tools generated with the help of artificial intelligence. Free, Pro, Elite, and
        Founders tiers unlock different levels of access, as described on our Pricing page.
      </p>

      <h2 className="text-base font-bold text-white">No Guarantee of Results</h2>
      <p>
        PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business
        success, funding approval, loan approval, or credit repair results. Outcomes depend on your individual
        effort, market conditions, and factors outside our control.
      </p>

      <h2 className="text-base font-bold text-white">Your Account</h2>
      <p>
        You are responsible for keeping your account credentials secure and for all activity under your account.
        Do not share your login with others.
      </p>

      <h2 className="text-base font-bold text-white">Payments &amp; Subscriptions</h2>
      <p>
        Pro and Elite plans are billed on a recurring basis; Founders access is billed as described at checkout.
        You may cancel a recurring subscription at any time; access continues through the end of the paid period.
      </p>

      <h2 className="text-base font-bold text-white">Acceptable Use</h2>
      <p>
        You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful purposes.
      </p>

      <h2 className="text-base font-bold text-white">Changes</h2>
      <p>
        We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept
        the updated terms.
      </p>
    </LegalPageLayout>
  );
}
