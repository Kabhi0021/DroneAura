import { useState } from "react";
import { Calendar, MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Utility: Detect mobile device
const isMobileDevice = () =>
  typeof window !== "undefined" &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
  const [activeTab, setActiveTab] = useState<"flight" | "custom">("flight");
  const [showPopup, setShowPopup] = useState(false);

  // Main Booking Form
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

  // Custom Quote Form
  const [customQuote, setCustomQuote] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Main Booking submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDates = formData.dates.map(date => format(date, "dd/MM/yyyy"));

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

    // Send data to Google Sheet
    fetch('https://script.google.com/macros/s/AKfycbx4Q150vbUHrcTTC9qbgwJ2F3MprW0xDvI7F-S2RT3qH_gZ7mWHdNKzx4jGl4YezGMrCA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    // WhatsApp message
    const datesText = formData.dates.length > 0 
      ? formData.dates.map(date => format(date, "PPP")).join(",  ")
      : "Not specified";
    
    const whatsappMessage = `Hi Drone Aura! I'd like to book a drone shoot.

📋 Booking Details:
*1. Name:* ${formData.name}
*2. Email:* ${formData.email}
*3. Phone:* ${formData.phone}
*4. Service:* ${formData.shootType}
*5. Preferred Dates:* ${datesText}
*6. City:* ${formData.city}
*7. Address:* ${formData.address}
*8. PIN Code:* ${formData.pincode}

💬 *9. Additional Details (Message):* ${formData.message}

Please connect back to discuss the requirement`;

    const whatsappUrl = `https://wa.me/919716199493?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Contacting Drone Aura on WhatsApp",
      description: "Please send the pre-filled message to complete your booking request.",
    });
  };

  // Custom Quote Submit
  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data to send to Google Sheet
    const quoteData = {
      name: customQuote.name,
      email: customQuote.email,
      phone: customQuote.phone,
      formType: "Custom Quote", // Add this to distinguish in Sheet
    };

    // Send to Google Sheet
    fetch('https://script.google.com/macros/s/AKfycbx4Q150vbUHrcTTC9qbgwJ2F3MprW0xDvI7F-S2RT3qH_gZ7mWHdNKzx4jGl4YezGMrCA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    // WhatsApp message for Custom Quote
    const whatsappMessage = `Hi Drone Aura! I would like a *Custom Quote*.

*Name:* ${customQuote.name}
*Email:* ${customQuote.email}
*Phone:* ${customQuote.phone}

Please contact me to discuss my requirements.`;

    const whatsappUrl = `https://wa.me/919716199493?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Custom Quote Sent!",
      description: "We've sent your details to Drone Aura. Please complete your request on WhatsApp.",
    });
    setCustomQuote({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomQuote(prev => ({
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

  // Call Us Now
  const handleCallClick = () => {
    const phone = "+919716199493";
    if (isMobileDevice()) {
      window.location.href = `tel:${phone}`;
    } else {
      setShowPopup(true);
    }
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
          {/* Tabs */}
          <div className="flex border-b-2 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("flight")}
              className={`flex-1 py-3 text-xl font-semibold border-b-4 transition ${
                activeTab === "flight"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400"
              }`}
            >
              Book Your Flight
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("custom")}
              className={`flex-1 py-3 text-xl font-semibold border-b-4 transition ${
                activeTab === "custom"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400"
              }`}
            >
              Custom Quote
            </button>
          </div>

          {/* Booking Form */}
          {activeTab === "flight" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ...full booking form fields remain unchanged as before... */}
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
          )}

          {/* Custom Quote Form */}
          {activeTab === "custom" && (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={customQuote.name}
                  onChange={handleCustomChange}
                  className="w-full px-4 py-3 border border-input rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={customQuote.phone}
                  onChange={handleCustomChange}
                  className="w-full px-4 py-3 border border-input rounded-lg"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={customQuote.email}
                  onChange={handleCustomChange}
                  className="w-full px-4 py-3 border border-input rounded-lg"
                  placeholder="your@email.com"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-100 text-orange-500 font-bold py-3 rounded-xl border border-orange-300 hover:bg-orange-200 transition"
              >
                Contact Drone Aura
              </Button>
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-2 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <Button
                type="button"
                onClick={handleCallClick}
                className="w-full bg-orange-100 text-orange-500 font-bold py-3 rounded-xl border border-orange-300 hover:bg-orange-200 transition"
              >
                Call Us Now
              </Button>
              {/* Popup for Desktop */}
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
                  <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center">
                    <span className="text-2xl font-bold text-orange-500 mb-3">
                      +91 97161 99493
                    </span>
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText("+91 97161 99493");
                        setShowPopup(false);
                      }}
                      className="bg-orange-100 text-orange-500 font-semibold px-5 py-2 rounded-lg border border-orange-300 hover:bg-orange-200 transition"
                    >
                      Copy Number
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setShowPopup(false)}
                      className="mt-3 text-sm text-gray-400 underline"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}

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
