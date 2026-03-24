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
  { icon: ClipboardCheck, text: "Scheduled home inspections", color: "text-primary", bg: "bg-primary/10" },
  { icon: Wind, text: "Post-storm damage assessments", color: "text-accent", bg: "bg-accent/10" },
  { icon: Wrench, text: "Preventative maintenance tracking", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: Thermometer, text: "HVAC seasonal check-ups", color: "text-primary", bg: "bg-primary/10" },
  { icon: FileText, text: "Digital home history + records", color: "text-accent", bg: "bg-accent/10" },
  { icon: Users, text: "Local vendor coordination", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: Calendar, text: "Priority scheduling", color: "text-primary", bg: "bg-primary/10" },
  { icon: MapPin, text: "Trusted Permian Basin network", color: "text-accent", bg: "bg-accent/10" },
  { icon: Droplets, text: "Water system monitoring", color: "text-tertiary", bg: "bg-tertiary/10" },
]

const addOns = [
  { icon: Hammer, text: "Handyman hours", color: "text-primary" },
  { icon: Leaf, text: "Seasonal services", color: "text-accent" },
  { icon: AlertTriangle, text: "Emergency coordination", color: "text-tertiary" },
]

export function Services() {
  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Everything your <span className="text-primary">West Texas</span> home needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Services designed specifically for the unique challenges of Permian Basin homeownership.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:bg-card/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              <span className="text-foreground font-medium">{service.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Optional Add-ons</p>
          <div className="flex flex-wrap justify-center gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 border-dashed border-border bg-card hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <addon.icon className={`h-5 w-5 ${addon.color} group-hover:scale-110 transition-transform`} />
                <span className="font-medium text-foreground">{addon.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
