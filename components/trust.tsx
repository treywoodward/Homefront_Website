"use client"

import { UserCheck, ClipboardList, MessageSquare, BadgeCheck, Star } from "lucide-react"

const trustPoints = [
  { icon: UserCheck, text: "Vetted local West Texas professionals", color: "text-primary", bg: "bg-primary/10" },
  { icon: ClipboardList, text: "Climate-specific inspection process", color: "text-accent", bg: "bg-accent/10" },
  { icon: MessageSquare, text: "Transparent communication always", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: BadgeCheck, text: "No upselling, no hidden fees", color: "text-primary", bg: "bg-primary/10" },
]

const testimonials = [
  {
    quote: "Between work in the oil field and family, I had zero time for home stuff. Homefront handles everything—even coordinated repairs after that bad dust storm last spring.",
    name: "Marcus T.",
    location: "Midland",
    rating: 5,
  },
  {
    quote: "Our AC died in July. Homefront had someone there same day. They understand what living out here means.",
    name: "Jennifer & David K.",
    location: "Odessa",
    rating: 5,
  },
]

export function Trust() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gradient-to-b from-secondary/50 via-secondary/30 to-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center text-balance">
          Your home is too important for <span className="text-accent">guesswork.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <point.icon className={`h-6 w-6 ${point.color}`} />
              </div>
              <span className="text-lg text-foreground font-medium">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all group"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-6 text-6xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors">&ldquo;</div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-foreground leading-relaxed">
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
