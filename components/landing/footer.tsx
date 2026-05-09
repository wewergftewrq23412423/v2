import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <div className="h-2.5 w-[2px] rounded-full bg-white/80" />
          </div>
          <span className="text-white/60">Vox</span>
          <span className="text-white/30">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Terms
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
