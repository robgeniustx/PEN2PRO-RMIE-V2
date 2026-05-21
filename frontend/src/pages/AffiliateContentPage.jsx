import { mockAffiliateEngine } from "../data/mockAffiliate";
import AffiliateContentCard from "../components/affiliate/AffiliateContentCard";
import DisclosureCard from "../components/affiliate/DisclosureCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AffiliateContentPage() {
  const review = mockAffiliateEngine?.review_post || {};
  const comparison = mockAffiliateEngine?.comparison_post || {};
  const disclosure = mockAffiliateEngine?.disclosure || "";

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12 space-y-6">
        <h1 className="font-display text-3xl font-black text-white">Affiliate Content</h1>
        <p className="text-slate-400 text-sm">Ready-to-publish review posts, comparison content, and disclosure cards for your affiliate promotions.</p>
        <AffiliateContentCard title={review.title} text={review.body} />
        <AffiliateContentCard title={comparison.title} text={comparison.recommendation_guidance} />
        <DisclosureCard disclosure={disclosure} />
      </div>
      <Footer />
    </div>
  );
}
