import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-6 font-display text-4xl font-black leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: January 2026</p>

          <div className="space-y-8 text-[1.02rem] leading-[1.85] text-slate-300">
            <p>
              PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
              collect when you use the PEN2PRO platform — including the free roadmap tool, waitlist,
              Pro/Elite/Founders plans, and related pages — and how we use it.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Information We Collect</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li>Account details: name, email, and password when you sign up or sign in.</li>
                <li>Waitlist submissions: name, email, optional phone, business idea, and interest level.</li>
                <li>Roadmap intake: the business idea, goals, and answers you provide to generate your plan.</li>
                <li>Referral source: the page you came from and any <code>?ref=</code> affiliate parameter.</li>
                <li>Basic usage data (pages visited, features used) to improve the product.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li>To generate your business roadmap and account experience.</li>
                <li>To notify you about launch dates, Pro/Elite/Founders access, and relevant updates.</li>
                <li>To improve PEN2PRO's tools, content, and AI outputs.</li>
                <li>To track which affiliate or referral partner sent you, for partner attribution only.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. We do not share your roadmap content with third
                parties outside of the service providers (such as our AI and hosting providers) required to
                operate PEN2PRO.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Data Storage &amp; Security</h2>
              <p>
                We use reasonable technical and administrative safeguards to protect your data. No system is
                100% secure, and we cannot guarantee absolute security of information transmitted to the
                platform.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Your Choices</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li>You can request a copy or deletion of your data at any time.</li>
                <li>You can unsubscribe from waitlist/marketing emails at any time.</li>
                <li>You can stop using the platform at any time without penalty.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
              <p>
                Questions about this policy? Reach out through the{" "}
                <Link to="/waitlist" className="text-[#1E88E5] hover:underline">waitlist form</Link>{" "}
                or your account contact and we'll respond as soon as possible.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
