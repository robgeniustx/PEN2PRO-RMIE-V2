import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#94a3b8",
    icon: "🗺️",
    items: ["1 AI business blueprint", "Startup checklist", "Brand name ideas", "Basic roadmap preview"],
  },
  {
    name: "Pro — $249/mo",
    color: "#D4A017",
    icon: "⚡",
    items: ["Full 7/30/90-day plan", "Sales scripts & outreach", "Credit readiness", "PDF export", "AI refinement"],
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "💎",
    items: ["Everything in Pro", "Financial projections", "Funding partner center", "Done-with-you guidance", "Priority support"],
  },
  {
    name: "Legacy Founder — $1,899",
    color: "#FF8A00",
    icon: "🏆",
    items: ["Lifetime access", "All current & future features", "Command Center + Voice Agent", "Website Builder", "Founder badge"],
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTier, setActiveTier] = useState(1);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  // Rotate tier benefit cards
  useEffect(() => {
    const id = setInterval(() => setActiveTier((t) => (t + 1) % TIER_BENEFITS.length), 3500);
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-4 py-16 gap-12">

        {/* ── LEFT PANEL: Form ── */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="mb-5 flex items-center gap-2.5 group w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-base"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                ⚡
              </div>
              <span className="font-display text-xl font-black leading-none">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h1 className="font-display text-3xl font-black text-white mt-4">
              {tab === "login" ? "Welcome back." : "Start building today."}
            </h1>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {tab === "login"
                ? "Build your business roadmap. Save your blueprint. Upgrade when ready."
                : "Create your free account and get your first roadmap in under 5 minutes."}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-8 bg-[#0F1520]">
            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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
                    onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
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
                    onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-black rounded-xl disabled:opacity-60"
                >
                  {loading ? "Signing in…" : "Sign In →"}
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
                    onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
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
                    onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
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
                    onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
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
                    onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-black rounded-xl disabled:opacity-60"
                >
                  {loading ? "Creating account…" : "Create Account — Free →"}
                </button>
                <p className="text-center text-xs text-slate-600">
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
        </div>

        {/* ── RIGHT PANEL: Tier Benefits ── */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">What you get with PEN2PRO</p>
            <h2 className="font-display text-2xl font-black text-white leading-snug">
              Choose the tier that fits<br />where you're building.
            </h2>
          </div>

          {/* Animated tier cards */}
          <div className="space-y-3">
            {TIER_BENEFITS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTier(i)}
                className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeTier === i
                    ? "border-opacity-60 bg-[#0F1520]"
                    : "border-[#1A2235] bg-[#0A0F1E] opacity-60 hover:opacity-80"
                }`}
                style={{ borderColor: activeTier === i ? t.color : undefined }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm mb-2" style={{ color: activeTier === i ? t.color : "#94a3b8" }}>
                      {t.name}
                    </p>
                    {activeTier === i && (
                      <ul className="space-y-1">
                        {t.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="shrink-0 text-[10px]" style={{ color: t.color }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Link to="/pricing" className="flex-1 rounded-xl border border-[#1A2D50] py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              View All Plans
            </Link>
            <Link to="/starter" className="flex-1 rounded-xl py-2.5 text-center text-sm font-black text-[#080C14] btn-gold">
              Start Free
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
