import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    icon: "🆓",
    name: "Free Roadmap",
    color: "#00C9B1",
    desc: "Generate a full AI business roadmap — startup costs, 7-day action plan, brand ideas, and launch checklist. Free forever.",
  },
  {
    icon: "⚡",
    name: "Pro — $249/mo",
    color: "#2d9cff",
    desc: "Full RMIE blueprint, progress tracking, branding support, PDF export, outreach strategy, and credit & funding readiness checklist.",
  },
  {
    icon: "🧠",
    name: "Elite — $499/mo",
    color: "#d4af37",
    desc: "Everything in Pro plus financial projections, advanced strategist guidance, legal foundation tools, vendor & funding resource center, and priority support.",
  },
  {
    icon: "🏆",
    name: "Legacy Founder — $1,899",
    color: "#FF8A00",
    desc: "Lifetime access to the full PEN2PRO platform. One payment, no renewals, every future feature included. Only 200 spots — ever.",
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(40px)" }} />
      </div>

      <div className="mx-auto flex max-w-6xl min-h-[calc(100vh-80px)] items-center gap-12 px-5 py-16 lg:grid lg:grid-cols-2">

        {/* ── LEFT PANEL — tier info ── */}
        <div className="hidden lg:block">
          {/* Brand */}
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}>
              <span className="text-xl">⚡</span>
            </div>
            <span className="font-display text-2xl font-black">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-black leading-tight text-white md:text-4xl">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            PEN2PRO RMIE turns your idea, skill, or lived experience into a real business roadmap — startup costs, launch steps, revenue strategy, and more. Start free. Upgrade when you're ready to go all in.
          </p>

          {/* Tier cards */}
          <div className="mt-8 space-y-3">
            {TIER_HIGHLIGHTS.map((tier) => (
              <div key={tier.name} className="flex gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4 transition-colors hover:border-opacity-60"
                style={{ "--hover-border": tier.color }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: `${tier.color}15`, border: `1px solid ${tier.color}40` }}>
                  {tier.icon}
                </div>
                <div>
                  <p className="text-sm font-black" style={{ color: tier.color }}>{tier.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-400">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 text-xs text-slate-600">
            <Link to="/pricing" className="hover:text-yellow-400 transition">View full pricing →</Link>
            <span>·</span>
            <Link to="/starter" className="hover:text-yellow-400 transition">Start free →</Link>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          {/* Mobile brand */}
          <div className="mb-6 flex items-center justify-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              <span>⚡</span>
            </div>
            <span className="font-display text-xl font-black">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
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

            <h1 className="mb-1 font-display text-2xl font-black text-white">
              {tab === "login" ? "Welcome back" : "Join PEN2PRO"}
            </h1>
            <p className="mb-6 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your business dashboard"
                : "Start building your free business roadmap today"}
            </p>

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
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
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
                    <label className="text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                    <span className="text-xs text-slate-600">Forgot password? Contact support</span>
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
                  className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Full name</label>
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
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
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
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
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
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Confirm password</label>
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
                  className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-xs text-slate-600">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Footer links */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to create an account?{" "}
              <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                Join the waitlist →
              </Link>
            </div>
            <div className="mt-3 text-center text-sm text-slate-600">
              Want to explore first?{" "}
              <Link to="/starter" className="font-semibold text-[#00C9B1] hover:opacity-80 transition">
                Try the free roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
