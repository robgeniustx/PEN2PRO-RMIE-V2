import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPageLayout({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2 md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-sm text-slate-500">Last updated: {updated}</p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-7 mb-3">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
