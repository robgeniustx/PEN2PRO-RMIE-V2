import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, do not use the platform.",
      "We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance.",
    ],
  },
  {
    title: "Description of Service",
    body: [
      "PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that helps users build business roadmaps, strategies, and launch plans.",
      "Features vary by subscription tier: Free, Pro, Elite, and Founders.",
      "We reserve the right to modify, suspend, or discontinue any part of the service at any time.",
    ],
  },
  {
    title: "User Responsibilities",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You may not use PEN2PRO for unlawful purposes, to harass others, or to violate any applicable laws.",
      "You may not attempt to reverse-engineer, scrape, or copy the platform's AI logic, prompts, or outputs at scale.",
      "You are solely responsible for any business decisions made using PEN2PRO outputs.",
    ],
  },
  {
    title: "Payments and Subscriptions",
    body: [
      "Paid subscriptions are processed through Stripe and are subject to Stripe's terms of service.",
      "Subscription fees are charged at the start of each billing period and are non-refundable except as required by law.",
      "You may cancel your subscription at any time. Access continues until the end of the current billing period.",
      "Founders Lifetime is a one-time payment and includes lifetime access to the features available at the time of purchase plus future updates as outlined in the Founders plan description.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "PEN2PRO, the RMIE brand, all platform content, and AI-generated frameworks are the intellectual property of PEN2PRO and Robert Earl Green Jr.",
      "Your business roadmap outputs belong to you. You may use them for your own business purposes.",
      "You may not resell, redistribute, or sublicense PEN2PRO outputs as a competing product or service.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO is provided on an \"as is\" and \"as available\" basis without warranties of any kind.",
      "We do not guarantee that PEN2PRO will be uninterrupted, error-free, or produce specific business outcomes.",
      "In no event shall PEN2PRO be liable for indirect, incidental, or consequential damages arising from your use of the platform.",
      "Our total liability to you shall not exceed the amount paid by you in the 12 months preceding the claim.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas.",
      "Any disputes shall be resolved in the courts of Harris County, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms of Service, email us at support@pen2pro.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            These Terms of Service govern your access to and use of the PEN2PRO platform. Please read them carefully before using the service.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 font-bold text-white text-lg">{s.title}</h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#FF8A00]">→</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Privacy Policy</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
