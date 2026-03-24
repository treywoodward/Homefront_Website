"use client"

import { UserCheck, ClipboardList, MessageSquare, BadgeCheck, Star } from "lucide-react"

const trustPoints = [
  { icon: UserCheck, text: "Vetted local Lubbock professionals", color: "text-primary", bg: "bg-primary/10" },
  { icon: ClipboardList, text: "Climate-specific inspection process", color: "text-accent", bg: "bg-accent/10" },
  { icon: MessageSquare, text: "Transparent communication always", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: BadgeCheck, text: "No upselling, no hidden fees", color: "text-primary", bg: "bg-primary/10" },
]

const testimonials = [
  {
    quote: "Between work in the oil field and family, I had zero time for home stuff. Homefront handles everything—even coordinated repairs after that bad dust storm last spring.",
    name: "Marcus T.",
    location: "Lubbock",
    rating: 5,
  },
  {
    quote: "Our AC died in July. Homefront had someone there same day. They understand what living out here means.",
    name: "Jennifer & David K.",
    location: "Lubbock",
    rating: 5,
  },
]

export function Trust() {
  return (
    <section id="about" className="py-14 md:py-20 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Faint shield watermark */}
        <svg className="absolute right-0 top-8 w-64 h-64 text-accent opacity-[0.04] pointer-events-none" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <path d="M50 5L10 20v30c0 22 17 42 40 50 23-8 40-28 40-50V20L50 5z" />
        </svg>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center text-balance">
          Your home is too important for <span className="text-accent">guesswork.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <point.icon className={`h-6 w-6 ${point.color}`} />
              </div>
              <span className="text-lg text-foreground font-medium">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all group flex flex-col h-full"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-6 text-6xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors">&ldquo;</div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}, TX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
