import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Education & Strategy, Not Guarantees",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every outcome depends on your effort, execution, market conditions, and factors outside our control.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Roadmaps, checklists, and AI-generated guidance on entity formation (LLC/EIN), business banking, branding, and funding readiness are general information, not legal, tax, or financial advice. Consult a licensed attorney, accountant, or financial advisor before making decisions that affect your business or personal finances.",
  },
  {
    title: "Credit & Funding Readiness",
    body: "The Funding and Credit Repair sections help you organize and prepare — they do not repair your credit for you, and they do not guarantee any lender, bank, or vendor will approve you. Approval decisions are made solely by third-party lenders and financial institutions based on their own criteria.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you use certain partner links (LLC formation, business banking, credit tools, funding partners, and similar services). This does not increase your cost, and we only recommend tools we believe are useful — but you should independently evaluate any third-party service before signing up.",
  },
  {
    title: "AI-Generated Output",
    body: "Roadmaps and strategy content are generated with AI assistance based on the information you provide. AI output can be incomplete or imperfect. Always apply your own judgment, and verify anything mission-critical with a qualified professional.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Read this before you build. PEN2PRO gives you the roadmap — you do the driving.
          </p>
          <p className="mt-4 text-xs text-slate-600">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm leading-7 text-slate-400">{s.body}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
