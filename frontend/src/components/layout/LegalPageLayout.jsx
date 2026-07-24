import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">PEN2PRO</p>
          <h1 className="font-display text-3xl font-black text-white md:text-4xl mb-2">{title}</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>
          <div className="space-y-8 text-sm leading-7 text-slate-400">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-bold text-white">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
