import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    name: "Free Roadmap",
    color: "#00C9B1",
    icon: "🗺️",
    desc: "Get your first AI business roadmap in minutes — no credit card, no commitment.",
    href: "/starter",
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    desc: "Full blueprint, 90-day plan, branding support, credit checklist, and PDF export.",
    href: "/pro",
  },
  {
    name: "Elite — $499/mo",
    color: "#d4af37",
    icon: "🧠",
    desc: "Advanced strategist guidance, financial projections, vendor resources, and priority support.",
    href: "/elite",
  },
  {
    name: "Legacy Founder — $1,899",
    color: "#FF8A00",
    icon: "🏆",
    desc: "Lifetime access. Every feature we will ever ship. Only 200 spots — never sold again.",
    href: "/founders",
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
        <div className="absolute -top-48 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* ── LEFT PANEL: Tier value cards ── */}
          <div className="hidden lg:block">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#1A2235] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest"
              style={{ background: "rgba(212,160,23,0.08)" }}>
              ⚡ PEN2PRO RMIE Platform
            </div>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              <span className="text-slate-400">Upgrade when ready.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              PEN2PRO gives you a structured roadmap, execution checklist, credit readiness tools, and business strategy — whether you're starting for free or going all in with Elite.
            </p>

            <div className="mt-8 space-y-3">
              {TIER_CARDS.map((tier) => (
                <Link
                  key={tier.name}
                  to={tier.href}
                  className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4 transition-all hover:border-opacity-50 group"
                  style={{ "--hover-color": tier.color }}
                >
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${tier.color}15`, border: `1px solid ${tier.color}30` }}
                  >
                    {tier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-black text-white" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">{tier.desc}</p>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition mt-1 shrink-0">→</span>
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              New here?{" "}
              <Link to="/starter" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                Start your free roadmap first →
              </Link>
            </p>
          </div>

          {/* ── RIGHT PANEL: Auth form ── */}
          <div>
            {/* Mobile headline */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg,#D4A017,#F0C040)" }}>
                P2P
              </div>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Build your business roadmap. Free to start."}
              </p>
            </div>

            {/* Desktop headline above card */}
            <div className="mb-6 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black text-[#080C14]"
                  style={{ background: "linear-gradient(135deg,#D4A017,#F0C040)" }}>
                  P2P
                </div>
                <div>
                  <p className="text-sm font-black text-white">PEN2PRO</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest">Rapid Monetization Intelligence Engine</p>
                </div>
              </div>
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
                  style={tab === "login" ? { background: "linear-gradient(135deg,#D4A017,#F0C040)" } : {}}
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
                  style={tab === "register" ? { background: "linear-gradient(135deg,#D4A017,#F0C040)" } : {}}
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
                      <Link to="/waitlist" className="text-xs hover:opacity-80 transition" style={{ color: "#D4A017" }}>
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
                    className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition hover:opacity-90 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#D4A017,#F0C040)" }}
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
                    className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition hover:opacity-90 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#D4A017,#F0C040)" }}
                  >
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Join the waitlist →
                </Link>
              </div>
            </div>

            {/* Mobile tier summary */}
            <div className="mt-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 lg:hidden">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">What You Get</p>
              <div className="space-y-3">
                {TIER_CARDS.map((tier) => (
                  <div key={tier.name} className="flex items-center gap-3">
                    <span className="text-lg">{tier.icon}</span>
                    <div>
                      <p className="text-xs font-bold" style={{ color: tier.color }}>{tier.name}</p>
                      <p className="text-[11px] text-slate-500">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
