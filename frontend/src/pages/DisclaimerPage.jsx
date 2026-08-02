import LegalPageLayout from "./LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout eyebrow="LEGAL" title="Disclaimer" updated="August 2026">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">Educational &amp; Strategic Tool</h2>
        <p>
          PEN2PRO RMIE (Rapid Monetization Intelligence Engine) is an AI-powered platform that provides
          education, strategy, organization, and readiness tools to help you plan and launch a
          business. It is not a guarantee of business success, income, funding, or credit outcomes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">No Income or Success Guarantee</h2>
        <p>
          Any business ideas, revenue models, pricing strategies, or income examples referenced on this
          platform are illustrative. Actual results vary widely based on effort, market conditions,
          execution, location, and factors we cannot control. PEN2PRO does not guarantee that you will
          earn income or replicate any example shown on the platform.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Funding &amp; Credit Disclaimer</h2>
        <p>
          PEN2PRO does not guarantee credit repair results, funding approval, or loan approval.
          Funding readiness checklists, credit-building steps, and vendor/tradeline guidance are
          strategic and educational tools meant to help you prepare — approval decisions are made
          entirely by third-party lenders, creditors, and financial institutions.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Not Professional Advice</h2>
        <p>
          Nothing on PEN2PRO constitutes legal, tax, accounting, or financial advice. LLC/EIN
          checklists and business formation guidance are general starting points, not a substitute for
          consulting a licensed attorney or accountant.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-2">Founder Story</h2>
        <p>
          Robert Green&apos;s story, shared on our About page, reflects his personal, lived experience.
          It is shared to explain why PEN2PRO exists — it is not a representation of guaranteed outcomes
          for any user of the platform.
        </p>
      </div>
    </LegalPageLayout>
  );
}
