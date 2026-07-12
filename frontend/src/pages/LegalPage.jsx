import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">{eyebrow}</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-xs text-slate-600 mb-10">Last updated: {updated}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{section.heading}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-400">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about this policy? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link>{" "}
            or start with your{" "}
            <Link to="/starter" className="text-[#FF8A00] hover:underline">free roadmap</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
