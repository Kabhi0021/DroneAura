import { useState } from "react";
import { Calendar, MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  shootType: string;
  dates: Date[];
  city: string;
  address: string;
  pincode: string;
  message: string;
}

const shootTypes = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Real Estate",
  "Corporate Event",
  "Travel & Tourism",
  "Cinematic Production",
  "Other (Please specify in Addtional Details field)"
];

const cities = [
  "Delhi",
  "Gurgaon", 
  "Noida",
  "Faridabad",
  "Meerut",
  "Manesar"
];

export function BookingForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    dates: [],
    city: "",
    address: "",
    pincode: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      // Convert dates to string format for Google Sheet
  const formattedDates = formData.dates.map(date => format(date, "dd/MM/YYY"));

    // Gather form values
  const bookingData = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  shootType: formData.shootType,
  dates: formattedDates,
  city: formData.city,
  address: formData.address,
  pincode: formData.pincode,
  message: formData.message,
  };

  // 1. Send data to Google Sheet via Apps Script
  fetch('https://script.google.com/macros/s/AKfycbx4Q150vbUHrcTTC9qbgwJ2F3MprW0xDvI7F-S2RT3qH_gZ7mWHdNKzx4jGl4YezGMrCA/exec', {
    method: 'POST',
    mode: 'no-cors', // Allows request to succeed without CORS errors
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
    
    // 2. Create WhatsApp message
    const datesText = formData.dates.length > 0 
      ? formData.dates.map(date => format(date, "PPP")).join(",  ")
      : "Not specified";
    
    const whatsappMessage = `Hi DroneAura! I'd like to book a drone shoot.

📋 Booking Details:
*• Name:* ${formData.name}
*• Email:* ${formData.email}
*• Phone:* ${formData.phone}
*• Service:* ${formData.shootType}
*• Preferred Dates:* ${datesText}
*• City:* ${formData.city}
*• Address:* ${formData.address}
*• PIN Code:* ${formData.pincode}

💬 *Message:* ${formData.message}

Looking forward to working with you!`;

    const whatsappUrl = `https://wa.me/919716199493?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Contacting DroneAuara on WhatsApp",
      description: "Please send the pre-filled message to complete your booking request.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDateSelect = (dates: Date[] | undefined) => {
    setFormData(prev => ({
      ...prev,
      dates: dates || []
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="bg-gradient-sky bg-clip-text text-transparent">Flight</span>
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
                  City *
                </label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                >
                  <option value="">Select city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
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

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Dates *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      formData.dates.length === 0 && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {formData.dates.length > 0
                      ? `${formData.dates.length} date(s) selected`
                      : "Select dates"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="multiple"
                    selected={formData.dates}
                    onSelect={handleDateSelect}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              {formData.dates.length > 0 && (
                <div className="mt-2 text-sm text-muted-foreground">
                  Selected: {formData.dates.map(date => format(date, "MMM dd, yyyy")).join(", ")}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter complete address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Enter PIN code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                />
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
                Book Your Flight
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
                +91 97161 99493
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                droneauraofficial@gmail.com
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