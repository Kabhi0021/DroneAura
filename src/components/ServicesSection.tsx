import { Heart, Building, Camera, Users, Globe, Video } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Heart,
    title: "Wedding Drone Photography",
    description: "Capture your special day from breathtaking aerial perspectives. Create cinematic memories that last a lifetime.",
    features: [
      "Cinematic wedding videos",
      "Aerial couple portraits",
      "Reception venue shots",
      "Same-day highlight reel"
    ],
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    featured: true
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    description: "Romantic aerial shots in stunning locations. Perfect for save-the-date cards and wedding invitations.",
    features: [
      "Multiple location shoots",
      "Edited photo gallery",
      "Social media packages",
      "Print-ready formats"
    ],
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop"
  },
  {
    icon: Building,
    title: "Real Estate Aerial",
    description: "Showcase properties from unique angles. Increase listing appeal with professional aerial photography.",
    features: [
      "Property overview shots",
      "Neighborhood context",
      "Virtual tour integration",
      "Quick 24-hour delivery"
    ],
    price: "₹8,000",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
  },
  {
    icon: Users,
    title: "Corporate Coverage",
    description: "Professional aerial coverage for corporate events, product launches, and business documentation.",
    features: [
      "Event documentation",
      "Product showcase videos",
      "Corporate facility tours",
      "Team photography"
    ],
    price: "₹20,000",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop"
  },
  {
    icon: Globe,
    title: "Travel & Tourism",
    description: "Capture the beauty of destinations from above. Perfect for travel vlogs and destination marketing.",
    features: [
      "Destination showcases",
      "Travel documentaries",
      "Tourism promotion",
      "Adventure coverage"
    ],
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop"
  },
  {
    icon: Video,
    title: "Cinematic Coverage",
    description: "Professional cinematic drone videography for films, documentaries, and high-end productions.",
    features: [
      "4K video production",
      "Professional editing",
      "Multiple drone setup",
      "Director collaboration"
    ],
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-sky bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate weddings to grand corporate events, we offer comprehensive drone photography 
            and videography services tailored to capture your unique story from the sky.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-floating">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create 
              a customized aerial photography solution that perfectly fits your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-fuschia text-white px-8 py-3 rounded-lg font-semibold hover:shadow-floating transition-smooth hover:scale-105"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Aerial Shoot
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-smooth">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}