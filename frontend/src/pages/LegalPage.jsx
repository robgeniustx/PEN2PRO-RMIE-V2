import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ eyebrow, title, updated, sections, ctaText = "Start Your Free Roadmap", ctaPath = "/starter" }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>{eyebrow}</p>
        <h1 className="font-display mt-3 text-3xl font-black text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-lg font-black text-white">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-3 text-sm leading-7 text-slate-400">{p}</p>
              ))}
              {section.list && (
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-400">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border p-8 text-center" style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}>
          <p className="mb-4 text-slate-300">Ready to build your roadmap?</p>
          <Link to={ctaPath} className="btn-gold inline-block px-8 py-3 text-sm font-black">
            {ctaText}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
