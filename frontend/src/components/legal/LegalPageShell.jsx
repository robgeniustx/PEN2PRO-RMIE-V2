import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPageShell({ title, updated, sections }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">PEN2PRO</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400 whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
