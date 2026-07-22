import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${API}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Intentionally silent — always show the same confirmation
      // regardless of backend availability or whether the email exists.
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
              P2P
            </div>
            <h1 className="font-display text-3xl font-bold text-white">Reset your password</h1>
            <p className="mt-2 text-sm text-slate-400">
              Enter the email on your account and we'll send you a reset link.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
            {submitted ? (
              <div className="text-center">
                <p className="text-sm text-slate-300">
                  If an account exists for <span className="font-semibold text-white">{email}</span>, a reset
                  link is on its way. Check your inbox in a few minutes.
                </p>
                <Link to="/login" className="mt-6 inline-block text-sm font-semibold" style={{ color: "#D4A017" }}>
                  Back to Sign In
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  Remembered it?{" "}
                  <Link to="/login" className="font-semibold" style={{ color: "#D4A017" }}>
                    Sign in instead
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
