import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              Homefront
            </Link>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Private home management for Lubbock homeowners. Serving Lubbock and the greater High Plains.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lubbock, TX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>(432) 555-HOME</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-tertiary" />
                <span>hello@homefront.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Homefront. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with care in <span className="text-primary font-medium">Lubbock</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
