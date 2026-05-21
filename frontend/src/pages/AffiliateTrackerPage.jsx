import AffiliateTracker from "../components/affiliate/AffiliateTracker";
import { mockAffiliateEngine } from "../data/mockAffiliate";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AffiliateTrackerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-display text-3xl font-black text-white mb-2">Affiliate Link Tracker</h1>
        <p className="text-slate-400 text-sm mb-8">Track clicks, conversions, and performance for all affiliate links.</p>
        <AffiliateTracker links={mockAffiliateEngine?.link_tracker} />
      </div>
      <Footer />
    </div>
  );
}
