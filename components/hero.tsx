"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sun, Wind, Home } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-float-slow animate-blob-morph" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-accent/22 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-tertiary/28 rounded-full blur-3xl animate-float delay-400" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-glow-pulse delay-300" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <Sun className="absolute top-32 right-[15%] w-10 h-10 text-primary/60 animate-float drop-shadow-lg" />
        <Wind className="absolute top-48 left-[12%] w-8 h-8 text-accent/65 animate-float-slow delay-300 drop-shadow-lg" />
        <Home className="absolute bottom-32 right-[20%] w-9 h-9 text-tertiary/65 animate-float delay-500 drop-shadow-lg" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-tertiary/10 border border-primary/20 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-foreground">Now serving Midland, Odessa & the Permian Basin</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance animate-fade-in-up delay-100">
          Stop managing your home.
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">Start having it managed.</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up delay-200">
          Homefront is a subscription-based home management service built for West Texas homeowners. We handle the dust storms, the heat, and the maintenance—so your home stays in peak condition.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary px-8 py-6 text-base shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-accent/40 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent px-8 py-6 text-base transition-all hover:scale-105"
          >
            See How It Works
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Homes Managed</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-tertiary">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
