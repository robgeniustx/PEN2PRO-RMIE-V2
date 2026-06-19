import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "💼",
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee that using the platform will result in income, profit, business success, or any specific financial outcome. Results depend entirely on your effort, execution, market conditions, and many factors outside of our control. Any income examples shared in testimonials or case studies reflect individual results that may not be typical.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO provides credit education, credit readiness checklists, and strategy guidance. PEN2PRO is not a licensed credit repair organization. We do not dispute items on your behalf, and we do not guarantee improvements to your credit score, credit approval, or removal of any derogatory information from your credit report.",
  },
  {
    icon: "🏦",
    title: "No Funding Guarantee",
    body: "PEN2PRO provides funding readiness tools and education to help users understand what lenders look for. We do not guarantee loan approval, SBA approval, grant approval, or any form of financing. Funding decisions are made solely by the lenders, investors, or programs you apply to — not by PEN2PRO.",
  },
  {
    icon: "⚖️",
    title: "Not Legal Advice",
    body: "Nothing on PEN2PRO constitutes legal advice. Information about LLC formation, trademark guidance, or business structure is for educational purposes only. You should consult a licensed attorney for advice specific to your legal situation.",
  },
  {
    icon: "📊",
    title: "Not Financial Advice",
    body: "Information provided on the PEN2PRO platform — including financial projections, revenue models, pricing strategies, and funding readiness scores — is for educational and planning purposes only. It is not investment advice, financial planning advice, or tax advice. Consult a licensed financial professional before making significant financial decisions.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content Limitations",
    body: "PEN2PRO uses artificial intelligence to generate roadmaps, strategies, scripts, and business plans. AI-generated content reflects general patterns and inputs you provide — it is not tailored professional advice. AI can make mistakes. Always review AI-generated content critically and verify important details independently.",
  },
  {
    icon: "🔗",
    title: "Affiliate Links",
    body: "PEN2PRO may contain affiliate links to third-party services such as LLC formation services, business banking partners, bookkeeping platforms, and funding resources. If you click one of these links and make a purchase or sign up, PEN2PRO may receive a commission at no additional cost to you. We only link to services we believe are relevant to our users, but we do not endorse specific outcomes from those third-party services.",
  },
  {
    icon: "📱",
    title: "Third-Party Tools",
    body: "PEN2PRO integrates with third-party tools and services including Stripe, Twilio, ElevenLabs, and others. PEN2PRO is not responsible for the performance, availability, pricing changes, or policy changes of any third-party service.",
  },
  {
    icon: "🔄",
    title: "Platform Changes",
    body: "PEN2PRO reserves the right to change, update, or discontinue features, pricing, or the platform itself at any time. While we honor commitments to Founders-tier lifetime members, we reserve the right to adjust what specific features are included over time with reasonable notice.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] py-16 px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-4">
          Disclaimer
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          PEN2PRO is a business strategy and education platform. We believe in transparency — here's exactly what we do and do not promise.
        </p>
      </section>

      {/* Important Notice */}
      <section className="mx-auto max-w-3xl px-5 pt-12">
        <div
          className="rounded-2xl border p-8"
          style={{ borderColor: "rgba(255,138,0,0.3)", background: "rgba(255,138,0,0.06)" }}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
            Important Notice
          </p>
          <p className="text-white font-semibold leading-7">
            PEN2PRO does not guarantee income, credit score improvements, loan approvals, business success, or any specific outcome. This platform provides education, strategy tools, organization, and AI-generated guidance. What you do with that guidance determines your results.
          </p>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="space-y-6">
          {DISCLAIMERS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1A2D50] p-6"
              style={{ background: "#0F1520" }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="text-base font-black text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-7 text-sm">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Disclaimer */}
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="rounded-2xl border border-[#1A2D50] p-8 text-center" style={{ background: "#0F1520" }}>
          <p className="text-slate-500 text-sm leading-7">
            By using PEN2PRO, you acknowledge that you have read, understood, and agreed to this disclaimer, our{" "}
            <Link to="/terms" className="hover:text-white underline" style={{ color: "#FF8A00" }}>Terms of Service</Link>, and our{" "}
            <Link to="/privacy" className="hover:text-white underline" style={{ color: "#FF8A00" }}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] py-14 px-5 text-center">
        <p className="text-slate-500 text-sm mb-2 font-semibold">Ready to build with clear expectations?</p>
        <p className="text-slate-600 text-xs mb-8">The roadmap is free. The strategy is real. The results are yours to earn.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">
            Our Story
          </Link>
          <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Start My Free Roadmap
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
