import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  featured?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  image,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-floating transition-smooth",
        featured && "ring-2 ring-primary ring-offset-2"
      )}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-sunset text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        )}
        
        {/* Icon */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground text-sm ml-1">starting</span>
          </div>
          <Button 
            variant={featured ? "hero" : "cta"} 
            size="sm" 
            className="hover-scale"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}