"use client"

import { Check, Briefcase, Users, Building, Home, Clock } from "lucide-react"

const audiences = [
  { icon: Briefcase, text: "Oil & gas professionals", color: "primary" },
  { icon: Users, text: "Families managing full schedules", color: "accent" },
  { icon: Building, text: "Owners of higher-value properties", color: "tertiary" },
  { icon: Home, text: "Investors with multiple homes", color: "primary" },
  { icon: Clock, text: "Anyone tired of the hassle", color: "accent" },
]

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Built for <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent animate-gradient">Lubbock</span> homeowners.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you&apos;re working the fields or running a business, your home shouldn&apos;t be another job.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-${audience.color}/40 hover:shadow-lg hover:shadow-${audience.color}/10 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-10 h-10 rounded-xl bg-${audience.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <audience.icon className={`h-5 w-5 text-${audience.color}`} />
              </div>
              <span className="text-lg text-foreground font-medium">{audience.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-tertiary/10 border border-primary/20">
            <Check className="h-6 w-6 text-primary" />
            <p className="text-xl text-foreground font-medium">
              If your time matters, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">this makes sense.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
