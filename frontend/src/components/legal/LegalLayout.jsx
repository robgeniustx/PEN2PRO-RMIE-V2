import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Legal</p>
        <h1 className="mb-2 font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated {updated}</p>
        <div className="space-y-8 text-[0.95rem] leading-[1.8] text-slate-300">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
