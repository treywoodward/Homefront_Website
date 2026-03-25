"use client"

import { Eye, Workflow, ShieldCheck } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const pillars = [
  {
    icon: Eye,
    title: "Proactive",
    description: "We regularly inspect and monitor your home — catching issues before the West Texas conditions make them worse.",
    iconBg: "bg-primary",
  },
  {
    icon: Workflow,
    title: "Coordinated",
    description: "One point of contact for everything — repairs, vendors, scheduling. No more chasing down contractors.",
    iconBg: "bg-accent",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "Our vetted network of local West Texas professionals. Consistent quality. No guesswork.",
    iconBg: "bg-tertiary",
  },
]

export function Solution() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Solution</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Homefront handles it — before it becomes a problem.
            </h2>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <AnimateIn key={index} delay={index * 90} className="h-full">
              <div className="p-7 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col h-full cursor-default">
                <div className={`w-10 h-10 rounded-md ${pillar.iconBg} flex items-center justify-center mb-5`}>
                  <pillar.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{pillar.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
