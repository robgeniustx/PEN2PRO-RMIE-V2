import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
            collect when you use the PEN2PRO RMIE platform, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly — such as your name, email, phone number, and
              business idea details — when you build a roadmap, join the waitlist, create an account, or
              contact us. We also collect basic usage data (pages visited, features used, referral source)
              to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Information</h2>
            <p>
              We use your information to generate your business roadmap, operate your account, respond to
              inquiries, improve PEN2PRO, and — if you opt in — send updates about Pro, Elite, Founders
              access, and relevant resources. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may use trusted third-party services for payment processing, analytics, and
              affiliate partnerships (LLC formation, business banking, credit, and funding partners).
              Those providers have their own privacy policies governing the data you share with them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at any
              time by contacting us. You may also unsubscribe from marketing emails using the link in any
              message we send.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy? Reach out through the{" "}
              <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your
              account contact channel.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
