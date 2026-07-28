import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
  }, [title]);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mb-3 text-sm leading-7 text-slate-400">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="mb-4 text-sm text-slate-400">Questions about this policy? Reach us anytime.</p>
            <a
              href="mailto:support@pen2pro.com"
              className="text-sm font-bold text-[#FF8A00] hover:underline"
            >
              support@pen2pro.com
            </a>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
                Start Free Roadmap
              </Link>
              <Link to="/" className="btn-outline px-6 py-2.5 text-sm font-bold">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
