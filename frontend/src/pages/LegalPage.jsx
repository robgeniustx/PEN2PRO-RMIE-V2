import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            {eyebrow}
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold text-white">{section.heading}</h2>
                <div className="space-y-3 text-[0.98rem] leading-[1.8] text-slate-300">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold text-center">
              Back to Home
            </Link>
            <Link to="/waitlist" className="rounded-xl px-6 py-3 text-sm font-semibold btn-outline text-center">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
