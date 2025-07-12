import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Silver",
    price: "₹15,000",
    description: "Perfect for small events and basic coverage",
    features: [
      "2-3 hours of drone coverage",
      "Basic edited photos (30-50)",
      "1 highlight video (2-3 mins)",
      "Quick delivery (5-7 days)",
      "Single location coverage",
      "Basic equipment package"
    ],
    popular: false
  },
  {
    name: "Gold",
    price: "₹35,000",
    description: "Most popular choice for weddings and events",
    features: [
      "Full day drone coverage (8 hours)",
      "Premium edited gallery (100-150 photos)",
      "Cinematic highlight reel (5-7 mins)",
      "Same day teaser video",
      "Multiple location coverage",
      "Professional equipment & backup",
      "Social media optimized content",
      "Online gallery for sharing"
    ],
    popular: true
  },
  {
    name: "Platinum",
    price: "₹75,000",
    description: "Ultimate package for luxury events",
    features: [
      "Multi-day coverage available",
      "Unlimited edited photos",
      "Feature-length documentary (15-20 mins)",
      "Raw footage delivery",
      "Multiple drone operators",
      "Premium equipment & multiple backups",
      "Live streaming capabilities",
      "Priority customer support",
      "Custom editing requests",
      "Extended post-production"
    ],
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="bg-gradient-sky bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your aerial photography needs. All packages include 
            professional editing, DGCA certified operations, and comprehensive insurance coverage.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-floating transition-smooth animate-fade-in ${
                pkg.popular ? 'ring-2 ring-primary ring-offset-2 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-sunset text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "hero" : "outline"}
                size="lg"
                className="w-full hover-scale"
              >
                {pkg.popular ? (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Get Started
                  </>
                ) : (
                  "Choose Plan"
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">What's included in all packages?</h4>
              <p className="text-muted-foreground text-sm">
                All packages include DGCA certified operations, comprehensive insurance, 
                professional editing, and online delivery of final content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can I customize a package?</h4>
              <p className="text-muted-foreground text-sm">
                Absolutely! We offer custom packages tailored to your specific requirements. 
                Contact us for a personalized quote.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What about travel costs?</h4>
              <p className="text-muted-foreground text-sm">
                Travel within Delhi NCR is included. For other locations, minimal travel 
                charges may apply based on distance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you have backup equipment?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, we always carry backup drones and equipment to ensure your event 
                is captured without any interruptions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Need Something Different?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every event is unique. Let's discuss your specific requirements and create 
            a customized package that perfectly fits your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}