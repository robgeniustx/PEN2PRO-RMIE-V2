import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPageLayout({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{section.heading}</h2>
              <p className="text-sm leading-7 text-slate-400 whitespace-pre-line">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5">
          <p className="text-xs text-slate-500">
            Questions about these terms? Reach out any time, or{" "}
            <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
              join the waitlist
            </Link>{" "}
            to stay updated as PEN2PRO launches.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
