import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalShell({ eyebrow, title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-3xl font-black text-white md:text-4xl mb-3">{title}</h1>
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10 text-slate-400 text-sm leading-7">
        {children}
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function PrivacyPage() {
  return (
    <LegalShell eyebrow="LEGAL" title="Privacy Policy" updated="July 2026">
      <Section title="What We Collect">
        <p>
          When you use PEN2PRO — including the free roadmap tool, waitlist form, or account
          sign-up — we collect the information you provide directly: name, email, phone number
          (optional), business idea details, and any inputs you give our RMIE (Rapid Monetization
          Intelligence Engine) tools. We also collect basic usage data (pages visited, features
          used, referral source) to improve the product.
        </p>
      </Section>
      <Section title="How We Use It">
        <p>
          We use your information to generate your roadmap and account, to communicate with you
          about PEN2PRO (product updates, launch dates, waitlist status), and to improve our AI
          strategy engine. We do not sell your personal information to third parties.
        </p>
      </Section>
      <Section title="Third-Party Services">
        <p>
          PEN2PRO uses third-party providers to operate the platform, including AI model providers
          for roadmap generation, payment processors (Stripe) for subscriptions, and affiliate
          partners referenced on our Affiliate page. Each of those providers has its own privacy
          practices governing data you share with them directly (for example, payment details
          entered at checkout).
        </p>
      </Section>
      <Section title="Data Retention & Your Rights">
        <p>
          You may request deletion of your account or waitlist entry at any time by contacting us.
          We retain data only as long as needed to operate the platform or as required by law.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          Questions about this policy can be sent through the contact options on our{" "}
          <Link to="/about" className="text-[#D4A017] hover:underline">About page</Link>.
        </p>
      </Section>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell eyebrow="LEGAL" title="Terms of Service" updated="July 2026">
      <Section title="Using PEN2PRO">
        <p>
          PEN2PRO is a business strategy and planning platform. By creating a roadmap, joining the
          waitlist, or subscribing to Pro, Elite, or Founders, you agree to use the platform for
          lawful business planning purposes and to provide accurate information.
        </p>
      </Section>
      <Section title="No Guarantee of Results">
        <p>
          PEN2PRO provides education, strategy, structure, and planning tools. We do not guarantee
          income, funding approval, loan approval, credit repair outcomes, or business success.
          Results depend on your individual effort, market conditions, and factors outside our
          control.
        </p>
      </Section>
      <Section title="Subscriptions & Billing">
        <p>
          Pro and Elite are recurring monthly subscriptions billed through Stripe. Founders access
          is a one-time or lifetime-style offer as described on the{" "}
          <Link to="/founders" className="text-[#D4A017] hover:underline">Founders page</Link>{" "}
          at time of purchase. You can cancel a recurring subscription at any time; access
          continues through the end of the current billing period.
        </p>
      </Section>
      <Section title="Acceptable Use">
        <p>
          You may not use PEN2PRO to plan or execute illegal activity, misrepresent your identity,
          or attempt to disrupt, reverse engineer, or abuse the platform or its AI systems.
        </p>
      </Section>
      <Section title="Changes to These Terms">
        <p>
          We may update these Terms as PEN2PRO evolves. Continued use of the platform after an
          update means you accept the revised Terms.
        </p>
      </Section>
    </LegalShell>
  );
}

export function DisclaimerPage() {
  return (
    <LegalShell eyebrow="LEGAL" title="Disclaimer" updated="July 2026">
      <Section title="Educational & Strategic Guidance Only">
        <p>
          PEN2PRO does not guarantee income, funding approval, loan approval, credit repair
          results, or business success of any kind. The platform provides education, strategy,
          organization, and readiness tools — not financial, legal, credit repair, or investment
          advice.
        </p>
      </Section>
      <Section title="Funding & Credit">
        <p>
          Content on our{" "}
          <Link to="/funding" className="text-[#D4A017] hover:underline">Funding Readiness</Link>{" "}
          and{" "}
          <Link to="/credit-repair" className="text-[#D4A017] hover:underline">Credit Repair</Link>{" "}
          pages is for preparation and organization purposes only. Lenders, banks, and credit
          bureaus make their own independent decisions. PEN2PRO is not a lender, credit repair
          organization, or financial institution.
        </p>
      </Section>
      <Section title="Affiliate Links">
        <p>
          PEN2PRO may earn commissions from affiliate links shown on the{" "}
          <Link to="/affiliate" className="text-[#D4A017] hover:underline">Affiliate/Resources page</Link>{" "}
          and elsewhere on the site. We only recommend tools we believe in, and commissions do not
          influence which tools we recommend.
        </p>
      </Section>
      <Section title="Individual Results Vary">
        <p>
          Every business, market, and founder is different. Outcomes described anywhere on
          PEN2PRO — including founder stories — are individual experiences, not promises of what
          you will achieve.
        </p>
      </Section>
    </LegalShell>
  );
}

export default PrivacyPage;
