import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">Disclaimer</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO is an education, strategy, and organization platform. It is not a law firm, credit
            repair organization, financial institution, or licensed financial advisor, and nothing on this
            platform constitutes legal, tax, credit repair, or investment advice.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guaranteed Outcomes</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair results. Every roadmap, checklist, and strategy is a tool to help you organize
              and execute — actual outcomes depend on your effort, market conditions, and factors outside
              our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Credit &amp; Funding Content</h2>
            <p>
              Content on the{" "}
              <a href="/funding" className="text-[#FF8A00] hover:underline">Funding Readiness</a> and{" "}
              <a href="/credit-repair" className="text-[#FF8A00] hover:underline">Credit Readiness</a>{" "}
              pages is educational. It does not replace advice from a licensed financial professional, and
              PEN2PRO does not perform credit disputes or guarantee any change to your credit profile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Relationships</h2>
            <p>
              PEN2PRO may earn a commission through affiliate partners referenced on the{" "}
              <a href="/affiliate" className="text-[#FF8A00] hover:underline">Affiliate</a> page (LLC
              formation, business banking, business credit, funding, and related services). We only
              recommend services we believe are useful to founders — always do your own due diligence
              before signing up.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">AI-Generated Content</h2>
            <p>
              Roadmaps and strategy output are generated with AI assistance and reviewed for quality, but
              may contain errors or generic recommendations. Use your own judgment and consult a qualified
              professional before making major legal, financial, or business decisions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
