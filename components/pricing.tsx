"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const plans = [
  {
    name: "Essential",
    price: "$79",
    period: "/mo",
    description: "Quarterly inspections + tracking",
    features: [
      "Quarterly home inspections",
      "Digital maintenance tracking",
      "Issue documentation",
      "Email support",
    ],
    popular: false,
    checkColor: "bg-tertiary",
  },
  {
    name: "Standard",
    price: "$149",
    period: "/mo",
    description: "Full coordination + priority scheduling",
    features: [
      "Monthly home inspections",
      "Vendor coordination",
      "Priority scheduling",
      "Digital home records",
      "Phone & email support",
      "Post-storm assessments",
    ],
    popular: true,
    checkColor: "bg-primary",
  },
  {
    name: "Concierge",
    price: "$299",
    period: "/mo",
    description: "Full-service oversight + dedicated manager",
    features: [
      "Bi-weekly check-ins",
      "Dedicated home manager",
      "All vendor coordination",
      "24/7 emergency line",
      "Quarterly reports",
      "Home improvement consulting",
    ],
    popular: false,
    checkColor: "bg-accent",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Straightforward pricing.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Plans designed for West Texas homeowners. No surprises.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <AnimateIn key={index} delay={index * 90} className="h-full">
              <div
                className={`relative p-7 rounded-lg border flex flex-col h-full transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.popular
                    ? "border-primary bg-primary/4 hover:shadow-md hover:shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-xs font-bold rounded-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.checkColor}`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-7 py-5 text-sm font-semibold rounded-lg active:scale-[0.98] transition-all duration-150 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/85"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={300}>
          <p className="mt-8 text-sm text-muted-foreground">
            Available to homeowners throughout West Texas. <span className="text-foreground font-medium">Questions? We&apos;re happy to talk.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
