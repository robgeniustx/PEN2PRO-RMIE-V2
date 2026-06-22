import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#64748B",
    badge: "Free",
    perks: ["1 starter business blueprint", "7-day action plan preview", "Basic roadmap"],
  },
  {
    name: "Pro",
    color: "#2d9cff",
    badge: "$249/mo",
    perks: ["Full RMIE blueprint", "PDF & email export", "Branding support", "Credit readiness checklist"],
  },
  {
    name: "Elite",
    color: "#d4af37",
    badge: "$499/mo",
    perks: ["Everything in Pro", "Financial projections", "Legal foundation tools", "Vendor & funding center"],
  },
  {
    name: "Legacy Founder",
    color: "#FF8A00",
    badge: "$1,899 lifetime",
    perks: ["Lifetime access — one payment", "Every feature we ever ship", "Founder recognition", "First access to new tools"],
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

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">
        {/* ── LEFT PANEL — Tier Benefits ── */}
        <div
          className="hidden lg:flex lg:w-[480px] lg:shrink-0 flex-col justify-center px-10 py-16 border-r border-[#1A2235]"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 100%)" }}
        >
          {/* Brand */}
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
              ⚡ PEN2PRO — RMIE Platform
            </p>
            <h2 className="font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              PEN2PRO RMIE turns your idea into a complete business roadmap — startup checklist, launch plan, funding readiness, and income strategy.
            </p>
          </div>

          {/* Tier Cards */}
          <div className="space-y-3">
            {TIER_BENEFITS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border p-4 transition-colors"
                style={{
                  borderColor: tier.color + "33",
                  background: tier.color + "08",
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-black text-white">{tier.name}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: tier.color + "20", color: tier.color }}
                  >
                    {tier.badge}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {tier.perks.map((perk) => (
                    <span key={perk} className="flex items-center gap-1 text-xs text-slate-400">
                      <span style={{ color: tier.color }}>✓</span> {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600">
            Not ready to commit?{" "}
            <Link to="/starter" className="font-semibold" style={{ color: "#FF8A00" }}>
              Start your free roadmap →
            </Link>
          </p>
        </div>

        {/* ── RIGHT PANEL — Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 text-center">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
              >
                P2P
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
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
                  style={tab === "login" ? { background: "linear-gradient(135deg, #FF8A00, #D4A017)" } : {}}
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
                  style={tab === "register" ? { background: "linear-gradient(135deg, #FF8A00, #D4A017)" } : {}}
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
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">
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
                    className="w-full rounded-xl py-3 text-sm font-bold text-[#080C14] transition hover:scale-[1.02] disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
                  >
                    {loading ? "Signing in..." : "Sign In"}
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
                    className="w-full rounded-xl py-3 text-sm font-bold text-[#080C14] transition hover:scale-[1.02] disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
                  >
                    {loading ? "Creating account..." : "Create Free Account"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Footer links */}
              <div className="mt-6 space-y-3 border-t border-[#1A2235] pt-5">
                <div className="text-center text-sm text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
                <div className="text-center text-sm text-slate-500">
                  Just want a free roadmap?{" "}
                  <Link to="/starter" className="font-semibold" style={{ color: "#FF8A00" }}>
                    Start here — no account needed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
