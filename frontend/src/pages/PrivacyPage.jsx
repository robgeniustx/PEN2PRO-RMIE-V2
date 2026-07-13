import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. What We Collect",
    body: "When you use PEN2PRO — creating a roadmap, joining the waitlist, signing in, or reaching out for support — we collect the information you give us directly: your name, email, phone number (optional), business idea details, and any content you enter into the roadmap builder, Builder, or Accelerator tools. We also collect basic usage data (pages visited, features used, device/browser type) to keep the platform working and improve it.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your roadmap and AI-powered recommendations, manage your account and tier access (Free, Pro, Elite, Founders), respond to support requests, send you updates about your roadmap or the platform, and improve PEN2PRO's tools and content. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Affiliate & Partner Links",
    body: "Pages like Funding, Credit Repair, and Affiliate contain links to third-party services (LLC formation, business banking, business credit, funding partners, and similar tools). PEN2PRO may earn a commission if you use these links. Clicking a partner link takes you to that company's own site, which has its own privacy policy — we don't control or receive data from what you do there beyond standard referral tracking.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Your account and roadmap data is stored on secured infrastructure. We use reasonable technical and administrative safeguards to protect your information, but no system is 100% secure, and we can't guarantee absolute security of data transmitted to or from the platform.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. If you joined the waitlist or created a roadmap and want your data removed, reach out and we'll process the request.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "PEN2PRO may use cookies or similar technologies to keep you signed in, remember preferences, and understand how the platform is used. You can control cookies through your browser settings.",
  },
  {
    title: "7. Changes to This Policy",
    body: "As PEN2PRO grows, this policy may be updated. Material changes will be reflected on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-14 text-slate-400">
            How PEN2PRO collects, uses, and protects your information.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#1A2D50] pt-8 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Disclaimer
            </Link>
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
