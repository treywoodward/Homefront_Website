"use client"

import { AlertCircle, Users, Clock, TrendingDown, Wind, Thermometer } from "lucide-react"

const problems = [
  {
    icon: Wind,
    text: "Dust storms and harsh weather take a toll",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Thermometer,
    text: "Extreme heat damages systems faster",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingDown,
    text: "Small issues turn into expensive problems",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
  },
  {
    icon: Users,
    text: "Hard to find reliable contractors out here",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    text: "You're too busy to chase down vendors",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: AlertCircle,
    text: "Something always needs attention",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
  },
]

export function Problem() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center text-balance">
          Homeownership in <span className="text-primary">West Texas</span> is different.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          The Permian Basin climate is tough on homes. You shouldn&apos;t have to fight it alone.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <problem.icon className={`h-6 w-6 ${problem.color}`} />
              </div>
              <p className="text-base text-foreground font-medium leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground">
            Most homeowners are reactive. <span className="text-primary font-semibold">That&apos;s the problem.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
