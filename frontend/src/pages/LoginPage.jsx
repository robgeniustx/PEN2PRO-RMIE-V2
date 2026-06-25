import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    tag: "Forever Free",
    color: "#1E88E5",
    desc: "Start here. Get a real AI-built business roadmap — idea summary, 7-day action plan, startup checklist, and brand direction. No credit card. No fluff.",
  },
  {
    icon: "📊",
    name: "Pro Strategy Tools",
    tag: "$249/mo",
    color: "#2d9cff",
    desc: "Full 90-day execution plan, outreach scripts, PDF export, branding support, credit readiness checklist, and AI business refinement.",
  },
  {
    icon: "⚡",
    name: "Elite Execution",
    tag: "$499/mo",
    color: "#00C9B1",
    desc: "Everything in Pro plus financial projections, legal foundation checklist, vendor & funding resource center, advanced CRM, and priority support.",
  },
  {
    icon: "♾️",
    name: "Legacy Founder",
    tag: "Lifetime Access",
    color: "#D4A017",
    desc: "One payment. Lifetime access to the full platform — RMIE, Command Center, AI Voice Agent, Website Builder, and the 12-month 10M Strategist Framework.",
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

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid lg:grid-cols-2">

        {/* ── LEFT: Tier Context Panel ── */}
        <div className="hidden lg:block">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#FF8A00" }}>
            ⚡ PEN2PRO RMIE Platform
          </div>
          <h2 className="mb-3 font-display text-4xl font-black leading-tight text-white">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Start free. No credit card. Get a real AI-built business roadmap in under 5 minutes. Upgrade when you're ready to execute at the next level.
          </p>

          <div className="space-y-3">
            {TIER_PANELS.map((tier) => (
              <div key={tier.name}
                className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-colors hover:border-[#1A2D50]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: `${tier.color}20`, border: `1px solid ${tier.color}40` }}>
                  {tier.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-white text-sm">{tier.name}</p>
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-black"
                      style={{ background: `${tier.color}20`, color: tier.color }}>
                      {tier.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600">
            No junk. No upsells on day one. Start free and upgrade only when you see the value.
          </p>
        </div>

        {/* ── RIGHT: Auth Form ── */}
        <div className="w-full">
          {/* Mobile headline */}
          <div className="mb-8 text-center lg:hidden">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
              <span className="text-lg font-black text-white">⚡</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-white">
              {tab === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to your PEN2PRO dashboard"
                : "Build your business roadmap today — free"}
            </p>
          </div>

          {/* Desktop card header */}
          <div className="mb-7 hidden lg:block">
            <h1 className="font-display text-2xl font-bold text-white">
              {tab === "login" ? "Sign in to PEN2PRO" : "Create your free account"}
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              {tab === "login"
                ? "Access your dashboard and business roadmap"
                : "Your free roadmap takes under 5 minutes to build"}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
            {/* Tabs */}
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <Link to="/waitlist" className="text-xs font-semibold" style={{ color: "#D4A017" }}>
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
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
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
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready yet?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
              {" "}or{" "}
              <Link to="/starter" className="font-semibold" style={{ color: "#1E88E5" }}>
                try the free roadmap
              </Link>
            </div>
          </div>

          {/* Tier trust strip — shown on mobile */}
          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            {TIER_PANELS.map((tier) => (
              <div key={tier.name}
                className="flex items-center gap-2.5 rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                <span className="text-lg">{tier.icon}</span>
                <div>
                  <p className="text-xs font-bold text-white">{tier.name}</p>
                  <p className="text-[10px]" style={{ color: tier.color }}>{tier.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
