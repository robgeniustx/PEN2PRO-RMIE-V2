import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-slate-400">{children}</div>
    </div>
  );
}

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-3xl font-black text-white md:text-4xl mb-3">{title}</h1>
          <p className="text-sm text-slate-500">Last updated {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        {sections.map((s, i) => (
          <Section key={i} title={s.title}>
            {s.body}
          </Section>
        ))}

        <div className="mt-4 rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about this page? Reach out through our{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or{" "}
            <Link to="/about" className="text-[#FF8A00] hover:underline">About page</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
