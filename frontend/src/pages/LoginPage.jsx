import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_CARDS = [
  {
    tier: "Free Forever",
    badge: null,
    color: "#64748B",
    price: "$0",
    items: ["1 AI Business Roadmap", "7-day launch plan", "LLC & EIN checklist", "Brand name ideas"],
  },
  {
    tier: "Pro",
    badge: "Most Popular",
    color: "#2d9cff",
    price: "$249/mo",
    items: ["Unlimited roadmaps", "Full 90-day execution plan", "Sales scripts & outreach", "Credit readiness checklist", "PDF/email export"],
  },
  {
    tier: "Elite",
    badge: null,
    color: "#d4af37",
    price: "$499/mo",
    items: ["Everything in Pro", "Financial projections", "Done-with-you strategy", "Vendor & funding center", "Priority support"],
  },
  {
    tier: "Founders Lifetime",
    badge: "200 Spots Only",
    color: "#FF8A00",
    price: "$1,899 for life",
    items: ["Lifetime access", "Everything in Elite", "AI Voice Agent", "Website Builder", "Legacy recognition"],
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

      <div className="mx-auto max-w-7xl min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left side panel ── */}
        <div className="hidden lg:flex flex-col justify-center px-12 py-16 border-r border-[#1A2235]" style={{ background: "#0A0F1A" }}>
          {/* Brand headline */}
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO RMIE</div>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.<br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint. Upgrade when ready.
            </span>
          </h2>
          <p className="mb-10 text-sm leading-7 text-slate-400">
            PEN2PRO is the AI-powered Rapid Monetization Intelligence Engine for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about execution.
          </p>

          {/* Plan cards */}
          <div className="space-y-3">
            {PLAN_CARDS.map((plan) => (
              <div
                key={plan.tier}
                className="flex items-start gap-4 rounded-xl border p-4 transition-colors"
                style={{ borderColor: plan.color + "33", background: plan.color + "08" }}
              >
                <div
                  className="mt-0.5 h-8 w-8 shrink-0 rounded-lg flex items-center justify-center text-xs font-black"
                  style={{ background: plan.color + "22", color: plan.color }}
                >
                  {plan.tier === "Free Forever" ? "✦" : plan.tier === "Pro" ? "⚡" : plan.tier === "Elite" ? "★" : "♾"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">{plan.tier}</span>
                    {plan.badge && (
                      <span className="rounded-full border px-2 py-0.5 text-[10px] font-black uppercase" style={{ borderColor: plan.color + "55", color: plan.color }}>
                        {plan.badge}
                      </span>
                    )}
                    <span className="ml-auto text-xs font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {plan.items.map((item) => (
                      <span key={item} className="text-xs text-slate-500">✓ {item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#1A2235] pt-6">
            {["Free roadmap in minutes", "No credit card required", "Cancel anytime"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <span className="text-xs text-teal-400">✓</span>
                <span className="text-xs text-slate-500">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="flex items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
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
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-500">Forgot password? Contact support</span>
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

            {/* Quick links */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-600 mb-3">Or explore PEN2PRO first</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  ["Free Roadmap", "/starter"],
                  ["Pricing", "/pricing"],
                  ["About", "/about"],
                ].map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-xs text-slate-500 hover:border-[#FF8A00]/40 hover:text-[#FF8A00] transition-colors"
                  >
                    {label}
                  </Link>
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
