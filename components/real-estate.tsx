"use client"

import { TrendingUp, Home, Lightbulb, ArrowUpRight } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Maintain Property Value",
    description: "Regular maintenance protects your investment from harsh Lubbock conditions.",
    color: "primary",
  },
  {
    icon: Home,
    title: "Prepare for Future Sales",
    description: "Complete maintenance records make your home more attractive to buyers.",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Smarter Upgrades",
    description: "Get expert advice on improvements that actually add value.",
    color: "tertiary",
  },
]

export function RealEstate() {
  return (
    <section className="py-14 md:py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <ArrowUpRight className="h-4 w-4" />
            Beyond Maintenance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Protect your <span className="text-accent">investment.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your home is likely your biggest asset. We help you protect and grow its value.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`w-14 h-14 rounded-2xl bg-${benefit.color}/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-${benefit.color}/20 transition-all duration-300`}>
                <benefit.icon className={`h-7 w-7 text-${benefit.color}`} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-muted-foreground">
            When it&apos;s time to sell, <span className="text-primary font-semibold">you&apos;re already ahead.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
