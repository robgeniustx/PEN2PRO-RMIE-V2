import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{section.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#1A2235] pt-10 sm:flex-row">
          <Link to="/" className="btn-gold px-8 py-3 text-center text-sm font-bold">
            Back to Home
          </Link>
          <Link to="/starter" className="btn-outline px-8 py-3 text-center text-sm font-bold">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
