import { mockAffiliateEngine } from "../data/mockAffiliate";
import ProductCategoryCard from "../components/affiliate/ProductCategoryCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AffiliateProductsPage() {
  const categories = mockAffiliateEngine?.product_categories || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-display text-3xl font-black text-white mb-2">Affiliate Products</h1>
        <p className="text-slate-400 text-sm mb-8">Curated product categories for your affiliate strategy.</p>
        <div className="space-y-4">
          {categories.map((item, i) => (
            <ProductCategoryCard key={i} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
