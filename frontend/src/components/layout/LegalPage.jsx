import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
  }, [title]);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 font-display text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-xl font-bold text-white">{s.heading}</h2>
                <p className="text-[1.02rem] leading-relaxed text-slate-400 whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
