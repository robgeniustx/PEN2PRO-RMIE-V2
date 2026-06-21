import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    name: "Free Roadmap",
    color: "#FF8A00",
    icon: "🗺️",
    desc: "AI business roadmap, brand name ideas, startup checklist, LLC guidance — free forever.",
    href: "/starter",
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    desc: "Full 7/30/90-day plan, credit & funding readiness, outreach scripts, PDF export, AI refinement.",
    href: "/pro",
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🏆",
    desc: "Everything Pro + financial projections, done-with-you strategy, vendor center, priority support.",
    href: "/elite",
  },
  {
    name: "Legacy Founder",
    color: "#D4A017",
    icon: "👑",
    desc: "Lifetime access, every feature, founder badge, locked-in founding pricing. 200 spots only.",
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
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-5 py-16 lg:py-10">

        {/* ── LEFT PANEL — value prop ── */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:pr-8">
          {/* Brand */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 24px rgba(30,136,229,0.4)" }}
            >
              <span className="text-2xl">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 font-display text-3xl font-black leading-tight text-white xl:text-4xl">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h1>
          <p className="mb-10 text-slate-400 leading-relaxed">
            PEN2PRO RMIE gives you the structure, strategy, and execution plan to turn any idea into a real business — free to start, premium to scale.
          </p>

          {/* Tier highlights */}
          <div className="space-y-4">
            {TIER_HIGHLIGHTS.map((t) => (
              <Link
                key={t.name}
                to={t.href}
                className="group flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-all hover:border-opacity-80"
                style={{ "--hover-color": t.color }}
              >
                <span className="text-2xl shrink-0 mt-0.5">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm" style={{ color: t.color }}>{t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
                <span className="shrink-0 text-slate-600 group-hover:text-slate-400 transition-colors text-sm mt-0.5">→</span>
              </Link>
            ))}
          </div>

          {/* Social proof nudge */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["M", "D", "S", "R"].map((l) => (
                <div key={l} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080C14] bg-[#1A2D50] text-[10px] font-black text-white">
                  {l}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              <span className="font-bold text-slate-300">200+</span> builders on the waitlist
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-[420px] shrink-0">
          {/* Mobile brand */}
          <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
            >
              <span className="text-xl">⚡</span>
            </div>
            <span className="font-display text-xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Mobile headline */}
          <div className="mb-6 text-center lg:hidden">
            <h2 className="font-display text-2xl font-black text-white">Build. Save. Upgrade.</h2>
            <p className="mt-1 text-sm text-slate-400">Your AI business roadmap platform.</p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-7 shadow-2xl" style={{ background: "#0F1520" }}>
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

            {/* Context line */}
            <p className="mb-6 text-center text-sm text-slate-400">
              {tab === "login"
                ? "Welcome back. Your roadmap is waiting."
                : "Start building your business roadmap — free."}
            </p>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Login Form */}
            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email address</label>
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
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</label>
                    <Link to="/waitlist" className="text-xs text-[#FF8A00] hover:text-[#D4A017] transition-colors">
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
                  className="btn-gold mt-2 w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-400 uppercase tracking-wider">Full name</label>
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
                  <label className="mb-1.5 block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email address</label>
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
                  <label className="mb-1.5 block text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</label>
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
                  <label className="mb-1.5 block text-xs font-semibold text-slate-400 uppercase tracking-wider">Confirm password</label>
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
                  className="btn-gold mt-2 w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-[11px] text-slate-600">
                  By creating an account you agree to our{" "}
                  <Link to="/terms" className="text-slate-500 underline hover:text-slate-400">Terms</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-slate-500 underline hover:text-slate-400">Privacy Policy</Link>.
                </p>
              </form>
            )}

            {/* Waitlist nudge */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:text-[#D4A017] transition-colors">
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-5 flex items-center justify-center gap-5 text-xs text-slate-600">
            <span>🔒 Secure login</span>
            <span>·</span>
            <span>Free to start</span>
            <span>·</span>
            <span>No credit card</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
