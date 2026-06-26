import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    color: "#1E88E5",
    glow: "rgba(30,136,229,0.20)",
    badge: "FREE",
    name: "Free Roadmap",
    desc: "AI-generated business blueprint with 7-day action plan, offer structure, and startup checklist.",
    href: "/starter",
  },
  {
    color: "#D4A017",
    glow: "rgba(212,160,23,0.20)",
    badge: "PRO",
    name: "Pro Strategy Tools",
    desc: "Full 90-day execution plan, outreach scripts, credit readiness checklist, PDF export, and branding support.",
    href: "/pro",
  },
  {
    color: "#00C9B1",
    glow: "rgba(0,201,177,0.20)",
    badge: "ELITE",
    name: "Elite Execution Support",
    desc: "Financial projections, funding resource center, legal foundation checklist, CRM, and automation workflows.",
    href: "/elite",
  },
  {
    color: "#FF8A00",
    glow: "rgba(255,138,0,0.20)",
    badge: "FOUNDERS",
    name: "Legacy Founder Access",
    desc: "Lifetime platform access. Early adopter pricing. Full feature suite + Founders recognition. Limited to 200 spots.",
    href: "/founders",
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

      {/* background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-stretch gap-0 px-4 py-12 lg:flex-row lg:items-center lg:gap-16">

        {/* ── LEFT PANEL — brand + tier cards ── */}
        <div className="hidden lg:flex lg:w-[46%] lg:flex-col lg:gap-8 shrink-0">

          {/* Brand */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}>
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <h2 className="font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Build your business roadmap.<br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span><br />
              Upgrade when ready.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Start free. No credit card needed. Your roadmap is saved to your account — pick up where you left off and upgrade when you're ready to execute at the next level.
            </p>
          </div>

          {/* Tier cards */}
          <div className="grid grid-cols-1 gap-3">
            {TIER_PANELS.map((tier) => (
              <Link
                key={tier.badge}
                to={tier.href}
                className="group flex items-start gap-4 rounded-2xl border p-4 transition-all hover:scale-[1.01]"
                style={{
                  borderColor: `${tier.color}33`,
                  background: `linear-gradient(135deg, ${tier.glow} 0%, rgba(15,21,32,0.95) 60%)`,
                }}
              >
                <div className="shrink-0 rounded-lg px-2 py-1 text-[10px] font-black tracking-widest"
                  style={{ background: `${tier.color}22`, color: tier.color, border: `1px solid ${tier.color}44` }}>
                  {tier.badge}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{tier.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
                </div>
                <span className="ml-auto shrink-0 self-center text-xs text-slate-600 transition-colors group-hover:text-slate-400">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="w-full lg:max-w-md lg:flex-1">

          {/* Mobile brand header */}
          <div className="mb-8 lg:hidden">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}>
                <span className="text-2xl leading-none">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                Build your business roadmap.
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Save your blueprint. Upgrade when ready.
              </p>
            </div>
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
                  className="btn-gold w-full py-3 text-sm font-bold"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
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
                  className="btn-gold w-full py-3 text-sm font-bold"
                >
                  {loading ? "Creating account..." : "Create Account — Free"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
                <p className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("login"); setError(""); }}
                    className="font-semibold transition-colors"
                    style={{ color: "#D4A017" }}
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* Bottom link */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold transition-colors" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Mobile tier teaser */}
          <div className="mt-6 grid grid-cols-2 gap-2 lg:hidden">
            {TIER_PANELS.map((tier) => (
              <Link
                key={tier.badge}
                to={tier.href}
                className="rounded-xl border p-3 text-center transition-all hover:scale-[1.02]"
                style={{ borderColor: `${tier.color}33`, background: `${tier.glow}` }}
              >
                <span className="block text-[10px] font-black tracking-widest" style={{ color: tier.color }}>{tier.badge}</span>
                <span className="mt-0.5 block text-xs font-semibold text-slate-300">{tier.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
