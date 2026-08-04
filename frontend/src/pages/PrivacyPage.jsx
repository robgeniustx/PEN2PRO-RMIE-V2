import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") operates the PEN2PRO RMIE (Rapid Monetization
            Intelligence Engine) platform. This Privacy Policy explains what information we
            collect, how we use it, and the choices you have.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Account information you provide, such as name, email, and password.</li>
              <li>Business roadmap and intake data you submit to generate your blueprint.</li>
              <li>Waitlist submissions, including name, email, phone (optional), business idea, and interest level.</li>
              <li>Usage data such as pages visited, features used, and general device/browser information.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To generate and improve your business roadmap and platform experience.</li>
              <li>To communicate with you about your account, roadmap, or waitlist status.</li>
              <li>To operate, secure, and improve the PEN2PRO platform.</li>
              <li>To send updates about Pro, Elite, and Founders access if you opt in.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">How We Protect Your Information</h2>
            <p>
              We use reasonable administrative and technical safeguards to protect your data.
              No system is 100% secure, and we cannot guarantee absolute security of information
              transmitted to the platform.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with service
              providers who help us operate the platform (such as hosting, payment processing,
              and analytics), and affiliate partners you explicitly choose to engage with through
              the Affiliate page.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information
              by contacting us. You may unsubscribe from marketing emails at any time.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about this Privacy Policy can be sent through the contact options
              available on the PEN2PRO platform.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-center text-sm font-bold">
            Start Your Free Roadmap
          </Link>
          <Link to="/" className="btn-outline px-8 py-3 text-center text-sm font-bold">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
