"use client"

import {
  ClipboardCheck,
  Wrench,
  FileText,
  Users,
  Calendar,
  MapPin,
  Hammer,
  Leaf,
  AlertTriangle,
  Wind,
  Thermometer,
  Droplets
} from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const mainServices = [
  { icon: ClipboardCheck, text: "Scheduled home inspections", color: "text-primary", bg: "bg-primary/8" },
  { icon: Wind, text: "Post-storm damage assessments", color: "text-accent", bg: "bg-accent/8" },
  { icon: Wrench, text: "Preventative maintenance tracking", color: "text-tertiary", bg: "bg-tertiary/8" },
  { icon: Thermometer, text: "HVAC seasonal check-ups", color: "text-primary", bg: "bg-primary/8" },
  { icon: FileText, text: "Digital home history + records", color: "text-accent", bg: "bg-accent/8" },
  { icon: Users, text: "Local vendor coordination", color: "text-tertiary", bg: "bg-tertiary/8" },
  { icon: Calendar, text: "Priority scheduling", color: "text-primary", bg: "bg-primary/8" },
  { icon: MapPin, text: "Trusted regional network", color: "text-accent", bg: "bg-accent/8" },
  { icon: Droplets, text: "Water system monitoring", color: "text-tertiary", bg: "bg-tertiary/8" },
]

const addOns = [
  { icon: Hammer, text: "Handyman hours", color: "text-primary" },
  { icon: Leaf, text: "Seasonal services", color: "text-accent" },
  { icon: AlertTriangle, text: "Emergency coordination", color: "text-tertiary" },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="max-w-xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Everything your West Texas home needs.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built for the demands of West Texas living — the climate, the distance, the pace.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mainServices.map((service, index) => (
            <AnimateIn key={index} delay={index * 55} className="h-full">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-secondary/60 hover:-translate-y-0.5 transition-all duration-200 h-full cursor-default">
                <div className={`w-9 h-9 rounded-md ${service.bg} flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`h-4 w-4 ${service.color}`} />
                </div>
                <span className="text-sm text-foreground font-medium">{service.text}</span>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200}>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Optional Add-ons</p>
            <div className="flex flex-wrap gap-3">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-dashed border-border bg-card hover:border-primary/40 hover:bg-secondary/60 transition-all duration-200 cursor-default"
                >
                  <addon.icon className={`h-4 w-4 ${addon.color}`} />
                  <span className="text-sm font-medium text-foreground">{addon.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
