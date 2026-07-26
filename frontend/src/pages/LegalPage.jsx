import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "PEN2PRO collects the information you provide when you create a roadmap, join the waitlist, or create an account — including your name, email, phone (optional), business idea details, and usage activity on the platform. We also collect basic technical data (browser, device, referral source) to keep the app secure and improve it.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your roadmap, communicate with you about your account and PEN2PRO updates, improve our AI models and product experience, and — if you opt in — reach out about Pro, Elite, or Founders access.",
      },
      {
        heading: "What We Don't Do",
        body: "We do not sell your personal information to third parties. We do not share your business idea details outside of the systems required to generate your roadmap and support your account.",
      },
      {
        heading: "Your Controls",
        body: "You can request a copy of your data, ask us to delete your account, or unsubscribe from communications at any time by contacting support.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. By using the platform you agree to use it for lawful purposes and to provide accurate information when building your roadmap.",
      },
      {
        heading: "No Guarantee of Outcomes",
        body: "PEN2PRO is a strategy, structure, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Where billing is live, charges recur on the cycle shown at checkout and can be canceled at any time from your account settings.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, and platform are owned by PEN2PRO. Roadmap content generated for your account is yours to use for your own business.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and build a business. It is not legal, financial, tax, or credit repair advice, and it is not a substitute for a licensed attorney, accountant, or financial advisor.",
      },
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every roadmap reflects a strategic starting point — your results depend on your own execution, resources, and market conditions.",
      },
      {
        heading: "Third-Party Resources",
        body: "Affiliate and partner links (LLC formation, banking, funding, credit, and other services) are provided for convenience. PEN2PRO is not responsible for the terms, pricing, or outcomes of third-party services.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{page.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{page.updated}</p>

        <div className="mt-10 space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5">
          <p className="text-xs leading-6 text-slate-500">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
            success. The platform provides education, strategy, organization, and readiness tools. Questions?{" "}
            <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
              Reach out via the waitlist form
            </Link>{" "}
            and we'll follow up.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
