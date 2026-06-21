import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Financial, Legal, or Professional Advice",
    body: [
      "The information provided on PEN2PRO — including AI-generated business roadmaps, strategies, credit guidance, funding readiness assessments, sales scripts, and any other platform content — is provided for educational and informational purposes only.",
      "Nothing on PEN2PRO constitutes financial advice, legal advice, investment advice, accounting advice, or professional business consulting. You should consult with a qualified attorney, CPA, financial advisor, or business consultant before making significant business, legal, or financial decisions.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses artificial intelligence (OpenAI) to generate content based on information you provide. AI-generated content may contain errors, outdated information, or recommendations that are not suitable for your specific situation.",
      "PEN2PRO does not warrant that AI outputs are accurate, complete, current, or fit for any particular purpose. All AI outputs should be reviewed critically and verified before acting on them.",
    ],
  },
  {
    title: "No Income Guarantee",
    body: [
      "PEN2PRO does not guarantee that using the platform will result in any specific level of business income, revenue, or profit.",
      "Business success depends on many factors outside our control, including market conditions, individual effort, execution quality, competition, timing, and personal circumstances.",
      "Any income figures, examples, or projections mentioned on the platform or in testimonials are illustrative only and not guarantees of results. Individual results will vary significantly.",
    ],
  },
  {
    title: "No Funding or Credit Approval Guarantee",
    body: [
      "PEN2PRO's credit readiness and funding readiness tools are designed to help you understand and prepare for potential funding or credit applications. They are not a guarantee that you will qualify for any loan, line of credit, grant, investor, or funding opportunity.",
      "Approval decisions are made by lenders, banks, investors, and credit bureaus based on their own criteria. PEN2PRO has no influence over those decisions.",
      "Credit scores, tradeline strategies, and dispute guidance provided through the platform are educational in nature. Credit repair results vary and are not guaranteed.",
    ],
  },
  {
    title: "Third-Party Links and Affiliates",
    body: [
      "PEN2PRO may contain links to third-party websites, services, or affiliate partners. These links are provided for your convenience.",
      "PEN2PRO may earn a commission if you purchase through affiliate links at no extra cost to you. This does not influence our recommendations.",
      "We are not responsible for the content, accuracy, availability, or practices of third-party websites. Use third-party services at your own discretion.",
    ],
  },
  {
    title: "Platform Availability",
    body: [
      "PEN2PRO is provided 'as is' without any warranty of uptime, availability, or uninterrupted service. We may experience downtime, maintenance windows, or technical issues.",
      "PEN2PRO is not liable for any loss of data, business interruption, or damages resulting from platform unavailability.",
    ],
  },
  {
    title: "Testimonials",
    body: [
      "Testimonials and user stories featured on PEN2PRO represent individual experiences. They are not typical results and should not be interpreted as a promise or guarantee that you will achieve similar outcomes.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, PEN2PRO, its founder, employees, and agents are not liable for any direct, indirect, incidental, punitive, or consequential damages arising from your use of the platform or reliance on its content.",
    ],
  },
  {
    title: "Changes to This Disclaimer",
    body: [
      "PEN2PRO reserves the right to update this disclaimer at any time. Continued use of the platform after changes are posted constitutes acceptance of the updated disclaimer.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this disclaimer or the platform, contact us at: legal@pen2pro.com",
      "PEN2PRO — Robert Earl Green Jr., Founder",
    ],
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer — PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black md:text-5xl">Disclaimer</h1>
          <p className="mt-4 text-slate-400">Effective Date: June 15, 2026</p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            PEN2PRO provides education, strategy, and business tools — not professional legal, financial, or credit advice. Please read this disclaimer carefully.
          </p>
        </div>
      </section>

      {/* Key Warning Box */}
      <div className="mx-auto max-w-3xl px-5 pt-10">
        <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-6">
          <p className="font-black text-[#FF8A00] uppercase tracking-wide text-xs mb-2">Important Notice</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            PEN2PRO does not guarantee income, business success, funding approval, credit score improvement, or any specific financial result. The platform provides education, strategy, organization, and readiness tools. Results depend entirely on individual effort and market conditions.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 py-12 space-y-12">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="mb-4 text-xl font-black text-white">{s.title}</h2>
            <div className="space-y-3">
              {s.body.map((line) => (
                <p key={line} className="text-sm text-slate-400 leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-16 text-center">
        <p className="text-slate-400 mb-6">Ready to build something real? Start your free roadmap.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Start Free Roadmap
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
