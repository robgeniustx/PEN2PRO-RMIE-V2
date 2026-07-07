import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>
        <div className="space-y-6 text-sm leading-7 text-slate-400">{children}</div>
        <div className="mt-12 border-t border-[#1A2D50] pt-8">
          <Link to="/" className="text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
