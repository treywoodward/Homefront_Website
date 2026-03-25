import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-base font-bold tracking-tight text-foreground">
              Homefront
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Private home management for homeowners across West Texas. Rooted in Lubbock.
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Lubbock, TX</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>(806) 555-HOME</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>hello@homefront.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Links</h4>
            <div className="space-y-2.5">
              <Link href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
              <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Legal</h4>
            <div className="space-y-2.5">
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Homefront. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care in Lubbock, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
