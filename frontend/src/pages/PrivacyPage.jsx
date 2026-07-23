import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — your name, email, phone number, business idea, and answers you enter into the roadmap builder, Starter, Builder, and Accelerator tools. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap and AI outputs, to communicate with you about your account, waitlist status, and plan upgrades, and to improve PEN2PRO's tools and content. We do not sell your personal information to third parties.",
  },
  {
    title: "AI Processing",
    body: "Roadmap, blueprint, and strategy content you submit may be processed by third-party AI providers to generate your output. We only send the information needed to produce your roadmap and do not use your business idea to train public AI models.",
  },
  {
    title: "Data Storage & Security",
    body: "We take reasonable technical and administrative measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted over the internet.",
  },
  {
    title: "Third-Party Links & Affiliates",
    body: "PEN2PRO links to third-party services (LLC formation, banking, credit, funding, bookkeeping, and other partners) on pages like Affiliate, Funding, and Credit Repair. Those companies have their own privacy policies — PEN2PRO is not responsible for how they handle your data.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information by contacting us. You can unsubscribe from waitlist or marketing emails at any time using the link in those emails.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        <p className="text-slate-400 leading-7">
          This Privacy Policy explains how PEN2PRO ("we," "us," "our") collects, uses, and protects
          information when you use our website, roadmap tools, and RMIE platform.
        </p>

        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 text-sm leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-7">
            Questions about this policy? See our <Link to="/about" className="text-[#FF8A00] hover:underline">About page</Link> or
            reach out through the <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
