import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#1E88E5",
    icon: "🗺️",
    desc: "Get a starter business blueprint instantly — no card required.",
  },
  {
    name: "Pro Strategy Tools",
    color: "#D4A017",
    icon: "⚡",
    desc: "Full roadmap, 90-day execution plan, CRM, sales scripts & exports.",
  },
  {
    name: "Elite Execution",
    color: "#00C9B1",
    icon: "🎯",
    desc: "Advanced strategist guidance, financial projections & funding resources.",
  },
  {
    name: "Legacy Founder Access",
    color: "#FF8A00",
    icon: "🏆",
    desc: "Lifetime access — everything included, locked in before launch.",
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

        {/* ── Left panel — info ── */}
        <div
          className="hidden lg:flex lg:w-[45%] flex-col justify-between px-14 py-16 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0D1528 0%, #0A0F1E 100%)", borderRight: "1px solid #1A2D50" }}
        >
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }} />
          </div>

          {/* Top — brand */}
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 20px rgba(30,136,229,0.4)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.<br />
              <span style={{ color: "#FF8A00" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              PEN2PRO RMIE gives you a real business plan — not motivation. Start free, upgrade when you are ready to execute.
            </p>
          </div>

          {/* Middle — tier cards */}
          <div className="relative z-10 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">What's inside PEN2PRO</p>
            {TIER_BENEFITS.map((t) => (
              <div key={t.name} className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <div className="text-2xl shrink-0">{t.icon}</div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom — disclaimer */}
          <p className="relative z-10 text-xs text-slate-600 leading-relaxed">
            PEN2PRO does not guarantee income, funding approval, or business results. Results depend on individual effort and market conditions.
          </p>
        </div>

        {/* ── Right panel — form ── */}
        <div className="flex w-full lg:w-[55%] flex-col items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Header */}
            <div className="text-center mb-8">
              {/* Show logo only on small screens where the left panel is hidden */}
              <Link to="/" className="lg:hidden flex items-center justify-center gap-2 mb-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                  <span className="text-base">⚡</span>
                </div>
                <span className="font-display text-xl font-black">
                  <span className="text-white">PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>

              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
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
                      <Link to="/waitlist" className="text-xs text-[#D4A017] hover:underline">Forgot password?</Link>
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
                  <p className="text-center text-sm text-slate-500">
                    No account yet?{" "}
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
                      placeholder="Your full name"
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

              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Social proof */}
            <p className="mt-6 text-center text-xs text-slate-600">
              Trusted by entrepreneurs, veterans, returning citizens, and small business owners.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
