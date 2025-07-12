import { TestimonialCard } from "./TestimonialCard";
const testimonials = [{
  name: "Priya & Arjun",
  role: "Wedding Couple",
  company: "Delhi Wedding",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "DroneAura captured our wedding in the most magical way! The aerial shots of our venue and the sunset ceremony were absolutely breathtaking. Our guests are still talking about those stunning drone videos.",
  featured: true
}, {
  name: "Rajesh Kumar",
  role: "Real Estate Developer",
  company: "Kumar Properties",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "The aerial photography transformed how we showcase our properties. Sales inquiries increased by 40% after we started using DroneAura's services. Highly professional team!"
}, {
  name: "Meera Sharma",
  role: "Event Manager",
  company: "Elite Events",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "Working with DroneAura for our corporate events has been amazing. They capture every detail from unique angles and deliver high-quality content that our clients love."
}, {
  name: "Vikram Singh",
  role: "Travel Blogger",
  company: "Wanderlust Diaries",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "The cinematic quality of their travel videos is outstanding. DroneAura helped me create content that stands out on social media and attracts brand collaborations."
}, {
  name: "Anita & David",
  role: "Pre-Wedding Couple",
  company: "Mumbai Shoot",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "Our pre-wedding shoot was like a movie! The drone shots added such a romantic and grand feel to our photos. We couldn't be happier with the results."
}, {
  name: "Tech Corp Ltd",
  role: "Marketing Director",
  company: "Technology Company",
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
  rating: 5,
  testimonial: "DroneAura's corporate coverage of our product launch was exceptional. The aerial shots of our facility and event perfectly captured the scale and professionalism of our brand."
}];
export function TestimonialsSection() {
  return <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-sky bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the couples, businesses, and creators 
            who have experienced the magic of aerial storytelling with DroneAura.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={`${testimonial.name}-${index}`} className="animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <TestimonialCard {...testimonial} />
            </div>)}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-floating max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
            <p className="text-muted-foreground mb-6">
              Experience the DroneAura difference and create your own success story. 
              Let's capture your vision from a whole new perspective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-sky text-white px-8 py-3 rounded-lg font-semibold hover:shadow-floating transition-smooth hover:scale-105">Book a Drone Shoot</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
}