import Link from "next/link"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// A static pseudo-random pattern for the waveform bars so the hero feels
// alive without re-rendering on the client. Heights are in % of container.
const waveBars = [
  22, 38, 64, 48, 80, 32, 56, 44, 90, 36, 70, 28, 52, 76, 40, 60, 30, 84, 46,
  68, 26, 58, 42, 74, 34, 62, 50, 88, 30, 66, 24, 54, 78, 38, 70, 32, 60, 44,
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-32">
      {/* Warm amber backdrop */}
      <div
        aria-hidden
        className="vox-pulse pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-vox-soft) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-vox/40 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Brand pill */}
        <div className="mb-8 flex justify-center">
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vox opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-vox" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/70">
              v1.0 — Now available on Android
            </span>
            <Sparkles className="size-3 text-vox" />
          </div>
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Speak With{" "}
          <span className="relative inline-block">
            <span
              className="relative bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--color-vox) 0%, oklch(0.72 0.18 55) 100%)",
              }}
            >
              Presence.
            </span>
            {/* Soft underline glow */}
            <span
              aria-hidden
              className="absolute -bottom-2 left-1/2 h-[6px] w-[80%] -translate-x-1/2 rounded-full blur-md"
              style={{ background: "var(--color-vox-soft)" }}
            />
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
          When you <span className="text-white font-semibold">master communication</span>, you&apos;ll
          naturally speak with <span className="text-white font-semibold">confidence</span> and{" "}
          <span className="text-white font-semibold">influence</span> others in any situation. Every
          conversation becomes an opportunity to{" "}
          <span className="text-white font-semibold">win trust</span> and leave a lasting{" "}
          <span className="text-white font-semibold">impression</span>. With these skills, you don&apos;t
          just talk — you connect and create impact.
        </p>

        {/* Animated waveform — voice app signature */}
        <div
          aria-hidden
          className="mx-auto mt-10 flex h-16 max-w-md items-center justify-center gap-[3px]"
        >
          {waveBars.map((h, i) => (
            <span
              key={i}
              className="vox-bar block w-[3px] rounded-full"
              style={{
                height: `${h}%`,
                animationDelay: `${(i % 12) * 0.08}s`,
                background:
                  i % 6 === 0
                    ? "var(--color-vox)"
                    : i % 3 === 0
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full px-6 text-black shadow-[0_0_50px_-10px_var(--color-vox)] transition-all hover:shadow-[0_0_70px_-10px_var(--color-vox)]"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.92 0.13 80) 0%, var(--color-vox) 100%)",
            }}
          >
            <Link href="#download">
              <Download className="size-4" />
              Download APK
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="ghost"
            className="group h-12 rounded-full border border-white/10 bg-white/[0.02] px-6 text-white backdrop-blur transition-colors hover:bg-white/5 hover:text-white"
          >
            <Link href="#features">
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Free to download · No account required · Privacy-first
        </p>
      </div>
    </section>
  )
}
