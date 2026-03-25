"use client"

import { Briefcase, Users, Building, Home, Clock } from "lucide-react"

const audiences = [
  { icon: Briefcase, text: "Oil & gas professionals", color: "text-primary", bg: "bg-primary/8" },
  { icon: Users, text: "Families managing full schedules", color: "text-accent", bg: "bg-accent/8" },
  { icon: Building, text: "Owners of higher-value properties", color: "text-tertiary", bg: "bg-tertiary/8" },
  { icon: Home, text: "Investors with multiple homes", color: "text-primary", bg: "bg-primary/8" },
  { icon: Clock, text: "Anyone tired of the hassle", color: "text-accent", bg: "bg-accent/8" },
]

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Who It&apos;s For</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Built for Lubbock homeowners.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re working the fields or running a business, your home shouldn&apos;t be another job.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className={`w-9 h-9 rounded-md ${audience.bg} flex items-center justify-center flex-shrink-0`}>
                <audience.icon className={`h-4 w-4 ${audience.color}`} />
              </div>
              <span className="text-sm font-medium text-foreground">{audience.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-lg text-muted-foreground">
            If your time matters, <span className="text-foreground font-semibold">this makes sense.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
