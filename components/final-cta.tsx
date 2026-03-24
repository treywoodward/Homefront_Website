"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(var(--background) 1px, transparent 1px), linear-gradient(90deg, var(--background) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-8">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-background/80">Serving Lubbock & the High Plains</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          Your home should run smoothly.
          <br />
          <span className="text-accent">We make sure it does.</span>
        </h2>

        <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto">
          Join hundreds of Lubbock homeowners who&apos;ve stopped worrying about maintenance and started enjoying their homes.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold shadow-2xl shadow-primary/40 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Homefront Plan
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-background/50">
          Takes less than 2 minutes to get started. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
