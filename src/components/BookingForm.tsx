import { useState } from "react";
import { Calendar, MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  shootType: string;
  date: string;
  location: string;
  message: string;
}

const shootTypes = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Real Estate",
  "Corporate Event",
  "Travel & Tourism",
  "Cinematic Production",
  "Other (Please specify)"
];

export function BookingForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    date: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi DroneAura! I'd like to book a drone shoot.

📋 Booking Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Service: ${formData.shootType}
• Preferred Date: ${formData.date}
• Location: ${formData.location}

💬 Message: ${formData.message}

Looking forward to working with you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the pre-filled message to complete your booking request.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="bg-gradient-sky bg-clip-text text-transparent">Aerial Shoot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your story from above? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-floating p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type *
                </label>
                <select
                  name="shootType"
                  required
                  value={formData.shootType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                >
                  <option value="">Select service type</option>
                  {shootTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="City, Venue, or Address"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Additional Details
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                  placeholder="Tell us more about your vision, special requirements, or any questions you have..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" variant="cta" size="xl" className="w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Book Your Aerial Shoot
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                You'll be redirected to WhatsApp to complete your booking request
              </p>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                hello@droneaura.com
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                24/7 Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}