"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-border">
      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-10 animate-fade-in-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
          </span>
          <span className="text-xs font-medium text-primary tracking-wide uppercase">Now serving Lubbock & the High Plains</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.0] text-balance animate-fade-in-up delay-100">
          Stop managing<br />
          your home.<br />
          <span className="text-primary">Start living in it.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up delay-200">
          Homefront is a subscription-based home management service for Lubbock homeowners. We handle the inspections, vendors, and maintenance — proactively.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-3 animate-fade-in-up delay-300">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/85 px-7 py-5 text-sm font-semibold tracking-wide rounded-lg transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary px-7 py-5 text-sm font-semibold tracking-wide rounded-lg transition-colors"
          >
            See How It Works
          </Button>
        </div>

        <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center gap-10 md:gap-16 animate-fade-in-up delay-400">
          <div>
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground mt-0.5">Homes Managed</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground mt-0.5">Client Satisfaction</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground mt-0.5">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
