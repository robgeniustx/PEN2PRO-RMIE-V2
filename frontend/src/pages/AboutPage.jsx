import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const WHO_ITS_FOR = [
  { icon: "🎖️", label: "Veterans" },
  { icon: "🔄", label: "Returning Citizens" },
  { icon: "👷", label: "Working-Class Builders" },
  { icon: "💡", label: "First-Time Entrepreneurs" },
  { icon: "📱", label: "Creators & Side Hustlers" },
  { icon: "👩‍👧", label: "Parents Building Income" },
  { icon: "🏪", label: "Small Business Owners" },
  { icon: "🚀", label: "People Who've Been Counted Out" },
];

const MISSION_POINTS = [
  {
    icon: "🗺️",
    title: "Realistic Roadmaps",
    body: "Not motivation — actual steps. Business structure, launch plan, monetization strategy, and execution support in one place.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness",
    body: "Most people with ideas don't know if they're fundable. RMIE tells you where you stand and how to get ready.",
  },
  {
    icon: "🏗️",
    title: "Business Foundation First",
    body: "LLC, EIN, business bank, branding, offer structure — the foundations most coaches skip over.",
  },
  {
    icon: "📈",
    title: "Revenue Intelligence",
    body: "Pricing, outreach, sales scripts, 30/60/90-day growth plans — built around your specific idea and market.",
  },
];

