import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">{eyebrow}</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: {updated}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
              <div className="space-y-3 text-slate-400 leading-7">
                {section.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about these policies? Reach out through the{" "}
            <Link to="/about" className="text-[#FF8A00] hover:underline">
              About page
            </Link>{" "}
            or start with your{" "}
            <Link to="/starter" className="text-[#FF8A00] hover:underline">
              free roadmap
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
