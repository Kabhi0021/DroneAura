import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
  onClick={scrollToTop}
  variant="hero"
  size="icon"
  className={cn(
    "fixed z-[70] shadow-floating transition-all duration-300 right-4",
    // Y position: mobile above sticky, desktop above floating sticky
    "bottom-[7 rem] md:bottom-[10 rem]",
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-16 pointer-events-none"
  )}
>
  <ArrowUp className="h-5 w-5" />
</Button>

  );
}