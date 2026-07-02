import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 pt-16 pb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated {updated}</p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-lg font-black text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out before you start your roadmap, or{" "}
            <Link to="/about" className="font-semibold text-[#FF8A00] hover:underline">
              learn more about PEN2PRO
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
