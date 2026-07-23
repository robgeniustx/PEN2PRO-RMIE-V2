import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-16 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-3xl font-black md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated {updated}</p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 font-display text-xl font-bold text-white">{s.heading}</h2>
              <div className="space-y-3 text-[0.95rem] leading-7 text-slate-400">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              Questions about this page? Contact us before joining the{" "}
              <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
                waitlist
              </Link>{" "}
              or explore{" "}
              <Link to="/pricing" className="font-semibold text-[#FF8A00] hover:underline">
                pricing
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
