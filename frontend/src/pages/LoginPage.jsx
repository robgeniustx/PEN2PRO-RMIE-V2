import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_FEATURES = [
  {
    icon: "🚀",
    tier: "Free Roadmap",
    color: "#D4A017",
    desc: "7-day launch plan, business snapshot, name ideas, pricing structure, and sales scripts — no credit card needed.",
  },
  {
    icon: "⚡",
    tier: "Pro",
    color: "#1E88E5",
    desc: "Full roadmap, progress tracking, branding support, AI refinement, credit & funding readiness checklist.",
  },
  {
    icon: "🏆",
    tier: "Elite",
    color: "#7C3AED",
    desc: "Advanced strategy, financial projections, legal-foundation guidance, vendor introductions, and priority support.",
  },
  {
    icon: "👑",
    tier: "Legacy Founder",
    color: "#FF8A00",
    desc: "Lifetime access, founder recognition, early-adopter positioning, and full platform access at launch.",
  },
];

const TRUST_POINTS = [
  "No credit card for free roadmap",
  "Built by a real founder — not a VC startup",
  "Designed for second-chance builders",
  "Veteran-founded platform",
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: loginForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (registerForm.password !== registerForm.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (registerForm.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: registerForm.name, email: registerForm.email, password: registerForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: registerForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgot(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await fetch(`${API}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      setForgotSent(true);
    } catch {
      setForgotSent(true); // show success regardless to prevent email enumeration
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">

          {/* ── Left: Auth Panel ── */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:sticky lg:top-28">

            {/* Brand + Headline */}
            <div className="mb-8 text-center">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)", boxShadow: "0 0 24px rgba(212,160,23,0.35)" }}
              >
                P2P
              </div>
              <h1 className="font-display text-2xl font-black text-white leading-tight">
                Build your business roadmap.<br />
                <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
                Upgrade when ready.
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap — free, no card needed"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              {!showForgot && (
                <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                  <button
                    onClick={() => { setTab("login"); setError(""); }}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setTab("register"); setError(""); }}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === "register" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Create Account
                  </button>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Forgot Password */}
              {showForgot && (
                <div>
                  <button
                    onClick={() => { setShowForgot(false); setForgotSent(false); setError(""); }}
                    className="mb-5 flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back to Sign In
                  </button>
                  <h2 className="font-display text-xl font-bold text-white mb-1">Reset your password</h2>
                  <p className="mb-6 text-sm text-slate-500">Enter your email and we'll send a reset link.</p>
                  {forgotSent ? (
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-400">
                      ✓ If that email is registered, a reset link is on its way.
                    </div>
                  ) : (
                    <form onSubmit={handleForgot} className="space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                        <input
                          type="email"
                          required
                          value={forgotEmail}
                          onChange={e => setForgotEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                        />
                      </div>
                      <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                        {loading ? "Sending..." : "Send Reset Link"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Login Form */}
              {!showForgot && tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={() => { setShowForgot(true); setError(""); }}
                        className="text-xs font-medium transition-colors hover:text-white"
                        style={{ color: "#D4A017" }}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    No account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold transition-colors hover:text-white"
                      style={{ color: "#D4A017" }}
                    >
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {/* Register Form */}
              {!showForgot && tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/waitlist" className="hover:text-slate-300 underline">Terms</Link>
                    {" "}and{" "}
                    <Link to="/waitlist" className="hover:text-slate-300 underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist CTA */}
              {!showForgot && (
                <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                  Not ready yet?{" "}
                  <Link to="/waitlist" className="font-semibold transition-colors hover:text-white" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ── Right: Tier Benefits Panel ── */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 space-y-5">
            <div className="mb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What you get with PEN2PRO</p>
              <h2 className="font-display text-2xl font-black text-white leading-snug">
                One platform. Every level.<br />
                <span style={{ color: "#FF8A00" }}>Built for real builders.</span>
              </h2>
            </div>

            {TIER_FEATURES.map((f) => (
              <div
                key={f.tier}
                className="flex gap-4 rounded-2xl border p-5 transition-all hover:border-opacity-60"
                style={{ background: "#0F1520", borderColor: "#1A2235" }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="mb-1 font-display text-base font-bold" style={{ color: f.color }}>{f.tier}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}

            {/* Trust signals */}
            <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Why PEN2PRO</p>
              <ul className="space-y-2.5">
                {TRUST_POINTS.map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 text-base leading-none" style={{ color: "#D4A017" }}>✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Founder quote */}
            <div
              className="rounded-2xl border p-5"
              style={{ background: "linear-gradient(135deg, #0D47A1/10 0%, #0F1520 100%)", borderColor: "#1A2D50" }}
            >
              <p className="text-sm italic text-slate-300 leading-relaxed mb-4">
                "I built PEN2PRO because the system told me no. When job offers were rescinded after background checks,
                I picked my head up and started running. This platform is for everyone who's been counted out and is ready to build anyway."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black text-[#080C14]"
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
                >
                  RG
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Robert Green</p>
                  <p className="text-xs text-slate-500">Founder, PEN2PRO RMIE · Veteran · Entrepreneur</p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/starter"
                className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold"
              >
                Start Free Roadmap
              </Link>
              <Link
                to="/pricing"
                className="rounded-xl border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
              >
                View Plans
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
