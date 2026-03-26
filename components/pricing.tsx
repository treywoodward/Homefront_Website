"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const included = [
  "Proactive Check-Ins",
  "Quarterly Property Reviews",
  "Annual Comprehensive Inspection",
  "Dedicated Property Advisor — 24/7",
  "Full vendor and contractor coordination",
  "Complete home profile and service history",
]

const examples = [
  { sqft: "1,500", price: "$150" },
  { sqft: "2,000", price: "$200" },
  { sqft: "2,500", price: "$250" },
  { sqft: "3,000", price: "$300" },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              One rate. Whatever the need.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Instead of calling vendors, suppliers, and contractors — you call us. We handle everything, start to finish.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Rate card */}
          <AnimateIn delay={60}>
            <div className="p-8 rounded-lg border border-primary bg-primary/4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Simple pricing</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-6xl font-bold text-foreground">10¢</span>
                <div className="text-muted-foreground leading-tight">
                  <span className="block text-base font-medium">per sq ft</span>
                  <span className="block text-sm">per month</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Your home&apos;s square footage sets your rate — nothing more. No tiers, no surprises.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {examples.map((ex) => (
                  <div key={ex.sqft} className="flex items-center justify-between px-3 py-2 rounded-md bg-background border border-border text-sm">
                    <span className="text-muted-foreground">{ex.sqft} sq ft</span>
                    <span className="font-semibold text-foreground">{ex.price}/mo</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-7 py-5 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 active:scale-[0.98] transition-all duration-150">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimateIn>

          {/* Included in every subscription */}
          <AnimateIn delay={120}>
            <div className="p-8 rounded-lg border border-border bg-card">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Included in every membership</p>
              <ul className="mt-6 space-y-4">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-6">
                Your home has one point of contact. One team that knows it, tracks it, and manages everything it needs — before and after problems arise.
              </p>
            </div>
          </AnimateIn>

        </div>

        <AnimateIn delay={240}>
          <p className="mt-8 text-sm text-muted-foreground">
            Available to homeowners throughout West Texas. <span className="text-foreground font-medium">Questions? We&apos;re happy to talk.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
