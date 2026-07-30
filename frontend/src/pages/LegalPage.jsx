import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="mb-3 font-display text-4xl font-black">{title}</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated {updated}</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-2 text-lg font-bold text-white">{section.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="mb-4 text-sm text-slate-400">Questions about these terms? Reach out any time.</p>
            <Link to="/about" className="rounded-xl px-6 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Contact PEN2PRO
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
