import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPageLayout({ title, updated, sections }) {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-16 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-3xl font-black md:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-3 text-sm leading-7 text-slate-400">{p}</p>
              ))}
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              Questions about this policy? Reach out through the{" "}
              <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
                waitlist form
              </Link>{" "}
              or contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#FF8A00] hover:underline">
                support@pen2pro.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
