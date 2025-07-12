import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Wedding Drone Photography",
  "Pre-Wedding Shoots",
  "Real Estate Aerial",
  "Corporate Coverage",
  "Travel & Events",
];

const quickLinks = [
  "About Us",
  "Portfolio",
  "Pricing",
  "Blog",
  "FAQ",
  "Privacy Policy",
];

export function Footer() {
  return (
    <footer className="bg-tech-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold bg-gradient-sky bg-clip-text text-transparent">
                DroneAura
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elevating your stories through professional drone photography and videography. 
              Capturing breathtaking aerial perspectives across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">+91 97161 99493</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">hello@droneaura.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-300">
                  New Delhi, India<br />
                  Serving PAN India
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => window.open('https://wa.me/919716199493', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 DroneAura. All rights reserved. | Designed with ❤️ for aerial storytelling
          </p>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}