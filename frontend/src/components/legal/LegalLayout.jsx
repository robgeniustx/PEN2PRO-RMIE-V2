import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-xs text-slate-600">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-lg font-bold text-white">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
