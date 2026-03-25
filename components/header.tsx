"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-bold tracking-tight text-foreground">
          Homefront
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-foreground text-background hover:bg-foreground/85 text-sm px-5 py-2 rounded-lg transition-colors">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-5">
          <div className="flex flex-col gap-4">
            <Link href="#how-it-works" className="text-sm text-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#about" className="text-sm text-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Button className="bg-foreground text-background hover:bg-foreground/85 w-full mt-1 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
