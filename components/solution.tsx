"use client"

import { Eye, Workflow, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Eye,
    title: "Proactive",
    description: "We regularly inspect and monitor your home—catching issues before the West Texas elements make them worse.",
    gradient: "from-primary to-primary/80",
    iconBg: "bg-primary",
  },
  {
    icon: Workflow,
    title: "Coordinated",
    description: "One point of contact for everything—repairs, vendors, scheduling. No more chasing down contractors.",
    gradient: "from-accent to-accent/80",
    iconBg: "bg-accent",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "Our vetted network of local Permian Basin professionals. Consistent quality. No guesswork.",
    gradient: "from-tertiary to-tertiary/80",
    iconBg: "bg-tertiary",
  },
]

export function Solution() {
  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/18 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 animate-glow-pulse" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/18 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-glow-pulse delay-400" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center text-balance">
          Homefront handles it—<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">before</span> it becomes a problem.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative text-center p-8 rounded-3xl bg-card border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className={`relative mx-auto w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <pillar.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="relative mt-6 text-xl font-bold text-foreground">{pillar.title}</h3>
              <p className="relative mt-3 text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
