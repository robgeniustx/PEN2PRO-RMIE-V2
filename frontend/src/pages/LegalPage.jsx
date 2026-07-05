import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "What we collect",
        body: "PEN2PRO collects the information you provide when you create a roadmap, join the waitlist, or contact us — including name, email, phone (optional), and the business idea details you enter. We also collect basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your roadmap, follow up on waitlist and upgrade requests, improve PEN2PRO's AI output, and communicate with you about your account. We do not sell your personal information.",
      },
      {
        heading: "How we protect it",
        body: "We use industry-standard safeguards to store and transmit your data. Access to admin data (waitlist submissions, analytics) is restricted and protected.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting us. Opting out of marketing emails will not affect your ability to use the platform.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. By using the platform, you agree to use it for lawful purposes and to provide accurate information when creating your roadmap or account.",
      },
      {
        heading: "No guarantees",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee business success, income, credit repair results, or funding/loan approval. Outcomes depend on your own effort, execution, and market conditions.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders plans are described on the Pricing page. Paid plans renew automatically until canceled. Founders/lifetime offers are subject to availability and the terms presented at purchase.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      {
        heading: "Educational purpose",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not legal, financial, tax, or credit-repair services.",
      },
      {
        heading: "Not professional advice",
        body: "Roadmap output, funding readiness checklists, and credit-building steps are general guidance, not a substitute for advice from a licensed attorney, accountant, or financial advisor. Consult a qualified professional before making legal or financial decisions.",
      },
      {
        heading: "Your results may vary",
        body: "Every business, market, and financial situation is different. Past results shared on this platform (including the founder's story) are individual experiences, not promises of what you will achieve.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white">{data.title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          {data.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white">{s.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-slate-600">
          Questions about this policy? Reach out through the contact details on our About page.
        </p>
      </main>
      <Footer />
    </div>
  );
}