const PERSONAL_STATEMENT = [
  { body: "There was a time in my life when everything around me looked broken." },
  { body: "Opportunities were limited. Doors kept closing. Every mistake I made seemed to follow me longer than any good thing I had ever done. I carried frustration, anger, doubt, and the heavy feeling of knowing there was more inside of me than what the world could see on the surface." },
  { body: "After coming home from prison, I tried to rebuild my life the way people tell you to rebuild it — apply for jobs, show up professionally, interview well, and wait for somebody to give you a chance." },
  { body: "More than once, I earned that chance. The interviews went well. The job offers came." },
  { body: "Then the background checks came back.", emphasis: true },
  { body: "The offers were rescinded.", callout: true },
  { body: "That kind of rejection can break a person. For a moment, it almost did. I had a day of moping — real frustration, real anger, real doubt, asking why the doors kept closing after they had already looked open." },
  { body: "Then I picked my head up and took off running.", emphasis: true },
  { body: "If the system was not going to hand me an opportunity, I decided I would build one.", callout: true },
  { body: "That decision became the foundation for everything that followed — business ownership, mentorship, authorship, community work, and eventually PEN2PRO." },
  { body: "During my incarceration, I was already faced with a choice.", emphasis: true },
  { body: "I could accept the labels placed on me and become another statistic, or I could rebuild myself from the inside out." },
  { body: "That process was not easy. Real change never is." },
  { body: "There were nights filled with regret, mornings filled with uncertainty, and moments when giving up felt easier than believing in a future I could not yet see. But even in that darkness, I held on to one thought:" },
  { body: "Any effort toward something positive had to be better than where I was and what I had already experienced.", callout: true },
  { body: "Even the smallest step forward meant something. Even a little progress was still progress. That mindset became the beginning of my transformation." },
  { body: "Somewhere along the way, I realized something that changed my life:" },
  { body: "Your environment does not have to define your destiny.", emphasis: true },
  { body: "Your past may explain parts of your story, but it does not own your future.", emphasis: true },
  { body: "And the same energy used to survive difficult seasons can become the same energy used to build an extraordinary life.", emphasis: true },
  { body: "That realization became the foundation for everything that came after." },
  { body: "I started studying business, strategy, branding, mindset, discipline, leadership, and personal growth. I became obsessed with understanding how successful people think, move, build, and create opportunities. I learned that wealth is not just money. Wealth is knowledge. Wealth is execution. Wealth is discipline. Wealth is believing in yourself long enough to keep going when nobody else can see what you see." },
  { body: "That journey started with XLR8 Pressure Washing and eventually led to XLR8 Trade Academy and PEN2PRO." },
  { body: "What began as a mission to rebuild my own life became a mission to help others rebuild theirs.", emphasis: true },
  { body: "The opportunities became limitless once I stopped allowing my past to define my future." },
  { body: "PEN2PRO was not created by someone who was handed every opportunity.", emphasis: true },
  { body: "It was built through struggle, pressure, setbacks, sacrifice, discipline, rebuilding, and vision. It was built by someone who knows what it feels like to be counted out, overlooked, judged, and underestimated." },
  { body: "And it was built for people who know they are capable of more but need direction, structure, strategy, tools, and belief to unlock what is already inside of them." },
  { body: "This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission.", callout: true },
  { body: "PEN2PRO is bigger than software.", emphasis: true },
  { body: "It is proof that transformation is possible." },
  { body: "It is proof that someone can come from hardship and still create something meaningful." },
  { body: "It is proof that ideas can become income, pain can become purpose, and setbacks can become fuel for a completely different future." },
  { body: "But none of this happens without commitment.", emphasis: true },
  { body: "No app, system, mentor, course, or opportunity can change a person who is not willing to change themselves." },
  { body: "The people who truly win are the ones who finally decide:" },
  { body: "“I’m tired of surviving. I’m ready to build.”", callout: true },
  { body: "They dedicate themselves to growth.\nThey stay disciplined when motivation disappears.\nThey keep learning when things get difficult.\nThey stop making excuses and start making progress.", list: true },
  { body: "And over time, that consistency changes everything." },
  { body: "The truth is, many people are only one decision away from a completely different life.", emphasis: true },
  { body: "One decision to believe in themselves again.\nOne decision to stop letting fear control them.\nOne decision to stop living beneath their potential.\nOne decision to finally commit to becoming the person they were created to be.", list: true },
  { body: "Your current chapter is not your final chapter.", emphasis: true },
  { body: "No matter where you started.\nNo matter what people said about you.\nNo matter how many times life knocked you down.\nNo matter how long you have felt stuck.", list: true },
  { body: "You still have purpose.\nYou still have value.\nYou still have greatness inside of you waiting to be activated.", list: true },
  { body: "For those willing to commit to growth, discipline, execution, and transformation, PEN2PRO exists to help turn vision into reality." },
  { body: "Because redemption is real.\nGrowth is real.\nSuccess is possible.", list: true },
  { body: "And sometimes, the person the world counted out becomes the very person who inspires others to believe in themselves again." },
  { body: "That is what PEN2PRO represents.", emphasis: true },
  { body: "That is what my life represents.", emphasis: true },
  { body: "And this is only the beginning.", callout: true },
];

