import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMER_BLOCKS = [
  {
    icon: "📊",
    title: "No Income Guarantee",
    color: "#FF8A00",
    body: "PEN2PRO provides business roadmaps, strategy frameworks, and AI-generated plans as educational and organizational tools. We do not guarantee any level of income, revenue, or profit. Business outcomes depend entirely on individual effort, market conditions, execution quality, and factors completely outside our control.",
  },
  {
    icon: "💳",
    title: "No Funding or Loan Guarantee",
    color: "#1E88E5",
    body: "PEN2PRO's funding readiness tools and checklists help you understand what lenders and investors typically look for. Using these tools does not guarantee approval for any loan, line of credit, grant, or investment. All lending and funding decisions are made by third-party institutions, not PEN2PRO.",
  },
  {
    icon: "📈",
    title: "No Credit Repair Guarantee",
    color: "#10B981",
    body: "PEN2PRO is not a credit repair organization under the Credit Repair Organizations Act (CROA). We provide credit education, strategy frameworks, and dispute readiness information. We cannot guarantee any improvement in your credit score, removal of negative items, or specific credit outcomes.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    color: "#8B5CF6",
    body: "Nothing on PEN2PRO constitutes legal advice, financial advice, tax advice, or accounting advice. AI-generated roadmaps and strategies are for planning purposes only. Before making significant business, legal, or financial decisions, consult a licensed attorney, CPA, or financial advisor.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    color: "#D4A017",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content may contain inaccuracies, outdated information, or suggestions that are not appropriate for your specific situation. Always apply your own judgment and seek professional verification for important decisions.",
  },
  {
    icon: "🔗",
    title: "Third-Party Links and Partners",
    color: "#FF8A00",
    body: "PEN2PRO may include links to third-party websites, services, and tools as part of our affiliate and partner program. We do not endorse, control, or take responsibility for the content, products, or services of any third-party site. Clicking affiliate links may result in PEN2PRO receiving a commission at no additional cost to you.",
  },
  {
    icon: "📋",
    title: "Results Are Not Typical",
    color: "#1E88E5",
    body: "Any results, testimonials, or case studies referenced on PEN2PRO represent individual experiences and are not typical. Most people who follow business advice — from any source — do not achieve dramatic results without sustained effort, the right market conditions, adequate capital, and consistent execution over time.",
  },
  {
    icon: "🔄",
    title: "Platform Changes",
    color: "#10B981",
    body: "PEN2PRO is an actively developing platform. Features, pricing, availability, and capabilities may change without notice. We are not liable for any business decisions made based on features or functionality that are modified, removed, or temporarily unavailable.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-[50%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Disclaimer</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            PEN2PRO provides tools, frameworks, and AI-powered strategy — not guarantees. Read this before making any business, financial, or legal decisions.
          </p>
        </div>
      </section>

      {/* Important Banner */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[rgba(255,138,0,0.4)] bg-[rgba(255,138,0,0.08)] p-6">
            <div className="flex gap-4">
              <span className="text-2xl shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-[#FF8A00] mb-2">Important Notice</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  PEN2PRO is an AI-powered business planning and education platform. We are not a licensed financial advisor, credit repair organization, law firm, or lender. All content on this platform is provided for educational and organizational purposes only. Your results will depend on your individual effort, market conditions, and execution — not on using our tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Blocks */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl grid gap-5 md:grid-cols-2">
          {DISCLAIMER_BLOCKS.map((block) => (
            <div key={block.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{block.icon}</span>
                <h2 className="font-black text-white">{block.title}</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Disclaimer Text */}
      <section className="px-5 py-12 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <h2 className="mb-4 font-black text-white text-lg">Full Legal Disclaimer</h2>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                PEN2PRO and its operators make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the platform, its content, AI-generated materials, or related tools for any purpose.
              </p>
              <p>
                Any reliance you place on information generated by PEN2PRO is strictly at your own risk. In no event will PEN2PRO, its founders, employees, or partners be liable for any loss or damage arising from use of or reliance on this platform, including but not limited to indirect or consequential loss or damage, or any loss or damage arising from loss of data or profits.
              </p>
              <p>
                Through PEN2PRO, you may access links to third-party websites and services. These links are provided for your convenience. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views or services expressed within them.
              </p>
              <p>
                PEN2PRO reserves the right to modify, suspend, or discontinue any aspect of the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the service.
              </p>
              <p className="text-slate-500">
                Last updated: June 2026. For questions, contact support@pen2pro.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-3 font-black text-xl">Ready to Build Something Real?</h2>
          <p className="mb-6 text-slate-400">
            PEN2PRO gives you tools, structure, and strategy. The effort is yours.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
