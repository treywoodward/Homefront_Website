"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-primary">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.1] text-white">
              Your home should run smoothly.
              <br />
              <span className="text-accent">We make sure it does.</span>
            </h2>
            <p className="mt-6 text-lg text-white/55 max-w-lg">
              Join West Texas homeowners who&apos;ve stopped worrying about maintenance — and started actually enjoying where they live.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 active:scale-[0.98] px-7 py-5 text-sm font-semibold rounded-lg transition-all duration-150"
              >
                Start Your Homefront Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/35">
              Takes less than 2 minutes. Cancel anytime.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
