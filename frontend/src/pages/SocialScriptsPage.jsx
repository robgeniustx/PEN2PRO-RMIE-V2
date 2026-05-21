import { mockSocialEngine } from "../data/mockSocialCalendar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function SocialScriptsPage() {
  const scripts = mockSocialEngine?.scripts || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-black text-white">Video Scripts</h1>
          <p className="mt-2 text-slate-400 text-sm">Short-form video scripts for Reels, TikTok, and YouTube Shorts — ready to record.</p>
        </div>
        {scripts.length > 0 ? (
          <div className="grid gap-4">
            {scripts.map((s, i) => (
              <div key={i} className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold text-[#D4A017] uppercase tracking-wider mb-3">{s.title || `Script ${i + 1}`}</p>
                <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">{s.script || s.content}</pre>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-4">Generate your Social Engine to create video scripts.</p>
            <Link to="/social" className="btn-gold px-6 py-2.5 text-sm font-bold">Open Social Engine</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
