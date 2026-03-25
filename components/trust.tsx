"use client"

import { Star } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const testimonials = [
  {
    quote: "Between work in the oil field and family, I had zero time for home stuff. Homefront handles everything — even coordinated repairs after that bad dust storm last spring.",
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
    <section id="about" className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-xl text-balance">
            Don&apos;t take our word for it.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} delay={index * 120} className="h-full">
              <div className="p-7 rounded-lg bg-card border border-border hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col h-full cursor-default">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}, TX</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
