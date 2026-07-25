import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you use PEN2PRO — creating a free roadmap, joining the waitlist, signing in, or upgrading — we collect information you give us directly: name, email, phone (optional), business idea details, and interest level. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your roadmap and blueprint, respond to waitlist and account requests, send updates about your plan or PEN2PRO launch milestones, improve the AI recommendations you receive, and maintain basic platform security and abuse prevention. We do not sell your personal information.",
  },
  {
    title: "AI Processing",
    body: "Roadmap and blueprint content is generated using AI models based on the business details you submit. Your inputs may be processed by our AI provider(s) to generate output, but they are not used to publicly identify you or shared with unrelated third parties for marketing purposes.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO uses trusted third-party providers for essential functions — such as payment processing (Stripe) and hosting/infrastructure. Affiliate links to third-party services (LLC formation, banking, funding, credit tools, etc.) are provided for your convenience; PEN2PRO is not responsible for those providers' privacy practices, and you should review their own privacy policies before using them.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain your account, roadmap, and waitlist data for as long as reasonably needed to provide the service or as required by law. We use standard technical and administrative safeguards to protect your information, but no system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from the platform.",
  },
  {
    title: "Your Choices",
    body: "You can request an update, export, or deletion of your personal information at any time by reaching out through the About page. If you joined the waitlist and no longer want to be contacted, you can request removal at any time.",
  },
  {
    title: "Admin & Internal Access",
    body: "Waitlist submissions and platform metrics are visible only to authorized PEN2PRO administrators through a protected admin dashboard, gated by an access key. We do not publicly display individual user or waitlist data.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
      </div>

      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#2d9cff] uppercase tracking-widest">
            🔒 Your Data
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-slate-400 leading-relaxed">
            This page explains what information PEN2PRO collects, how it's used, and the choices you have. We built PEN2PRO
            for people who've had enough doors closed on them — protecting your information is part of that promise.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-600">
            Last updated: 2026. Questions about this policy? Reach out through the{" "}
            <Link to="/about" className="text-[#2d9cff] hover:underline">About</Link> page.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Terms
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
