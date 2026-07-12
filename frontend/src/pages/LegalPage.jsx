import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
  }, [title]);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">{title}</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-xl font-bold text-white">{s.heading}</h2>
                <p className="text-[1.02rem] leading-[1.85] text-slate-400 whitespace-pre-line">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[#1A2D50] pt-8 sm:flex-row">
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              About PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
