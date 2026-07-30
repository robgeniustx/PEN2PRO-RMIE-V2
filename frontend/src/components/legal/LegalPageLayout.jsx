import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-3 md:text-4xl">{title}</h1>
        {updated && <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>}
        <div className="space-y-6 text-slate-300 leading-7">{children}</div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[#1A2D50] pt-8 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/waitlist" className="btn-gold px-6 py-3 text-sm font-bold text-center">
            Join the Waitlist
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
