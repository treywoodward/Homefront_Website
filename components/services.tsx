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

const mainServices = [
  { icon: ClipboardCheck, text: "Scheduled home inspections", color: "text-primary", bg: "bg-primary/8" },
  { icon: Wind, text: "Post-storm damage assessments", color: "text-accent", bg: "bg-accent/8" },
  { icon: Wrench, text: "Preventative maintenance tracking", color: "text-tertiary", bg: "bg-tertiary/8" },
  { icon: Thermometer, text: "HVAC seasonal check-ups", color: "text-primary", bg: "bg-primary/8" },
  { icon: FileText, text: "Digital home history + records", color: "text-accent", bg: "bg-accent/8" },
  { icon: Users, text: "Local vendor coordination", color: "text-tertiary", bg: "bg-tertiary/8" },
  { icon: Calendar, text: "Priority scheduling", color: "text-primary", bg: "bg-primary/8" },
  { icon: MapPin, text: "Trusted High Plains network", color: "text-accent", bg: "bg-accent/8" },
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
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Everything your Lubbock home needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed for the unique challenges of High Plains homeownership.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-200 h-full"
            >
              <div className={`w-9 h-9 rounded-md ${service.bg} flex items-center justify-center flex-shrink-0`}>
                <service.icon className={`h-4 w-4 ${service.color}`} />
              </div>
              <span className="text-sm text-foreground font-medium">{service.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Optional Add-ons</p>
          <div className="flex flex-wrap gap-3">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-dashed border-border bg-card hover:border-primary/40 transition-colors duration-200"
              >
                <addon.icon className={`h-4 w-4 ${addon.color}`} />
                <span className="text-sm font-medium text-foreground">{addon.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
