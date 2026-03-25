"use client"

import { AlertCircle, Users, Clock, TrendingDown, Wind, Thermometer } from "lucide-react"

const problems = [
  { icon: Wind, text: "Dust storms and harsh weather take a toll", color: "text-primary", bgColor: "bg-primary/8" },
  { icon: Thermometer, text: "Extreme heat damages systems faster", color: "text-accent", bgColor: "bg-accent/8" },
  { icon: TrendingDown, text: "Small issues turn into expensive problems", color: "text-tertiary", bgColor: "bg-tertiary/8" },
  { icon: Users, text: "Hard to find reliable contractors out here", color: "text-primary", bgColor: "bg-primary/8" },
  { icon: Clock, text: "You're too busy to chase down vendors", color: "text-accent", bgColor: "bg-accent/8" },
  { icon: AlertCircle, text: "Something always needs attention", color: "text-tertiary", bgColor: "bg-tertiary/8" },
]

export function Problem() {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Homeownership in Lubbock is different.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The High Plains climate is tough on homes. You shouldn&apos;t have to fight it alone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-md ${problem.bgColor} flex items-center justify-center`}>
                <problem.icon className={`h-4 w-4 ${problem.color}`} />
              </div>
              <p className="text-sm text-foreground font-medium leading-relaxed pt-1">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-lg text-muted-foreground">
            Most homeowners are reactive. <span className="text-foreground font-semibold">That&apos;s the problem.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
