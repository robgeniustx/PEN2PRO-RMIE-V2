import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">{eyebrow}</p>
        <h1 className="font-display text-3xl font-black text-white md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white md:text-xl">{s.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400 md:text-base">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out any time — we're building PEN2PRO for real people, not just paperwork.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/about" className="btn-outline px-5 py-2.5 text-sm font-bold">
              About PEN2PRO
            </Link>
            <Link to="/starter" className="btn-gold px-5 py-2.5 text-sm font-bold">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
