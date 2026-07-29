import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function LegalPage({ eyebrow, title, updated, sections, closingCta }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            {title}
          </h1>
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#D4A017]/30 p-8 text-center" style={{ background: "#0F1520" }}>
          <p className="text-slate-300 mb-5">{closingCta}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold px-8 py-3 text-sm font-bold">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="btn-outline px-8 py-3 text-sm font-bold">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const CONTACT_NOTE =
  "Questions about this policy? Reach out through the Waitlist form or the contact details on your account dashboard and we'll respond as soon as we can.";

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="Your Privacy Matters"
      updated="July 2026"
      closingCta="We built PEN2PRO to help you move forward — not to sell your data. If anything here is unclear, ask us."
      sections={[
        {
          heading: "What We Collect",
          body: [
            "When you use PEN2PRO, we collect information you give us directly — your name, email, phone number (optional), business idea, and answers to roadmap intake questions. We also collect basic usage data, like which pages and tools you use, to improve the platform.",
            "If you join the waitlist, we store your interest level (Free Roadmap, Pro, Elite, Legacy Founder, Affiliate, Funding, or Credit Repair), the page you signed up from, and any referral source in the URL.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to generate your business roadmap, personalize your dashboard, respond to waitlist and support requests, and improve PEN2PRO's tools over time.",
            "We do not sell your personal information to third parties. If you engage with an affiliate partner link (LLC formation, business banking, funding, etc.), that partner's own privacy policy governs the information you share with them directly.",
          ],
        },
        {
          heading: "Data Storage & Security",
          body: [
            "Your account and roadmap data is stored on secured infrastructure. We take reasonable technical and administrative steps to protect your information, but no system is 100% secure — use good judgment about what you share.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time. You can also unsubscribe from email updates using the link in any email we send you.",
          ],
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
      closingCta="By using PEN2PRO, you agree to these terms. Ready to build your roadmap?"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, launch strategies, and funding/credit readiness plans. It is a planning and strategy tool — not a law firm, accounting firm, lender, or credit repair organization.",
            "You must provide accurate information when creating an account or generating a roadmap. You're responsible for keeping your login credentials secure.",
          ],
        },
        {
          heading: "Plans & Billing",
          body: [
            "PEN2PRO offers a Free Starter roadmap along with paid Pro, Elite, and Legacy Founder tiers. Paid plan features, pricing, and billing terms are described on the Pricing page and at checkout. Where subscriptions are not yet live, you may join the waitlist to be notified at launch.",
            "You may cancel a paid subscription at any time from your account dashboard; access continues through the end of the current billing period.",
          ],
        },
        {
          heading: "No Guarantees",
          body: [
            "PEN2PRO does not guarantee income, business success, credit repair results, loan approval, or funding approval. Roadmaps, checklists, and strategy output are educational guidance based on the information you provide — outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: [
            "Don't use PEN2PRO to submit unlawful, fraudulent, or abusive content, or to attempt to disrupt or reverse-engineer the platform. We may suspend accounts that violate these terms.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
          ],
        },
      ]}
    />
  );
}

export function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="DISCLAIMER"
      title="Read This First"
      updated="July 2026"
      closingCta={CONTACT_NOTE}
      sections={[
        {
          heading: "Education & Strategy, Not Guarantees",
          body: [
            "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the execution and outcome are on you.",
            "Roadmaps, checklists, and scripts are generated based on the details you provide and general best practices. They are starting points, not personalized legal, financial, tax, or credit repair advice.",
          ],
        },
        {
          heading: "Not Professional Advice",
          body: [
            "Nothing on PEN2PRO is a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor. For LLC formation, tax structure, contracts, or credit disputes with real legal weight, consult a qualified professional.",
          ],
        },
        {
          heading: "Affiliate Relationships",
          body: [
            "PEN2PRO may link to third-party partners for services like LLC formation, business banking, funding, bookkeeping, and marketing tools. We may earn a commission if you use these links. We only recommend partners we believe add real value, but we don't control their services and aren't responsible for their outcomes.",
          ],
        },
        {
          heading: "Your Responsibility",
          body: [
            "Results depend on your market, effort, timing, and decisions. Use PEN2PRO as a roadmap and accountability tool — not a promise of a specific outcome.",
          ],
        },
      ]}
    />
  );
}
