import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "What we collect",
        p: "When you use PEN2PRO — including the free roadmap tool, waitlist form, Builder, Accelerator, and account dashboard — we collect the information you give us directly (name, email, phone, business idea, and roadmap answers) along with basic usage data (pages visited, features used, referral source) so we can operate and improve the platform.",
      },
      {
        h: "How we use it",
        p: "We use your information to generate your business roadmap, manage your account and subscription tier (Free, Pro, Elite, Founders), respond to support requests, send product and waitlist updates, and improve PEN2PRO's AI-generated recommendations. We do not sell your personal information.",
      },
      {
        h: "Payments",
        p: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number. Stripe's own privacy policy governs how payment data is handled on their end.",
      },
      {
        h: "Third-party links",
        p: "Pages like Affiliate, Funding, and Credit Repair may link to third-party partners (LLC formation, banking, credit, funding, domain, bookkeeping, payment, CRM, and insurance providers). Those companies have their own privacy practices, which we don't control.",
      },
      {
        h: "Data retention & requests",
        p: "We retain your account and roadmap data for as long as your account is active. You can request access to, correction of, or deletion of your data at any time by contacting support.",
      },
      {
        h: "Contact",
        p: "Questions about this policy can be sent through the Sign In / Create Account page's support link, or to the contact address listed on your invoice or welcome email.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "Using PEN2PRO",
        p: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy plans, and readiness checklists based on the information you provide. By creating an account or generating a roadmap, you agree to these terms.",
      },
      {
        h: "Plans & billing",
        p: "Free, Pro, Elite, and Founders plans are described on the Pricing page. Paid plans renew on the billing cycle shown at checkout unless canceled. Founders/Legacy Founder access is offered on a limited-availability basis as described on that page.",
      },
      {
        h: "AI-generated content",
        p: "Roadmaps, strategy plans, scripts, and checklists are generated with AI assistance based on your inputs. They are educational and strategic guidance — not legal, tax, financial, or credit advice — and you're responsible for verifying anything before you act on it (forming an entity, signing a lease, taking on debt, etc.).",
      },
      {
        h: "Acceptable use",
        p: "You agree not to use PEN2PRO to generate content for illegal activity, to misrepresent your identity, or to abuse, scrape, or resell the platform's output at scale without permission.",
      },
      {
        h: "Cancellation & refunds",
        p: "You can cancel a paid plan at any time from your account settings; cancellation stops future billing but does not retroactively refund the current billing period unless required by law or stated otherwise at purchase.",
      },
      {
        h: "Changes",
        p: "We may update these terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised terms.",
      },
    ],
  },
  disclaimer: {
    eyebrow: "Legal",
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        h: "No guaranteed results",
        p: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, strategy, and checklist is a planning tool — outcomes depend on your effort, market conditions, execution, and factors outside our control.",
      },
      {
        h: "Not legal, tax, or financial advice",
        p: "Content on PEN2PRO — including LLC/EIN checklists, funding readiness plans, credit-building steps, and branding direction — is for educational and strategic purposes only. It is not a substitute for advice from a licensed attorney, accountant, tax professional, or credit counselor.",
      },
      {
        h: "Affiliate relationships",
        p: "PEN2PRO may earn a commission when you use partner links on the Affiliate, Funding, or Credit Repair pages (for LLC formation, banking, credit, funding, domains, bookkeeping, payments, CRM, or insurance). We only recommend partners we believe are useful, but you should do your own research before signing up.",
      },
      {
        h: "Founder story",
        p: "Robert Green's story on the About page reflects his personal, lived experience. Individual results and paths vary — PEN2PRO shares this story to explain why the platform exists, not as a promise of similar outcomes for every user.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const data = CONTENT[variant] || CONTENT.privacy;
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">{data.eyebrow}</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{data.title}</h1>
        <p className="text-slate-500 text-sm mb-10">{data.updated}</p>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-black text-white mb-2">{s.h}</h2>
              <p className="text-slate-400 leading-7">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-8 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/starter" className="btn-outline px-8 py-3 text-sm font-bold text-center">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
