import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your roadmap, save your progress, communicate with you about your account or the waitlist, and improve PEN2PRO's AI outputs and product experience. We do not sell your personal information.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use trusted third-party services for payments (Stripe), AI processing (OpenAI), hosting, and analytics. These providers only receive the data necessary to perform their function.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. Waitlist and account data is retained only as long as needed to provide the service.",
      },
      {
        heading: "Security",
        body: "We use industry-standard safeguards to protect your data, but no system is 100% secure. Use strong, unique passwords and contact us immediately if you suspect unauthorized account access.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, scrape, or resell generated content without permission.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on the cycle shown at checkout. You may cancel at any time; access continues through the end of the current billing period. Founders pricing, where offered, is locked in for the life of an active subscription.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for the accuracy of information you submit and for keeping your login credentials secure. PEN2PRO is not liable for losses resulting from unauthorized use of your account.",
      },
      {
        heading: "Changes to the Service",
        body: "We may update, add to, or discontinue features as PEN2PRO evolves. We'll make reasonable efforts to notify users of material changes to these terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides business strategy, roadmap, credit-readiness, and funding-readiness content for educational and informational purposes only. Nothing on this platform constitutes legal, tax, financial, credit repair, or investment advice.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business licensing outcomes, or business success of any kind. Every situation is different, and outcomes depend on individual circumstances, effort, and market conditions.",
      },
      {
        heading: "Consult a Professional",
        body: "Before making legal, financial, or credit-related decisions, consult a licensed attorney, accountant, or financial advisor. PEN2PRO's AI-generated roadmaps are a starting point for strategy — not a substitute for professional guidance.",
      },
      {
        heading: "Affiliate Relationships",
        body: "Some links on PEN2PRO (LLC formation, banking, funding, tools) are affiliate links. We may earn a commission if you sign up through them, at no additional cost to you. We only recommend services we believe add real value.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.terms;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
          PEN2PRO
        </p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">
          {page.title}
        </h1>
        <p className="text-sm text-slate-500 mb-12">{page.updated}</p>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] p-5" style={{ background: "#0D1528" }}>
          <p className="text-xs leading-6 text-slate-500">
            Questions about this {page.title.toLowerCase()}? Reach out any time — we're here to help you build,
            not to bury you in fine print.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
