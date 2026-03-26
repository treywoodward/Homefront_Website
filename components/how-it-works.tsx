"use client"

import { Ruler, BookOpen, Phone, Home } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const cards = [
  {
    number: "01",
    icon: Ruler,
    title: "Simple, Scaled Pricing",
    description: "Transparent pricing based on your home's size. Starting at $0.10 per square foot, built to scale with your property.",
    iconBg: "bg-primary",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "We Know Your Home",
    description: "We build and maintain a full profile of your home — systems, wear, risks, and service history — so nothing is ever reactive.",
    iconBg: "bg-accent",
  },
  {
    number: "03",
    icon: Phone,
    title: "One Call. We Handle It.",
    description: "Maintenance, repairs, vendors, emergencies, ongoing coordination. You call us — we take care of everything.",
    iconBg: "bg-tertiary",
  },
  {
    number: "04",
    icon: Home,
    title: "You Just Live There",
    description: "Your home runs smoothly in the background, without the calls, the scheduling, or the stress.",
    iconBg: "bg-primary",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              One relationship.<br />Everything handled.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No vendors. No coordination. No guesswork. Just one relationship that handles everything your home needs.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <AnimateIn key={index} delay={index * 80} className="h-full">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col h-full cursor-default">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-md ${card.iconBg} flex items-center justify-center`}>
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground">{card.number}</span>
                </div>
                <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
