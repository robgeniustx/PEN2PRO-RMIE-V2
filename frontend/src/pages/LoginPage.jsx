import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    label: "Free Roadmap",
    color: "#FF8A00",
    icon: "🗺️",
    perks: ["Starter business blueprint", "Basic roadmap preview", "7-day action plan preview"],
  },
  {
    label: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    perks: ["Full RMIE blueprint", "PDF/email export", "Credit & funding readiness", "Outreach strategy"],
  },
  {
    label: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    perks: ["Advanced strategist guidance", "Financial projections", "Vendor & lender resource center", "Priority support"],
  },
  {
    label: "Legacy Founder — $1,899",
    color: "#d4af37",
    icon: "🏆",
    perks: ["Lifetime platform access", "Every feature we ship", "Founder recognition", "First access to new tools"],
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

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-start gap-12 px-5 py-16 lg:items-center">

        {/* ── LEFT: Tier Benefits Panel ── */}
        <div className="hidden w-full max-w-sm shrink-0 lg:block">
          <div className="mb-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO RMIE</p>
            <h2 className="font-display text-2xl font-black leading-snug text-white">
              Build your business roadmap.
              <br />
              Save your blueprint.
              <br />
              Upgrade when ready.
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Start free. Get a real business roadmap in minutes. Upgrade to unlock advanced strategy, execution tools, and lifetime access.
            </p>
          </div>

          <div className="space-y-3">
            {TIER_HIGHLIGHTS.map((tier) => (
              <div
                key={tier.label}
                className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-4"
                style={{ borderLeftColor: tier.color, borderLeftWidth: 3 }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-base">{tier.icon}</span>
                  <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.label}</p>
                </div>
                <ul className="space-y-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <span className="mt-0.5 shrink-0" style={{ color: tier.color }}>✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Not ready for an account?{" "}
            <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
              Try the free roadmap — no sign-in required.
            </Link>
          </p>
        </div>

        {/* ── RIGHT: Auth Form ── */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              ⚡
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
                style={tab === "login" ? { background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" } : {}}
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
                style={tab === "register" ? { background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" } : {}}
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
                    <Link to="/waitlist" className="text-xs text-[#D4A017] hover:underline">Forgot password?</Link>
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
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
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
                    placeholder="Your full name"
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
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
                >
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Mobile tier note */}
          <p className="mt-6 text-center text-xs text-slate-500 lg:hidden">
            Start free. No credit card required.{" "}
            <Link to="/pricing" className="text-[#FF8A00] hover:underline">View all plans →</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
