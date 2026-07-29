import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">{title}</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{section.heading}</h2>
              <p className="text-slate-400 leading-7">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about these terms? Reach out any time, or{" "}
            <Link to="/waitlist" className="font-semibold" style={{ color: "#FF8A00" }}>
              join the waitlist
            </Link>{" "}
            to stay updated on PEN2PRO's launch.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
