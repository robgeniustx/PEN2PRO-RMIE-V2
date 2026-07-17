import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect the information you give us directly — name, email, phone number, business idea details, and account credentials — when you join the waitlist, create an account, or use the roadmap builder. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to create and save your business roadmap, communicate with you about your account or waitlist status, improve PEN2PRO's tools and AI output, and send relevant updates about Pro, Elite, or Founders access. We do not sell your personal information.",
  },
  {
    title: "3. Roadmap & Business Data",
    body: "Any business idea, financial detail, or strategy information you enter into the Starter, Builder, or Accelerator tools is stored to generate and save your roadmap. You can request deletion of this data at any time by contacting support.",
  },
  {
    title: "4. Third-Party Services",
    body: "PEN2PRO may link to third-party services for business formation, banking, credit, funding, domains, bookkeeping, payments, CRM, insurance, and marketing tools. Those services have their own privacy policies, and PEN2PRO is not responsible for how they handle your data once you leave our platform.",
  },
  {
    title: "5. Data Security",
    body: "We use reasonable technical and administrative safeguards to protect your data. No system is 100% secure, and PEN2PRO cannot guarantee absolute security of information transmitted to or stored on the platform.",
  },
  {
    title: "6. Your Rights",
    body: "You can request a copy of your data, ask us to correct it, or ask us to delete your account and associated data at any time. Reach out through the account settings or support contact to make a request.",
  },
  {
    title: "7. Changes to This Policy",
    body: "PEN2PRO may update this policy as the platform evolves. Continued use of the platform after changes are posted means you accept the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about your data? See our{" "}
            <Link to="/terms" className="font-semibold" style={{ color: "#FF8A00" }}>Terms of Service</Link>{" "}
            or{" "}
            <Link to="/disclaimer" className="font-semibold" style={{ color: "#FF8A00" }}>Disclaimer</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
