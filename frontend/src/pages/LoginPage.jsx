import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    color: "#FF8A00",
    desc: "Start with a free AI business blueprint — no credit card required. Get a 7-day action plan built for your specific idea.",
  },
  {
    icon: "⚡",
    tier: "Pro Strategy",
    color: "#2d9cff",
    desc: "Full 90-day execution plan, credit & funding readiness, outreach strategy, PDF export, and advanced AI refinement.",
  },
  {
    icon: "🧠",
    tier: "Elite Execution",
    color: "#d4af37",
    desc: "Financial projections, legal foundation checklist, vendor & funding resource center, automation, and priority support.",
  },
  {
    icon: "🏆",
    tier: "Legacy Founder",
    color: "#d4af37",
    desc: "Lifetime platform access — every feature we ever ship. Only 200 spots. One payment. No renewals. Ever.",
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
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl">
          <div className="grid items-start gap-10 lg:grid-cols-2">

            {/* ── Left: Side Panel ── */}
            <div className="hidden lg:block">
              <div className="mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl mb-4"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 24px rgba(30,136,229,0.4)" }}>
                  <span className="text-xl">⚡</span>
                </div>
                <h1 className="font-display text-3xl font-black text-white leading-tight mb-3">
                  Build your business roadmap.<br />
                  Save your blueprint.<br />
                  <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Upgrade when ready.
                  </span>
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  PEN2PRO RMIE turns your idea into a realistic action plan — business structure, launch steps, monetization strategy, credit readiness, and a path to execution.
                </p>
              </div>

              <div className="space-y-4">
                {TIER_PANELS.map((t) => (
                  <div key={t.tier} className="flex gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl"
                      style={{ background: `${t.color}18`, border: `1px solid ${t.color}44` }}>
                      {t.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: t.color }}>{t.tier}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-300">Start free.</span> No credit card required. Generate your first business blueprint in 60 seconds. Upgrade to Pro, Elite, or Founders when you're ready to go deeper.
                </p>
              </div>
            </div>

            {/* ── Right: Auth Form ── */}
            <div className="w-full">
              {/* Mobile headline */}
              <div className="lg:hidden mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                  <span className="text-xl">⚡</span>
                </div>
                <h1 className="font-display text-2xl font-black text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your PEN2PRO dashboard"
                    : "Start building your business roadmap today — free"}
                </p>
              </div>

              {/* Desktop heading */}
              <div className="hidden lg:block mb-6">
                <h2 className="font-display text-2xl font-black text-white">
                  {tab === "login" ? "Sign in to PEN2PRO" : "Create your account"}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login"
                    ? "Access your dashboard and business roadmaps"
                    : "Free to start. No credit card required."}
                </p>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
                {/* Tabs */}
                <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                  <button
                    onClick={() => { setTab("login"); setError(""); }}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setTab("register"); setError(""); }}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === "register" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#FF8A00] transition-colors">
                          Forgot password?
                        </Link>
                      </div>
                      <input
                        type="password"
                        required
                        value={loginForm.password}
                        onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-3 text-sm font-black disabled:opacity-60"
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-3 text-sm font-black disabled:opacity-60"
                    >
                      {loading ? "Creating account..." : "Create Account — Free"}
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      By creating an account you agree to our{" "}
                      <Link to="/terms" className="text-slate-400 hover:text-white">Terms</Link>
                      {" "}and{" "}
                      <Link to="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link>.
                    </p>
                  </form>
                )}

                {/* Bottom links */}
                <div className="mt-6 space-y-3 border-t border-[#1A2235] pt-5">
                  <div className="text-center text-sm text-slate-500">
                    Not ready to sign up?{" "}
                    <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
                      Start your free roadmap
                    </Link>
                  </div>
                  <div className="text-center text-sm text-slate-500">
                    Want to reserve your spot?{" "}
                    <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                      Join the waitlist
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tier quick links (mobile) */}
              <div className="mt-5 grid grid-cols-2 gap-3 lg:hidden">
                {[
                  { label: "Free Roadmap", href: "/starter", color: "#FF8A00" },
                  { label: "Pro Plan", href: "/pro", color: "#2d9cff" },
                  { label: "Elite Plan", href: "/elite", color: "#d4af37" },
                  { label: "Founders Lifetime", href: "/founders", color: "#d4af37" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-3 py-2.5 text-center text-xs font-bold transition-colors hover:border-opacity-80"
                    style={{ color: l.color }}
                  >
                    {l.label}
                  </Link>
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
