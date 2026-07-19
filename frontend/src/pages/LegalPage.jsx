import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-3 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-7 text-slate-400 mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-5" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400">
            Questions about these terms? Reach out before you get started, or head back to{" "}
            <Link to="/" className="font-semibold text-[#FF8A00] hover:underline">
              the homepage
            </Link>{" "}
            to start your free roadmap.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
