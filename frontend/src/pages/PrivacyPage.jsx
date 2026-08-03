import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">What We Collect</h2>
            <p>
              When you use PEN2PRO — including the starter roadmap, waitlist, dashboard, and Pro/Elite/Founders
              tools — we collect the information you provide directly, such as your name, email, phone number,
              business idea, and answers to intake questions. We also collect basic usage data (pages visited,
              features used) to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use It</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, respond to
              waitlist and support requests, and communicate updates about PEN2PRO. We do not sell your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may connect to third-party services for payments, AI processing, and affiliate partners
              (LLC formation, business banking, credit, and funding partners). Those providers have their own
              privacy practices, and we recommend reviewing their policies before use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us. You can also unsubscribe from waitlist and marketing emails at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy can be sent through the contact options listed on our{" "}
              <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
