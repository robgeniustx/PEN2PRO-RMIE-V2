import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{eyebrow}</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>
        <div className="space-y-8 text-slate-300 leading-7">{children}</div>
        <div className="mt-14 border-t border-[#1A2D50] pt-8">
          <Link to="/" className="btn-gold inline-block px-6 py-3 text-sm font-bold">
            Back to PEN2PRO
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-black text-white">{title}</h2>
      <div className="space-y-3 text-sm text-slate-400">{children}</div>
    </section>
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <Section title="What we collect">
        <p>
          PEN2PRO collects the information you give us directly — name, email, phone number,
          business idea details, and roadmap intake answers — plus basic usage data (pages
          visited, features used) to improve the platform.
        </p>
      </Section>
      <Section title="How we use it">
        <p>
          We use your information to generate your business roadmap, operate your account,
          send updates about your plan tier, and improve PEN2PRO's AI outputs. We do not sell
          your personal information to third parties.
        </p>
      </Section>
      <Section title="Affiliate & partner links">
        <p>
          Pages like Funding, Credit Repair, and Affiliate may link to third-party partners
          (LLC formation, banking, credit, funding). Clicking those links is governed by the
          partner's own privacy policy, not PEN2PRO's.
        </p>
      </Section>
      <Section title="Your choices">
        <p>
          You can request access to, correction of, or deletion of your data at any time by
          contacting support. Waitlist and account data is stored only as long as needed to
          provide the service.
        </p>
      </Section>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="July 2026">
      <Section title="Using PEN2PRO">
        <p>
          PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
          content through the RMIE (Rapid Monetization Intelligence Engine). By using the
          platform you agree to use it lawfully and not to resell or redistribute generated
          content as a standalone product without permission.
        </p>
      </Section>
      <Section title="Plans & billing">
        <p>
          Free, Pro, Elite, and Founders tiers are described on the Pricing page. Paid tiers
          renew on the billing cycle shown at checkout and can be cancelled at any time from
          your dashboard.
        </p>
      </Section>
      <Section title="No guarantees">
        <p>
          PEN2PRO does not guarantee income, funding approval, credit repair outcomes, or
          business success. Roadmaps, checklists, and strategy output are educational tools —
          results depend on your effort, market conditions, and factors outside our control.
        </p>
      </Section>
      <Section title="Account responsibility">
        <p>
          You're responsible for keeping your login credentials secure and for the accuracy of
          the information you submit during roadmap intake.
        </p>
      </Section>
    </LegalLayout>
  );
}

export function DisclaimerPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated="July 2026">
      <Section title="Educational tool, not a guarantee">
        <p>
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or
          business success. The platform provides education, strategy, organization, and
          readiness tools — not financial, legal, credit repair, or tax advice.
        </p>
      </Section>
      <Section title="Consult a professional">
        <p>
          Before making financial, legal, or credit decisions, consult a licensed attorney,
          accountant, or financial advisor. Funding readiness and credit-building content on
          this site is general guidance, not a substitute for professional counsel.
        </p>
      </Section>
      <Section title="Affiliate relationships">
        <p>
          PEN2PRO may earn a commission from partner links (LLC formation, banking, credit
          services, funding partners) at no added cost to you. We only recommend services we
          believe are relevant to building a business.
        </p>
      </Section>
    </LegalLayout>
  );
}
