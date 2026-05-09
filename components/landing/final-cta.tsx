import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section id="download" className="relative px-6 py-32 md:py-40">
      <div
        aria-hidden
        className="vox-pulse pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-vox-soft) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-vox) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Ready to Transform{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--color-vox) 0%, oklch(0.72 0.18 55) 100%)",
            }}
          >
            Your Voice?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-pretty text-white/60 md:text-lg">
          Install in seconds. Speak with presence in minutes.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full px-7 text-black shadow-[0_0_60px_-10px_var(--color-vox)] transition-all hover:shadow-[0_0_90px_-10px_var(--color-vox)]"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.92 0.13 80) 0%, var(--color-vox) 100%)",
            }}
          >
            <Link href="#">
              <Download className="size-4" />
              Get the APK
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/40">v1.0 · Android 9+ · ~24 MB</p>
      </div>
    </section>
  )
}
