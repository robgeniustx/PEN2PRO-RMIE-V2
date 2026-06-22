import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#FF8A00",
    badge: "Free Forever",
    items: [
      "1 AI Business Roadmap",
      "Basic startup checklist",
      "Brand name suggestions",
      "LLC setup guidance",
    ],
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    badge: "Most Popular",
    items: [
      "Full RMIE blueprint engine",
      "7 / 30 / 90-day action plan",
      "Credit & funding checklist",
      "Outreach strategy + scripts",
      "PDF & email export",
    ],
  },
  {
    name: "Elite — $499/mo",
    color: "#d4af37",
    badge: "Best Value",
    items: [
      "Everything in Pro",
      "Financial projections",
      "Legal foundation checklist",
      "Vendor & funding resource center",
      "Priority support",
    ],
  },
  {
    name: "Founders Lifetime",
    color: "#d4af37",
    badge: "200 Spots Only",
    items: [
      "Lifetime platform access",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "12-month 10M framework",
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
  const [activeTier, setActiveTier] = useState(0);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  // Rotate through tiers for the benefits panel
  useEffect(() => {
    const id = setInterval(() => setActiveTier((t) => (t + 1) % TIER_BENEFITS.length), 4000);
    return () => clearInterval(id);
  }, []);

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

  const tier = TIER_BENEFITS[activeTier];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT: Benefits Panel ── */}
        <div
          className="hidden lg:flex lg:w-[45%] xl:w-[42%] flex-col justify-between px-10 py-16 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0D1528 0%, #080C14 100%)", borderRight: "1px solid #1A2D50" }}
        >
          {/* Background orb */}
          <div
            className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 -right-24 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 65%)", filter: "blur(50px)" }}
          />

          {/* Top: Brand & headline */}
          <div className="relative z-10">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="font-display text-3xl font-black leading-tight text-white mb-3">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Every plan starts free. The full RMIE engine — business roadmaps, credit readiness, funding strategy, outreach scripts, and execution support — scales with you.
            </p>
          </div>

          {/* Middle: Tier carousel */}
          <div className="relative z-10 my-10">
            {/* Tier selector pills */}
            <div className="flex gap-2 mb-5 flex-wrap">
              {TIER_BENEFITS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTier(i)}
                  className="rounded-full px-3 py-1 text-xs font-bold transition-all"
                  style={{
                    background: i === activeTier ? tier.color + "22" : "transparent",
                    border: `1px solid ${i === activeTier ? tier.color : "#1A2D50"}`,
                    color: i === activeTier ? tier.color : "#64748b",
                  }}
                >
                  {t.name.split(" —")[0]}
                </button>
              ))}
            </div>

            {/* Active tier card */}
            <div
              className="rounded-2xl p-6 transition-all duration-500"
              style={{ border: `1px solid ${tier.color}33`, background: tier.color + "0a" }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-white">{tier.name}</p>
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest"
                  style={{ background: tier.color + "22", color: tier.color, border: `1px solid ${tier.color}44` }}
                >
                  {tier.badge}
                </span>
              </div>
              <ul className="space-y-2.5">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="shrink-0 font-bold" style={{ color: tier.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t" style={{ borderColor: tier.color + "22" }}>
                <Link
                  to={tier.name.includes("Free") ? "/starter" : tier.name.includes("Founders") ? "/founders" : tier.name.includes("Elite") ? "/elite" : "/pro"}
                  className="text-xs font-bold hover:underline"
                  style={{ color: tier.color }}
                >
                  Learn more about {tier.name.split(" —")[0]} →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom: Trust signals */}
          <div className="relative z-10 space-y-3">
            {[
              "No credit card required to start",
              "Free roadmap in under 5 minutes",
              "Built for entrepreneurs by entrepreneurs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-slate-500">
                <span className="text-[#FF8A00]">⚡</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Auth Form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-14">
          <div className="w-full max-w-md">
            {/* Mobile brand header (hidden on lg+) */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-lg font-black text-[#080C14]">
                ⚡
              </div>
              <div className="font-display text-2xl font-black">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
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
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">Forgot password?</Link>
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
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setTab("register")} className="font-semibold" style={{ color: "#D4A017" }}>
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
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
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

            {/* Mobile tier benefits (hidden on lg+) */}
            <div className="lg:hidden mt-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">What you get with PEN2PRO</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Free Roadmap", desc: "AI business blueprint, free forever", color: "#FF8A00" },
                  { label: "Pro — $249/mo", desc: "Full toolkit, branding, export", color: "#2d9cff" },
                  { label: "Elite — $499/mo", desc: "Strategist guidance, projections", color: "#d4af37" },
                  { label: "Founders Lifetime", desc: "Everything, one-time payment", color: "#d4af37" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#1A2235] p-3">
                    <p className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/pricing" className="mt-4 block text-center text-xs font-semibold text-slate-500 hover:text-[#D4A017] transition-colors">
                View full pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
