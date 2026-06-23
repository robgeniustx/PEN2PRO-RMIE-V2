import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#64748B",
    icon: "🗺️",
    bullets: ["Starter business blueprint", "7-day action plan preview", "Core roadmap output", "No credit card required"],
  },
  {
    tier: "Pro",
    color: "#2d9cff",
    icon: "⚡",
    bullets: ["Full RMIE blueprint engine", "30 & 90-day execution plans", "Credit & funding readiness", "PDF export + branding support"],
  },
  {
    tier: "Elite",
    color: "#D4A017",
    icon: "🏅",
    bullets: ["Everything in Pro", "Advanced strategist guidance", "Financial projections", "Done-with-you execution support"],
  },
  {
    tier: "Legacy Founder",
    color: "#d4af37",
    icon: "🏆",
    bullets: ["Lifetime platform access", "Every future feature included", "Founder recognition badge", "One payment — no renewals"],
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

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-5 py-16">

        {/* ── LEFT: Form ── */}
        <div className="w-full max-w-md shrink-0 mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)", boxShadow: "0 0 24px rgba(212,160,23,0.4)" }}>
              P2P
            </div>
            <h1 className="font-display text-3xl font-black text-white leading-tight">
              Build your business roadmap.
            </h1>
            <p className="mt-1 text-lg font-semibold" style={{ color: "#FF8A00" }}>
              Save your blueprint. Upgrade when ready.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard and roadmaps."
                : "Start building your AI business roadmap — free, no credit card required."}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
              <button
                onClick={() => { setTab("login"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "login" ? "text-[#080C14]" : "text-slate-400 hover:text-white"
                }`}
                style={tab === "login" ? { background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)" } : {}}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab("register"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "register" ? "text-[#080C14]" : "text-slate-400 hover:text-white"
                }`}
                style={tab === "register" ? { background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)" } : {}}
              >
                Create Account
              </button>
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
                    <span className="text-xs text-slate-500 cursor-default">Forgot password? <span className="text-[#D4A017]">Contact support</span></span>
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
                  className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition hover:scale-[1.02] disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)", boxShadow: "0 0 24px rgba(212,160,23,0.35)" }}
                >
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
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
                  className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition hover:scale-[1.02] disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)", boxShadow: "0 0 24px rgba(212,160,23,0.35)" }}
                >
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-5 text-center text-sm text-slate-500">
              Not ready yet?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Plan Benefits Panel ── */}
        <div className="hidden lg:flex flex-col gap-4 flex-1">
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">What you get with PEN2PRO</p>
            <h2 className="font-display text-2xl font-black text-white">One platform. Every tier.<br/>Your roadmap to income.</h2>
          </div>

          {PLAN_BENEFITS.map((plan) => (
            <div
              key={plan.tier}
              className="rounded-xl border p-5 transition-all hover:scale-[1.01]"
              style={{ borderColor: plan.color + "30", background: plan.color + "08" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: plan.color + "20", border: `1px solid ${plan.color}40` }}
                >
                  {plan.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-sm mb-2" style={{ color: plan.color }}>{plan.tier}</p>
                  <ul className="space-y-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
                        <span style={{ color: plan.color }} className="shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-2 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-center">
            <p className="text-xs text-slate-500 mb-2">Already building something?</p>
            <Link
              to="/starter"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-black text-[#080C14] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #F7D675 100%)" }}
            >
              Start Free Roadmap — No Account Needed
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
