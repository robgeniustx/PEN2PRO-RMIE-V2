import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-3">{title}</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-3 text-sm leading-7 text-slate-400">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
