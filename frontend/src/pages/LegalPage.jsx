import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">{title}</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: {updated}</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-white mb-2">{section.heading}</h2>
              <p className="text-slate-400 leading-relaxed whitespace-pre-line">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
