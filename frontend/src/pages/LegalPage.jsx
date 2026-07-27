import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTION_STYLE = "text-sm leading-7 text-slate-400";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Last updated: {updated}
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-[#FF8A00]">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className={`${SECTION_STYLE} mb-3`}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
