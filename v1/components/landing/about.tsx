export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06] blur-3xl"
          />

          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Our mission</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Helping people communicate with more confidence and stronger presence.
          </h2>

          <p className="mt-6 text-pretty leading-relaxed text-white/60 md:text-lg">
            A <span className="text-white">communication-focused</span>{" "}
            <span className="text-white">voice enhancement</span> experience designed for{" "}
            <span className="text-white">confidence</span> and <span className="text-white">clarity</span>. Your voice —{" "}
            <span className="text-white">deeper</span>, <span className="text-white">stronger</span>, simply you.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-medium tracking-tight md:text-3xl">12ms</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Latency</p>
            </div>
            <div>
              <p className="text-2xl font-medium tracking-tight md:text-3xl">100%</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">On-device</p>
            </div>
            <div>
              <p className="text-2xl font-medium tracking-tight md:text-3xl">0</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
