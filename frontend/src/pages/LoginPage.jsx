import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    badge: "Free",
    badgeColor: "#64748b",
    title: "Free Roadmap",
    desc: "Get your first AI business blueprint in under 5 minutes.",
    points: [
      "1 AI Business Blueprint",
      "Startup cost estimate",
      "Brand name suggestions",
      "LLC & EIN checklist",
    ],
    href: "/starter",
    cta: "Start Free →",
    ctaColor: "#64748b",
  },
  {
    badge: "Pro",
    badgeColor: "#2d9cff",
    title: "Pro Strategy Tools",
    desc: "Full roadmap, tracking, export, and outreach strategy.",
    points: [
      "Full 7 / 30 / 90-day execution plan",
      "Sales scripts & outreach campaigns",
      "Credit & funding readiness checklist",
      "PDF/email export",
    ],
    href: "/pro",
    cta: "$249/mo →",
    ctaColor: "#2d9cff",
  },
  {
    badge: "Elite",
    badgeColor: "#d4af37",
    title: "Elite Execution Support",
    desc: "Advanced strategy, financial projections, and priority support.",
    points: [
      "Everything in Pro",
      "Financial projections & vendor resources",
      "Advanced AI strategist guidance",
      "Priority support",
    ],
    href: "/elite",
    cta: "$499/mo →",
    ctaColor: "#d4af37",
  },
  {
    badge: "Founders",
    badgeColor: "#d4af37",
    title: "Legacy Founder Access",
    desc: "One payment. Lifetime access. Every feature we ever ship.",
    points: [
      "Lifetime platform access — no renewals",
      "All Pro + Elite + future features",
      "Founder recognition badge",
      "Only 200 spots available",
    ],
    href: "/founders",
    cta: "$1,899 lifetime →",
    ctaColor: "#d4af37",
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

      <div className="grid min-h-[calc(100vh-64px)] md:grid-cols-2">

        {/* ── Left Benefits Panel ── */}
        <div className="hidden md:flex flex-col justify-center px-10 py-14 bg-[#0A0F1E] border-r border-[#1A2235] relative overflow-hidden">
          {/* Background orb */}
          <div
            className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
          />
          <div
            className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 65%)", filter: "blur(40px)" }}
          />

          <div className="relative">
            {/* Brand mark */}
            <div className="mb-8 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="mb-2 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.
            </h2>
            <p className="mb-8 text-base text-slate-400 leading-relaxed">
              Save your blueprint. Upgrade when ready.
            </p>

            {/* Tier benefit cards */}
            <div className="space-y-3">
              {TIER_BENEFITS.map((tier) => (
                <div
                  key={tier.badge}
                  className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4 transition-colors hover:border-[#1A2D50]"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span
                        className="inline-block rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-widest mb-1"
                        style={{ color: tier.badgeColor, border: `1px solid ${tier.badgeColor}44`, background: `${tier.badgeColor}11` }}
                      >
                        {tier.badge}
                      </span>
                      <p className="text-sm font-bold text-white">{tier.title}</p>
                    </div>
                    <Link
                      to={tier.href}
                      className="shrink-0 text-xs font-bold transition-opacity hover:opacity-80"
                      style={{ color: tier.ctaColor }}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                  <ul className="space-y-1">
                    {tier.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-slate-400">
                        <span style={{ color: tier.ctaColor }}>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600 leading-relaxed">
              Start free — no credit card required. Upgrade when you're ready to execute.
            </p>
          </div>
        </div>

        {/* ── Right: Form Panel ── */}
        <div className="flex items-center justify-center px-6 py-14">
          <div className="w-full max-w-md">

            {/* Mobile header */}
            <div className="text-center mb-8 md:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-xl">⚡</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">PEN2PRO</p>
            </div>

            {/* Desktop heading */}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>.
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

            {/* Mobile tier links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs md:hidden">
              {[["Free Roadmap", "/starter"], ["Pro", "/pro"], ["Elite", "/elite"], ["Founders", "/founders"]].map(([label, path]) => (
                <Link key={path} to={path} className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
