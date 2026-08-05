import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval,
            or business success. The platform provides education, strategy, organization, and
            readiness tools — the work of building and running a business is still yours to do.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Not Financial, Legal, or Credit Repair Advice</h2>
          <p>
            Nothing on PEN2PRO constitutes financial, legal, tax, or credit repair advice.
            Checklists and readiness scores are educational tools, not professional advice.
            Consult a licensed attorney, accountant, or financial advisor for guidance specific
            to your situation.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Affiliate Relationships</h2>
          <p>
            PEN2PRO may earn a commission when you use partner links for services like LLC
            formation, business banking, funding, or bookkeeping. We only recommend resources we
            believe are useful, but we do not control third-party providers' pricing, terms, or
            outcomes.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Individual Results Vary</h2>
          <p>
            Any results, testimonials, or examples referenced on PEN2PRO reflect individual
            experiences and are not typical or guaranteed. Your results will depend on your
            effort, resources, market, and circumstances.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
