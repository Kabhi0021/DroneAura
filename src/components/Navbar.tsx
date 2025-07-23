import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#booking" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Set active nav based on URL hash
    const setActiveNav = () => {
      setActive(window.location.hash || "#home");
    };
    setActiveNav();
    window.addEventListener("hashchange", setActiveNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", setActiveNav);
    };
  }, []);

  // Custom link style
  const linkBase =
    "text-lg font-medium px-2 transition-smooth";
  const linkDefault =
    "text-[#0dc1da] font-montserrat";
  const linkHover =
    "hover:text-[#fea610]";
  const linkActive =
    "text-[#f88039] font-bold";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_8px_32px_0_rgba(30,41,59,0.37)]"
          : "bg-transparent"
        
      )}
    >
      <div className="w-full px-2 sm:px-2">
        <div className="flex justify-between items-center min-h-[5rem] md:min-h-[5rem]">
          {/* Logo and Brand Left */}
          <div className="flex items-center space-x-3 min-w-[280px] ml-0">
            <img
              src="/logo.png"
              alt="Drone Aura Logo"
              className="h-10 w-10 md:h-14 md:w-14 object-contain"
              style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}
            />
            <span
              className="font-extrabold text-3xl md:text-4xl tracking-wider"
              style={{ fontFamily: "'Montserrat', Arial, sans-serif", minHeight: '2rem', display: 'flex', alignItems: 'center' }}
            >
              <span className="bg-gradient-to-r from-sky-400 to-sky-400 bg-clip-text text-transparent">DRONE&nbsp;</span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">AURA</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center mx-auto space-x-4">
  {navigation.map(item => (
    <a
      key={item.name}
      href={item.href}
      className={cn(
        linkBase,
        linkDefault,
        linkHover,
        active === item.href ? linkActive : ""
      )}
      style={{ fontFamily: "'Montserrat', Arial, sans-serif", cursor: "pointer" }}
      onClick={(e) => {
        e.preventDefault();
        setActive(item.href);

        if (item.name === "Home") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsScrolled(false);  // Immediately trigger blur transition like scroll
        } else {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {item.name}
    </a>
  ))}
</div>


          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto px-4 py-3">
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
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-smooth",
                  "text-[#0dc1da] font-montserrat hover:text-[#fea610]",
                  active === item.href ? "text-[#f88039] font-bold" : ""
                )}
                style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
                onClick={() => { setIsOpen(false); setActive(item.href); }}
              >
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
    </nav>
  );
}
