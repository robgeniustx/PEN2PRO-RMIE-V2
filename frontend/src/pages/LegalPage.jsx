import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalShell({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mb-3 text-4xl font-black text-white">{title}</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="space-y-6 text-sm leading-7 text-slate-400">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="June 2026">
      <p>
        PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect
        when you use the platform, how we use it, and the choices you have.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Information We Collect</h2>
      <p>
        We collect information you provide directly — name, email, phone, business idea details, and roadmap
        intake responses — along with basic usage data (pages visited, features used) to improve the product.
      </p>
      <h2 className="font-display text-lg font-bold text-white">How We Use It</h2>
      <p>
        We use your information to generate your business roadmap, operate your account, communicate with you
        about PEN2PRO, and improve our AI-powered tools. We do not sell your personal information.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your data. No system is 100%
        secure, and we encourage you to use a strong, unique password for your account.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal information at any time by
        contacting us through the platform.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Contact</h2>
      <p>Questions about this policy can be sent through the contact options available on the PEN2PRO waitlist and dashboard pages.</p>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="June 2026">
      <p>
        By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use
        the platform.
      </p>
      <h2 className="font-display text-lg font-bold text-white">The Service</h2>
      <p>
        PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business
        roadmaps, strategy content, and readiness checklists. Outputs are informational and strategic in
        nature — they are not legal, financial, tax, or investment advice.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for all
        activity under your account.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Subscriptions & Payments</h2>
      <p>
        Pro, Elite, and Founders tiers are billed according to the plan you select at checkout. Founders
        pricing, where offered, is limited-availability and subject to the terms shown at time of purchase.
      </p>
      <h2 className="font-display text-lg font-bold text-white">No Guarantee of Results</h2>
      <p>
        PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
        repair results. Outcomes depend on your effort, market conditions, and factors outside our control.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Termination</h2>
      <p>
        We may suspend or terminate access for violation of these terms. You may cancel your subscription at
        any time through your account settings.
      </p>
    </LegalShell>
  );
}

export function DisclaimerPage() {
  return (
    <LegalShell title="Disclaimer" updated="June 2026">
      <p>
        PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. It is not
        a law firm, credit repair organization, bank, lender, or registered investment or financial advisor.
      </p>
      <h2 className="font-display text-lg font-bold text-white">No Guaranteed Outcomes</h2>
      <p>
        PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business success,
        or any specific level of income. Roadmaps, checklists, and AI-generated strategy are starting points —
        not promises of outcome.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Not Professional Advice</h2>
      <p>
        Nothing on PEN2PRO constitutes legal, tax, accounting, credit repair, or investment advice. Consult a
        licensed professional before making legal, financial, or business-formation decisions.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Affiliate Relationships</h2>
      <p>
        PEN2PRO may link to third-party services (business formation, banking, funding, credit, marketing
        tools) through affiliate partnerships. We may earn a commission if you use these links. We do not
        control and are not responsible for third-party services.
      </p>
      <h2 className="font-display text-lg font-bold text-white">Your Responsibility</h2>
      <p>
        You are responsible for verifying information and making your own informed decisions about your
        business, credit, and finances.
      </p>
    </LegalShell>
  );
}
