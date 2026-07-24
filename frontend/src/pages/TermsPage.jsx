import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By creating an account or using the Starter, Pro, Elite, or Founders tiers, you agree to these terms.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Account Responsibilities",
    body: "You're responsible for keeping your login credentials secure and for the accuracy of the information you provide during roadmap intake. Do not use PEN2PRO for unlawful purposes or to misrepresent your business.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro, Elite, and Founders tiers are billed according to the plan you select at checkout. Founders pricing, where offered, is a limited early-adopter offer. You can cancel recurring plans at any time; access continues through the end of the paid period.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "PEN2PRO may link to third-party partners for LLC formation, banking, credit, funding, domains, bookkeeping, payments, insurance, and marketing tools. We may earn a referral commission from these partners. We don't control their services and aren't liable for their performance.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO brand, RMIE methodology, and platform content are owned by PEN2PRO. Your business ideas and roadmap content remain yours.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">
          Last updated: 2026. These terms govern your use of PEN2PRO and the RMIE roadmap platform.
        </p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-[#1A2D50] p-5 text-sm text-slate-500" style={{ background: "#0D1528" }}>
          PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on individual effort and market conditions.
        </div>
      </div>
      <Footer />
    </div>
  );
}
