import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "PEN2PRO respects your privacy. This page explains what information we collect, how we use it, and the choices you have.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO's roadmap builder, waitlist, or dashboard, we may collect your name, email, phone number, business idea details, and usage data to generate your roadmap and improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your AI roadmap, communicate updates about your account or the PEN2PRO waitlist, and improve our tools. We do not sell your personal information.",
      },
      {
        heading: "Data Storage & Security",
        body: "We take reasonable steps to protect your information, including access controls on our admin systems. No online system is 100% secure, and PEN2PRO cannot guarantee absolute security.",
      },
      {
        heading: "Your Choices",
        body: "You may request that we delete your account data or remove you from the waitlist at any time by contacting us.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "By using PEN2PRO, you agree to the following terms. Please read them carefully before using the platform.",
    sections: [
      {
        heading: "Use of the Platform",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. You agree to use the platform for lawful purposes and to provide accurate information when creating your roadmap or account.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, education, and organization tool. We do not guarantee income, funding approval, credit repair results, or business success. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed according to the plan you select at checkout. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Changes to the Platform",
        body: "PEN2PRO may update features, pricing, or these terms as the platform evolves. Continued use of the platform after changes means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro:
      "PEN2PRO provides education, strategy, organization, and readiness tools — not guarantees.",
    sections: [
      {
        heading: "Business & Income Disclaimer",
        body: "PEN2PRO does not guarantee income, business success, or specific results. Every business, market, and individual effort is different. The roadmaps and strategies provided are tools to help you plan and execute — the outcome is up to you.",
      },
      {
        heading: "Funding & Credit Disclaimer",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, or loan approval. The Funding and Credit Repair tools on this platform provide education, checklists, and readiness strategy only. Always consult a qualified financial or legal professional for advice specific to your situation.",
      },
      {
        heading: "Not Legal, Tax, or Financial Advice",
        body: "Content on PEN2PRO — including LLC/EIN checklists, branding guidance, and business plans — is for informational purposes only and is not a substitute for advice from a licensed attorney, accountant, or financial advisor.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">{page.title}</h1>
        <p className="text-slate-400 text-lg leading-8 mb-10">{page.intro}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-600">
          Last updated: 2026. Questions about this {page.title.toLowerCase()}? Contact us through the PEN2PRO
          waitlist form and we'll follow up.
        </p>
      </div>
      <Footer />
    </div>
  );
}
