import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalLayout({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-3xl font-black text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{section.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
