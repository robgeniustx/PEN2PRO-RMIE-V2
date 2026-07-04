import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LegalPage({ title, updated, sections }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">
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

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5">
          <p className="text-sm text-slate-400">
            Questions about these policies?{" "}
            <Link to="/about" className="font-semibold text-[#FF8A00] hover:underline">
              Contact the PEN2PRO team
            </Link>{" "}
            or return to the{" "}
            <Link to="/" className="font-semibold text-[#FF8A00] hover:underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
