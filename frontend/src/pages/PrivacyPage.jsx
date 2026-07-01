import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 space-y-10 text-slate-300 leading-7">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
          <p>
            When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone
            number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features
            used) to improve the platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
          <p>
            We use your information to generate your business roadmap, operate your account, communicate with you
            about your plan or waitlist status, and improve PEN2PRO's AI recommendations. We do not sell your
            personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Data Storage &amp; Security</h2>
          <p>
            Your account and roadmap data are stored on secure infrastructure. We take reasonable technical and
            organizational measures to protect your information, but no system is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
          <p>
            PEN2PRO may link to third-party partners for services like LLC formation, business banking, credit
            monitoring, or funding. Those companies have their own privacy policies, and PEN2PRO is not responsible
            for how they handle your data once you leave our platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any time by
            contacting us. You may also unsubscribe from marketing emails using the link included in those emails.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account
            support channel.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
