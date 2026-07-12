import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  useEffect(() => {
    document.title = `${title} | PEN2PRO`;
    return () => {
      document.title = "PEN2PRO — Turn Your Idea Into Income";
    };
  }, [title]);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-400">PEN2PRO</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-white">{section.heading}</h2>
              <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-400">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-400">
          Questions about these terms? Reach out before you start a roadmap, or read more about the platform on the{" "}
          <Link to="/about" className="font-semibold text-orange-400 hover:text-orange-300">
            About page
          </Link>
          .
        </div>
      </main>

      <Footer />
    </div>
  );
}
