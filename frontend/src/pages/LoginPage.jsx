import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    color: "#1A2235",
    accent: "#D4A017",
    icon: "🗺️",
    tier: "Free Roadmap",
    desc: "Start building immediately — no credit card. Get a full business blueprint, brand name ideas, startup checklist, and 7-day action plan.",
    href: "/starter",
    cta: "Start Free",
  },
  {
    color: "#1A2235",
    accent: "#D4A017",
    icon: "⚡",
    tier: "Pro — $249/mo",
    desc: "Full 90-day execution plan, sales scripts, credit readiness checklist, AI refinement, branding support, and PDF export.",
    href: "/pro",
    cta: "Explore Pro",
  },
  {
    color: "#1A2235",
    accent: "#00C9B1",
    icon: "💎",
    tier: "Elite — $499/mo",
    desc: "Everything in Pro plus financial projections, funding partner resources, done-with-you guidance, and priority support.",
    href: "/elite",
    cta: "Explore Elite",
  },
  {
    color: "#1A2235",
    accent: "#FF8A00",
    icon: "🏆",
    tier: "Founders Lifetime — $1,899",
    desc: "Lifetime access to every PEN2PRO feature. One payment. No monthly fees. Only 200 spots available globally.",
    href: "/founders",
    cta: "Claim Spot",
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

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-start gap-12 px-5 py-20 lg:flex-row lg:items-center">

        {/* ── LEFT: Value panel ── */}
        <div className="w-full lg:flex-1">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            ⚡ PEN2PRO RMIE
          </div>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white md:text-4xl">
            Build your business roadmap.<br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint. Upgrade when ready.
            </span>
          </h2>
          <p className="mt-4 mb-8 text-slate-400 leading-relaxed">
            PEN2PRO RMIE gives you a real execution plan — not motivation. Start free, then unlock
            advanced tools as your business grows.
          </p>

          <div className="space-y-3">
            {TIER_HIGHLIGHTS.map((t) => (
              <div
                key={t.tier}
                className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] px-5 py-4 hover:border-[#1A2D50] transition-colors"
              >
                <span className="text-2xl shrink-0 mt-0.5">{t.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-white">{t.tier}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
                <Link
                  to={t.href}
                  className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition hover:opacity-80"
                  style={{ color: t.accent, border: `1px solid ${t.accent}40` }}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Auth form ── */}
        <div className="w-full lg:w-[420px] shrink-0">
          {/* Tabs */}
          <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

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
                    <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition">
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
                    placeholder="Your name"
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

          {/* Social proof */}
          <p className="mt-5 text-center text-xs text-slate-600">
            Joined by 2,847+ entrepreneurs, veterans, and returning citizens building real businesses.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
