import { AudioLines, MessageSquareText, Sparkles, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: AudioLines,
    title: "Deep Voice Experience",
    description:
      "Refined low-end resonance and tonal depth, tuned for a natural, grounded presence.",
  },
  {
    icon: MessageSquareText,
    title: "Communication Enhancement",
    description: "Sharper clarity and articulation, so every word lands with the weight you intend.",
  },
  {
    icon: Sparkles,
    title: "Clean & Fast Interface",
    description:
      "A minimal, distraction-free experience built for speed, focus, and effortless control.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Simple Usage",
    description: "On-device processing by default. No accounts, no tracking — just your voice.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--color-vox)" }}
          >
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Built for the way{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--color-vox) 0%, oklch(0.72 0.18 55) 100%)",
              }}
            >
              you speak.
            </span>
          </h2>
          <p className="mt-4 text-pretty text-white/60 md:text-lg">
            Every detail is designed to disappear, so your voice can do the work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-vox/40 hover:bg-white/[0.05]"
              >
                {/* Amber wash on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1/2 -right-1/2 h-96 w-96 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, var(--color-vox-soft) 0%, transparent 70%)",
                  }}
                />

                {/* Top hairline that lights up on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, var(--color-vox) 50%, transparent 100%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors group-hover:border-vox/30"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)" }}
                    >
                      <Icon
                        className="size-6 text-white/85 transition-colors group-hover:text-white"
                        style={{ filter: "drop-shadow(0 0 12px var(--color-vox-soft))" }}
                      />
                    </div>
                    <span
                      className="font-mono text-xs tracking-widest text-white/30 transition-colors group-hover:text-white/60"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55 transition-colors group-hover:text-white/75">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
