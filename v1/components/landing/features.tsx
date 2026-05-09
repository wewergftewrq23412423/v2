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
    description: "Refined low-end resonance and tonal depth, tuned for a natural, grounded presence.",
  },
  {
    icon: MessageSquareText,
    title: "Communication Enhancement",
    description: "Sharper clarity and articulation, so every word lands with the weight you intend.",
  },
  {
    icon: Sparkles,
    title: "Clean & Fast Interface",
    description: "A minimal, distraction-free experience built for speed, focus, and effortless control.",
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
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Features</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Built for the way you speak.
          </h2>
          <p className="mt-4 text-pretty text-white/60 md:text-lg">
            Every detail is designed to disappear, so your voice can do the work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const accentColors = [
              "from-cyan-500/20 to-blue-500/20",
              "from-purple-500/20 to-pink-500/20",
              "from-emerald-500/20 to-cyan-500/20",
              "from-amber-500/20 to-orange-500/20",
            ]
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-1/2 -right-1/2 h-96 w-96 bg-gradient-to-br ${accentColors[idx]} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40`}
                />

                <div className="relative">
                  <div className="inline-flex items-center justify-center rounded-lg bg-white/5 p-3 backdrop-blur-sm">
                    <Icon className="size-6 text-white/80 transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-base font-semibold leading-tight text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
