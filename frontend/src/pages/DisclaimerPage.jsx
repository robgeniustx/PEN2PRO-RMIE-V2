import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational Purpose",
    body: "PEN2PRO provides business strategy, roadmap generation, credit and funding readiness tools, and related content for educational and organizational purposes. It is a planning tool, not a guarantee of any outcome.",
  },
  {
    title: "No Guaranteed Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, credit repair results, or improved credit scores. Every situation is different, and results depend on your effort, resources, market conditions, and factors PEN2PRO cannot control.",
  },
  {
    title: "Not Professional Advice",
    body: "Nothing on this Platform constitutes legal, tax, accounting, credit repair, or financial advice. Before forming a business entity, disputing credit items, applying for funding, or making financial decisions, consult a licensed attorney, accountant, or financial professional.",
  },
  {
    title: "Credit & Funding Content",
    body: "Credit-building and funding-readiness checklists are organizational and educational tools. They do not remove, dispute, or repair negative items on your credit report on your behalf, and they do not guarantee lender or investor approval.",
  },
  {
    title: "Third-Party & Affiliate Resources",
    body: "Links to LLC formation services, business banks, funding partners, credit tools, and other third parties are provided for convenience. PEN2PRO may earn a commission from these partners. We do not control, and are not responsible for, the services, pricing, or outcomes provided by third parties.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for verifying information, complying with applicable laws, and making your own informed decisions about your business, credit, and finances. Use of PEN2PRO's roadmap and tools is at your own discretion and risk.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">Disclaimer</h1>
          <p className="mb-12 text-slate-400">
            Please read this disclaimer carefully before relying on PEN2PRO's roadmap, credit, or funding content.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
