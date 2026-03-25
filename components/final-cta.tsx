"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-foreground text-background">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-background/50 mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.1]">
            Your home should run smoothly.
            <br />
            <span className="text-accent">We make sure it does.</span>
          </h2>
          <p className="mt-6 text-lg text-background/60 max-w-lg">
            Join hundreds of Lubbock homeowners who&apos;ve stopped worrying about maintenance and started enjoying their homes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-7 py-5 text-sm font-semibold rounded-lg transition-colors"
            >
              Start Your Homefront Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-background/40">
            Takes less than 2 minutes to get started. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
