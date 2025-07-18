import { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyBottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookFlight = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomQuote = () => {
    const whatsappMessage = `Hi Drone Aura! I'd like to get a custom request for my project. Please contact me urgently to discuss the details.`;
    const whatsappUrl = `https://wa.me/919716199493?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={cn(
  "fixed bottom-44 md:bottom-12 right-4 z-[60] shadow-floating transition-all duration-300",
  isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-16 pointer-events-none"
)}

    >
      <div className="bg-white/95 backdrop-blur-md border-t border-border shadow-floating px-4 py-3">
        <div className="flex flex-col xs:flex-row gap-3 max-w-sm mx-auto">
  <Button 
    variant="hero" 
    size="lg" 
    className="flex-1 text-base !h-14 !min-h-[56px] !py-4"
    onClick={handleBookFlight}
  >
    <Phone className="h-4 w-4 mr-2" />
    Book Your Flight
  </Button>
  <Button 
    variant="outline" 
    size="lg" 
    className="flex-1 text-base !h-14 !min-h-[56px] !py-4 border-primary text-primary hover:bg-primary hover:text-white"
    onClick={handleCustomQuote}
  >
    <MessageSquare className="h-4 w-4 mr-2" />
    Custom Request
  </Button>
</div>

      </div>
    </div>
  );
}