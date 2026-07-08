import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPageLayout({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-3xl font-black text-white md:text-4xl mb-3">{title}</h1>
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{section.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
