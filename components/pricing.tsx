"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowRight } from "lucide-react"

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
    accent: "tertiary",
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
    accent: "primary",
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
    accent: "accent",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Straightforward pricing.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plans designed for Lubbock homeowners. No surprises.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-105 md:scale-110"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-primary text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  Most Popular
                </span>
              )}

              <div className="relative flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-primary" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <ul className="mt-8 space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary" : plan.accent === "accent" ? "bg-accent" : "bg-tertiary"
                      }`}>
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`group/btn w-full mt-8 py-6 text-base transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          All plans include coverage for homes in <span className="text-primary font-medium">Lubbock</span> and the greater <span className="text-tertiary font-medium">High Plains</span>.
        </p>
      </div>
    </section>
  )
}
