import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPage({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">
            Legal
          </p>
          <h1 className="mb-2 font-display text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="space-y-6 text-sm leading-7 text-slate-300">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
