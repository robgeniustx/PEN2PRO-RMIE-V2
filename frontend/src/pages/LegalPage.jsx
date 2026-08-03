import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalLayout({ title, updated, sections }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="mb-3 font-display text-4xl font-black">{title}</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link to="/privacy" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">Terms of Service</Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const LAST_UPDATED = "August 2026";

export function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={LAST_UPDATED}
      sections={[
        { heading: "What We Collect", body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone (optional), business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform." },
        { heading: "How We Use It", body: "We use your information to generate your business roadmap, communicate with you about your account and waitlist status, improve our AI models and product, and send updates about PEN2PRO plans and features. We do not sell your personal information." },
        { heading: "Data Storage", body: "Your roadmap data and account information are stored securely and retained for as long as your account is active or as needed to provide the service." },
        { heading: "Third Parties", body: "We use trusted third-party services (payment processing, email delivery, analytics, AI providers) to operate PEN2PRO. These providers only receive the data necessary to perform their function." },
        { heading: "Your Rights", body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support." },
        { heading: "Contact", body: "Questions about this policy can be sent to the PEN2PRO support team through the contact options on our site." },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated={LAST_UPDATED}
      sections={[
        { heading: "Acceptance of Terms", body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform." },
        { heading: "The Service", body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business roadmaps, strategy guidance, and readiness tools. Free, Pro, Elite, and Founders tiers offer different levels of access as described on our Pricing page." },
        { heading: "Not Professional Advice", body: "PEN2PRO provides educational and strategic content generated with AI assistance. It is not legal, tax, financial, or credit repair advice. Consult a licensed professional before making binding business, legal, or financial decisions." },
        { heading: "No Guarantees", body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, execution, and market conditions." },
        { heading: "Account Responsibilities", body: "You are responsible for the accuracy of information you provide and for maintaining the security of your account credentials." },
        { heading: "Payment & Cancellation", body: "Paid tiers (Pro, Elite, Founders) are billed as described at checkout. You may cancel a subscription at any time; access continues through the end of the current billing period." },
        { heading: "Changes to These Terms", body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms." },
      ]}
    />
  );
}

export function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      updated={LAST_UPDATED}
      sections={[
        { heading: "Educational Purpose", body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and build a business. Roadmaps, checklists, and guidance are generated to inform your decisions — not to replace professional judgment." },
        { heading: "No Guaranteed Results", body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every individual's situation, market, effort, and execution are different, and results will vary." },
        { heading: "Not Financial, Legal, or Credit Repair Services", body: "PEN2PRO is not a law firm, credit repair organization, lender, or registered investment advisor. Content related to funding readiness, credit building, LLC formation, and business structure is educational in nature. Work with a licensed attorney, accountant, or credit professional for services requiring a license." },
        { heading: "Affiliate Relationships", body: "PEN2PRO may earn a commission when you use affiliate links to third-party services (banking, LLC formation, funding, credit tools, and more). We only recommend services we believe add value, but we do not control their outcomes." },
        { heading: "Your Responsibility", body: "You are responsible for your own business, financial, and legal decisions. Use PEN2PRO as one tool among several as you build your business." },
      ]}
    />
  );
}

export default LegalLayout;
