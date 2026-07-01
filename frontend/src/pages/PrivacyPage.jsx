import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 15, 2026</p>

        <div className="space-y-8 text-slate-400 text-sm leading-7">
          <section>
            <h2 className="text-white font-bold text-lg mb-2">What We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name, email,
              phone number, business idea details, and roadmap intake answers — along with basic usage data
              (pages visited, features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">How We Use It</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, communicate
              updates about Pro, Elite, and Founders access, and improve PEN2PRO RMIE. We do not sell your
              personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Data Storage & Security</h2>
            <p>
              Your data is stored on secured infrastructure. We take reasonable technical and organizational
              measures to protect it, but no online system is 100% secure, and we cannot guarantee absolute
              security of information you submit.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners (LLC formation, business banking, funding,
              credit, and marketing tools). Those partners have their own privacy policies, and PEN2PRO is not
              responsible for how they handle your data once you leave our platform.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting us. You may also opt out of non-essential email communications.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Contact</h2>
            <p>
              Questions about this policy? Reach out through the waitlist form or your account contact email,
              and our team will respond.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
