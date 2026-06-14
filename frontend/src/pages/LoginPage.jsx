import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#00C9B1",
    desc: "Starter blueprint, brand name ideas, LLC checklist, 7-day action plan.",
    href: "/starter",
  },
  {
    tier: "Pro — $249/mo",
    color: "#1E88E5",
    desc: "Full roadmap, sales scripts, outreach strategy, credit readiness, PDF export.",
    href: "/pro",
  },
  {
    tier: "Elite — $499/mo",
    color: "#FF8A00",
    desc: "Financial projections, done-with-you guidance, funding resources, priority support.",
    href: "/elite",
  },
  {
    tier: "Legacy Founder — $1,899",
    color: "#D4A017",
    desc: "Lifetime access to every feature — RMIE, Command Center, Voice Agent, and more. 200 spots only.",
    href: "/legacy-founder",
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

        {/* Left — Form */}
        <div className="w-full max-w-md shrink-0 mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
              <span className="text-xl font-black text-white">⚡</span>
            </div>
            <h1 className="font-display text-3xl font-black text-white leading-tight">
              {tab === "login"
                ? "Welcome back."
                : "Start building your roadmap."}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Build your business roadmap. Save your blueprint. Upgrade when ready.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
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
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
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
                    <Link to="/waitlist" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                      Forgot password?
                    </Link>
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
                  className="btn-gold w-full py-3 text-sm font-bold rounded-xl disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
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
                  className="btn-gold w-full py-3 text-sm font-bold rounded-xl disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Account — Free"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Bottom link */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready yet?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Benefits Panel (hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block flex-1">
          <div className="rounded-2xl border border-[#1A2D50] p-8" style={{ background: "#0F1520" }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">What you unlock</p>
            <h2 className="mb-6 font-display text-2xl font-black text-white">
              Build your business roadmap.<br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h2>

            <div className="space-y-4">
              {TIER_BENEFITS.map((t) => (
                <Link
                  key={t.tier}
                  to={t.href}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#080C14] p-4 transition-colors hover:border-[#1A2D50]/80 hover:bg-[#0F1520]"
                >
                  <div
                    className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: t.color, boxShadow: `0 0 8px ${t.color}80` }}
                  />
                  <div>
                    <p className="text-sm font-bold text-white">{t.tier}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">{t.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">Launching June 15, 2026</p>
              <p className="mt-1 text-sm text-slate-400">
                Founders pricing locks in permanently when you join today. Only 200 spots available at $1,899 for life.
              </p>
              <Link
                to="/legacy-founder"
                className="mt-3 inline-block rounded-lg px-4 py-2 text-xs font-black text-[#080C14] btn-gold"
              >
                Claim Founders Lifetime
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
