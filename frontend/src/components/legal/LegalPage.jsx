import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
    return () => {
      document.title = "PEN2PRO — Turn Your Idea Into Income";
    };
  }, [title]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-16 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black leading-tight md:text-5xl">{title}</h1>
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 font-display text-xl font-black text-white">{s.heading}</h2>
              <div className="space-y-3 text-[0.95rem] leading-[1.8] text-slate-400">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            Questions about this page? Reach out through the{" "}
            <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
              waitlist form
            </Link>{" "}
            or start with your{" "}
            <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
              free roadmap
            </Link>
            .
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
