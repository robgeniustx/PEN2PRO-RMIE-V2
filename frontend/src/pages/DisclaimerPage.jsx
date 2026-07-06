import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            PEN2PRO is an educational and strategy platform. Nothing on this site constitutes
            legal, financial, tax, or credit repair advice.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">No Guaranteed Outcomes</h2>
          <p>
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval,
            or business success. Roadmaps, checklists, and strategies are educational tools
            meant to organize your next steps — results depend on your individual effort,
            resources, and market conditions.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Not Professional Advice</h2>
          <p>
            Information about credit, funding, LLC formation, and business structure is
            provided for general education. Consult a licensed attorney, accountant, or
            financial advisor before making legal or financial decisions.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Affiliate Disclosure</h2>
          <p>
            PEN2PRO may earn a commission when you use certain partner links (LLC formation,
            business banking, funding, and other service providers). This does not increase
            your cost and does not influence our recommendations.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
