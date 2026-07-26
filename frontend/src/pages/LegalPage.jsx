import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalShell({ title, updated, children }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
  }, [title]);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-2 font-display text-3xl font-black md:text-4xl">{title}</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="space-y-6 text-[0.98rem] leading-[1.85] text-slate-300">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function H2({ children }) {
  return <h2 className="pt-4 text-xl font-bold text-white">{children}</h2>;
}

export function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 2026">
      <p>
        PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
        information we collect when you use the platform, why we collect it, and how
        it is handled.
      </p>
      <H2>Information We Collect</H2>
      <p>
        When you create a roadmap, sign in, join the waitlist, or contact us, we may
        collect your name, email address, phone number (optional), business idea
        details, and account activity within PEN2PRO. We also collect basic usage
        data (pages visited, features used) to improve the product.
      </p>
      <H2>How We Use Information</H2>
      <p>
        We use your information to generate your roadmap, operate your account,
        respond to inquiries, improve the platform, and — if you opt in — send you
        updates about PEN2PRO plans, launch news, and relevant offers.
      </p>
      <H2>What We Don't Do</H2>
      <p>
        We do not sell your personal information. We share data only with service
        providers who help us run the platform (such as payment processing and
        hosting) and only as needed to provide the service.
      </p>
      <H2>Your Choices</H2>
      <p>
        You can request access to, correction of, or deletion of your personal
        information at any time by contacting us. You can unsubscribe from marketing
        emails using the link in any email we send.
      </p>
      <H2>Contact</H2>
      <p>Questions about this policy can be directed to the PEN2PRO team through the contact options on the platform.</p>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="July 2026">
      <p>
        These Terms of Service govern your use of PEN2PRO, an AI-powered Rapid
        Monetization Intelligence Engine (RMIE) that helps you turn ideas into
        business roadmaps and strategy. By using PEN2PRO, you agree to these terms.
      </p>
      <H2>The Service</H2>
      <p>
        PEN2PRO provides educational content, AI-generated business roadmaps,
        planning tools, and strategy resources. Free, Pro, Elite, and Founders tiers
        unlock different levels of access, as described on our Pricing page.
      </p>
      <H2>No Guarantees</H2>
      <p>
        PEN2PRO does not guarantee income, business success, credit repair results,
        funding approval, or loan approval. Outcomes depend on your effort, market
        conditions, and factors outside our control. Roadmaps and strategy content
        are for informational and educational purposes only and are not legal,
        financial, tax, or credit repair advice.
      </p>
      <H2>Accounts &amp; Payment</H2>
      <p>
        You are responsible for keeping your account credentials secure. Paid plans
        are billed as described at checkout; you may cancel a subscription at any
        time through your account or by contacting support, effective at the end of
        the current billing period.
      </p>
      <H2>Acceptable Use</H2>
      <p>
        You agree not to misuse the platform, attempt to disrupt its operation, or
        use it for unlawful purposes.
      </p>
      <H2>Changes</H2>
      <p>We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.</p>
    </LegalShell>
  );
}

export function DisclaimerPage() {
  return (
    <LegalShell title="Disclaimer" updated="July 2026">
      <p className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-base font-semibold text-white">
        PEN2PRO does not guarantee credit repair results, funding approval, loan
        approval, or business success. The platform provides education, strategy,
        organization, and readiness tools.
      </p>
      <H2>Educational Purpose</H2>
      <p>
        Roadmaps, checklists, and strategy content generated by PEN2PRO's RMIE
        (Rapid Monetization Intelligence Engine) are for informational and
        educational purposes only. They are not a substitute for advice from a
        licensed attorney, accountant, credit counselor, or financial advisor.
      </p>
      <H2>Credit &amp; Funding Content</H2>
      <p>
        Content on the Credit Repair and Funding Readiness pages is intended to help
        you organize and prepare — it does not guarantee that any dispute,
        application, or funding request will be approved or successful.
      </p>
      <H2>Business Outcomes</H2>
      <p>
        Every business is different. Startup costs, revenue estimates, and growth
        timelines shown in your roadmap are planning estimates, not promises of
        results. Your outcomes depend on your market, effort, and execution.
      </p>
      <H2>Affiliate Links</H2>
      <p>
        Some resources link to third-party partners (LLC formation, banking, credit,
        funding, and other service providers). PEN2PRO may receive compensation for
        these referrals. We do not control and are not responsible for third-party
        services.
      </p>
    </LegalShell>
  );
}
