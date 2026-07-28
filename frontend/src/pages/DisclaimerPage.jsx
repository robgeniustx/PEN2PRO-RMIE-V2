import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
            credit repair results. Every roadmap, checklist, and strategy on this platform is
            educational and strategic guidance — not a promise of outcome.
          </p>
          <p>
            Results depend on individual effort, market conditions, execution, and factors outside
            PEN2PRO's control. Nothing on this platform is legal, tax, credit repair, or investment
            advice — consult a licensed professional for those matters.
          </p>
          <p>
            Any income, growth, or funding examples referenced on PEN2PRO are illustrative and not
            typical results. Your outcomes will vary based on your own circumstances.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
