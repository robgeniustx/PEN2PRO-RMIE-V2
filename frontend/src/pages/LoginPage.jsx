import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_TIERS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    desc: "Starter business blueprint — 7-day action plan, LLC checklist, brand ideas.",
    color: "#D4A017",
  },
  {
    icon: "📊",
    name: "Pro Strategy Tools",
    desc: "Full 90-day execution plan, sales scripts, credit readiness, PDF export.",
    color: "#2d9cff",
  },
  {
    icon: "🧠",
    name: "Elite Execution",
    desc: "Financial projections, done-with-you guidance, funding resource center.",
    color: "#00C9B1",
  },
  {
    icon: "♾️",
    name: "Legacy Founder Access",
    desc: "Lifetime access. Every feature. One payment. 200 spots only.",
    color: "#D4A017",
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

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT PANEL — value proposition ── */}
        <div
          className="hidden lg:flex lg:w-[48%] flex-col justify-between px-12 py-16 relative overflow-hidden"
          style={{ background: "linear-gradient(145deg, #0A1628 0%, #080C14 60%, #0D1F3C 100%)" }}
        >
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #1E88E5 0%, transparent 65%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 65%)", filter: "blur(60px)" }} />
            <div className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }} />
          </div>

          {/* Top — brand + headline */}
          <div className="relative">
            <Link to="/" className="mb-10 inline-flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.4)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="mb-4 font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="mb-10 text-slate-400 leading-relaxed">
              PEN2PRO RMIE turns your idea, skill, or lived experience into a real business roadmap — with the structure, strategy, and execution support you need to actually move.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {PLAN_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520]/60 p-4 backdrop-blur-sm"
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}30` }}
                  >
                    {tier.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — founder quote */}
          <div className="relative mt-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520]/80 p-6">
            <p className="mb-4 text-3xl font-black leading-none" style={{ color: "#D4A017" }}>"</p>
            <p className="text-sm italic leading-relaxed text-slate-300">
              PEN2PRO was built for people who have the drive but needed the direction. Start free. The roadmap is waiting.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                ⚡
              </div>
              <div>
                <p className="text-sm font-bold text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-slate-500">Founder — PEN2PRO · Veteran · Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 lg:px-12"
          style={{ background: "#0A0F1E" }}>
          <div className="w-full max-w-md">

            {/* Mobile brand mark */}
            <div className="mb-8 text-center lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}>
                  <span className="text-lg">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2D50] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2D50] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "bg-[#D4A017] text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "bg-[#D4A017] text-[#080C14]" : "text-slate-400 hover:text-white"
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3.5 text-sm font-black transition-all hover:scale-[1.01] disabled:opacity-60"
                    style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", color: "#080C14", boxShadow: "0 0 25px rgba(212,160,23,0.3)" }}
                  >
                    {loading ? "Signing in…" : "Sign In to PEN2PRO"}
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3.5 text-sm font-black transition-all hover:scale-[1.01] disabled:opacity-60"
                    style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", color: "#080C14", boxShadow: "0 0 25px rgba(212,160,23,0.3)" }}
                  >
                    {loading ? "Creating account…" : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist CTA */}
              <div className="mt-6 border-t border-[#1A2D50] pt-5 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold transition-colors hover:opacity-80" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Starter nudge */}
            <p className="mt-5 text-center text-xs text-slate-600">
              Want to try first?{" "}
              <Link to="/starter" className="font-semibold text-slate-400 hover:text-white transition-colors">
                Start your free roadmap →
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
