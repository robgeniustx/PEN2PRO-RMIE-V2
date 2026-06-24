import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    name: "Free Roadmap",
    color: "#64748b",
    icon: "🗺️",
    features: ["1 AI business blueprint", "7-day launch plan", "Brand name ideas", "LLC setup checklist"],
    href: "/starter",
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$249/mo",
    color: "#2d9cff",
    icon: "⚡",
    features: ["Full 90-day roadmap", "Sales scripts + outreach", "Credit & funding checklist", "PDF & email export"],
    href: "/pro",
    cta: "Learn More",
  },
  {
    name: "Elite",
    price: "$499/mo",
    color: "#00C9B1",
    icon: "🏆",
    features: ["Everything in Pro", "Financial projections", "Done-with-you strategy", "Funding partner access"],
    href: "/elite",
    cta: "Learn More",
  },
  {
    name: "Founders",
    price: "$1,899 lifetime",
    color: "#D4A017",
    icon: "👑",
    features: ["Lifetime platform access", "P2P Command Center", "AI Voice Agent", "Website Builder"],
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
  const [activeTier, setActiveTier] = useState(1);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  useEffect(() => {
    const id = setInterval(() => setActiveTier((t) => (t + 1) % TIER_PANELS.length), 4000);
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

  const tier = TIER_PANELS[activeTier];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">
        {/* ── Left: Form Panel ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14] gradient-gold">
                P2P
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Build your business roadmap. Save your blueprint. Upgrade when ready."
                  : "Start building your business roadmap today — free, no credit card required."}
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
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
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
                    <Link to="/terms" className="underline hover:text-slate-300">Terms</Link> and{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link to="/starter" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Start Free Roadmap
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Tier Info Panel (desktop only) ── */}
        <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-center border-l border-[#1A2235] px-10 py-16"
          style={{ background: "#0A0F1E" }}>
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>PEN2PRO Plans</p>
            <h2 className="font-display text-2xl font-black text-white leading-snug">
              Free roadmap today.<br />
              Full strategy when you're ready.
            </h2>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              PEN2PRO gives every user a free AI roadmap. Upgrade to Pro, Elite, or Founders when you're ready to go all in.
            </p>
          </div>

          {/* Tier Tabs */}
          <div className="mb-6 flex gap-2 flex-wrap">
            {TIER_PANELS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTier(i)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTier === i
                    ? "text-[#080C14]"
                    : "border border-[#1A2235] text-slate-500 hover:text-slate-300"
                }`}
                style={activeTier === i ? { background: t.color } : {}}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active Tier Card */}
          <div
            className="rounded-2xl border p-6 transition-all duration-500"
            style={{ borderColor: tier.color + "40", background: tier.color + "0d" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{tier.icon}</span>
              <div>
                <p className="font-black text-white text-lg">{tier.name}</p>
                {tier.price && (
                  <p className="text-sm font-semibold" style={{ color: tier.color }}>{tier.price}</p>
                )}
              </div>
            </div>
            <ul className="space-y-2.5 mb-5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-xs font-bold" style={{ color: tier.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to={tier.href}
              className="block rounded-xl px-4 py-2.5 text-center text-sm font-black transition hover:opacity-90"
              style={{ background: tier.color, color: "#080C14" }}
            >
              {tier.cta} →
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              ["🔒", "No credit card required to start"],
              ["⚡", "Free roadmap in under 5 minutes"],
              ["🎯", "Built for real execution, not motivation"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-base">{icon}</span>
                <span className="text-xs text-slate-500">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
