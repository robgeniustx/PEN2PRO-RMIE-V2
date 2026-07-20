import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO does not guarantee income, business success, funding approval, loan approval,
            or credit repair results. Every roadmap, strategy, and recommendation is generated to
            help you plan and execute — the outcome depends on your market, effort, resources, and
            circumstances.
          </p>
          <p>
            PEN2PRO is not a law firm, credit repair organization, lender, or licensed financial
            advisor. The platform provides education, strategy, organization, and readiness tools
            to help you prepare for those conversations with qualified professionals.
          </p>
          <p>
            Affiliate links to third-party services (LLC formation, business banking, funding
            partners, credit tools, and similar) may earn PEN2PRO a referral commission at no extra
            cost to you. We only recommend partners we believe add real value.
          </p>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
