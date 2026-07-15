import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "What We Collect",
        body: "PEN2PRO collects the information you provide directly — name, email, phone, business idea details, and roadmap intake answers — along with basic usage analytics to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, follow up on waitlist and upgrade interest, improve our AI outputs, and communicate updates about PEN2PRO. We do not sell your personal data.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored on secured infrastructure with restricted access. We take reasonable technical measures to protect your information, but no system is 100% secure.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. Opting out of marketing communications will not affect access to your saved roadmap.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy guidance, and organizational tools (RMIE — Rapid Monetization Intelligence Engine). By using the platform you agree to use it lawfully and not to misuse, resell, or scrape generated content without permission.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is an education, strategy, and organization tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Legacy Founder plans are described on the Pricing page. Paid plans are billed as disclosed at checkout. You may cancel a recurring plan at any time; access continues through the paid period.",
      },
      {
        heading: "Changes to the Platform",
        body: "We may update features, pricing, or these terms as PEN2PRO grows. Continued use after changes take effect means you accept the updated terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, business success, or credit repair results. The platform provides education, strategy, organization, and readiness tools — not legal, financial, tax, or credit repair services.",
      },
      {
        heading: "Not Professional Advice",
        body: "Nothing on PEN2PRO constitutes legal, tax, accounting, or licensed financial advice. Consult a qualified attorney, accountant, or licensed professional before making entity formation, funding, or credit decisions.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every business, market, and financial situation is different. Results depend on individual effort, execution, timing, and market conditions, and past examples do not guarantee similar future results.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">{data.title}</h1>
        <div className="space-y-8">
          {data.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-slate-600">
          Questions about this policy? Reach out through the Waitlist or Sign In page and our team will follow up.
        </p>
      </main>
      <Footer />
    </div>
  );
}
