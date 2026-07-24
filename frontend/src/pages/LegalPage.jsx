import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "What we collect",
        body: "When you use PEN2PRO — including the Starter roadmap intake, waitlist form, or account sign-up — we collect the information you provide directly, such as your name, email, phone number, business idea, and any details you enter into RMIE tools. We also collect basic usage data (pages visited, features used, referral source) to improve the product.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your business roadmap and blueprint, to communicate with you about your account, waitlist status, and product updates, and to improve PEN2PRO's tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "How we share it",
        body: "We share data with service providers that help us operate PEN2PRO (hosting, payment processing, email delivery) only to the extent needed to provide the service. Affiliate partners linked from PEN2PRO (LLC formation, banking, credit, funding, and similar providers) operate under their own privacy policies once you leave our site.",
      },
      {
        heading: "Your choices",
        body: "You can request a copy of your data, ask us to delete your account information, or opt out of marketing email at any time by contacting support. Some data (such as records required for payment or legal compliance) may be retained as required by law.",
      },
      {
        heading: "Security",
        body: "We use industry-standard safeguards to protect your data, but no system is 100% secure. Do not share sensitive personal information (like full account numbers or passwords) through open form fields not designed to collect them.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, strategy, and execution plans. By creating an account or using any part of the platform, you agree to these terms.",
      },
      {
        heading: "No guarantee of results",
        body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Your outcomes depend on your own effort, execution, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders Lifetime plans are described on our Pricing page. Paid plans are billed through Stripe. You may cancel a recurring subscription at any time; Founders Lifetime purchases are a one-time payment for lifetime access as described at time of purchase.",
      },
      {
        heading: "Acceptable use",
        body: "Do not use PEN2PRO to generate content for illegal activity, fraud, or to misrepresent your business to lenders, partners, or customers. We may suspend accounts that violate these terms.",
      },
      {
        heading: "Intellectual property",
        body: "You own the business ideas, plans, and content you create using PEN2PRO. PEN2PRO retains ownership of the platform, software, prompts, and underlying technology.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes are posted means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Not financial, legal, or credit advice",
        body: "PEN2PRO provides business strategy, roadmap, and readiness tools generated with the help of artificial intelligence. Nothing on this platform is financial, legal, tax, or credit repair advice. Always consult a qualified professional before making major financial, legal, or business decisions.",
      },
      {
        heading: "No guaranteed outcomes",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Results shown or referenced anywhere on the platform reflect individual effort, market conditions, and circumstances that vary from person to person.",
      },
      {
        heading: "Affiliate relationships",
        body: "PEN2PRO may earn a commission when you use affiliate links to third-party providers (LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, insurance, and marketing tools). We only recommend providers we believe can help, but we do not control their services, pricing, or outcomes.",
      },
      {
        heading: "AI-generated content",
        body: "Roadmaps, blueprints, scripts, and strategy output are generated with AI and should be reviewed and adapted to your specific situation before you rely on them.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.terms;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 pb-16 pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">
            PEN2PRO
          </p>
          <h1 className="mb-2 font-display text-4xl font-black leading-tight md:text-5xl">
            {page.title}
          </h1>
          <p className="mb-10 text-sm text-slate-500">{page.updated}</p>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-2 text-lg font-bold text-white">{section.heading}</h2>
                <p className="leading-7 text-slate-300">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            Questions about this policy? Reach out any time — we're building PEN2PRO to earn your
            trust, not just your signup.{" "}
            <Link to="/about" className="font-semibold text-[#FF8A00] hover:text-white">
              Read our story
            </Link>
            .
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
