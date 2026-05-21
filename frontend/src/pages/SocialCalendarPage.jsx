import SocialCalendar from "../components/social/SocialCalendar";
import { mockSocialEngine } from "../data/mockSocialCalendar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function SocialCalendarPage() {
  const calendar = mockSocialEngine?.calendar7 || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-black text-white">Social Calendar</h1>
          <p className="mt-2 text-slate-400 text-sm">Your 7-day content posting schedule across all platforms.</p>
        </div>
        {calendar.length > 0 ? (
          <SocialCalendar calendar={calendar} />
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-4">Generate your Social Engine to create a posting calendar.</p>
            <Link to="/social" className="btn-gold px-6 py-2.5 text-sm font-bold">Open Social Engine</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
