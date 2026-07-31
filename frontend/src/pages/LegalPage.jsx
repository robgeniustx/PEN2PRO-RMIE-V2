import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-slate-400 leading-7 whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/starter" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
