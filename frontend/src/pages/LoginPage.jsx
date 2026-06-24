import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#94a3b8",
    icon: "🗺️",
    desc: "1 AI business blueprint, brand name ideas, LLC checklist — zero cost.",
  },
  {
    tier: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "📊",
    desc: "Full 90-day plan, sales scripts, branding, PDF export & credit readiness.",
  },
  {
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    desc: "Financial projections, done-with-you strategy, funding & vendor resources.",
  },
  {
    tier: "Legacy Founder",
    color: "#D4A017",
    icon: "⚡",
    desc: "Lifetime access, Command Center, Voice Agent, Website Builder — 200 spots only.",
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
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-stretch px-4 py-12 lg:py-20">
        {/* ── LEFT PANEL — Value proposition ── */}
        <div className="hidden lg:flex lg:w-5/12 flex-col justify-center pr-12">
          {/* Brand */}
          <div className="mb-3 flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}
            >
              ⚡
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#fff" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h2>
          <p className="mb-10 text-sm leading-7 text-slate-400">
            PEN2PRO RMIE turns your idea into a realistic action plan — startup costs, revenue model, outreach strategy, credit readiness, and a 90-day execution roadmap.
          </p>

          {/* Tier cards */}
          <div className="space-y-3">
            {TIER_BENEFITS.map((b) => (
              <div
                key={b.tier}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: b.color + "22", border: `1px solid ${b.color}44` }}
                >
                  {b.icon}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: b.color }}>{b.tier}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-600">
            No credit card required to start. Free roadmap in under 5 minutes.
          </p>
        </div>

        {/* ── RIGHT PANEL — Auth form ── */}
        <div className="w-full lg:w-7/12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Mobile brand header */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-base font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Build your business roadmap. Save your blueprint."
                  : "Start building your free roadmap today"}
              </p>
            </div>

            {/* Desktop heading */}
            <div className="mb-8 hidden text-center lg:block">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Join PEN2PRO"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your dashboard and roadmaps"
                  : "Start building your free business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/about" className="underline hover:text-slate-300">Terms of Service</Link>.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-6 flex flex-col gap-3 border-t border-[#1A2235] pt-6">
                <div className="text-center text-sm text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
                <div className="text-center text-sm text-slate-500">
                  Want to explore first?{" "}
                  <Link to="/starter" className="font-semibold" style={{ color: "#1E88E5" }}>
                    Try the free roadmap
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
