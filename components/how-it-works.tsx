"use client"

import { UserPlus, Search, Settings, Smile } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Subscribe",
    description: "Choose a plan that fits your home and lifestyle.",
    iconBg: "bg-primary",
  },
  {
    number: "02",
    icon: Search,
    title: "We Inspect & Track",
    description: "We build a full picture of your home and stay ahead of West Texas wear.",
    iconBg: "bg-accent",
  },
  {
    number: "03",
    icon: Settings,
    title: "We Handle Everything",
    description: "From maintenance to repairs, we coordinate it all with local pros.",
    iconBg: "bg-tertiary",
  },
  {
    number: "04",
    icon: Smile,
    title: "You Enjoy Life",
    description: "Your home just works. Focus on what matters.",
    iconBg: "bg-primary",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Simple. Predictable. Done.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting started is easy. Staying protected is even easier.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <AnimateIn key={index} delay={index * 80} className="h-full">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col h-full cursor-default">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-md ${step.iconBg} flex items-center justify-center`}>
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground">{step.number}</span>
                </div>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
