import { useState } from "react";
import { Play, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Weddings", "Real Estate", "Corporate", "Travel", "Cinematic"];

const portfolioItems = [
  {
    id: 1,
    title: "Romantic Wedding at Udaipur Palace",
    category: "Weddings",
    type: "video",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Villa Estate Tour",
    category: "Real Estate",
    type: "photo",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Corporate Event Coverage",
    category: "Corporate",
    type: "video",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Himalayan Adventure Expedition",
    category: "Travel",
    type: "video",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Pre-Wedding Beach Shoot",
    category: "Weddings",
    type: "photo",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Documentary Film Production",
    category: "Cinematic",
    type: "video",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Tech Campus Overview",
    category: "Corporate",
    type: "photo",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Goa Coastal Paradise",
    category: "Travel",
    type: "photo",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
  },
  {
    id: 9,
    title: "Penthouse Property Showcase",
    category: "Real Estate",
    type: "video",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop"
  }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-sky bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of aerial masterpieces. Each project tells a unique story 
            captured from breathtaking perspectives that only drone photography can provide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-floating transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Type Indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  {item.type === 'video' ? (
                    <div className="flex items-center">
                      <Play className="h-3 w-3 mr-1" />
                      Video
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      Photo
                    </div>
                  )}
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-sunset text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="glass" size="lg" className="transform scale-90 group-hover:scale-100 transition-transform">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-primary text-sm font-medium">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-16 text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="hover-scale"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Flight
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}