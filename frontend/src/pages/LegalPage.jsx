import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What we collect",
        body:
          "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How we use it",
        body:
          "We use your information to generate your business roadmap, operate your account, respond to support requests, send product updates, and — if you opt in — share relevant offers from PEN2PRO or its affiliate partners.",
      },
      {
        heading: "How we protect it",
        body:
          "We use reasonable technical and organizational safeguards to protect your data. No system is 100% secure, and we encourage you to use a strong, unique password for your account.",
      },
      {
        heading: "Sharing",
        body:
          "We do not sell your personal information. We may share data with service providers who help us operate the platform (hosting, email, payments) under confidentiality obligations, or when required by law.",
      },
      {
        heading: "Your choices",
        body:
          "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may unsubscribe from marketing emails using the link in any message.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body:
          "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through its Free, Pro, Elite, and Legacy Founder tiers. By creating an account or using the platform, you agree to these terms.",
      },
      {
        heading: "No guarantees",
        body:
          "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee business success, revenue outcomes, credit repair results, funding approval, or loan approval. Results depend on your own effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Your responsibilities",
        body:
          "You are responsible for the accuracy of the information you submit, for complying with applicable laws in your business activities, and for keeping your account credentials secure.",
      },
      {
        heading: "Subscriptions and billing",
        body:
          "Pro, Elite, and Legacy Founder access may involve recurring or one-time charges as described on the Pricing page at the time of purchase. You can cancel a recurring subscription at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Changes",
        body:
          "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    eyebrow: "Legal",
    title: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Educational tool, not a guarantee",
        body:
          "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcome of any roadmap, checklist, or strategy depends on your own execution and circumstances.",
      },
      {
        heading: "Not legal, financial, or credit repair advice",
        body:
          "Nothing on PEN2PRO constitutes legal, tax, financial, or credit repair advice. For decisions involving business formation, contracts, credit disputes, or funding agreements, consult a qualified attorney, accountant, or licensed professional.",
      },
      {
        heading: "Affiliate relationships",
        body:
          "PEN2PRO may recommend or link to third-party services (LLC formation, business banking, funding partners, credit tools, and more). We may earn a commission from some of these partners. We only recommend tools we believe can genuinely help — but you should do your own research before signing up for any third-party service.",
      },
      {
        heading: "Lived-experience content",
        body:
          "Founder story content, testimonials, and strategy guidance reflect real experience and honest lessons learned — including setbacks. They are shared for education and motivation, not as a promise of specific results for any individual user.",
      },
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const data = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">
          {data.eyebrow}
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">
          {data.title}
        </h1>
        <p className="text-slate-500 text-sm mb-12">{data.updated}</p>

        <div className="space-y-10">
          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
              <p className="text-slate-400 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">
            Questions about these policies? Reach out any time — we're building PEN2PRO for people who
            need a real roadmap, and that includes being straight with you about how the platform works.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
