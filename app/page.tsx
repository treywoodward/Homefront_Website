import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { WhoItsFor } from "@/components/who-its-for"
import { Pricing } from "@/components/pricing"
import { Trust } from "@/components/trust"
import { RealEstate } from "@/components/real-estate"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Services />
      <WhoItsFor />
      <Pricing />
      <Trust />
      <RealEstate />
      <FinalCTA />
      <Footer />
    </main>
  )
}
