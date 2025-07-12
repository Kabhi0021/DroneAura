import { Award, Users, Camera, Heart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We're passionate about capturing life's most precious moments from unique aerial perspectives."
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Every shot is carefully planned and executed with technical precision and artistic vision."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We use cutting-edge drone technology and editing techniques to stay ahead of trends."
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "1000+", label: "Flying Hours" },
  { number: "50+", label: "Awards Won" },
  { number: "99%", label: "Client Satisfaction" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-sky bg-clip-text text-transparent">DroneAura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize aerial photography in India, DroneAura combines 
            cutting-edge technology with artistic storytelling to create unforgettable visual experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What started as a dream to capture India's breathtaking landscapes from above has evolved 
                into the country's premier drone photography and videography service. Since 2020, we've 
                been pushing the boundaries of aerial storytelling.
              </p>
              <p>
                Our team of certified pilots and visual artists brings together technical expertise and 
                creative vision to deliver stunning aerial content that exceeds expectations. From intimate 
                wedding ceremonies to large-scale corporate events, we've captured over 1000 memorable moments.
              </p>
              <p>
                Licensed by DGCA and insured for complete peace of mind, we operate across India, bringing 
                professional drone services to couples, businesses, and creators who demand excellence.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg">
                Our Certifications
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=500&fit=crop"
              alt="DroneAura team with professional drone equipment"
              className="rounded-2xl shadow-floating object-cover w-full h-96"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-floating">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-primary mr-3" />
                <div>
                  <div className="font-bold text-foreground">DGCA Certified</div>
                  <div className="text-sm text-muted-foreground">Licensed Operators</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-sky w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-floating">
          <h3 className="text-3xl font-bold text-center mb-12">
            Trusted by <span className="bg-gradient-sky bg-clip-text text-transparent">Thousands</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-sky bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To elevate every story through breathtaking aerial perspectives, making professional 
              drone photography accessible to everyone while maintaining the highest standards of 
              safety, creativity, and customer satisfaction.
            </p>
            <Button variant="cta" size="lg">
              Start Your Story With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}