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
  href: "#booking"
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
  return <nav className={cn(
  "fixed top-0 w-full z-50 transition-smooth",
  isScrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"
)}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center min-h-[5.5rem] md:min-h-[7rem]"> 
      {/* Logo + Text */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="Drone Aura Logo"
          className="h-16 w-16 md:h-24 md:w-24 object-contain"
        />
        <span
          className="font-extrabold text-2xl md:text-4xl lg:text-6xl tracking-wider"
          style={{ fontFamily: "'Lato', Arial, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-sky-400 to-sky-400 bg-clip-text text-transparent">DRONE</span>
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">AURA</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center ml-8 space-x-10">
        {navigation.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="text-lg font-medium text-foreground hover:text-primary transition-smooth"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center ml-8">
        <Button
          variant="hero"
          size="lg"
          onClick={() =>
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Book Your Flight
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-soft">
        {navigation.map(item => (
          <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
            {item.name}
          </a>
        ))}
        <div className="px-3 py-2">
          <Button variant="hero" className="w-full" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Your Flight
          </Button>
        </div>
      </div>
    </div>
  )}
</nav>;

}