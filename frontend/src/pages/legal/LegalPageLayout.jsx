import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400">
          {children}
        </div>
        <div className="mt-14 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8">
          <Link to="/" className="btn-outline px-6 py-2 text-xs font-bold">Back Home</Link>
          <Link to="/starter" className="btn-gold px-6 py-2 text-xs font-bold">Start Free Roadmap</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
