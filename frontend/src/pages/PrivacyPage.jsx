import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you use PEN2PRO's free roadmap tool, join the waitlist, create an account, or upgrade to Pro, Elite, or Founders, we collect the information you give us directly — name, email, phone (optional), business idea details, and payment information processed by our billing provider. We also collect basic usage data (pages visited, features used) to improve the product.",
  },
  {
    title: "How We Use It",
    body: "We use your information to generate your business roadmap, save your progress, process upgrades and billing, respond to support requests, and — if you opt in — send updates about PEN2PRO features, launch dates, and relevant offers. We do not sell your personal information to third parties.",
  },
  {
    title: "Payment Data",
    body: "Subscription payments for Pro, Elite, and Founders plans are processed by Stripe. PEN2PRO does not store your full card number on our servers — Stripe handles that under its own PCI-compliant security standards.",
  },
  {
    title: "Third-Party Affiliate Links",
    body: "Pages like Funding, Credit Repair, and Affiliate may link out to third-party services (LLC formation, business banking, credit monitoring, funding partners). Those companies have their own privacy policies. PEN2PRO is not responsible for how third-party sites handle your data once you leave our platform.",
  },
  {
    title: "Data Storage & Security",
    body: "We take reasonable technical and administrative measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted to or stored on our platform.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected with an updated date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-10">Last updated: 2026. This policy explains what PEN2PRO collects and how it's used.</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Disclaimer</Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Free Roadmap</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
