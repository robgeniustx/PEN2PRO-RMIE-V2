import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    color: "#00C9B1",
    desc: "Starter blueprint in under 5 minutes — no credit card, no commitment.",
  },
  {
    icon: "🚀",
    name: "Pro — $249/mo",
    color: "#2d9cff",
    desc: "Full RMIE roadmap, branding support, credit & funding readiness, outreach strategy + PDF export.",
  },
  {
    icon: "💎",
    name: "Elite — $499/mo",
    color: "#9B59B6",
    desc: "Advanced strategist guidance, financial projections, vendor resources & done-with-you support.",
  },
  {
    icon: "⚡",
    name: "Legacy Founder — $1,899",
    color: "#D4A017",
    desc: "Lifetime access. Everything in Elite. Founder recognition, priority support & early feature access.",
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
    <div className="min-h-screen flex overflow-hidden" style={{ background: "#080C14" }}>

      {/* ── LEFT PANEL (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[44%] xl:w-[42%] flex-col relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #0D1A35 0%, #0A1020 60%, #080C14 100%)",
          borderRight: "1px solid #1A2235",
        }}
      >
        {/* Background orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
          />
          <div
            className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full p-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-12 shrink-0">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
            >
              <span className="text-base leading-none select-none">⚡</span>
            </div>
            <span className="font-display text-xl font-black tracking-tight leading-none">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </Link>

          {/* Headline */}
          <div className="mb-8 shrink-0">
            <h2 className="font-display text-2xl xl:text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap. Save your blueprint. Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea into a real execution plan with credit readiness, funding strategy, and launch steps.
            </p>
          </div>

          {/* Tier cards */}
          <div className="flex-1 flex flex-col justify-center space-y-3 mb-8">
            {TIER_BENEFITS.map((tier) => (
              <div
                key={tier.name}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#080C14]/50 p-4 transition hover:border-[#2A3245]"
              >
                <div className="text-xl shrink-0 mt-0.5">{tier.icon}</div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: tier.color }}>{tier.name}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520]/80 p-5 shrink-0">
            <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
              "I went from a napkin idea to a full LLC, business bank account, and my first $2,400 month in 47 days. PEN2PRO didn't give me motivation — it gave me a system."
            </p>
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                MT
              </div>
              <div>
                <p className="text-xs font-bold text-white">Marcus T.</p>
                <p className="text-[10px] text-slate-500">Pressure Washing Owner, Houston TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (form) ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 overflow-y-auto">
        <div className="w-full max-w-[420px]">

          {/* Mobile-only logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-base leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-white">
              {tab === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard"
                : "Start building your business roadmap — free"}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                  className="btn-gold w-full py-3.5 text-sm font-bold rounded-xl transition disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-center text-sm text-slate-500">
                  No account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("register"); setError(""); }}
                    className="font-semibold transition-colors"
                    style={{ color: "#D4A017" }}
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
                  className="btn-gold w-full py-3.5 text-sm font-bold rounded-xl transition disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Free Account"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold transition-colors" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
              ← Back to PEN2PRO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
