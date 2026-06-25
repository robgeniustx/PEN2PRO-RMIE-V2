import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    desc: "Start your blueprint in minutes — no credit card required.",
    badge: null,
  },
  {
    icon: "📊",
    tier: "Pro — $249/mo",
    desc: "Full 90-day execution plan, branding, outreach scripts, and PDF export.",
    badge: "Most Popular",
  },
  {
    icon: "⚡",
    tier: "Elite — $499/mo",
    desc: "Done-with-you guidance, funding readiness, financial projections, and priority support.",
    badge: "Best Value",
  },
  {
    icon: "♾️",
    tier: "Founders Lifetime — $1,899",
    desc: "One payment. Lifetime access. Every feature, every future update, forever.",
    badge: "200 Spots",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* ── Left: Side Panel ── */}
          <div>
            <div className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                PEN2PRO RMIE Platform
              </p>
              <h1 className="font-display text-3xl font-black leading-tight text-white md:text-4xl">
                Build your business roadmap.<br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #F0C040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint. Upgrade when ready.
                </span>
              </h1>
              <p className="mt-4 text-slate-400 leading-relaxed">
                PEN2PRO is the AI-powered Rapid Monetization Intelligence Engine built for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about execution.
              </p>
            </div>

            {/* Tier Cards */}
            <div className="space-y-3">
              {TIER_CARDS.map((c) => (
                <div
                  key={c.tier}
                  className="relative flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4 transition-all hover:border-yellow-500/30"
                >
                  {c.badge && (
                    <span
                      className="absolute -top-2.5 right-4 rounded-full border bg-[#080C14] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest"
                      style={{ borderColor: "rgba(212,160,23,0.4)", color: "#D4A017" }}
                    >
                      {c.badge}
                    </span>
                  )}
                  <div className="shrink-0 text-2xl mt-0.5">{c.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white">{c.tier}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <Link to="/starter" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                Start Free →
              </Link>
              <Link to="/pricing" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                View Pricing →
              </Link>
              <Link to="/waitlist" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                Join Waitlist →
              </Link>
            </div>
          </div>

          {/* ── Right: Auth Card ── */}
          <div className="w-full">
            {/* Tabs */}
            <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#0A0F1E" }}>
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

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-[#080C14] font-black text-sm gradient-gold">
                  P2P
                </div>
                <h2 className="font-display text-2xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your PEN2PRO dashboard"
                    : "Start building your business roadmap today — free"}
                </p>
              </div>

              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-600 hover:text-yellow-400 transition">Forgot password?</Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:opacity-80 transition"
                      style={{ color: "#D4A017" }}
                    >
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                  <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("login"); setError(""); }}
                      className="font-semibold hover:opacity-80 transition"
                      style={{ color: "#D4A017" }}
                    >
                      Sign in
                    </button>
                  </p>
                </form>
              )}
            </div>

            {/* Waitlist link */}
            <div className="mt-5 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-center">
              <p className="text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Join the waitlist for June 15 launch →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
