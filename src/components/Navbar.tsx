import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navigation = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Services",
  href: "#services"
}, {
  name: "Portfolio",
  href: "#portfolio"
}, {
  name: "Testimonials",
  href: "#testimonials"
}, {
  name: "Contact",
  href: "#contact"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 w-full z-50 transition-smooth", isScrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-primary mr-2 bg-transparent" />
            <span className="bg-gradient-sky bg-clip-text font-extrabold text-4xl text-rose-100">
              DroneAura
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-smooth font-medium">
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Book Your Flight
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-soft">
            {navigation.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>)}
            <div className="px-3 py-2">
              <Button variant="hero" className="w-full" onClick={() => document.getElementById('booking')?.scrollIntoView({
            behavior: 'smooth'
          })}>
                Book Your Flight
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
}