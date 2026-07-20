import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What we collect",
        body: [
          "When you use PEN2PRO — creating a free roadmap, joining the waitlist, signing in, or upgrading to Pro, Elite, or Founders — we collect the information you give us directly: name, email, phone number (optional), business idea, and answers you provide during the roadmap intake.",
          "We also collect basic usage data automatically: pages visited, features used, device/browser type, and referral source (including any ?ref= link that brought you to the site).",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To generate your business roadmap and blueprint output.",
          "To follow up on waitlist signups and let you know when Pro, Elite, or Founders access opens up.",
          "To operate your account, dashboard, and any subscription you purchase.",
          "To improve PEN2PRO's roadmap quality, onboarding, and product experience.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "Payments",
        body: [
          "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number. Stripe's own privacy policy governs how payment data is handled on their end.",
        ],
      },
      {
        heading: "Affiliate & partner links",
        body: [
          "Some pages (Affiliate, Funding, Credit Repair) link to third-party services — LLC formation, business banking, credit tools, and more. PEN2PRO may earn a commission if you sign up through those links. Clicking through takes you to that provider's own site, governed by their own privacy policy.",
        ],
      },
      {
        heading: "Data storage & security",
        body: [
          "Your information is stored on secured infrastructure and is only accessible to PEN2PRO team members who need it to operate the platform or respond to support requests.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can request a copy of your data, ask us to correct it, or ask us to delete your account and associated data at any time by contacting us.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about this policy? Reach out through the waitlist form or your account email and mention \"Privacy\" in your message.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "LEGAL",
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: [
          "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into a business roadmap, launch plan, and monetization strategy.",
          "You must be 18 or older, or have a parent/guardian's permission, to create an account or subscribe to a paid plan.",
        ],
      },
      {
        heading: "Accounts & subscriptions",
        body: [
          "You're responsible for keeping your login credentials secure and for all activity under your account.",
          "Pro, Elite, and Founders are paid subscription tiers billed through Stripe. Pricing, billing frequency, and features for each tier are described on the Pricing, Pro, Elite, and Founders pages at the time of purchase.",
          "You can cancel a paid subscription at any time; access continues through the end of the current billing period.",
        ],
      },
      {
        heading: "No guarantee of results",
        body: [
          "PEN2PRO provides education, strategy, structure, and readiness tools — not a guarantee of income, funding approval, loan approval, credit repair results, or business success. Outcomes depend on your effort, market conditions, and factors outside our control.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "Don't use PEN2PRO to generate content for illegal activity, to impersonate someone else, or to attempt to disrupt or reverse-engineer the platform.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The PEN2PRO name, brand, and platform are owned by PEN2PRO. The roadmap, blueprint, and strategy content generated for your account is yours to use for your own business.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the platform or reliance on its output.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised terms.",
        ],
      },
    ],
  },
  disclaimer: {
    eyebrow: "LEGAL",
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational purpose",
        body: [
          "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not legal, financial, tax, or credit-repair services.",
        ],
      },
      {
        heading: "Business & financial guidance",
        body: [
          "Roadmap output, startup cost estimates, revenue projections, and funding/credit readiness checklists are strategic starting points based on the information you provide. They are not a promise of revenue, profitability, or approval by any lender, investor, or agency.",
        ],
      },
      {
        heading: "Credit & funding readiness",
        body: [
          "Nothing on the Funding Readiness or Credit Repair pages is a substitute for advice from a licensed credit counselor, attorney, or financial advisor. Credit-building and funding outcomes vary by individual, lender, and market conditions.",
        ],
      },
      {
        heading: "Affiliate disclosure",
        body: [
          "PEN2PRO may earn a commission when you sign up for a third-party product or service (LLC formation, business banking, credit tools, funding partners, and more) through links on this site. We only list resources we believe are genuinely useful to founders — the commission does not change the price you pay.",
        ],
      },
      {
        heading: "Your responsibility",
        body: [
          "You are responsible for your own business, legal, tax, and financial decisions. Always verify critical decisions with a qualified professional before acting on them.",
        ],
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {page.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-3">
            {page.title}
          </h1>
          <p className="text-sm text-slate-500">{page.updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14">
        <div className="space-y-10">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{section.heading}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-7 text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 mb-4">Ready to build your roadmap?</p>
          <Link to="/starter" className="btn-gold inline-block px-8 py-3 text-sm font-bold">
            Start Your Free Roadmap
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
