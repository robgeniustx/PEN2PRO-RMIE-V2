import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {updated}</p>
        <div className="space-y-8 text-sm leading-7 text-slate-400 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-2 [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
          {children}
        </div>
        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm text-slate-400">
            Questions about these terms? Reach out before you upgrade —{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">join the waitlist</Link>{" "}
            or <Link to="/pricing" className="text-[#FF8A00] hover:underline">view pricing</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
