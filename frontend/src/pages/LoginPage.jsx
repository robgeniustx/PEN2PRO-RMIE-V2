import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_FEATURES = [
  {
    label: "Free Roadmap",
    color: "#64748B",
    items: [
      "1 starter business blueprint",
      "7-day launch plan",
      "Basic sales script",
    ],
  },
  {
    label: "Pro — $249/mo",
    color: "#2d9cff",
    items: [
      "Full RMIE roadmap + 90-day plan",
      "Branding, outreach & PDF export",
      "Credit & funding readiness tools",
    ],
  },
  {
    label: "Elite — $499/mo",
    color: "#d4af37",
    items: [
      "Everything in Pro",
      "Financial projections & legal foundation",
      "Vendor/funding center + priority support",
    ],
  },
  {
    label: "Founders Lifetime — $1,899",
    color: "#FF8A00",
    items: [
      "Lifetime access — one payment",
      "Every feature we will ever ship",
      "Founder badge + early adopter recognition",
    ],
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

      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* ── Left: side panel ── */}
          <div className="hidden lg:block">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              ⚡ PEN2PRO RMIE
            </div>
            <h2 className="mb-4 font-display text-4xl font-black text-white leading-tight">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg,#1E88E5,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="mb-10 text-slate-400 leading-relaxed">
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine. Your free account gives you a real business roadmap — no credit card required.
            </p>

            <div className="space-y-4">
              {TIER_FEATURES.map((tier) => (
                <div key={tier.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
                  <p className="mb-3 text-xs font-black uppercase tracking-widest" style={{ color: tier.color }}>
                    {tier.label}
                  </p>
                  <ul className="space-y-1.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-0.5 shrink-0 font-bold" style={{ color: tier.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              Not ready to sign up?{" "}
              <Link to="/starter" className="text-[#FF8A00] hover:underline font-semibold">
                Start your free roadmap
              </Link>{" "}
              — no account required.
            </p>
          </div>

          {/* ── Right: auth card ── */}
          <div className="w-full">
            {/* Mobile headline */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg,#D4A017,#F7C948)" }}>
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
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to your PEN2PRO dashboard"
                  : "Start building your business roadmap — free."}
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
                  style={tab === "login" ? { background: "linear-gradient(135deg,#D4A017,#F7C948)" } : {}}
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
                  style={tab === "register" ? { background: "linear-gradient(135deg,#D4A017,#F7C948)" } : {}}
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
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-600">Min 8 characters</span>
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
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:underline"
                    >
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
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier preview */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {TIER_FEATURES.map((tier) => (
                <div key={tier.label} className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest" style={{ color: tier.color }}>
                    {tier.label.split(" — ")[0]}
                  </p>
                  <p className="text-xs text-slate-500">{tier.items[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
