import LegalPageLayout from "./LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026">
      <p>
        These Terms of Service govern your use of PEN2PRO, an AI-powered RMIE (Rapid Monetization Intelligence
        Engine) platform. By creating an account, generating a roadmap, or joining the waitlist, you agree to
        these terms.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Use of the Platform</h2>
      <p>
        PEN2PRO provides business strategy tools, AI-generated roadmaps, and educational content. You agree to
        use the platform for lawful purposes and not to misrepresent your identity or the information you
        provide during intake.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Plans &amp; Billing</h2>
      <p>
        Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans renew automatically
        unless cancelled, and Founders pricing terms are locked in as described at time of purchase. You may
        cancel a subscription at any time from your dashboard or by contacting support.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">No Guarantee of Results</h2>
      <p>
        PEN2PRO does not guarantee income, funding approval, credit repair outcomes, or business success.
        Roadmaps and strategy output are educational and strategic tools — results depend on individual
        effort, market conditions, and factors outside our control.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Intellectual Property</h2>
      <p>
        The PEN2PRO platform, brand, and underlying technology are owned by PEN2PRO. Roadmap content generated
        for your account is yours to use for your own business purposes.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Changes to These Terms</h2>
      <p>We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.</p>
    </LegalPageLayout>
  );
}
