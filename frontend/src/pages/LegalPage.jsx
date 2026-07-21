import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{section.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "What We Collect",
          body: [
            "PEN2PRO collects information you provide directly, including your name, email, phone number, business idea, and roadmap intake responses when you create a free roadmap, join the waitlist, sign in, or contact us.",
            "We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to generate your business roadmap, manage your account, respond to inquiries, send updates about PEN2PRO plans and launch status, and improve our AI-powered tools.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "PEN2PRO may share limited information with service providers who help us operate the platform, such as payment processing (Stripe) and hosting infrastructure. Affiliate links on pages like Funding, Credit Repair, and Affiliate Resources go to third-party companies with their own privacy policies.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from email updates using the link in any email we send.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about this policy can be sent through the contact options listed on the PEN2PRO website."],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="TERMS OF SERVICE"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that provides business roadmaps, strategy tools, and educational resources. By using PEN2PRO, you agree to use the platform lawfully and to provide accurate information.",
          ],
        },
        {
          heading: "Plans & Billing",
          body: [
            "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans are billed on a recurring basis until canceled, except for Founders lifetime access where noted. You may cancel a subscription at any time from your account or by contacting support; cancellation stops future billing but does not refund past charges unless required by law.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides strategy, structure, education, and tools — not guarantees. We do not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "The PEN2PRO platform, brand, and content are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business purposes.",
          ],
        },
        {
          heading: "Changes",
          body: ["We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms."],
        },
      ]}
    />
  );
}

export function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="DISCLAIMER"
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational & Strategy Tool",
          body: [
            "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools to help you build a roadmap and take action — the outcome depends on your effort, resources, and market conditions.",
          ],
        },
        {
          heading: "Not Legal, Financial, or Credit Repair Advice",
          body: [
            "Content on PEN2PRO, including the Funding Readiness and Credit Repair pages, is for general informational and strategic purposes only. It is not legal, tax, financial, or credit repair advice. Consult a licensed attorney, accountant, or financial professional before making business, legal, or credit decisions.",
          ],
        },
        {
          heading: "Affiliate Relationships",
          body: [
            "PEN2PRO may earn a commission when you use links to third-party partners for services like LLC formation, business banking, funding, or bookkeeping. These are optional resources — you are never required to use a specific partner, and inclusion is not an endorsement of guaranteed outcomes.",
          ],
        },
        {
          heading: "Your Responsibility",
          body: [
            "You are responsible for verifying any information, complying with applicable laws, and making your own informed decisions about your business, credit, and finances."],
        },
      ]}
    />
  );
}
