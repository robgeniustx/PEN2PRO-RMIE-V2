import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    badge: "Free Forever",
    color: "#64748B",
    borderColor: "rgba(100,116,139,0.4)",
    bgColor: "rgba(100,116,139,0.06)",
    icon: "🗺️",
    points: ["1 AI business roadmap", "Basic strategy preview", "Brand name ideas", "LLC setup checklist"],
  },
  {
    badge: "Pro — $249/mo",
    color: "#2d9cff",
    borderColor: "rgba(45,156,255,0.4)",
    bgColor: "rgba(45,156,255,0.06)",
    icon: "📊",
    points: ["Full RMIE blueprint", "7 / 30 / 90-day plans", "Outreach scripts", "Credit & funding checklist", "PDF export"],
  },
  {
    badge: "Elite — $499/mo",
    color: "#d4af37",
    borderColor: "rgba(212,175,55,0.4)",
    bgColor: "rgba(212,175,55,0.06)",
    icon: "⚡",
    points: ["Everything in Pro", "Financial projections", "Legal foundation tools", "Vendor resource center", "Priority support"],
  },
  {
    badge: "Legacy Founder",
    color: "#FF8A00",
    borderColor: "rgba(255,138,0,0.4)",
    bgColor: "rgba(255,138,0,0.06)",
    icon: "♾️",
    points: ["Lifetime access — one payment", "Full platform + every future feature", "P2P Command Center & Voice Agent", "200 spots — never offered again"],
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
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col md:flex-row">

        {/* ── LEFT PANEL — value proposition ── */}
        <div className="flex flex-col justify-center px-8 py-12 md:w-[52%] md:py-20 md:pl-12 md:pr-10">

          {/* Logo mark */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}>
              <span className="text-lg leading-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 font-display text-3xl font-black leading-tight text-white md:text-4xl">
            Build your business roadmap.<br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
          </h1>
          <p className="mb-8 text-base text-slate-400 leading-relaxed">
            Upgrade when ready. Your roadmap stays with you — free forever, Pro when you're serious, Elite when you're building at scale.
          </p>

          {/* Tier benefit cards */}
          <div className="space-y-3">
            {TIER_BENEFITS.map((tier) => (
              <div key={tier.badge}
                className="rounded-xl border px-4 py-3"
                style={{ borderColor: tier.borderColor, background: tier.bgColor }}>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{tier.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-widest mb-1.5" style={{ color: tier.color }}>
                      {tier.badge}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {tier.points.map((pt) => (
                        <span key={pt} className="text-xs text-slate-400">
                          <span style={{ color: tier.color }}>·</span> {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span>🔐 Secure login</span>
            <span>·</span>
            <span>No credit card for free plan</span>
            <span>·</span>
            <Link to="/starter" className="text-[#FF8A00] hover:underline font-semibold">Start free without an account →</Link>
          </div>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="flex flex-col justify-center border-l border-[#1A2235] px-8 py-12 md:w-[48%] md:py-20 md:px-12">

          <h2 className="mb-1 font-display text-2xl font-black text-white">
            {tab === "login" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mb-8 text-sm text-slate-400">
            {tab === "login"
              ? "Sign in to access your PEN2PRO dashboard."
              : "Your free roadmap starts the moment you sign up."}
          </p>

          {/* Tab toggle */}
          <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#050810" }}>
            <button
              onClick={() => { setTab("login"); setError(""); }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab("register"); setError(""); }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                tab === "register" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Error banner */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Login Form */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                  <Link to="/waitlist" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In to PEN2PRO"}
              </button>
            </form>
          )}

          {/* Register Form */}
          {tab === "register" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Full name</label>
                <input
                  type="text"
                  required
                  value={registerForm.name}
                  onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Robert Green"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
                <input
                  type="email"
                  required
                  value={registerForm.email}
                  onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                <input
                  type="password"
                  required
                  value={registerForm.password}
                  onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Min 8 characters"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Confirm password</label>
                <input
                  type="password"
                  required
                  value={registerForm.confirm}
                  onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#050810] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
              <p className="text-center text-xs text-slate-600">
                By creating an account you agree to our{" "}
                <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>{" "}
                and{" "}
                <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>.
              </p>
            </form>
          )}

          {/* Footer links */}
          <div className="mt-6 space-y-3 border-t border-[#1A2235] pt-6">
            <p className="text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </p>
            <p className="text-center text-sm text-slate-500">
              Want to try first?{" "}
              <Link to="/starter" className="font-semibold text-[#FF8A00] hover:opacity-80 transition">
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
