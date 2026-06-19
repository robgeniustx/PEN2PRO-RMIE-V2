import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. We reserve the right to modify these terms at any time, with changes effective upon posting.",
  },
  {
    title: "Platform Use",
    body: "PEN2PRO provides AI-powered business roadmap generation, strategy tools, credit readiness education, and related resources. The platform is intended for personal and business use by adults 18 and older. You may not use PEN2PRO for any unlawful purpose or in violation of any applicable regulations.",
  },
  {
    title: "User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss resulting from unauthorized use of your account before notification.",
  },
  {
    title: "Subscription Plans and Billing",
    body: "PEN2PRO offers Free, Pro, Elite, and Founders Lifetime tiers. Pro and Elite plans are billed monthly. The Founders Lifetime plan is a one-time payment. All subscriptions auto-renew unless cancelled before the renewal date. Refunds are handled on a case-by-case basis — contact support within 7 days of charge for consideration.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategy output, and recommendations. AI output is for educational and planning purposes only. You are responsible for independently verifying all information before making business, financial, or legal decisions based on AI-generated content.",
  },
  {
    title: "Intellectual Property",
    body: "PEN2PRO and its content — including the RMIE framework, brand, design, and platform features — are owned by PEN2PRO and protected by applicable intellectual property laws. You may not copy, reproduce, or distribute platform content without prior written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for any indirect, incidental, special, or consequential damages arising from use of the platform. Our total liability for any claim shall not exceed the amount you paid us in the 3 months preceding the claim. We make no guarantees about business outcomes, income, funding approval, or credit results.",
  },
  {
    title: "Termination",
    body: "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or conduct harmful to other users or the platform. You may cancel your account at any time through your account settings or by contacting support.",
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of the State of Texas. Any disputes arising from use of PEN2PRO shall be resolved in the courts of Houston, Texas.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            These Terms of Service govern your use of PEN2PRO and the RMIE platform operated by PEN2PRO ("we", "us", "our"). Please read these terms carefully before using the platform.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-2 text-lg font-bold text-white">Questions?</h2>
            <p className="text-sm text-slate-400">
              Contact us at <span className="text-[#FF8A00]">support@pen2pro.com</span> or{" "}
              <Link to="/waitlist" className="text-[#1E88E5] hover:underline">join the waitlist</Link> to reach our team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
