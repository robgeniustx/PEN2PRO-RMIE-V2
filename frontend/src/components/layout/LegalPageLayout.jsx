import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPageLayout({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 animate-fade-up">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
          Last updated {updated}
        </p>
        <h1 className="font-display mb-10 text-4xl font-black text-white md:text-5xl">
          {title}
        </h1>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-xl font-bold text-white">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-3 text-sm leading-7 text-slate-400">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out before you upgrade — we'd rather you have clarity than surprises.
          </p>
          <Link to="/waitlist" className="mt-4 inline-block rounded-xl px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
            Join the Waitlist
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
