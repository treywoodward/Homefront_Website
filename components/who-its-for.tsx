"use client"

import { AnimateIn } from "@/components/animate-in"

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <div className="md:flex md:items-start md:gap-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground md:w-1/3 flex-shrink-0">
              Who&apos;s it for?
            </h2>
            <div className="mt-6 md:mt-1">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Anyone who doesn&apos;t have the <span className="text-foreground font-semibold">ability</span>, <span className="text-foreground font-semibold">capacity</span>, or <span className="text-foreground font-semibold">desire</span> to manage home ownership on their own.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Whether that&apos;s a first-time buyer still finding their footing, a busy professional with no time to chase contractors, a senior who wants their home handled — not a hassle, or someone suddenly managing a home on their own for the first time. If the job of homeownership feels like too much, that&apos;s exactly what we&apos;re here for.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
