import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      "PEN2PRO reserves the right to update these terms at any time. Continued use of the platform after updates constitutes acceptance.",
    ],
  },
  {
    title: "Use of the Platform",
    body: [
      "PEN2PRO is an AI-powered business development platform designed to help users build business roadmaps, strategies, and execution plans.",
      "You may use PEN2PRO for lawful business development purposes only. You may not use the platform to generate fraudulent, harmful, or illegal content.",
      "You are responsible for the accuracy of information you submit. PEN2PRO's AI generates output based on what you provide.",
      "You must be at least 18 years old to create an account and use PEN2PRO.",
    ],
  },
  {
    title: "Subscriptions and Payments",
    body: [
      "Free Roadmap access is available without payment. Pro, Elite, and Founders Lifetime plans require a paid subscription.",
      "Subscription payments are processed securely through Stripe. PEN2PRO does not store your payment card information.",
      "Monthly subscriptions renew automatically until canceled. You may cancel at any time through your account settings.",
      "Founders Lifetime is a one-time payment with no recurring charges.",
      "PEN2PRO reserves the right to change pricing with reasonable notice to existing subscribers.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO platform, brand, and all original content are the intellectual property of PEN2PRO and its founder.",
      "AI-generated roadmaps and plans produced for your specific business idea are provided for your personal business use.",
      "You may not reproduce, resell, or redistribute PEN2PRO's platform, templates, or systems without written permission.",
    ],
  },
  {
    title: "No Guarantee of Results",
    body: [
      "PEN2PRO provides educational tools, AI-generated roadmaps, and business strategy resources. We do not guarantee specific income, business success, funding approval, or credit improvement.",
      "Results depend on individual effort, market conditions, business execution, and many factors outside PEN2PRO's control.",
      "PEN2PRO is not a licensed financial advisor, credit counselor, attorney, or CPA. Platform content does not constitute professional financial, legal, or tax advice.",
    ],
  },
  {
    title: "Affiliate Links",
    body: [
      "PEN2PRO may include affiliate links to third-party products and services. We may earn a commission if you make a purchase through these links at no additional cost to you.",
      "Affiliate relationships do not influence our recommendations. We only recommend tools we believe provide value to our users.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, PEN2PRO and its founder shall not be liable for indirect, incidental, or consequential damages arising from your use of the platform.",
      "PEN2PRO's liability for direct damages shall not exceed the amount you paid for the service in the 12 months preceding the claim.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may delete your account at any time. PEN2PRO may suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
      "Upon termination, your right to access the platform ceases. Data may be retained as required by law or legitimate business purposes.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas. Disputes shall be resolved in courts located in Harris County, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service? Email support@pen2pro.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              Legal
            </div>
            <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
            <p className="mt-3 text-slate-400 text-sm">Last updated: July 1, 2026</p>
          </div>

          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm leading-7 text-slate-400">
              These Terms of Service govern your access to and use of the PEN2PRO platform. Please read them carefully. By using PEN2PRO, you agree to these terms.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 font-display text-xl font-bold text-white">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((line, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>
            <span className="text-slate-700">·</span>
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>
            <span className="text-slate-700">·</span>
            <Link to="/" className="text-slate-500 hover:text-white">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
