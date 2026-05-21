import { mockAffiliateEngine } from "../data/mockAffiliate";
import AffiliateFunnelCard from "../components/affiliate/AffiliateFunnelCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AffiliateFunnelPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12 space-y-6">
        <h1 className="font-display text-3xl font-black text-white">Affiliate Funnel</h1>
        <p className="text-slate-400 text-sm">Your complete affiliate conversion funnel — from awareness to purchase.</p>
        <AffiliateFunnelCard funnel={mockAffiliateEngine?.funnel} />
      </div>
      <Footer />
    </div>
  );
}
