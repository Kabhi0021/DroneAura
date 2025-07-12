import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  rating,
  testimonial,
  featured = false
}: TestimonialCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-floating transition-smooth ${featured ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6">
        <div className="bg-gradient-sky p-2 rounded-full">
          <Quote className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({rating}/5)</span>
      </div>

      {/* Testimonial */}
      <p className="text-foreground leading-relaxed mb-6 italic">
        "{testimonial}"
      </p>

      {/* Client Info */}
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}