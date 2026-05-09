export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-10 md:p-16">
          {/* Amber corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "var(--color-vox-soft)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl"
          />

          <p
            className="text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--color-vox)" }}
          >
            Our mission
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Helping people communicate with more{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--color-vox) 0%, oklch(0.72 0.18 55) 100%)",
              }}
            >
              confidence
            </span>{" "}
            and stronger presence.
          </h2>

          <p className="mt-6 text-pretty leading-relaxed text-white/60 md:text-lg">
            A <span className="text-white">communication-focused</span>{" "}
            <span className="text-white">voice enhancement</span> experience designed for{" "}
            <span className="text-white">confidence</span> and{" "}
            <span className="text-white">clarity</span>. Your voice —{" "}
            <span className="text-white">deeper</span>,{" "}
            <span className="text-white">stronger</span>, simply you.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat value="12ms" label="Latency" accent />
            <Stat value="100%" label="On-device" />
            <Stat value="0" label="Tracking" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
  accent = false,
}: {
  value: string
  label: string
  accent?: boolean
}) {
  return (
    <div>
      <p
        className="text-3xl font-semibold tracking-tight md:text-4xl"
        style={
          accent
            ? {
                backgroundImage:
                  "linear-gradient(180deg, var(--color-vox) 0%, oklch(0.72 0.18 55) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }
            : undefined
        }
      >
        {value}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{label}</p>
    </div>
  )
}
