import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPage({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>
        <div className="space-y-6 text-slate-400 text-sm leading-7">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
