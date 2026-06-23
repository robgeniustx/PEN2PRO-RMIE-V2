import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    color: "#FF8A00",
    desc: "Start your business blueprint. Get a real roadmap built around your idea — no credit card required.",
  },
  {
    icon: "🚀",
    tier: "Pro Strategy Tools",
    color: "#2d9cff",
    desc: "Full RMIE blueprint, branding support, outreach strategy, credit & funding readiness, and PDF export.",
  },
  {
    icon: "⚡",
    tier: "Elite Execution",
    color: "#d4af37",
    desc: "Advanced strategist guidance, financial projections, legal foundation, automation, and priority support.",
  },
  {
    icon: "♾️",
    tier: "Legacy Founder Access",
    color: "#a855f7",
    desc: "One payment. Lifetime platform access. Every feature we ever ship — locked in for founding members.",
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
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-stretch px-4 py-12 gap-8 lg:gap-16">

        {/* ── LEFT PANEL — Brand Value Story ── */}
        <div className="hidden lg:flex flex-col justify-center flex-1 max-w-[480px]">
          {/* Brand mark */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}
            >
              ⚡
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 font-display text-3xl font-black leading-tight text-white xl:text-4xl">
            Build your business roadmap.
            <br />
            <span style={{ color: "#FF8A00" }}>Save your blueprint.</span>
            <br />
            Upgrade when ready.
          </h1>
          <p className="mb-10 text-slate-400 leading-relaxed">
            PEN2PRO RMIE gives you a real action plan — not motivation. Start free, save your progress, and unlock advanced strategy when you're ready to execute at a higher level.
          </p>

          {/* Tier benefits */}
          <div className="space-y-4">
            {TIER_BENEFITS.map((t) => (
              <div
                key={t.tier}
                className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 transition hover:border-[#1A3870]"
              >
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: `${t.color}18`, border: `1px solid ${t.color}30` }}
                >
                  {t.icon}
                </div>
                <div>
                  <p className="mb-0.5 text-sm font-bold" style={{ color: t.color }}>{t.tier}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-xs text-slate-600">
            Built by Robert Green — veteran, entrepreneur, founder of PEN2PRO.{" "}
            <Link to="/about" className="text-slate-500 hover:text-slate-300 transition-colors">Read the story →</Link>
          </p>
        </div>

        {/* ── RIGHT PANEL — Auth Form ── */}
        <div className="flex w-full flex-col justify-center lg:max-w-[420px] xl:max-w-[440px]">
          {/* Mobile headline (hidden on desktop) */}
          <div className="mb-8 text-center lg:hidden">
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
            >
              ⚡
            </div>
            <h1 className="font-display text-2xl font-black text-white">
              Build your roadmap. Save your blueprint.
            </h1>
            <p className="mt-2 text-sm text-slate-400">Upgrade when ready.</p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7 shadow-2xl">
            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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

            {/* Context text */}
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Start building today"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO roadmap and dashboard."
                  : "Create your free account. No credit card required."}
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Login Form */}
            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
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
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#FF8A00] transition-colors">
                      Forgot password?
                    </Link>
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
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("register"); setError(""); }}
                    className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors"
                  >
                    Create one free
                  </button>
                </p>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
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
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating account..." : "Create Account — Free"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
                <p className="text-center text-xs text-slate-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("login"); setError(""); }}
                    className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}
          </div>

          {/* Below card links */}
          <div className="mt-6 text-center text-sm text-slate-500">
            Not ready to commit?{" "}
            <Link to="/starter" className="font-semibold text-[#FF8A00] hover:text-[#FFB347] transition-colors">
              Start a free roadmap
            </Link>
            {" "}or{" "}
            <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors">
              join the waitlist
            </Link>
          </div>

          {/* Mobile tier list */}
          <div className="mt-10 space-y-3 lg:hidden">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">What you get</p>
            {TIER_BENEFITS.map((t) => (
              <div key={t.tier} className="flex items-center gap-3 rounded-lg border border-[#1A2235] bg-[#0F1520] p-3">
                <span className="text-lg">{t.icon}</span>
                <span className="text-sm font-semibold" style={{ color: t.color }}>{t.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
