import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "⚖️",
    title: "Not Legal Advice",
    body: "PEN2PRO does not provide legal advice. Information about LLC formation, business entity structure, trademarks, operating agreements, or any other legal matter is for educational purposes only. Always consult a licensed attorney before making legal decisions for your business.",
  },
  {
    icon: "💰",
    title: "Not Financial or Investment Advice",
    body: "Nothing on PEN2PRO constitutes financial advice, investment advice, or professional financial planning. Revenue projections, financial models, and income estimates are illustrative and hypothetical. Past performance of any business concept does not guarantee future results. Consult a licensed financial advisor for personalized financial guidance.",
  },
  {
    icon: "🏦",
    title: "No Guarantee of Funding or Credit Approval",
    body: "PEN2PRO provides funding readiness tools and credit strategy education. We do not guarantee approval for any loan, line of credit, business credit card, grant, or funding product. Approval decisions are made solely by lenders and financial institutions. Credit improvement strategies are educational and results vary significantly by individual.",
  },
  {
    icon: "📊",
    title: "No Guarantee of Business Results or Income",
    body: "PEN2PRO does not guarantee that using our platform will result in business success, income generation, or profit. Business outcomes depend on individual effort, market conditions, execution quality, economic factors, and many variables outside our control. Success stories and testimonials on this platform represent individual experiences and are not typical results.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content Disclaimer",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content may contain inaccuracies, outdated information, or advice that does not apply to your specific situation, industry, or jurisdiction. Always verify important information with qualified professionals before taking action.",
  },
  {
    icon: "🔗",
    title: "Third-Party Affiliate Links",
    body: "PEN2PRO's affiliate and resource pages may contain links to third-party products and services. We may receive compensation if you purchase through these links. This does not affect the price you pay. We only recommend tools and services we believe are genuinely useful, but we make no warranties about third-party products, services, or websites. Use third-party services at your own risk.",
  },
  {
    icon: "📋",
    title: "Educational Platform Disclaimer",
    body: "PEN2PRO is an educational platform. The roadmaps, strategies, checklists, and resources we provide are educational tools designed to help you think through business decisions — not professional services. Business consulting, accounting, legal representation, and licensed financial advisory services are not included in any PEN2PRO subscription.",
  },
  {
    icon: "🏦",
    title: "Credit Repair Disclaimer",
    body: "PEN2PRO does not provide credit repair services. We provide educational content about credit strategy, credit utilization, dispute readiness, and business credit foundation. We are not a licensed credit repair organization under the Credit Repair Organizations Act (CROA). Results from credit strategy implementation vary and are not guaranteed.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              PEN2PRO is an educational platform. We want you to understand exactly what PEN2PRO is and is not,
              so you can use the platform effectively and make informed decisions for your business.
            </p>
          </div>

          {/* Alert banner */}
          <div className="mb-10 rounded-2xl border border-yellow-500/30 bg-yellow-900/10 p-5">
            <p className="text-sm leading-7 text-yellow-200/80">
              <strong className="text-yellow-400">Important:</strong> PEN2PRO does not guarantee credit repair results,
              funding approval, loan approval, or business success. The platform provides education, strategy,
              organization, and readiness tools — not professional legal, financial, or advisory services.
              Always consult qualified professionals before making major business or financial decisions.
            </p>
          </div>

          <div className="space-y-6">
            {DISCLAIMERS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h2 className="text-lg font-black text-white">{item.title}</h2>
                </div>
                <p className="text-sm leading-7 text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-black text-white">Questions?</h2>
            <p className="text-sm leading-7 text-slate-400">
              If you have questions about these disclaimers or how PEN2PRO can help your specific situation,
              contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold" style={{ color: "#D4A017" }}>
                support@pen2pro.com
              </a>
              . PEN2PRO is operated by Robert Green / XLR8 Enterprises, Houston, TX.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Privacy Policy →
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
