import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPageLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-3">{title}</h1>
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14">
        <div className="space-y-8 text-slate-300 leading-7">{children}</div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] p-8 text-center" style={{ background: "#0F1520" }}>
          <p className="text-slate-400 mb-5">Questions about these terms? Ready to start your free roadmap instead?</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold">Start Free Roadmap</Link>
            <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold">Back to Home</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
