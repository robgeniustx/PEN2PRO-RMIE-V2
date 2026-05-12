import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold text-white">
              P2P
            </div>
            <span className="text-lg font-extrabold tracking-tight">PEN2PRO</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/pricing" className="hidden text-sm font-semibold text-slate-400 hover:text-teal-400 md:block">
              Pricing
            </Link>
            <Link
              to="/starter"
              className="rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-teal-600"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="mb-5 inline-flex rounded-full border border-amber-700 bg-amber-950 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
          The Founder's Story
        </div>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Built From the Bottom.
          <br />
          <span className="text-teal-400">For Everyone the System Forgot.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate-400">
          PEN2PRO didn't come from a boardroom or a business school. It came
          from real experience — heartbreak, setbacks, and a relentless decision
          to keep building anyway.
        </p>
      </section>

      {/* Story body */}
      <article className="mx-auto max-w-3xl space-y-16 px-6 pb-24">
        {/* Chapter 1 */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-500">
            Chapter 1 — Coming Home
          </p>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            The door opened. Then it closed again.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              When Robert Green came home from prison, he did what society tells
              you to do. He applied for jobs. He showed up on time. He dressed
              right, spoke right, and gave honest answers on every application.
            </p>
            <p>
              And sometimes, he got hired. The handshake. The offer letter. The
              start date on the calendar.
            </p>
            <p>
              Then came the background check — and the call that followed. The
              kind of call you don't put on speaker. The kind where the voice on
              the other end is polite, professional, and completely final.
              <span className="font-bold text-white">
                {" "}We're sorry, but we're going to have to rescind the offer.
              </span>
            </p>
            <p>
              That happened more than once. Each time, a little more of the idea
              of "just get a good job and everything will work out" broke off and
              fell away.
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-500">
            Chapter 2 — The Turn
          </p>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            One day of moping. Then a decision.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              There was one day — a bad one — where Robert just sat with it. Let
              the frustration be what it was. Allowed himself to feel the weight
              of a system that had already decided who he was before he walked
              in the room.
            </p>
            <p>
              One day. Then he picked his head up.
            </p>
            <p className="text-xl font-bold text-white">
              "If no one is going to give me a seat at the table, I'll build my
              own table."
            </p>
            <p>
              He stopped waiting for permission and started running — toward
              entrepreneurship, toward ownership, toward the version of success
              that nobody could rescind.
            </p>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-500">
            Chapter 3 — Learning Through Fire
          </p>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Heartbreak. Wins. Real lessons.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              The path wasn't clean. Robert built real businesses — some that
              grew, some that failed, and all of them that taught him something
              expensive and irreplaceable. He learned how to position a brand
              before he knew what the word "positioning" meant. He learned how
              to close deals, manage clients, and keep a business alive when
              everything felt uncertain.
            </p>
            <p>
              He learned that most people with great ideas never start because
              they don't know where to begin. And the people who do start often
              fail not because of bad ideas — but because of missing
              information.
            </p>
            <p>
              The roadmap. The legal steps. The branding. The financial model.
              The strategy. Nobody hands you that. You either pay for it, get
              lucky, or figure it out the hard way.
            </p>
          </div>
        </div>

        {/* Chapter 4 — Why PEN2PRO */}
        <div className="rounded-3xl border border-teal-800 bg-teal-950 p-8 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
            Chapter 4 — Why PEN2PRO Exists
          </p>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            The system he wished existed when he needed it.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              PEN2PRO RMIE — Real Money Income Ecosystem — was built to give
              every person with an idea and a drive the same advantages that
              wealthy, connected, and well-resourced entrepreneurs take for
              granted.
            </p>
            <p>
              The roadmap. The strategy. The brand guidance. The financial
              projections. The legal foundation. The AI strategist that works
              like a $100M business advisor — available to anyone, at any hour,
              at any stage.
            </p>
            <p className="font-bold text-white">
              This tool was built for second-chance builders. For veterans. For
              working-class parents trying to build something real. For anyone
              the system underestimated. For anyone who has an idea and is ready
              to stop waiting.
            </p>
            <p>
              Your past doesn't disqualify you. Your lack of capital doesn't
              disqualify you. Your lack of a business degree definitely doesn't
              disqualify you.
            </p>
            <p className="text-xl font-bold text-teal-300">
              PEN2PRO exists to prove that the only thing you need to start is
              the decision to start.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Your roadmap is waiting.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Get your first free business blueprint in under 2 minutes.
            No credit card. No background check. Just your idea and your drive.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/starter"
              className="rounded-xl bg-teal-700 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-teal-900/40 transition hover:bg-teal-600"
            >
              Get My Free Blueprint →
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-slate-700 px-8 py-4 text-base font-extrabold text-slate-300 transition hover:border-teal-700 hover:text-white"
            >
              See All Plans
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <span className="font-bold text-slate-400">PEN2PRO RMIE</span>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <Link to="/pricing" className="hover:text-teal-400">Pricing</Link>
            <Link to="/founders" className="hover:text-teal-400">Founders</Link>
            <Link to="/login" className="hover:text-teal-400">Sign In</Link>
          </nav>
          <p>© {new Date().getFullYear()} PEN2PRO RMIE</p>
        </div>
      </footer>
    </div>
  );
}
