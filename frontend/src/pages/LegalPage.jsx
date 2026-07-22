import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-400 leading-7 whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5 text-xs leading-6 text-slate-500">
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy" className="text-slate-500 hover:text-[#FF8A00]">Privacy Policy</Link>
          <Link to="/terms" className="text-slate-500 hover:text-[#FF8A00]">Terms of Service</Link>
          <Link to="/disclaimer" className="text-slate-500 hover:text-[#FF8A00]">Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
