import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Add structured data to the page
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://droneaura.com/#business",
          "name": "DroneAura",
          "description": "Professional drone photography and videography services for weddings, real estate, corporate events, and cinematic coverage across India.",
          "url": "https://droneaura.com",
          "telephone": "+91-98765-43210",
          "email": "hello@droneaura.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          },
          "priceRange": "₹₹",
          "image": "https://droneaura.com/images/logo.png",
          "sameAs": [
            "https://instagram.com/droneaura",
            "https://facebook.com/droneaura",
            "https://youtube.com/droneaura"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          },
          "areaServed": "India"
        },
        {
          "@type": "Service",
          "@id": "https://droneaura.com/#services",
          "serviceType": "Drone Photography and Videography",
          "provider": {
            "@id": "https://droneaura.com/#business"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Drone Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Wedding Drone Photography",
                "price": "25000",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "name": "Pre-Wedding Shoots",
                "price": "15000",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "name": "Real Estate Aerial Photography",
                "price": "8000",
                "priceCurrency": "INR"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://droneaura.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is drone photography legal in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, drone photography is legal in India when operated by DGCA certified pilots following proper regulations and permissions."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of drone photography for weddings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wedding drone photography packages start from ₹25,000 and vary based on duration, locations, and deliverables included."
              }
            }
          ]
        }
      ]
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}