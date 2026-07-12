import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "PEN2PRO collects the information you provide directly — name, email, phone, business idea, and roadmap intake answers — plus basic usage data (pages visited, features used) so we can improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, communicate plan and waitlist updates, personalize your dashboard, and improve our AI models and product. We do not sell your personal data.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO uses trusted third-party services for payments (Stripe), email, and analytics. Affiliate links on pages like Funding and Credit Repair may earn PEN2PRO a commission if you sign up through them — this never affects the price you pay.",
      },
      {
        heading: "Your Rights",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may unsubscribe from waitlist or marketing emails at any time.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard safeguards to protect your data, but no system is 100% secure. Do not share sensitive financial account credentials through the platform.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources under our Rapid Monetization Intelligence Engine (RMIE). You must be 18 or older to create an account.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, education, and organization tool. We do not guarantee income, funding approval, loan approval, credit repair outcomes, or business success. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans renew automatically until canceled. Founders/lifetime offers are limited and priced as advertised at time of purchase.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree not to misuse the platform, attempt to reverse-engineer the AI systems, or use generated content for unlawful purposes.",
      },
      {
        heading: "Changes",
        body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated Terms.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "January 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. Nothing on this platform is legal, tax, financial, or credit repair advice.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business income, or business success. Every roadmap is a starting strategy — execution and market conditions determine real-world results.",
      },
      {
        heading: "Consult Professionals",
        body: "For legal entity formation, tax filing, credit disputes, and lending decisions, always consult a licensed attorney, accountant, or financial professional in your area.",
      },
      {
        heading: "Affiliate Relationships",
        body: "Some links on PEN2PRO (LLC formation, banking, funding, credit tools) are affiliate links. We may earn a commission at no extra cost to you if you choose to sign up with a partner.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{page.title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about our Privacy Policy, Terms, or this Disclaimer? Reach out any time — and start building your
            roadmap while you're here.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-center text-sm font-black">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="btn-outline rounded-xl px-6 py-3 text-center text-sm font-semibold">
              About PEN2PRO
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
