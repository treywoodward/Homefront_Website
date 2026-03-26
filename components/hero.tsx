"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

function useCountUp(target: number, duration: number, active: boolean): number {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

export function Hero() {
  const { ref: statsRef, inView: statsInView } = useInView(0.4)
  const homes = useCountUp(500, 1400, statsInView)
  const satisfaction = useCountUp(98, 1100, statsInView)

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-border">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.0] text-balance animate-fade-in-up delay-100">
          You own it.<br />
          We run it.
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-foreground font-medium max-w-xl leading-snug animate-fade-in-up delay-200">
          A dedicated manager for your home.
          <br className="hidden sm:block" />{" "}
          One call handles everything — maintenance, vendors, repairs, and oversight.
        </p>

        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up delay-200">
          No more coordinating contractors or chasing issues. We manage your home behind the scenes so it simply works.
        </p>

        <p className="mt-6 text-sm font-medium text-muted-foreground animate-fade-in-up delay-200">
          <span className="inline-block w-5 h-px bg-border align-middle mr-2" />
          Starting at $0.10 per square foot
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-3 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/85 active:scale-[0.98] px-7 py-5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-150"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary hover:border-primary/30 active:scale-[0.98] px-7 py-5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-150"
          >
            How It Works
          </Button>
        </div>

        <div
          ref={statsRef}
          className="mt-16 pt-10 border-t border-border flex flex-wrap items-center gap-10 md:gap-16 animate-fade-in-up delay-400"
        >
          <div>
            <div className="text-3xl font-bold text-foreground tabular-nums">{statsInView ? `${homes}+` : '0+'}</div>
            <div className="text-sm text-muted-foreground mt-0.5">Homes Managed</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-bold text-foreground tabular-nums">{statsInView ? `${satisfaction}%` : '0%'}</div>
            <div className="text-sm text-muted-foreground mt-0.5">Client Satisfaction</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground mt-0.5">Advisor Access</div>
          </div>
        </div>

      </div>
    </section>
  )
}
