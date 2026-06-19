import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_VALUE_PROPS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    price: "$0",
    desc: "Start with a full AI-generated business blueprint. No credit card. No fluff.",
    color: "#1E88E5",
    border: "rgba(30,136,229,0.3)",
  },
  {
    icon: "📊",
    name: "Pro Strategy Tools",
    price: "$249/mo",
    desc: "Full roadmap, 90-day execution plan, branding support, PDF export, and outreach scripts.",
    color: "#D4A017",
    border: "rgba(212,160,23,0.4)",
  },
  {
    icon: "⚡",
    name: "Elite Execution Support",
    price: "$499/mo",
    desc: "Advanced strategist guidance, financial projections, funding readiness, and done-with-you support.",
    color: "#00C9B1",
    border: "rgba(0,201,177,0.3)",
  },
  {
    icon: "👑",
    name: "Legacy Founder Access",
    price: "$1,899 lifetime",
    desc: "Lifetime access, founder recognition, priority support, and every future feature — locked in forever.",
    color: "#FF8A00",
    border: "rgba(255,138,0,0.4)",
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

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT VALUE PANEL (desktop) ── */}
        <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-between border-r border-[#1A2D50] bg-[#0B1120] px-10 py-12">
          {/* Brand + headline */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.<br />
              <span style={{ color: "#FF8A00" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-slate-400">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — gives you the structure, strategy, and tools to turn your idea into real income.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_VALUE_PROPS.map((t) => (
                <div
                  key={t.name}
                  className="flex items-start gap-4 rounded-xl border p-4 transition-colors hover:bg-[#0F1520]"
                  style={{ borderColor: t.border, background: "rgba(15,21,32,0.6)" }}
                >
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-black text-white">{t.name}</span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ color: t.color, background: `${t.border}` }}>
                        {t.price}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust bar */}
          <div className="mt-8 border-t border-[#1A2D50] pt-6">
            <p className="text-xs text-slate-600">
              Built by Robert Green — veteran, entrepreneur, and founder who needed this tool and couldn't find it.{" "}
              <Link to="/about" className="font-semibold hover:text-slate-400 transition-colors" style={{ color: "#1E88E5" }}>Read the story →</Link>
            </p>
          </div>
        </div>

        {/* ── RIGHT FORM PANEL ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile brand badge */}
            <div className="mb-6 flex flex-col items-center lg:hidden">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-2xl">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <div className="mb-8 text-center lg:text-left">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your free account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — no credit card"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "btn-gold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "btn-gold" : "text-slate-400 hover:text-white"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Forgot password?</Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In to PEN2PRO"}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold transition-colors hover:opacity-80" style={{ color: "#D4A017" }}>
                  Join the waitlist instead
                </Link>
              </div>
            </div>

            {/* Mobile tier hint */}
            <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#0B1120] p-4 lg:hidden">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">What you get</p>
              <div className="space-y-2">
                {TIER_VALUE_PROPS.map((t) => (
                  <div key={t.name} className="flex items-center gap-2">
                    <span className="text-base">{t.icon}</span>
                    <span className="text-xs text-slate-400"><span className="font-semibold text-white">{t.name}</span> — {t.price}</span>
                  </div>
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
