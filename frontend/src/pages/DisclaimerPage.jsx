import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Outcomes",
    body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not a promise of any specific outcome.",
  },
  {
    title: "Not Financial, Legal, or Credit Repair Services",
    body: "PEN2PRO is not a law firm, licensed credit repair organization, bank, or lender. Roadmap, funding, and credit-readiness content is for educational and planning purposes only and should not be treated as professional financial, legal, or tax advice. Consult a qualified attorney, accountant, or financial advisor for guidance specific to your situation.",
  },
  {
    title: "Individual Results Vary",
    body: "Every business, credit profile, and financial situation is different. Results depend on your effort, market conditions, timing, and factors PEN2PRO cannot control. Testimonials or examples referenced on this platform reflect individual experiences and are not typical or guaranteed outcomes.",
  },
  {
    title: "Third-Party Affiliate Partners",
    body: "PEN2PRO may link to third-party partners for LLC formation, business banking, funding, credit tools, and other services. We may earn a commission from these partnerships. PEN2PRO does not control, and is not responsible for, the products, services, or outcomes provided by third parties.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for verifying any information, checklist, or recommendation before acting on it, and for complying with all applicable laws and regulations in your jurisdiction.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">Disclaimer</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7 text-sm">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
