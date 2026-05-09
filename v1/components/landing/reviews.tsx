import { Star, Quote } from "lucide-react"

type Review = {
  id: number
  text: string
  author: string
  role: string
  rating: number
  initials: string
}

const reviews: Review[] = [
  {
    id: 1,
    text: "This app transformed the way I speak. My voice feels so much deeper and more confident now. Highly recommend!",
    author: "Sarah M.",
    role: "Public Speaker",
    rating: 5,
    initials: "SM",
  },
  {
    id: 2,
    text: "I've tried many voice training apps, but this one actually delivers results. The exercises are practical and effective.",
    author: "James K.",
    role: "Sales Executive",
    rating: 5,
    initials: "JK",
  },
  {
    id: 3,
    text: "The clarity in my speech improved dramatically after just two weeks. This is a game-changer for professionals.",
    author: "Emma L.",
    role: "Coach",
    rating: 5,
    initials: "EL",
  },
  {
    id: 4,
    text: "Finally, a voice app that doesn't feel like a gimmick. The science behind it shows in every feature.",
    author: "Michael R.",
    role: "Entrepreneur",
    rating: 5,
    initials: "MR",
  },
  {
    id: 5,
    text: "My confidence skyrocketed. I no longer hesitate during presentations. Worth every penny!",
    author: "Lisa T.",
    role: "Marketing Manager",
    rating: 5,
    initials: "LT",
  },
  {
    id: 6,
    text: "The community support is amazing. Everyone's progress is motivating. Best investment I've made for myself.",
    author: "David P.",
    role: "Consultant",
    rating: 5,
    initials: "DP",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Testimonials</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Trusted by thousands worldwide.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9 out of 5</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <Quote className="h-6 w-6 text-white/30" />

              <p className="mt-4 leading-relaxed text-white/70">{review.text}</p>

              <div className="mt-4 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-semibold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-xs text-white/50">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