export default function AboutPage() {
  useEffect(() => {
    // ── Page title ──
    document.title = "About PEN2PRO | Built From Setbacks — AI Business Roadmap for Entrepreneurs & Veterans";

    // ── Meta helper ──
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "PEN2PRO was built by Robert Green from struggle, pressure, discipline, rebuilding, and vision. A second-chance engine that turns ideas into real business roadmaps for entrepreneurs, veterans, returning citizens, and working-class builders.");
    setMeta("keywords", "PEN2PRO, RMIE, AI business roadmap, business plan for returning citizens, veteran entrepreneur, free business roadmap, business funding guidance, AI business plan generator, Houston entrepreneur, business plan generator, second chance business, business roadmap tool, Rapid Monetization Intelligence Engine, small business roadmap, entrepreneur tools for returning citizens, business plan for veterans, business startup guide");
    setMeta("author", "Robert Earl Green Jr.");
    setMeta("robots", "index, follow");

    // ── Open Graph ──
    setMeta("og:type", "website", true);
    setMeta("og:title", "About PEN2PRO | Built From Setbacks — AI Business Roadmap for Everyone", true);
    setMeta("og:description", "Robert Green built PEN2PRO from lived experience, transformation, discipline, and vision. Now RMIE helps overlooked builders turn ideas into income with real roadmaps, real strategy, and real execution.", true);
    setMeta("og:url", "https://pen2pro.com/about", true);
    setMeta("og:site_name", "PEN2PRO", true);

    // ── Twitter Card ──
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "About PEN2PRO | Built From Setbacks — AI Business Roadmap");
    setMeta("twitter:description", "PEN2PRO RMIE — built by Robert Green from lived experience. Realistic business roadmaps for veterans, returning citizens, entrepreneurs, and anyone ready to build.");

    // ── Structured data (JSON-LD) ──
    const existingLd = document.getElementById("about-ld");
    if (!existingLd) {
      const ld = document.createElement("script");
      ld.id = "about-ld";
      ld.type = "application/ld+json";
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About PEN2PRO",
        "description": "PEN2PRO is an AI-powered business roadmap platform built by veteran entrepreneur Robert Earl Green Jr. to help overlooked builders turn ideas into income.",
        "url": "https://pen2pro.com/about",
        "publisher": {
          "@type": "Organization",
          "name": "PEN2PRO",
          "url": "https://pen2pro.com",
          "founder": { "@type": "Person", "name": "Robert Earl Green Jr." }
        }
      });
      document.head.appendChild(ld);
    }

    return () => {
      document.title = "PEN2PRO — Turn Your Idea Into Income";
      const ld = document.getElementById("about-ld");
      if (ld) ld.remove();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* ── RADIANT BACKGROUND ORBS ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Blue orb — top left */}
        <div
          className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.22) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        {/* Orange orb — mid right */}
        <div
          className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        {/* Deep blue orb — bottom center */}
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        {/* Small accent orb — story section */}
        <div
          className="absolute top-[60%] -left-24 h-[350px] w-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,193,7,0.10) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ The Story Behind PEN2PRO
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Built From Setbacks.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Designed to Build Futures.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            PEN2PRO RMIE — Rapid Monetization Intelligence Engine — was built by someone who needed it and couldn't find it. This is that story.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Founder Story
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate-300">
            {PERSONAL_STATEMENT.map((item) => {
              if (item.list) {
                return (
                  <div key={item.body} className="space-y-2">
                    {item.body.split("\n").map((line) => (
                      <p key={line} className="font-semibold text-slate-200">
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }

              if (item.callout) {
                return (
                  <p key={item.body} className="border-l-4 border-[#FF8A00] pl-5 text-xl font-bold text-white">
                    {item.body}
                  </p>
                );
              }

              return (
                <p key={item.body} className={item.emphasis ? "text-lg font-bold text-white" : undefined}>
                  {item.body}
                </p>
              );
            })}
          </div>

          {/* Founder Badge */}
          <div className="mt-12 flex items-center gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              ⚡
            </div>
            <div>
              <p className="font-black text-white text-lg">Robert Earl Green Jr.</p>
              <p className="text-sm text-slate-400 mt-0.5">
                Service-Connected Veteran · Entrepreneur · Author · Mentor
              </p>
              <p className="text-sm text-[#FF8A00] font-semibold mt-0.5">
                Founder — PEN2PRO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Mission</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            What PEN2PRO Actually Does
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic AI. Not just a business plan generator. Not motivation. RMIE is a Rapid Monetization Intelligence Engine — built to give you the specific moves, structure, and tools to turn your idea into income.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {MISSION_POINTS.map((pt) => (
              <div key={pt.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{pt.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{pt.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who PEN2PRO Is For</div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Built for the Overlooked. Designed for the Determined.
          </h2>
          <p className="mb-12 text-slate-400">
            PEN2PRO was created for people who don't fit the traditional mold — but are serious about building something real.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="mb-2 text-3xl">{w.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build Something Real?
          </h2>
          <p className="mb-10 text-slate-400">
            Start with a free roadmap. No credit card. No fluff. Just a real plan for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
