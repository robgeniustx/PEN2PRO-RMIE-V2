import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7 whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] p-5" style={{ background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about these terms? Reach out from your{" "}
            <Link to="/dashboard" className="text-[#FF8A00] font-semibold hover:underline">dashboard</Link>{" "}
            or start with a{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">free roadmap</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
