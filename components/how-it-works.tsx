"use client"

import { UserPlus, Search, Settings, Smile } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Subscribe",
    description: "Choose a plan that fits your home and lifestyle.",
    color: "primary",
  },
  {
    number: "02",
    icon: Search,
    title: "We Inspect & Track",
    description: "We build a full picture of your home and stay ahead of Lubbock wear.",
    color: "accent",
  },
  {
    number: "03",
    icon: Settings,
    title: "We Handle Everything",
    description: "From maintenance to repairs, we coordinate it all with local pros.",
    color: "tertiary",
  },
  {
    number: "04",
    icon: Smile,
    title: "You Enjoy Life",
    description: "Your home just works. Focus on what matters.",
    color: "primary",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 md:py-20 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Connection line */}
      <svg className="absolute left-0 right-0 h-px hidden lg:block pointer-events-none" style={{ top: '55%' }}>
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="6,6" />
      </svg>

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Simple. Predictable. <span className="text-primary">Done.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting started is easy. Staying protected is even easier.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              {/* Number badge */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-${step.color}/10 text-${step.color} border border-${step.color}/20`}>
                Step {step.number}
              </div>

              {/* Card */}
              <div className="pt-8 pb-6 px-6 rounded-3xl bg-card border border-border group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 flex flex-col h-full">
                {/* Icon */}
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-${step.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
