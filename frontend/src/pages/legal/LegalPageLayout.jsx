import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="mt-10 space-y-6 text-sm leading-7 text-slate-400">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
