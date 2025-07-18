import { ArrowRight, Play, Award, Users, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">

      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#120d08]/55">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-drone.jpg')] bg-cover bg-center opacity-55"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight md:text-7xl">
          Elevate Your Story
          <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">From The Sky</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">Professional drone photography and videography services for weddings, real estate, corporate events and cinematic storytelling. Capture breathtaking aerial perspectives that transform your moments into extraordinary memories.</p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-white">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">1000+</div>
            <div className="text-white">Aerial Shoots</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-white">Pilots</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cta" size="xl" className="group" onClick={() => document.getElementById('booking')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Book Your Flight
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glass" size="xl" className="group">
            <Play className="mr-2 h-5 w-5" />
            Watch Our Reel
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-white mb-4">Trusted by leading brands and videographers</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <Users className="h-8 w-8" />
            <Award className="h-8 w-8" />
            <Camera className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
      </div>
    </section>;
}