import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about", hasDropdown: true },
  { label: "Mass Tort", href: "#solutions", hasDropdown: true },
  { label: "Class Action", href: "#solutions", hasDropdown: true },
  { label: "Personal Injury", href: "#solutions", hasDropdown: true },
  { label: "Blogs", href: "#resources" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary">C2A</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Phone Button */}
          <Button className="hidden lg:flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(888) 202-1350</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              (888) 202-1350
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
