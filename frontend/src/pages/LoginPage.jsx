import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    icon: "⚡",
    tier: "Free Roadmap",
    color: "#64748b",
    desc: "A complete AI business blueprint — no credit card, no catch.",
  },
  {
    icon: "🗺️",
    tier: "Pro — $249/mo",
    color: "#D4A017",
    desc: "Unlimited roadmaps, full 90-day plan, credit checklist, PDF export, AI refinement.",
  },
  {
    icon: "🧠",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    desc: "Financial projections, funding resources, done-with-you strategy & priority support.",
  },
  {
    icon: "♾️",
    tier: "Legacy Founder — $1,899 for life",
    color: "#d4af37",
    desc: "One payment. Everything in Elite plus Command Center, AI Voice Agent & Website Builder.",
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
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl flex gap-10 items-center">

          {/* ── LEFT: Value Proposition Panel ── */}
          <div className="hidden lg:flex flex-col flex-1 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
                PEN2PRO RMIE Platform
              </p>
              <h2 className="font-display text-3xl font-black text-white leading-snug">
                Build your business roadmap.<br />
                Save your blueprint.<br />
                <span style={{ background: "linear-gradient(90deg,#1E88E5,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Upgrade when ready.
                </span>
              </h2>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Start free. Get a real AI business roadmap in minutes — with 7-day action plans, monetization strategy, and your first real execution steps. Upgrade to unlock deeper strategy and full business tools.
              </p>
            </div>

            <div className="space-y-3">
              {TIER_BENEFITS.map((t) => (
                <div
                  key={t.tier}
                  className="flex gap-4 rounded-xl border bg-[#0F1520] p-4"
                  style={{ borderColor: `${t.color}30` }}
                >
                  <div
                    className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${t.color}15`, border: `1px solid ${t.color}35` }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-black" style={{ color: t.color }}>{t.tier}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/pricing" className="text-xs text-[#FF8A00] hover:underline font-semibold">
              Compare all plans →
            </Link>
          </div>

          {/* ── RIGHT: Auth Card ── */}
          <div className="w-full max-w-md mx-auto lg:mx-0 shrink-0">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
                P2P
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={tab === "login" ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={tab === "register" ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
                >
                  Create Account
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {tab === "login" && (
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
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-500 cursor-not-allowed" title="Password reset coming soon">
                        Forgot password?
                      </span>
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
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    No account yet?{" "}
                    <button type="button" onClick={() => setTab("register")} className="font-semibold" style={{ color: "#D4A017" }}>
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
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
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="underline">Terms</Link> and{" "}
                    <Link to="/privacy" className="underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier note */}
            <p className="mt-6 text-center text-xs text-slate-600 lg:hidden">
              Start free — upgrade to Pro, Elite, or Founders when ready.{" "}
              <Link to="/pricing" className="text-[#FF8A00] underline">See plans</Link>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
