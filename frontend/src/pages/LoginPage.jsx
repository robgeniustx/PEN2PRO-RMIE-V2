import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

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

  const TIER_PANELS = [
    {
      icon: "🗺️",
      name: "Free Roadmap",
      color: "#94A3B8",
      desc: "Start your business blueprint instantly. No credit card. Get a starter roadmap, brand ideas, and an LLC checklist in minutes.",
    },
    {
      icon: "⚡",
      name: "Pro — $249/mo",
      color: "#2d9cff",
      desc: "Full RMIE blueprint, 7/30/90-day action plan, branding support, credit & funding readiness, outreach strategy, and PDF export.",
    },
    {
      icon: "🧠",
      name: "Elite — $499/mo",
      color: "#d4af37",
      desc: "Everything in Pro plus financial projections, legal foundation checklist, vendor & funding resource center, automation, and priority support.",
    },
    {
      icon: "♾️",
      name: "Legacy Founder — $1,899 for life",
      color: "#D4A017",
      desc: "Lifetime access. One payment. Every feature we ever build — P2P Command Center, AI Voice Agent, Website Builder, and the full strategist framework.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-14">
        <div className="w-full max-w-5xl grid gap-10 md:grid-cols-2 md:items-start">

          {/* ── Left: info panel ── */}
          <div className="hidden md:block">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              PEN2PRO RMIE Platform
            </div>
            <h2 className="mb-3 font-display text-3xl font-black text-white leading-tight">
              Build your business roadmap.<br />
              <span style={{ color: "#FF8A00" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h2>
            <p className="mb-8 text-sm text-slate-400 leading-relaxed">
              Sign in to access your RMIE dashboard — your roadmaps, progress tracking, credit readiness, and execution tools, all in one place.
            </p>

            <div className="space-y-4">
              {TIER_PANELS.map((t) => (
                <div
                  key={t.name}
                  className="flex gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${t.color}18`, border: `1px solid ${t.color}40` }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: t.color }}>{t.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
              <p className="text-xs text-slate-500">
                Not sure which plan is right for you?{" "}
                <Link to="/starter" className="font-semibold hover:opacity-80" style={{ color: "#D4A017" }}>
                  Start with a free roadmap →
                </Link>
              </p>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
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
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
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
                  <div className="text-center">
                    <Link to="/waitlist" className="text-xs text-slate-500 hover:text-slate-300 transition">
                      Forgot password? Contact support →
                    </Link>
                  </div>
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
                    By creating an account you agree to our Terms of Service and Privacy Policy.
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

            {/* Mobile tier info (below form on small screens) */}
            <div className="mt-6 md:hidden rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">What You Get</p>
              <div className="space-y-2">
                {[
                  ["🗺️", "Free Roadmap", "Start instantly — no card needed"],
                  ["⚡", "Pro — $249/mo", "Full blueprint + execution tools"],
                  ["🧠", "Elite — $499/mo", "Advanced strategy + projections"],
                  ["♾️", "Founders — $1,899 for life", "Lifetime access to everything"],
                ].map(([icon, name, desc]) => (
                  <div key={name} className="flex items-center gap-3 text-sm">
                    <span>{icon}</span>
                    <span className="font-semibold text-slate-300">{name}</span>
                    <span className="text-slate-600 text-xs">— {desc}</span>
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
