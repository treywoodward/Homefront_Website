"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
            Homefront
          </Link>
          <span className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
            <MapPin className="h-3 w-3" />
            Lubbock
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <Link 
              href="#how-it-works" 
              className="text-base text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-base text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#about" 
              className="text-base text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2 py-6 shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
