import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO — including the free roadmap tool, waitlist form, Builder, Accelerator, and any Pro, Elite, or Founders features — we may collect the information you provide directly, such as your name, email address, phone number, business idea, and interest level. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, respond to waitlist and support requests, personalize your PEN2PRO experience, process payments for Pro, Elite, and Founders plans, send product updates you've opted into, and improve platform features. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Affiliate & Partner Links",
    body: "PEN2PRO links to third-party services for LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, and insurance. Some of these links are affiliate links, meaning PEN2PRO may earn a commission if you sign up through them at no extra cost to you. We only recommend services we believe add real value. PEN2PRO does not control and is not responsible for the privacy practices of third-party sites.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Your information is stored using reasonable administrative and technical safeguards. No system is 100% secure, and PEN2PRO cannot guarantee absolute security of data transmitted to or from the platform.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also opt out of non-essential communications at any time.",
  },
  {
    title: "6. Children's Privacy",
    body: "PEN2PRO is not directed to individuals under 18. We do not knowingly collect information from minors.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Continued use of the platform after changes means you accept the revised policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. This policy explains how PEN2PRO collects, uses, and protects your information.</p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about your data? Contact us through the platform, or review our{" "}
            <Link to="/terms" className="text-[#FF8A00] font-semibold">Terms of Service</Link> and{" "}
            <Link to="/disclaimer" className="text-[#FF8A00] font-semibold">Disclaimer</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
