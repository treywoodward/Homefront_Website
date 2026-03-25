"use client"

import { TrendingUp, Home, Lightbulb } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const benefits = [
  {
    icon: TrendingUp,
    title: "Maintain Property Value",
    description: "Regular maintenance protects your investment from West Texas conditions year-round.",
    iconBg: "bg-primary",
  },
  {
    icon: Home,
    title: "Prepare for Future Sales",
    description: "Complete maintenance records make your home more attractive to buyers.",
    iconBg: "bg-accent",
  },
  {
    icon: Lightbulb,
    title: "Smarter Upgrades",
    description: "Get expert advice on improvements that actually add value in this market.",
    iconBg: "bg-tertiary",
  },
]

export function RealEstate() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Protect your investment.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your home is likely your biggest asset. We help you protect and grow its value.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <AnimateIn key={index} delay={index * 90} className="h-full">
              <div className="p-7 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col h-full cursor-default">
                <div className={`w-10 h-10 rounded-md ${benefit.iconBg} flex items-center justify-center mb-5`}>
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{benefit.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={300}>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-lg text-muted-foreground">
              When it&apos;s time to sell, <span className="text-foreground font-semibold">you&apos;re already ahead.</span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
